import React from "react";
import businessstyles from "../../app/Styles/Business.module.css";
import Image from "next/image";
import BusinessCard from "./Components/BusinessCard";
import { BUSINESS_HEADING, BUSINESS_SUBHEADING } from "@/Constants/Constant";

function BusinessDevelopment({ width }) {
  return (
    <div>
      <div className={businessstyles["wrapper"]}>
        <div className={businessstyles["left-wrapper"]}>
          <Image
            src="/business-banner-image.png"
            width={width > 768 ? 450 : 380}
            height={width > 768 ? 460 : 400}
          />
        </div>
        <div className={businessstyles["right-wrapper"]}>
          <p className={businessstyles["heading"]}>{BUSINESS_HEADING}</p>
          <p className={businessstyles["subheading"]}>{BUSINESS_SUBHEADING}</p>
          <div>
            <BusinessCard width={width} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessDevelopment;
