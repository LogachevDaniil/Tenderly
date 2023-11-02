import React from "react";
import styles from "./Sponsors.module.css";
import { Asd } from "../../../Asd/Asd";

export default function LeftSide() {
  return (
    <div className={styles.sponsors}>
      {/* <Asd /> */}

      <div className={styles.description}>
        <p className={styles.description__text}>
          <strong>Trusted</strong> by Blockchain Industry Leaders
        </p>
        <div className={styles.trustersLogos}>
          <img
            src="/images/binance-logo.svg"
            alt="binance"
            className={styles.companyLogo}
          />
          <img
            src="/images/openzeppelin-logo.svg"
            alt="binance"
            className={styles.companyLogo}
          />
          <img
            src="/images/chainlink-logo.svg"
            alt="binance"
            className={styles.companyLogo}
          />
          <img
            src="/images/argent-logo.svg"
            alt="binance"
            className={styles.companyLogo}
          />
          <img
            src="/images/0x-logo.svg"
            alt="binance"
            className={styles.companyLogo}
          />
        </div>
      </div>
    </div>
  );
}
