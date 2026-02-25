import React from "react";
import BackgroundSlider from "./components/BackgroundSlider";
import "./App.css";

// PUBLIC_INTERFACE
function App() {
  /** Intentionally render only the slider (no foreground overlay UI). */
  return (
    <div className="App App--sliderOnly">
      <BackgroundSlider
        slides={[
          { src: "/assets/slider-1.png", alt: "BMI calculator background 1" },
          { src: "/assets/slider-2.png", alt: "BMI calculator background 2" },
          { src: "/assets/slider-3.png", alt: "BMI calculator background 3" },
          { src: "/assets/slider-4.png", alt: "BMI calculator background 4" },
          { src: "/assets/slider-5.png", alt: "BMI calculator background 5" },
          { src: "/assets/slider-6.png", alt: "BMI calculator background 6" },
          { src: "/assets/slider-7.png", alt: "BMI calculator background 7" },
          { src: "/assets/slider-8.png", alt: "BMI calculator background 8" },
          { src: "/assets/slider-9.png", alt: "BMI calculator background 9" },
          { src: "/assets/slider-10.png", alt: "BMI calculator background 10" },
          { src: "/assets/slider-11.png", alt: "BMI calculator background 11" },
          { src: "/assets/slider-12.png", alt: "BMI calculator background 12" },
          { src: "/assets/slider-13.png", alt: "BMI calculator background 13" },
          { src: "/assets/slider-14.png", alt: "BMI calculator background 14" },
          { src: "/assets/slider-15.png", alt: "BMI calculator background 15" },
          { src: "/assets/slider-16.png", alt: "BMI calculator background 16" },
          { src: "/assets/slider-17.png", alt: "BMI calculator background 17" },
          { src: "/assets/slider-18.png", alt: "BMI calculator background 18" },
          { src: "/assets/slider-19.png", alt: "BMI calculator background 19" },
        ]}
        intervalMs={8000}
        showControls={true}
        showIndicators={false}
      />
    </div>
  );
}

export default App;
