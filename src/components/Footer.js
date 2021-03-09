import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Footer = () => {
  const {
    theme: { isLightTheme, light, dark },
    toggleTheme,
  } = useContext(ThemeContext);

  return (
    <div className="navbar" style={{ backgroundColor: isLightTheme ? light.background : dark.background }}>
      <h1>Footer</h1>
    </div>
  );
};

export default Footer;
