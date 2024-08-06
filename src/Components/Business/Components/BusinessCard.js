import React from "react";
import cardstyles from "./Card.module.css";
import Image from "next/image";
import { benefitsconstant, businessconstant } from "@/Constants/Constant";

function BusinessCard({width}) {
  return (
    <div>
      <div className={cardstyles["card"]}>
        {businessconstant.map((item, index) => (
          <div className={cardstyles["discover-container"]}>
            <div
              className={cardstyles["icon-style-wrapper"]}
              style={{ backgroundColor: item.backgroundColor }}
            >
              <Image
                src={item.icon}
                alt="user image"
                width={width > 768 ? 20 : 25}
                height={width > 768 ? 20 : 25}
                className={cardstyles["icon-style"]}
              />
            </div>

            <p className={cardstyles["discover-heading"]}>{item.heading}</p>
            <p className={cardstyles["discover-desc"]}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BusinessCard;
