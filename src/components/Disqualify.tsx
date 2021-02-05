import React from "react";
import "./Disqualify.css";

const Disqualify: React.FC = () => {
  return (
    <div className="disqualify">
      <h1 className="disqualify__status">Your application is "disqualified"</h1>

      <h2 className="disqualify__subheading">We are here to help.</h2>
      <h3 className="disqualify__suggestion">
        You can always contact customer service:
      </h3>
      <h4 className="disqualify__contactInfo">
        806.798.5554 Or customerservice@gmail.com
      </h4>
      <img
        src="../../images/img3.jpg"
        alt="service"
        className="disqualify__img"
      />
    </div>
  );
};

export default Disqualify;
