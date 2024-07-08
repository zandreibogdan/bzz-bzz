"use client";

import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  sliderImage: string;
}

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
          <div
            key={slide.id}
            className={`!flex flex-col justify-center ${
              slide.id % 2 == 0 ? "items-end" : "items-start"
            } bg-background border-none bg-cover bg-center w-screen h-screen z-50 !p-0 ${
              slide.sliderImage
            }`}
          >
            <div className="w-80 m-[10%] ">
              <div className="bg-gray-900 bg-opacity-50">
                <h1 className=" ">{slide.title}</h1>
                <h5>{slide.subtitle}</h5>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
