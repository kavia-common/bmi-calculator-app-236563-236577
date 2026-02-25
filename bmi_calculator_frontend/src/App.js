import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import BackgroundSlider from "./components/BackgroundSlider";
import "./App.css";

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState("light");

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="App">
      {/* Background carousel layer */}
      <BackgroundSlider
        slides={[
          {
            src: "/assets/slider-1.png",
            alt: "BMI calculator background 1",
          },
          {
            src: "/assets/slider-2.png",
            alt: "BMI calculator background 2",
          },
          {
            src: "/assets/slider-3.png",
            alt: "BMI calculator background 3",
          },
          {
            src: "/assets/slider-4.png",
            alt: "BMI calculator background 4",
          },
          {
            src: "/assets/slider-5.png",
            alt: "BMI calculator background 5",
          },
          {
            src: "/assets/slider-6.png",
            alt: "BMI calculator background 6",
          },
          {
            src: "/assets/slider-7.png",
            alt: "BMI calculator background 7",
          },
          {
            src: "/assets/slider-8.png",
            alt: "BMI calculator background 8",
          },
          {
            src: "/assets/slider-9.png",
            alt: "BMI calculator background 9",
          },
          {
            src: "/assets/slider-10.png",
            alt: "BMI calculator background 10",
          },
          {
            src: "/assets/slider-11.png",
            alt: "BMI calculator background 11",
          },
        ]}
        intervalMs={8000}
        showControls={false}
        showIndicators={false}
      />

      <header className="App-header">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Current theme: <strong>{theme}</strong>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
