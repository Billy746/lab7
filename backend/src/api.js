const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
const router = express.Router();
app.use(cors());

const projects = [
  { id: 1, name: "Portfolio", languages: "React, Bootstrap" },
  { id: 2, name: "Weather App", languages: "Node.js, Express" },
];

const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=Halifax,ca&units=metric&appid=${process.env.WEATHER_API_KEY}`;

router.get("/projects", (req, res) => {
  res.json(projects);
});

router.get("/weather", async (req, res) => {
  try {
    const response = await fetch(weatherAPI);
    const data = await response.json();
    res.json({
      city: data.name,
      temperature: { current: data.main.temp },
      humidity: data.main.humidity,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

app.use("/.netlify/functions/api", router);
module.exports = app;
module.exports.handler = serverless(app);
