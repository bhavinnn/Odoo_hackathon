
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./services/db");
const cookieParser = require("cookie-parser");
const { restrictToLoginUser } = require("./middlewares/auth");


// Create app
const app = express();
const PORT = process.env.PORT || 5000;


//database
connectDB();


// routes
const authRoutes = require('./route/authRoutes');
const profileRoutes = require('./routes/profile');


// Middlewares
app.use(cookieParser());
const cookie = require("cookie"); // NOT cookie-parser
const jwt = require("jsonwebtoken");
app.use(cors());
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("Skill Swap Backend is Running");
});

// Load routes

app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});



