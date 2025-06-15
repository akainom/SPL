import React, { useState } from "react";
import "./App.css";
import { Calculator } from "./components/Calculator";

export const App = () => {
  const [isDarkTheme, setTheme] = useState(false);

  return (
    <div className={`app ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      <Calculator />
      <button 
        className="theme-toggle" 
        onClick={() => setTheme(!isDarkTheme)}
      >
        Сменить тему
      </button>
    </div>
  );
};