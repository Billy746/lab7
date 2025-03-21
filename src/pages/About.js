import React from 'react';

const About = () => {
  return (
    <div>
      <h1 className="mb-4">About Me</h1>
      
      <div className="row">
        <div className="col-md-6">
          <h3>My Journey</h3>
          <p>
            I started my journey in web development during my studies in Computer Science. What began as a curiosity quickly developed into a passion as I discovered the power of creating interactive experiences through code.
          </p>
          <p>
            Over the years, I've worked on a variety of projects ranging from simple landing pages to complex web applications, each one adding to my skills and understanding of web development principles.
          </p>
        </div>
        
        <div className="col-md-6">
          <h3>Education & Experience</h3>
          <div className="mb-3">
            <h5>Bachelor's in Computer Science</h5>
            <p>Dalhousie University, 2022-2026</p>
          </div>
          
          <div className="mb-3">
            <h5>Web Development Internship</h5>
            <p>Tech Solutions Inc., Summer 2024</p>
            <ul>
              <li>Developed responsive frontends using React and Bootstrap</li>
              <li>Implemented RESTful APIs with Express and Node.js</li>
              <li>Collaborated with design and backend teams to deliver projects</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-5">
        <h3>My Approach</h3>
        <p>
          I believe in writing clean, maintainable code that follows best practices. My approach to development focuses on:
        </p>
        <ul>
          <li><strong>User-Centered Design:</strong> Creating intuitive interfaces that prioritize user experience</li>
          <li><strong>Modern Technologies:</strong> Staying up-to-date with the latest frameworks and tools</li>
          <li><strong>Responsive Development:</strong> Ensuring applications work seamlessly across all devices</li>
          <li><strong>Performance Optimization:</strong> Building fast, efficient applications that load quickly</li>
        </ul>
      </div>
    </div>
  );
};

export default About;