"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import footerstyles from "../../app/Styles/Footer.module.css";
import { socialicons } from "@/Constants/Constant";
import LoginForm from "../Login/Loginform";

function Footer() {
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
    <>
      <div className={footerstyles["container"]}>
        {/* <div className={footerstyles["getquote-container-gradient"]}></div> */}
        <img
          src={"/footer-background-image.png"}
          className={footerstyles["banner-container"]}
        />

        <div className={footerstyles["footer-container"]}>
          <div className={footerstyles["footer-login-form"]}>
            <LoginForm />
          </div>

          <div style={{ marginTop: "150px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Image
                src="/registerkaro-logo.png"
                alt="logo"
                width={120}
                height={100}
              />
            </div>

            <p className={footerstyles["footer-heading"]}>
              Feel free to connect with us
            </p>
            <div className={footerstyles["footer-link"]}>
              <div className={footerstyles["footer-wrapper"]}>
                <Image src="/call-logo.png" width="25" height="25" />
                <span className={footerstyles["heading"]}>+91 93112 21210</span>
              </div>
              <div className={footerstyles["footer-wrapper"]}>
                <Image src="/sms-icon.png" width="25" height="25" />
                <span className={footerstyles["heading"]}>
                  virtualoffice@teamco.work
                </span>
              </div>
            </div>
            <div className={footerstyles["footer-address"]}>
              <Image src="/address-icon.png" width="25" height="25" />
              <span className={footerstyles["heading"]}>
                704, Palm Court, Mehrauli-Gurgaon Rd, Gurugram, Haryana, 122007
              </span>
            </div>
            <div className={footerstyles["social-links"]}>
              {socialicons.map((item) => (
                <Image src={item.icon} width={25} height={25} />
              ))}
            </div>
          </div>

          <div className={footerstyles["footer-map-mobile-view"]}>
            <Image
              src="/footer-map.png"
              width={width > 768 ? 400 : 300}
              height={width > 768 ? 400 : 300}
            />
          </div>

          {width < 768 && (
            <div
              style={{
                backgroundColor: "#2B2F33",
                width: "100%",
                marginTop: "40px",
                padding: "0px 30px 0px 30px",
              }}
            >
              <span className={footerstyles["discount-text"]}>
                © 2024 - Safe Ledger Private Limited. All rights reserved.
              </span>
            </div>
          )}
        </div>
      </div>
      <div style={{ backgroundColor: "#2B2F33", width: "100%" }}>
        <span className={footerstyles["discount-text"]}>
          © 2024 - Safe Ledger Private Limited. All rights reserved.
        </span>
      </div>
    </>
  );
}

export default Footer;
