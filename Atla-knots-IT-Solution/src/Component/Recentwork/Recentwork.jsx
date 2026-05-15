import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet-async";
const API_BASE_URL = "http://localhost:8000"; // Change to production URL later

export default function RecentWork() {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  const [activeFilter, setActiveFilter] = useState("All");
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [allCategories, setAllCategories] = useState(["All"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dark mode observer
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  // Fetch data from backend
  useEffect(() => {
    const fetchRecentWork = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE_URL}/recentwork`);

        if (!res.ok) throw new Error("Failed to fetch projects");

        const result = await res.json();

        const formattedData = result.data.map((item) => ({
          id: item._id,
          title: item.title,
          categories: item.category ? [item.category.name] : ["General"],
          image:
            item.images && item.images.length > 0
              ? item.images[0]
              : "https://via.placeholder.com/600x400", // fallback image
          link: item.link || "#",
        }));

        setPortfolioItems(formattedData);

        // Generate categories
        const cats = [
          "All",
          ...new Set(formattedData.flatMap((item) => item.categories)),
        ];
        setAllCategories(cats);
      } catch (err) {
        console.error(err);
        setError("Failed to load projects. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecentWork();
  }, []);

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return portfolioItems;
    return portfolioItems.filter((item) =>
      item.categories.includes(activeFilter),
    );
  }, [activeFilter, portfolioItems]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (loading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${isDark ? "bg-black" : "bg-gray-50"}`}
      >
        <p className="text-2xl font-medium">Loading Recent Work...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${isDark ? "bg-black text-red-400" : "bg-gray-50 text-red-600"}`}
      >
        <p>{error}</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Our Recent Work | Atla Inteligent Knots</title>
        <meta
          name="description"
          content="Explore our recent website, software, branding & digital marketing projects for businesses.."
        />
        <meta
          name="keywords"
          content="Recent IT Projects	Portfolio, Website Projects, Software Projects, Branding Projects, Digital Marketing Projects, Web Development Portfolio, Software Development Portfolio, Branding Portfolio, Digital Marketing Portfolio"
        />
      </Helmet>
      <div
        className={`min-h-screen relative overflow-x-hidden transition-colors duration-500
      ${isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"}`}
      >
        {/* Background Gradient */}
        <div
          className={`absolute inset-0 z-0 ${
            isDark
              ? "bg-gradient-to-b from-black via-gray-950 to-black"
              : "bg-gradient-to-b from-white via-gray-50 to-red-50/30"
          }`}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-16 md:pt-24 lg:pt-28 pb-20">
          {/* Hero Section */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-5 tracking-tight leading-tight">
              OUR{" "}
              <span
                className={
                  isDark
                    ? "bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-rose-500 to-pink-600"
                    : "bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-500 to-rose-600"
                }
              >
                RECENT WORK
              </span>
            </h1>
            <p
              className={`text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
            >
              Crafting high-impact digital experiences that drive growth across
              industries.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2.5 md:gap-4 mb-10 md:mb-14">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`
                px-6 py-3 rounded-full text-sm md:text-base font-semibold uppercase tracking-wider
                border transition-all duration-300
                ${
                  activeFilter === cat
                    ? isDark
                      ? "bg-red-600 border-red-500 text-white shadow-lg shadow-red-900/50"
                      : "bg-red-600 border-red-500 text-white shadow-lg shadow-red-300/50"
                    : isDark
                      ? "bg-white/5 border-gray-700 text-gray-200 hover:bg-white/10 hover:border-gray-500"
                      : "bg-white border-gray-300 text-gray-700 hover:bg-red-50 hover:border-red-400"
                }
              `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 pb-8">
            {filteredItems.length === 0 ? (
              <div
                className={`col-span-full text-center py-20 text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                No projects found.
              </div>
            ) : (
              filteredItems.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block break-inside-avoid cursor-pointer pb-6"
                >
                  <div
                    className={`
                  relative overflow-hidden rounded-2xl
                  border transition-all duration-300 hover:-translate-y-2
                  ${
                    isDark
                      ? "bg-gray-900/60 backdrop-blur-sm border-gray-800/70 shadow-xl shadow-black/60 hover:shadow-2xl hover:shadow-red-900/30"
                      : "bg-white border-gray-200 shadow-md hover:shadow-xl hover:shadow-red-200/60"
                  }
                `}
                  >
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

                      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                        <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight drop-shadow-2xl">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm md:text-base font-medium uppercase tracking-wider text-white/90">
                          {item.categories.join(" • ")}
                        </p>
                        <div className="mt-6 flex items-center gap-2 text-white/90 text-sm font-medium">
                          <span>View Live Project</span>
                          <ExternalLink size={18} />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))
            )}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2
              className={`text-4xl md:text-5xl font-black mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Ready to Start <span className="text-red-500">Your Project</span>?
            </h2>
            <p
              className={`text-lg md:text-xl mb-8 max-w-xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}
            >
              Let's create something powerful together.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className={`
              inline-flex items-center gap-3 px-10 py-5 rounded-full text-xl font-bold text-white
              transition-all duration-300 hover:-translate-y-1
              bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 
              shadow-xl shadow-red-900/50 hover:shadow-red-800/60
            `}
              type="button"
            >
              Let's Talk
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
