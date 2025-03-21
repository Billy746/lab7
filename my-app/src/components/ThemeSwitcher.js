import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        id="themeSwitch"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <label className="form-check-label" htmlFor="themeSwitch">
        {theme === 'dark' ? '🌙' : '☀️'}
      </label>
    </div>
  );
};

export default ThemeSwitcher;