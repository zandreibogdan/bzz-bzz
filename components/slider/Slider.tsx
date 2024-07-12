"use client";

import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HomeSlide } from "./HomeSlide";
import Hero from "./Hero";

const slides: Slide[] = [
  {
    id: 1,
    title: "Miere Naturală Producție Proprie",
    subtitle:
      "Mierea este o bună sursă de antioxidanți care protejează organismul împotriva a tot felu'.",
    sliderImage: "image-slider1",
  },
  {
    id: 2,
    title: "Miere Naturală Producție Proprie",
    subtitle:
      "Mierea este o bună sursă de antioxidanți care protejează organismul împotriva a tot felu'.",
    sliderImage: "image-slider2",
  },
  {
    id: 3,
    title: "Miere Naturală Producție Proprie",
    subtitle:
      "Mierea este o bună sursă de antioxidanți care protejează organismul împotriva a tot felu'.",
    sliderImage: "image-slider3",
  },
];

const SliderComponent: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows: false,
    dotsClass: "custom-dots",
    // autoplay: true,
    // autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            {/* <HomeSlide
              sliderImage={slide.sliderImage}
              id={slide.id}
              title={slide.title}
              subtitle={slide.subtitle}
            /> */}
            <Hero
              sliderImage={slide.sliderImage}
              id={slide.id}
              title={slide.title}
              subtitle={slide.subtitle}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
