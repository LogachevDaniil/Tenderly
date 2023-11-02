import React from "react";
// import "./AnotherSignIn.css";
import styles from "./AnotherSignIn.module.css";
export function AnotherSignIn() {
  return (
    <div>
      <p className={styles.AnothersignInText}>
        Or you can continue with one of the following services
      </p>
      <div className={styles.SignIn}>
        <button className={styles.SignInButton}>
          <img src="/images/google-logo.svg" alt="" />
          <p className={styles.buttonText}>Sign in with Google</p>
        </button>
        <button className={`${styles.SignInButton} ${styles.darkButton}`}>
          <img src="/images/gitHub-logo.svg" alt="" />
          <p className={styles.buttonText}>Sign in with GitHub</p>
        </button>
      </div>
      <div className={styles.authDocuments}>
        <p className={styles.authDocumentsLink}>Terms of Service</p>
        <div className={styles.dot} />
        <p className={styles.authDocumentsLink}>Privacy Poilcy</p>
      </div>
    </div>
  );
}
