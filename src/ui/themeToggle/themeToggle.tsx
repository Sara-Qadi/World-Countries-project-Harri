import { useState, useEffect } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5"; 
import styles from "./ThemeToggle.module.css";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev: boolean) => !prev); 
  };

  return (
    <div className={styles.themeToggle}>
      <button onClick={toggleDarkMode}>
        {darkMode ? <IoSunnyOutline size={20} /> : <IoMoonOutline size={20} />}
      </button>
      <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
    </div>
  );
}

export default ThemeToggle;
