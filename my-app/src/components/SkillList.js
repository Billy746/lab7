import React, { useState, useEffect } from 'react';

const SkillList = () => {
  // Sample skills data with categories
  const allSkills = [
    { id: 1, name: 'React', category: 'Frontend' },
    { id: 2, name: 'JavaScript', category: 'Frontend' },
    { id: 3, name: 'HTML5', category: 'Frontend' },
    { id: 4, name: 'CSS3', category: 'Frontend' },
    { id: 5, name: 'Node.js', category: 'Backend' },
    { id: 6, name: 'Express', category: 'Backend' },
    { id: 7, name: 'MongoDB', category: 'Database' },
    { id: 8, name: 'MySQL', category: 'Database' },
    { id: 9, name: 'Git', category: 'DevOps' },
    { id: 10, name: 'AWS', category: 'DevOps' },
    { id: 11, name: 'Docker', category: 'DevOps' },
    { id: 12, name: 'Python', category: 'Programming' },
    { id: 13, name: 'Java', category: 'Programming' },
  ];

  const [skills, setSkills] = useState(allSkills);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  
  // Get unique categories for filter options
  const categories = [...new Set(allSkills.map(skill => skill.category))];

  // Filter skills based on search term and selected categories
  useEffect(() => {
    let filtered = allSkills;
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(skill => 
        skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by selected categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(skill => 
        selectedCategories.includes(skill.category)
      );
    }
    
    setSkills(filtered);
  }, [searchTerm, selectedCategories]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle category filter change
  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(cat => cat !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  return (
    <div className="skill-list">
      <div className="mb-4">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search skills or categories..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        
        <div className="d-flex flex-wrap gap-2 mb-3">
          {categories.map(category => (
            <div key={category} className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id={`category-${category}`}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              <label className="form-check-label" htmlFor={`category-${category}`}>
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {skills.length === 0 ? (
        <div className="alert alert-info">No skills match your filters.</div>
      ) : (
        <div className="row">
          {skills.map(skill => (
            <div key={skill.id} className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{skill.name}</h5>
                  <span className="badge bg-primary">{skill.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillList;