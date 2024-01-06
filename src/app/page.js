"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "../../src/app/page.module.css";
import Image from "next/image";
import giggle from "../../public/assets/img/carousel/carousel-2.jpg";
import allonsy from "../../public/assets/img/carousel/carousel-1.webp";
import Button from "./components/Button/Button";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const images = [allonsy, giggle];

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section className={styles.carouselContainer}>
      <div className={styles.slides}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.carouselImage} ${
              index === currentIndex ? styles.active : ""
            }`}
          >
            <Image
              src={image}
              layout="responsive"
              objectFit="cover"
              width={400}
              height={400}
              alt={`Carousel Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <Button additionalStyles={styles.specialButton}></Button>
      <div className={styles.dots}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.activeDot : ""
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </section>
  );
}
