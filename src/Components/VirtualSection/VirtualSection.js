import { VIRTUAL_HEADING, virtualconstant } from "@/Constants/Constant";
import React from "react";
import virtualstyles from "../../app/Styles/VirtualSection.module.css";
import Image from "next/image";

function VirtualSection() {
  return (
    <div>
      <div className={virtualstyles["container"]}>
        <p className={virtualstyles["virtual-heading"]}>{VIRTUAL_HEADING}</p>
      </div>
      <div className={virtualstyles["container-wrapper"]}>
        {virtualconstant.map((item) => (
          <div className={virtualstyles["card-wrapper"]}>
            <div className={virtualstyles["card"]}>
              <Image
                src={item.icon}
                width={100}
                height={100}
                className={virtualstyles["virtual-container"]}
              />
            </div>

            <p className={virtualstyles["card-heading"]}>{item.heading}</p>
            <p className={virtualstyles["card-subheading"]}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VirtualSection;
