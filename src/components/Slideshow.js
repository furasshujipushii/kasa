import React, { useState } from "react";

const Slideshow = ({ logement }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = logement.pictures;

  const handleClickPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleClickNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  if (images.length === 1) {
    return (
      <div
        className="slideshow"
        style={{ backgroundImage: `url(${images[0]})` }}
      />
    );
  }
  return (
    <div
      className="slideshow"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <span id="prev" onClick={handleClickPrev}></span>
      <span id="next" onClick={handleClickNext}></span>
      <span id="state">{`${currentIndex + 1}/${images.length}`}</span>
    </div>
  );
};

export default Slideshow;
