// const mongoose = require("mongoose");
// const QueryModule = require("../../module/querymodule/querymodule");

// const nodemailer = require("nodemailer");

// const createQueryModuleMessage = async (req, res) => {
//   try {
//     const { name, email, phone, message, category } = req.body;

//     if (!name || !email || !phone) {
//       return res.status(400).json({
//         success: false,
//         message: "Name, email, and phone are required",
//       });
//     }

//     const newQueryModule = await QueryModule.create({
//       name,
//       email,
//       phone,
//       category,
//       message,
//     });

//     // Create transporter using the same SMTP provider as other message flows
//     const transporter = nodemailer.createTransport({
//       host: process.env.EMAIL_HOST || "smtpout.secureserver.net",
//       port: Number(process.env.EMAIL_PORT) || 465,
//       secure: true,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // Mail options
//     const mailOptions = {
//       from: `"QueryModule Form" <${process.env.EMAIL_USER}>`,
//       to: process.env.ADMIN_EMAIL,
//       subject: "New QueryModule Message Received",
//       html: `
//         <h3>New QueryModule Message</h3>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Category:</strong> ${category}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//       `,
//     };

//     // Send mail
//     await transporter.sendMail(mailOptions);

//     res.status(201).json({
//       success: true,
//       message: "QueryModule message sent successfully",
//       data: newQueryModule,
//     });
//   } catch (error) {
//     console.error("Error creating QueryModule message:", error);
//     res.status(500).json({
//       success: false,
//       message: "Internal server error",
//     });
//   }
// };

// // Get all QueryModule messages
// const getQueryModuleMessages = async (req, res) => {
//   try {
//     const QueryModules = await QueryModule.find().sort({ createdAt: -1 });
//     res.status(200).json({ success: true, data: QueryModules });
//   } catch (error) {
//     console.error("Error fetching QueryModule messages:", error);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// };

// // Delete a QueryModule message by ID
// const deleteQueryModuleMessage = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedQueryModule = await QueryModule.findByIdAndDelete(id);
//     if (!deletedQueryModule) {
//       return res
//         .status(404)
//         .json({ success: false, message: "QueryModule message not found" });
//     }
//     res
//       .status(200)
//       .json({
//         success: true,
//         message: "QueryModule message deleted successfully",
//       });
//   } catch (error) {
//     console.error("Error deleting QueryModule message:", error);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// };

// module.exports = {
//   createQueryModuleMessage,
//   getQueryModuleMessages,
//   deleteQueryModuleMessage,
// };

const transporter = require("../config/mail.js");
const Query = require("../../module/querymodule/querymodule");
exports.createQuery = async (req, res) => {
  try {
    const { name, email, phone, message, category } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const query = await Query.create({
      name,
      email,
      phone,
      message,
      category: category || "Other",
    });

    await transporter.sendMail({
      from: `"Website Query" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Query: ${category || "General"}`,
      html: `
        <h3>New Query Received</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Category:</b> ${category || "Other"}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.status(201).json({
      success: true,
      message: "Query submitted successfully",
      data: query,
    });
  } catch (error) {
    console.error("Query Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

exports.getAllQueries = async (req, res) => {
  try {
    const queries = await Query.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      total: queries.length,
      data: queries,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

exports.deleteQuery = async (req, res) => {
  try {
    const { id } = req.params;
    const query = await Query.findById(id);

    if (!query) {
      return res.status(404).json({
        success: false,
        message: "Query not found",
      });
    }

    await Query.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Query deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};
