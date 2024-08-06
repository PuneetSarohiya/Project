// import React from 'react'

// function Loginform() {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Loginform

import React from "react";
import loginformStyle from "../../app/Styles/Loginform.module.css";

function LoginForm() {
  const validateContact = (contact) => {
    let errors = {};
    let isValid = true;
    if (contact) {
      if (!contact["first_name"]) {
        isValid = false;
        errors["first_name"] = "Please enter valid first name";
      }
      if (!contact["last_name"]) {
        isValid = false;
        errors["last_name"] = "Please enter valid last name";
      }
      if (!contact["contact_email"]) {
        isValid = false;
        errors["contact_email"] = "Please enter valid contact email";
      }
      if (!contact["contact_phone"]) {
        isValid = false;
        errors["contact_phone"] = "Please enter valid contact phone";
      }
      if (!contact["message"]) {
        isValid = false;
        errors["message"] = "Please enter valid message";
      }
    }
    return {
      isValid,
      errors,
    };
  };

  return (
    <div className={loginformStyle["loginform-wrapper"]}>
      <p className={loginformStyle["login-contact-us-heading"]}>
        Get in touch with us
      </p>
      <p className={loginformStyle["sub-heading"]}>
        Submit your Details to get an Instant <span>All-inclusive</span> Quote
        to your email and a <span>FREE </span> Expert consultation
      </p>
      <div>
        <div>
          <span className={loginformStyle["input-heading"]}>Name</span>
          <div>
            <input
              placeholder="First Name"
              className={loginformStyle["login-input"]}
            />
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <span className={loginformStyle["input-heading"]}>Mobile</span>
          <div>
            <input
              placeholder="Your Number"
              className={loginformStyle["login-input"]}
            />
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <span className={loginformStyle["input-heading"]}>Email</span>
          <div>
            <input
              placeholder="Your Email"
              className={loginformStyle["login-input"]}
            />
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <span className={loginformStyle["input-heading"]}>City</span>
          <div>
            <input
              placeholder="City"
              className={loginformStyle["login-input"]}
            />
          </div>
        </div>

        <div className={loginformStyle["button-container"]}>
          <button className={loginformStyle["view-btn"]}>
            <span className={loginformStyle["View-button-text"]}>
              Get a Detailed Quotation Now!
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
