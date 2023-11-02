import React from "react";
// import "./RightSide.css";
import styles from "./RightSide.module.css";
import { RegForm } from "../RegForm/RegForm";
import { AnotherSignIn } from "../AnotherSignIn/AnotherSignIn";
import ChatBlock from "../../Chat/Chat";

export function RightSide() {
  return (
    <div className={styles.rightSide}>
      <div className={styles.signInForm}>
        <div className={styles.box}>
          <strong>Attention:</strong> Tenderly Node Release: Ready to try
          DevNets or Node Extensions? For more information on our new node
          solutions,{" "}
          <a href="#" className={styles.link}>
            check out our changelog
          </a>
          !
        </div>
        <h3 className={styles.signInText}>Sign in to Tenderly</h3>
        <p className={styles.createAccauntAdd}>
          Don't have an account?{" "}
          <a href="#" className={styles.link}>
            Create an account
          </a>
        </p>
        <RegForm />
        <AnotherSignIn />
      </div>
      <ChatBlock />
    </div>
  );
}
