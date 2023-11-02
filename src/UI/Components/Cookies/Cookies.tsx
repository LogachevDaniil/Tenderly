import React, { useState } from "react";
import styles from "./Cookies.module.css";
import classNames from "classnames";

function CookiesBlock() {
  const [closeCookies, setCloseCookies] = useState(false);
  const closeCookiesSwitchHandler = () => {
    setCloseCookies(!closeCookies);
  };
  return (
    <div
      className={classNames(styles.CookiesBlock, {
        [styles.close]: closeCookies,
      })}
    >
      <div className={styles.description}>
        <p className={styles.title}>We use cookies! 🍪</p>
        <div className={styles.descriptionScrollBlock}>
          Hi, we use essential cookies to ensure your Tenderly Dashboard works
          as expected. 🥰 In addition to these essential cookies, we use 3rd
          party tools that help us understand how to improve the product for
          everyone. As we value your privacy, you can opt-out of all
          non-essential cookies. 😶
        </div>
      </div>
      <div className={styles.buttons}>
        <button
          type="button"
          className={`${styles.button} ${styles.marginB} ${styles.transparent}`}
        >
          Manage individual preferences
        </button>
        <button
          type="button"
          className={`${styles.button} ${styles.marginB} ${styles.purpul}`}
          onClick={closeCookiesSwitchHandler}
        >
          Accept all
        </button>
        <button type="button" className={`${styles.button} ${styles.purpul}`}>
          Reject all
        </button>
      </div>
    </div>
  );
}

export default CookiesBlock;
