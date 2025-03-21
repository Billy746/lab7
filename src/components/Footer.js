import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const year = new Date().getFullYear();

  return (
    <footer className={`text-center py-4 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <div className="container">
        <p>&copy; {year} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;