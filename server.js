// server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Test API
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "API is running!" });
});

// Example products API
app.get("/api/categories", (req, res) => {
  res.json([
    { id: 1, name: "Shirt", price: 500 },
    { id: 2, name: "Shoes", price: 1200 },
    { id: 1, name: "Sandals", price: 500 },
    { id: 2, name: "Sarees", price: 1200 },
  ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
