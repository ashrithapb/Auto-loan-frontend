import React from "react";
import "./FormSuccess.css";

const FormSuccess: React.FC = () => {
  return (
    <div className="formSuccess">
      <h1 className="formSuccess__message">
        Your Account is Successfully created"
      </h1>

      <h2 className="formSuccess__subheading">We are here to Serve!</h2>
      <h3 className="formSuccess__contactInfo">Join the movement</h3>
      <h4>Save money and build up your finances as a member.</h4>
      <img
        src="../../images/img4.jpg"
        alt="service"
        className="formSuccess__img"
      />
    </div>
  );
};
export default FormSuccess;
