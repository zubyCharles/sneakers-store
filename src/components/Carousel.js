import React, { useState } from 'react';
import '../sass/_carousel.scss';
import images from '../assets/images';

const carouselImages = [
  images.Product1,
  images.Product2,
  images.Product3,
  images.Product4,
];

const Carousel = () => {
  const [slideIndex, setIndex] = useState(0);

  return (
    <div className="carousel">
      <div className="image">
        <PreviousArrow setIndex={setIndex} slideIndex={slideIndex} />
        <div
          className={`carousel-images ${
            slideIndex === 1
              ? 'first'
              : slideIndex === 2
              ? 'second'
              : slideIndex === 3
              ? 'third'
              : null
          }`}
        >
          {carouselImages.map((src, i) => (
            <img src={src} key={i} alt="" />
          ))}
        </div>
        <NextArrow setIndex={setIndex} slideIndex={slideIndex} />
      </div>
    </div>
  );
};

const NextArrow = ({ slideIndex, setIndex }) => {
  return (
    <div
      className="next-arrow"
      onClick={() => {
        setIndex(slideIndex === 3 ? 0 : (slideIndex = slideIndex + 1));
      }}
    >
      <img src={images.NextIcon} alt="" />
    </div>
  );
};

const PreviousArrow = ({ slideIndex, setIndex }) => {
  return (
    <div
      className="previous-arrow"
      onClick={() => {
        setIndex(slideIndex === 0 ? 3 : (slideIndex = slideIndex - 1));
      }}
    >
      <img src={images.PreviousIcon} alt="" />
    </div>
  );
};

export default Carousel;
