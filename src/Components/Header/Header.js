"use client";

import React, { useEffect, useState } from "react";
import homepagestyle from "../../app/Styles/header.module.css";
import { DISCOUNT_HEADING } from "@/Constants/Constant";

function Header() {

  return (
    <div>
      <div className={homepagestyle["container"]}>
        <div className={homepagestyle["discount-tag"]}>
          <span className={homepagestyle["discount-text"]}>
            {DISCOUNT_HEADING}
          </span>
        </div>
        </div>
    </div>
  );
}

export default Header;
