import React from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";
import SkillList from "./components/SkillList";
import ProjectList from "./components/ProjectList";
import WeatherInfo from "./components/WeatherInfo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to My Portfolio</h1>
      <ThemeSwitcher />
      <SkillList />
      <ProjectList />
      <WeatherInfo />
    </div>
  );
}

export default App;
