import React, { useState } from 'react';
import styles from './PicturesSlider.module.scss';

const BANNER_IMAGES = [
  `${import.meta.env.BASE_URL}img/banner-phones.png`,
  `${import.meta.env.BASE_URL}img/banner-tablets.png`,
  `${import.meta.env.BASE_URL}img/banner-accessories.png`,
];

export const PicturesSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % BANNER_IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? BANNER_IMAGES.length - 1 : prev - 1));
  };

  return (
    <div className={styles.picturesSlider}>
      <div className={styles.wrapper}>
        <button type="button" className={styles.button} onClick={handlePrev}>
          <img
            src={`${import.meta.env.BASE_URL}img/icons/Chevron (Arrow Right).svg`}
            alt="Previous"
            className={styles.arrowLeft}
          />
        </button>

        <div className={styles.imageContainer}>
          <img
            src={BANNER_IMAGES[currentIndex]}
            alt="Banner"
            className={styles.image}
          />
        </div>

        <button type="button" className={styles.button} onClick={handleNext}>
          <img
            src={`${import.meta.env.BASE_URL}img/icons/Chevron (Arrow Right).svg`}
            alt="Next"
            className={styles.arrowRight}
          />
        </button>
      </div>

      <div className={styles.pagination}>
        {BANNER_IMAGES.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`${styles.dash} ${
              index === currentIndex ? styles.dashActive : ''
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
