import React from "react";
import checkliststyles from "../../app/Styles/CheckList.module.css";
import Image from "next/image";
import {
  CHECKLIST_BUTTON,
  CHECKLIST_DESC,
  CHECKLIST_SUBHEADING,
  DOWNLOAD_TEXT,
} from "@/Constants/Constant";

function CheckListBanner({ width }) {
  return (
    <div>
      <div className={checkliststyles["wrapper"]}>
        <div className={checkliststyles["left-wrapper"]}>
          <div>
            <p className={checkliststyles["heading"]}>{DOWNLOAD_TEXT}</p>
            <p className={checkliststyles["subheading"]}>
              {CHECKLIST_SUBHEADING}
            </p>
            <p className={checkliststyles["desc"]}>{CHECKLIST_DESC}</p>
            {width > 768 && (
              <button className={checkliststyles["view-btn"]}>
                <span className={checkliststyles["View-button-text"]}>
                  {CHECKLIST_BUTTON}
                </span>
              </button>
            )}
          </div>
        </div>

        <div className={checkliststyles["right-wrapper"]}>
          <Image
            src="/book-image.png"
            width={width > 768 ? 340 : 260}
            height={width > 768 ? 480 : 350}
          />
        </div>

        {width < 768 && (
          <div style={{ margin: "60px 20px 0px 20px" }}>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              <Image src="/google-icon.png" width={40} height={40} />
              <div
                style={{ display: "flex", flexDirection: "row", gap: "5px" }}
              >
                <Image
                  src="/Star.png"
                  width={20}
                  height={20}
                  style={{ alignSelf: "center" }}
                />
                <span className={checkliststyles["google-rating-text"]}>
                  4.7/5{" "}
                  <span>
                    {""}
                    {"|"}
                    {""}{" "}
                  </span>
                  <span style={{fontWeight:'500'}}>{"15.7K+ Happy Reviews"}</span>
                </span>
              </div>
            </div>
            <button className={checkliststyles["view-btn"]}>
              <span className={checkliststyles["View-button-text"]}>
                {CHECKLIST_BUTTON}
              </span>
            </button>
          </div>
        )}
      </div>
      <p className={checkliststyles["bottom-virtual-text"]}>
        Get Your Virtual Office Up and Running in <span>3 Easy Steps!</span>
      </p>
    </div>
  );
}

export default CheckListBanner;
