import React from 'react';
import WeatherWidget from '../components/WeatherWidget';

const Home = () => {
  return (
    <div>
      <div className="jumbotron py-5">
        <h1 className="display-4">Welcome to My Portfolio</h1>
        <p className="lead">
          I'm a web developer specializing in modern JavaScript frameworks like React.
        </p>
        <hr className="my-4" />
        <p>
          Explore my projects and skills, or get in touch to discuss how we can work together.
        </p>
      </div>
      
      <div className="row">
        <div className="col-md-8">
          <h2 className="mb-4">About Me</h2>
          <p>
            I'm a passionate web developer with experience in building responsive and interactive web applications. 
            I enjoy working with modern technologies and am continuously learning new skills to stay up-to-date with the latest trends.
          </p>
          <p>
            My focus is on creating clean, efficient, and user-friendly applications that provide great experiences for users.
            I have expertise in both frontend and backend development, allowing me to build full-stack applications.
          </p>
        </div>
        <div className="col-md-4">
          <WeatherWidget />
        </div>
      </div>
    </div>
  );
};

export default Home;