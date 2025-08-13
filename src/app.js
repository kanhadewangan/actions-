 const express = require("express");
const app = express();

// Middleware for parsing JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health endpoint for uptime/probes
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Root route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Example POST route
app.post("/data", (req, res) => {
  const requestData = req.body;
  res.json({
    message: "Data received",
    data: requestData,
  });
});
app.get("/data",(req,res)=>{
    res.json({
        message: "Data fetched successfully",
    });
})
module.exports = app;
