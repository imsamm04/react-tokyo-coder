import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
  const {
    theme: { isLightTheme, light, dark },
    toggleTheme,
  } = useContext(ThemeContext);

  return (
    <div className="navbar" style={{ backgroundColor: isLightTheme ? light.background : dark.background }}>
      <button onClick={toggleTheme}>Toogle Theme</button>
      <h1>navbar</h1>
    </div>
  );
};

export default Navbar;
