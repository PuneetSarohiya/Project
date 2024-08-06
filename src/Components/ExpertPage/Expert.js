import React from "react";
import expertstyles from "../../app/Styles/Expert.module.css";
import Image from "next/image";
import { EXPERT_BUTTON_TEXT, EXPERT_SUBHEADING } from "@/Constants/Constant";

function Expert({ width }) {
  return (
    <div style={{ width: "100%" }}>
      <div className={expertstyles["wraper"]}>
        {width > 768 && (
          <>
            <div className={expertstyles["left-wraper"]}>
              <div className={expertstyles["call-text-conatiner"]}>
                <div className={expertstyles["call-icon-wrapper"]}>
                  <Image src="/call-icon.png" width="25" height="25" />
                </div>
                <p className={expertstyles["heading"]}>
                  <span>Expert Guidance: </span> Consultation and Company
                  Formation
                </p>
              </div>

              <p className={expertstyles["subheading"]}>{EXPERT_SUBHEADING}</p>

              <button className={expertstyles["view-btn"]}>
                <span className={expertstyles["View-button-text"]}>
                  {EXPERT_BUTTON_TEXT}
                </span>
              </button>
            </div>
            <div className={expertstyles["right-wraper"]}>
              <Image src="/expert-image.png" width="400" height="400" />
            </div>
          </>
        )}
      </div>
      {width < 768 && (
        <div style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'center'}}>
         <div>
          <Image src="/expert-image-two.png" width="350" height="250"  style={{}}/>
          <div className={expertstyles['expert-text-container']}>
          <p style={{fontSize:'18px', color:'white',fontWeight:'700'}}>Book a free CONSULTATION with our CA/CS and company formation expert.</p>
         
          <button className={expertstyles["view-btn"]}>
                <span className={expertstyles["View-button-text"]}>
                  {EXPERT_BUTTON_TEXT}
                </span>
              </button>
          </div>
          
          </div>
        </div>
      )}
    </div>
  );
}

export default Expert;
