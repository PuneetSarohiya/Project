"use client";

import React, { useEffect, useState } from "react";
import homepagestyle from "../../app/Styles/header.module.css";
import Image from "next/image";
import LoginForm from "../Login/Loginform";
import Card from "../Benefits/Component/Card";
import CheckListBanner from "../CheckListBanner/CheckListBanner";
import BusinessDevelopment from "../Business/BusinessDevelopment";
import Expert from "../ExpertPage/Expert";
import SubscribeSection from "../Subscribe/SubscribeSection";
import SliderComponent from "../Subscribe/Components/SliderComponent";
import QuestionSection from "../ExpertPage/Components/Q&N/QuestionSection";
import { BANNER_HEADING, DISCOUNT_HEADING } from "@/Constants/Constant";
import Testimonials from "../Testimonial/Testimonials";
import VirtualSection from "../VirtualSection/VirtualSection";

function HomePage() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
  };

  return (
    <div>
      <div className={homepagestyle["container"]}>
        {width < 768 && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <div>
              <Image src="/black-logo.png" alt="logo" width={90} height={70} />
            </div>
            <div style={{ alignSelf: "center" }}>
              <Image src="/menue-icon.png" alt="logo" width={25} height={15} />
            </div>
          </div>
        )}
        <div style={{ position: "relative" }}>
          <img
            src={"/banner-image.png"}
            className={homepagestyle["banner-container"]}
          />

          {width > 768 && (
            <div className={homepagestyle["header-container"]}>
              <div>
                <Image
                  src="/registerkaro-logo.png"
                  alt="logo"
                  width={150}
                  height={100}
                />
              </div>
              <div className={homepagestyle["button-container"]}>
                <span className={homepagestyle["view-all"]}>
                  Enquire now
                  <Image
                    src="/right-arrow.png"
                    width={15}
                    height={10}
                    style={{ marginLeft: "10px" }}
                  />
                </span>
              </div>
            </div>
          )}
          <div className={homepagestyle["banner-wrapper"]}>
            <div className={homepagestyle["banner-container"]}>
              <p className={homepagestyle["banner-heading"]}>
                {BANNER_HEADING}
              </p>
              <div className={homepagestyle["loginform-wrapper"]}>
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={homepagestyle["Benefits-card"]}>
        <Card width={width} />
      </div>

      <div style={{ marginTop: "10px" }}>
        <CheckListBanner width={width} />
      </div>
      <div style={{ marginTop: "50px" }}>
        <VirtualSection />
      </div>
      <div style={{ marginTop: "100px" }}>
        <BusinessDevelopment width={width} />
      </div>
      <div style={{ marginTop: "40px" }}>
        <Expert width={width} />
      </div>
      <div style={{ marginTop: "40px" }}>
        <SubscribeSection width={width} />
      </div>
      <div style={{ marginTop: "40px" }}>
        <Testimonials width={width} />
      </div>
      <div style={{ marginTop: "40px" }}>
        <QuestionSection />
      </div>
    </div>
  );
}

export default HomePage;
