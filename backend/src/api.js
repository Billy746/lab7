const express = require("express");
const serverless = require("serverless-http");
const dotenv = require("dotenv");
const cors = require("cors");
const fetch = require("node-fetch");

dotenv.config();
const app = express();
const router = express.Router();

// Enable CORS
app.use(cors());

// Sample projects data
const projects = [
  { 
    id: 1, 
    name: "E-commerce Platform", 
    author: "Jane Doe", 
    languages: ["React", "Node.js", "MongoDB"],
    description: "A full-stack e-commerce platform with user authentication, product management, and payment integration."
  },
  { 
    id: 2, 
    name: "Task Management App", 
    author: "John Smith", 
    languages: ["JavaScript", "Express", "MySQL"],
    description: "A productivity application for managing tasks, deadlines, and team collaboration."
  },
  { 
    id: 3, 
    name: "Weather Dashboard", 
    author: "Alex Johnson", 
    languages: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    description: "A responsive weather application showing current conditions and forecasts for multiple locations."
  },
  { 
    id: 4, 
    name: "Social Media Analytics", 
    author: "Sarah Williams", 
    languages: ["Python", "React", "PostgreSQL"],
    description: "An analytics dashboard for tracking social media performance across multiple platforms."
  },
  { 
    id: 5, 
    name: "Restaurant Reservation System", 
    author: "Michael Brown", 
    languages: ["React", "Firebase", "Express"],
    description: "A system for managing restaurant reservations, table assignments, and waitlists."
  },
  { 
    id: 6, 
    name: "Portfolio Website", 
    author: "Emily Davis", 
    languages: ["React", "Bootstrap", "Netlify"],
    description: "A personal portfolio website showcasing projects and skills with a responsive design."
  }
];

// Weather API URL
const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=halifax,ca&units=metric&appid=${process.env.WEATHER_API_KEY}`;

// Home route
router.get('/', (req, res) => {
  res.json({
    message: "Welcome to the Portfolio API"
  });
});

// Projects route
router.get('/projects', (req, res) => {
  try {
    res.status(200).json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Weather route
router.get('/weather', async (req, res) => {