/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import images from "./imageData";
import "./partnersStyles.css";

function Partners({ showHomeHeading, showEnterpriseHeading }) {
  return (
    <>
      {showHomeHeading && (
        <p className="fs-2 text-center mx-auto w-75 mb-5 fw-bold">
          Simplified scheduling for more than <span>10,000,000</span> users
          worldwide
        </p>
      )}
      {showEnterpriseHeading && (
        <p className="fs-2 text-center mx-auto w-75 my-5 fw-bold">
          Trusted by more than <span>50,000</span> of the world's leading
          organizations
        </p>
      )}

      <div className="slider mx-auto">
        <div className="slider-track">
          {images.map((image, index) => (
            <div className="slide" key={index}>
              <img src={image.src} alt="" className="logo-img img-fluid" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Partners;
