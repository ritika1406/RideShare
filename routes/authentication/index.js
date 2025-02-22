const express = require("express");
const routes = express.Router();

routes.post("/register", async (req, res) => {
    try {
        const { name, phone, email } = req.body;
          console.log(req.body, "req.body")
        // Basic validation
        if (!name || !phone || !email) {
            return res.status(400).json({ error: "All fields are required!" });
        }

        return res.status(201).json({ message: "Registration Successful!" });

    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = routes;
