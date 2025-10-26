import { useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5"; 
import styles from "./ThemeToggle.module.css";

const savedTheme = localStorage.getItem("darkMode");
if (savedTheme !== null) {
  document.documentElement.setAttribute(
    "data-theme",
    JSON.parse(savedTheme) ? "dark" : "light"
  );
}

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(
    savedTheme ? JSON.parse(savedTheme) : false
  );

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
    document.documentElement.setAttribute(
      "data-theme",
      newMode ? "dark" : "light"
    );
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
