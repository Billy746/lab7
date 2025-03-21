document.addEventListener("DOMContentLoaded", () => {
    // Dark Mode Toggle
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
    });

    // Skill Search
    const skillSearch = document.getElementById("skill-search");
    skillSearch.addEventListener("input", () => {
        const query = skillSearch.value.toLowerCase();
        document.querySelectorAll("#skill-list li").forEach(skill => {
            skill.style.display = skill.textContent.toLowerCase().includes(query) ? "block" : "none";
        });
    });

    // Fetch and Display Projects
    fetch("projects.json")
        .then(response => response.json())
        .then(projects => {
            const projectList = document.getElementById("project-list");
            projects.forEach(project => {
                const li = document.createElement("li");
                li.innerHTML = `<strong>${project.name}</strong> - ${project.language}`;
                projectList.appendChild(li);
            });
        });

    // Fetch Weather Data
    const apiKey = "your_openweather_api_key";  // <-- Replace with your OpenWeather API Key
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Halifax,ca&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("weather-info").textContent = `${data.name}: ${data.main.temp}°C, Humidity: ${data.main.humidity}%`;
        })
        .catch(() => {
            document.getElementById("weather-info").textContent = "Failed to load weather data.";
        });
});
