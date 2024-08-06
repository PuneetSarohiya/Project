import React from "react";
import benefitstyles from "../../../app/Styles/benefits.module.css";
import Image from "next/image";
import { benefitsconstant } from "@/Constants/Constant";

function Card({ width }) {
  return (
    <div>
      <div className={benefitstyles["card"]}>
        {width < 768 && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              margin: "0 15px",
            }}
          >
            <p className={benefitstyles["heading"]}>Benefits</p>
            <button className={benefitstyles["view-btn"]}>
              <span className={benefitstyles["View-button-text"]}>
                New Reviews
              </span>
            </button>
          </div>
        )}
        {benefitsconstant.map((item, index) => (
          <div
            className={benefitstyles["discover-container"]}
            style={{ backgroundColor: item.backgroundColor }}
          >
            <div>
              <Image src={item.icon} alt="user image" width={width > 768 ? 50 : 35} height={width > 768 ? 35 : 26} />
            </div>
            <p
              className={benefitstyles["discover-heading"]}
              style={{ color: item.headingcolor }}
            >
              {item.heading}
            </p>
            <p
              className={benefitstyles["discover-desc"]}
              style={{ color: item.subheadingcolor }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
