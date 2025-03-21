import React, { useState } from "react";

const skills = [
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "CSS", category: "Frontend" },
];

function SkillList() {
  const [query, setQuery] = useState("");

  const filteredSkills = skills.filter((skill) =>
    skill.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search skills..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredSkills.map((skill, index) => (
          <li key={index}>{skill.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillList;
