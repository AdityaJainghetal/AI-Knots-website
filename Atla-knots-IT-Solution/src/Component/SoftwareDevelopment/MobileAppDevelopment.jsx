import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, ArrowUp } from "lucide-react";
import { Helmet } from "react-helmet-async";
// Import your local image
import mobileProcess from "../../assets/Images/mobile.jpeg";
import mobileProcess2 from "../../assets/Images/mobilebackground.jpeg";

import { useNavigate } from "react-router-dom";
const images = {
  hero: mobileProcess2,
  android:
    "https://5.imimg.com/data5/SELLER/Default/2023/6/319348400/QV/RD/AY/16593403/android-application-development.png",
  ios: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  hybrid:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7l5I3d21aHtnR8sp3MeranJqvzmUlp6-eg&s",
  process: mobileProcess, // ← Fixed: Using local imported image
  team: mobileProcess,
};

const services = [
  {
    title: "Android Application Development",
    desc: "We harness the full power of the Android ecosystem using Kotlin and Java to create fast, secure, and feature-rich applications. Our expert team focuses on modern Material Design, offline capabilities, push notifications, and seamless integration with Google services.",
  },
  {
    title: "iOS Application Development",
    desc: "We develop premium native iOS applications using Swift and SwiftUI for iPhone, iPad, and Apple Watch. Our apps are optimized for the latest iOS versions with beautiful interfaces and flawless performance.",
  },
  {
    title: "Hybrid & Cross-Platform Development",
    desc: "Using React Native and Flutter, we build high-performance hybrid apps that work seamlessly on both Android and iOS from a single codebase — saving time and cost while maintaining near-native experience.",
  },
];

const benefits = [
  "Enhance customer engagement with personalized experiences",
  "Expand your market reach across Android and iOS platforms",
  "Streamline internal business processes and operations",
  "Increase sales and revenue through in-app purchases",
  "Build stronger brand loyalty and customer retention",
  "Gain valuable insights with in-app analytics",
];

const cities = [
  "Bhopal",
  "Indore",
  "Delhi",
  "Pune",
  "Jaipur",
  "Gurgaon",
  "Noida",
  "Mumbai",
  "Hyderabad",
  "Bangalore",
];

const industries = [
  "Finance & Banking",
  "Manufacturing",
  "Legal & Law Firms",
  "Technology & IT",
  "Transportation & Automotive",
  "eCommerce & Retail",
  "Healthcare & Medical",
  "Education & EdTech",
  "Real Estate",
  "Tourism & Hospitality",
  "Event Management",
  "Non-Profit Organizations",
  "Agriculture",
  "Many More...",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function MobileAppDevelopment() {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

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

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Mobile App Development India | Atla IKS</title>
        <meta
          name="description"
          content="Android & iOS mobile app development services for startups and businesses in India.."
        />
        <meta
          name="keywords"
          content="Mobile App Development Company	Android App Development, iOS Apps"
        />
      </Helmet>
      <div
        className={`relative min-h-screen overflow-x-hidden transition-colors duration-500
      ${isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"}`}
      >
        {/* Background Gradient */}
        <div
          className={`absolute inset-0 z-0 ${
            isDark
              ? "bg-gradient-to-b from-black via-gray-950 to-black"
              : "bg-gradient-to-b from-gray-50 via-white to-red-50/30"
          }`}
        />

        <div className="relative z-10 max-w-full mx-auto px-5 sm:px-8 lg:px-10 pb-16">
          {/* Hero Section */}
          <section className="relative min-h-[75vh] md:min-h-[80vh] flex items-center justify-center py-12 overflow-hidden w-full">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={images.hero}
                alt="Professional mobile app development team working in Bhopal"
                className="w-full h-full object-cover 
                 brightness-70 contrast-110 
                 dark:brightness-45 dark:contrast-125
                 transition-all duration-700"
                loading="eager"
              />

              {/* Gradient Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t 
                    from-black/80 via-black/70 to-black/60 
                    dark:from-black/90 dark:via-black/85 dark:to-black/75"
              />
            </div>

            {/* Content - Now Full Width */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="relative z-10 w-full text-center px-4 sm:px-6 lg:px-8"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-none text-white"
              >
                Mobile Application{" "}
                <span className="text-red-500">Development</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold mb-8 text-red-500 dark:text-red-400"
              >
                Premium App Development Services in Bhopal
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl leading-relaxed mb-12 max-w-4xl mx-auto text-gray-200 dark:text-gray-300"
              >
                At Atlas Knots IT Solution, we transform innovative ideas into
                powerful, user-friendly mobile applications. Our expert team in
                Bhopal delivers high-performance Android, iOS, and
                cross-platform apps that drive real business growth.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                {/* Primary Button */}
                <button
                  onClick={() => navigate("/contact")}
                  className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-700 
                   hover:from-red-700 hover:to-red-800 text-white rounded-full 
                   text-xl font-bold shadow-xl shadow-red-900/60 
                   hover:shadow-red-700 hover:scale-105 
                   transition-all duration-300 flex items-center gap-3 group"
                >
                  Get Free Consultation
                  <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
                </button>

                {/* Secondary Button */}
                <button
                  onClick={() => navigate("/portfolio")}
                  className="px-12 py-6 border-2 border-red-500 text-white 
                   hover:bg-red-600 hover:border-red-600 
                   dark:hover:bg-red-700 rounded-full 
                   text-xl font-bold transition-all duration-300"
                >
                  View Our Portfolio →
                </button>
              </motion.div>
            </motion.div>
          </section>

          {/* Services Section */}
          <section
            className={`py-20 px-4 sm:px-6 lg:px-8 rounded-3xl mt-8 mb-12
          ${isDark ? "bg-black/70 border border-red-900/30" : "bg-white shadow-2xl"}`}
          >
            <div className="max-w-7xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black text-center mb-6"
              >
                Our Mobile App{" "}
                <span className="text-red-500">Development Services</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`text-xl text-center mb-16 max-w-4xl mx-auto ${isDark ? "text-gray-300" : "text-gray-700"}`}
              >
                With years of experience and a passion for innovation, Atlas
                Knots IT Solution offers comprehensive mobile app development
                solutions tailored to your unique business requirements.
              </motion.p>

              <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`group relative overflow-hidden rounded-3xl p-10 border transition-all hover:-translate-y-2
                    ${isDark ? "bg-gray-950 border-red-900/50 hover:border-red-600" : "bg-white border-gray-200 hover:border-red-400 shadow-lg"}`}
                  >
                    <div className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity duration-500">
                      <img
                        src={
                          idx === 0
                            ? images.android
                            : idx === 1
                              ? images.ios
                              : images.hybrid
                        }
                        alt={`${service.title} - Atlas Knots IT Solution`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="relative z-10">
                      <h3
                        className={`text-2xl md:text-3xl font-bold mb-6 text-center ${isDark ? "text-red-400" : "text-red-600"}`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`text-lg leading-relaxed text-center ${isDark ? "text-gray-300" : "text-gray-700"}`}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 text-center"
              >
                <h3
                  className={`text-3xl font-bold mb-10 ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  Benefits of Our Mobile App Development Services
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                  {benefits.map((benefit, i) => (
                    <motion.div
                      key={i}
                      className={`px-8 py-5 rounded-2xl text-lg font-medium border transition-all hover:scale-105
                      ${isDark ? "bg-gray-900 border-red-900/50 hover:border-red-600" : "bg-white border-red-200 hover:border-red-400 shadow-sm"}`}
                    >
                      {benefit}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Development Process */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`text-4xl md:text-5xl font-black text-center mb-8 ${isDark ? "text-white" : "text-gray-900"}`}
              >
                Our Proven App Development{" "}
                <span className="text-red-500">Process</span>
              </motion.h2>

              <motion.img
                src={images.process}
                alt="Detailed mobile app development process roadmap illustration"
                className="rounded-3xl mx-auto mb-16 shadow-2xl border border-red-900/30 max-w-5xl w-full object-cover"
                loading="lazy"
              />

              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                {[
                  {
                    step: "Discovery & Planning",
                    points: [
                      "Understanding your business goals",
                      "Market research & competitor analysis",
                      "Feature prioritization",
                      "Project roadmap",
                    ],
                  },
                  {
                    step: "UI/UX Design",
                    points: [
                      "Wireframing & prototypes",
                      "Visual design",
                      "User experience optimization",
                      "Feedback & iteration",
                    ],
                  },
                  {
                    step: "Development",
                    points: [
                      "Frontend & backend development",
                      "API integration",
                      "Clean & scalable code",
                      "Regular testing",
                    ],
                  },
                  {
                    step: "Testing & QA",
                    points: [
                      "Manual & automated testing",
                      "Performance & security checks",
                      "Bug fixing",
                      "Cross-device compatibility",
                    ],
                  },
                  {
                    step: "Launch & Maintenance",
                    points: [
                      "App Store deployment",
                      "Post-launch monitoring",
                      "Regular updates",
                      "Ongoing support",
                    ],
                  },
                ].map((phase, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`border rounded-3xl p-8 transition-all hover:border-red-600 min-h-[300px]
                    ${isDark ? "bg-gray-950 border-red-900/50" : "bg-white border-gray-200 shadow-md"}`}
                  >
                    <div className="text-5xl font-black text-red-500 mb-6">{`0${idx + 1}`}</div>
                    <h3
                      className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
                    >
                      {phase.step}
                    </h3>
                    <ul
                      className={`space-y-3 text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}
                    >
                      {phase.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Industries & Cities */}
          <section
            className={`py-20 px-4 rounded-3xl mt-8 mb-12
          ${isDark ? "bg-gray-950 border border-red-900/30" : "bg-white shadow-2xl"}`}
          >
            <div className="max-w-7xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`text-4xl md:text-5xl font-black text-center mb-12 ${isDark ? "text-white" : "text-gray-900"}`}
              >
                Tailored Solutions for{" "}
                <span className="text-red-500">Diverse Industries</span>
              </motion.h2>

              <div className="flex flex-wrap justify-center gap-4 mb-20">
                {industries.map((ind, i) => (
                  <motion.span
                    key={i}
                    className={`px-6 py-3 rounded-full text-sm md:text-base border transition-all hover:scale-105
                    ${isDark ? "bg-gray-900 border-red-900/50 hover:border-red-600 text-gray-200" : "bg-gray-100 border-gray-300 hover:border-red-400"}`}
                  >
                    {ind}
                  </motion.span>
                ))}
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`text-4xl md:text-5xl font-black text-center mb-12 ${isDark ? "text-white" : "text-gray-900"}`}
              >
                Serving Businesses Across Major{" "}
                <span className="text-red-500">Cities in India</span>
              </motion.h2>

              <div className="flex flex-wrap justify-center gap-6">
                {cities.map((city, i) => (
                  <motion.div
                    key={i}
                    className={`px-10 py-5 rounded-2xl font-bold text-xl border transition-all hover:border-red-600 hover:scale-105
                    ${isDark ? "bg-gray-900 border-red-900/50" : "bg-white border-gray-200 shadow-sm"}`}
                  >
                    {city}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section
            className={`py-20 px-4 rounded-3xl mt-8
          ${isDark ? "bg-gray-950 border border-red-900/30" : "bg-white border border-gray-100 shadow-2xl"}`}
          >
            <div className="max-w-5xl mx-auto text-center">
              <motion.img
                src={images.team}
                alt="Experienced mobile app development team at Atlas Knots IT Solution in Bhopal"
                className="rounded-3xl mx-auto mb-12 shadow-2xl border border-red-900/30 max-w-4xl w-full object-cover"
                loading="lazy"
              />

              <motion.h2
                className={`text-4xl md:text-6xl font-black mb-10 ${isDark ? "text-white" : "text-gray-900"}`}
              >
                Ready to Bring Your App Idea to Life?
              </motion.h2>

              <motion.p
                className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
              >
                Whether you need a native Android/iOS app or a powerful
                cross-platform solution, our expert team in Bhopal is ready to
                deliver a mobile application that exceeds your expectations.
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-14 py-7 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl md:text-3xl font-bold shadow-2xl hover:shadow-red-700/80 transition-all"
              >
                Start Your Project Today →
              </motion.button>
            </div>
          </section>
        </div>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl transition-all hover:scale-110
              ${isDark ? "bg-red-600 hover:bg-red-700 text-white" : "bg-red-600 hover:bg-red-700 text-white"}`}
              aria-label="Scroll to top"
            >
              <ArrowUp size={26} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
