const express = require("express");
const router = express.Router();

// Import authentication routes
const authRoutes = require("./authentication/index");

// Use authentication routes with a base path
router.use("/auth", authRoutes);

module.exports = router;
