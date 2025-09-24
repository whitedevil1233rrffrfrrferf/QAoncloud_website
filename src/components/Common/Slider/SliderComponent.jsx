"use client";

import Slider from "react-slick";
import Image from "next/image";
import styles from "./Slider.module.css";

export default function SliderComponent({ title, subtitle, slides }) {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,

    responsive: [
      {
        breakpoint: 768, // mobile
        settings: {
          arrows: false, // hide arrows for small screens
        },
      },
    ],
  };
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <Slider {...settings} className={styles.slider}>
        {slides.map((slide, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{slide.icon}</div>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
}
