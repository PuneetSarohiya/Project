import {
  corporateclienticon,
  sliderimage,
  testimonial,
  TESTIMONIAL_DESC,
} from "@/Constants/Constant";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialstyles from "../../app/Styles/Testimonial.module.css";
import Slider from "react-slick";
import Image from "next/image";

function Testimonials({ width }) {
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
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <img src="/next-arrow.png" style={{ width: "100px", height: "100px" }} />
    ),
    prevArrow: (
      <img src="/prev-arrow.png" style={{ width: "100px", height: "100px" }} />
    ),
    // responsive: [
    //     {
    //       breakpoint: 768,
    //       settings: {
    //         arrows: false,
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         infinite: true,
    //         autoplaySpeed: 1500,
    //         autoplay: true,
    //         dots: false,
    //       }
    //     },
    //   ],
  };

  return (
    <div className={testimonialstyles["container"]}>
      <p className={testimonialstyles["heading"]}>{"Client Testimonial "}</p>

      {width < 768 ? (
        <div className={testimonialstyles["testimonoal-wrapper"]}>
          <div style={{ width: "100vw" }}>
            <img
              src="/Testimonial-image.png"
              className={testimonialstyles["Slider-images"]}
            />
          </div>

          <div>
            <p className={testimonialstyles["testimonial-subheading"]}>{TESTIMONIAL_DESC}</p>
            <p className={testimonialstyles["testimonial-review"]}>
              {"-"}
              {" Sunil Duggal, CEO, Dabur Healthcare"}
            </p>
          </div>
        </div>
      ) : (
        <Slider {...settings}>
          {testimonial.map((item) => (
            <div className={testimonialstyles["testimonoal-wrapper"]}>
              <div style={{ width: "100vw" }}>
                <img
                  src={item.icon}
                  className={testimonialstyles["Slider-images"]}
                />
              </div>

              <div>
                <p className={testimonialstyles["testimonial-subheading"]}>
                  {item.subheading}
                </p>
                <p className={testimonialstyles["testimonial-review"]}>
                  {"-"}
                  {item.review}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default Testimonials;
