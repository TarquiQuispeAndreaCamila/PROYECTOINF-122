import { useState } from "react";
import "./Slider.css"; // Import your slider styles

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="slider">
      <button className="arrow-left" onClick={prevSlide}>
        {"<"}
      </button>
      <img
        className="slide"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
      />
      <button className="arrow-right" onClick={nextSlide}>
        {">"}
      </button>
    </div>
  );
};

export default Slider;
