import React from "react";
import "./Marketing.css";

const Marketing: React.FC = () => {
  return (
    <>
      <h2 className="marketing__heading">
        Anytime, anywhere your best financial solution
      </h2>
      <div className="marketing__div-img">
        <img
          src="../../images/img1.jpg"
          className="marketing__img"
          alt="vehicle"
        />
      </div>

      <p className="marketing__info">
        Saving money comes standard with your loan for your next car, truck or
        SUV.
      </p>
      <ul className="marketing__points">
        What we offer:
        <li>Super Competitive Rates</li>
        <li>Gap Coverage</li>
        <li>Mechanical Warranty</li>
        <li>Credit Protection in-case of Death or Injury</li>
        <li>One-on-one buyer education</li>
      </ul>
    </>
  );
};

export default Marketing;
