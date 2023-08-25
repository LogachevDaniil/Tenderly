import React from "react";
import "./LeftSide.css";
export const LeftSide = () => {
  return (
    <div className="left--side">
      <div />
      <img
        src={"/images/alerting_feature_image.svg"}
        alt="alerting_feature"
        className="alerting_feature"
      />
      <div className="description">
        <p className="description__text">
          <strong>Trusted</strong> by Blockchain Industry Leaders
        </p>
        <div className="trusters--logos">
          <img
            src={"/images/binance-logo.svg"}
            alt="binance"
            className="company--logo"
          />
          <img
            src={"/images/openzeppelin-logo.svg"}
            alt="binance"
            className="company--logo"
          />
          <img
            src={"/images/chainlink-logo.svg"}
            alt="binance"
            className="company--logo"
          />
          <img
            src={"/images/argent-logo.svg"}
            alt="binance"
            className="company--logo"
          />
          <img
            src={"/images/0x-logo.svg"}
            alt="binance"
            className="company--logo"
          />
        </div>
      </div>
    </div>
  );
};
