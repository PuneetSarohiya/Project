import { corporateclienticon, sliderimage } from "@/Constants/Constant";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../../app/Styles/Subscribe.module.css";
import Slider from "react-slick";

function SliderComponent() {
  const settings = {
    lazyLoad: true,
    infinite: true,
    autoplaySpeed: 1500,
    autoplay: true,
    pauseOnFocus: true,
    speed: 500,
    // vertical: false,
    // arrows: false,
    centerMode: true,
    centerPadding: "98px",
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplaySpeed: 1500,
          autoplay: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {sliderimage.map((image) => (
          <div>
            <img src={image.icon} className={styles["Slider-images"]} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderComponent;
