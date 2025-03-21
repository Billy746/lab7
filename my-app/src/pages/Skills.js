import React from 'react';
import SkillList from '../components/SkillList';

const Skills = () => {
  return (
    <div>
      <h1 className="mb-4">My Skills</h1>
      <p className="mb-4">
        Filter through my skills by searching or selecting categories to see the technologies I work with.
      </p>
      
      <SkillList />
    </div>
  );
};

export default Skills;