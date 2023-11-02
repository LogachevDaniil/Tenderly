import React, { useState } from "react";
import styles from "./RegForm.module.css"
import classNames from "classnames";

export function RegForm() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const showSwitchHandler = () => {
    setShow(!show);
  };

  const emailSwitchHandler = (e: React.FormEvent) => {
    e.preventDefault();
    // setEmail(email);
    console.log(email);
  };
  return (
    <form action="" className={styles.regForm}>
      <div className={styles.formInput}>
        <label htmlFor="" className={styles.label}>
          Email / Username
        </label>
        <input
          type="email"
          name="email"
          placeholder="troybarnes"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.formInput}>
        <label htmlFor="" className={styles.label}>
          Password
        </label>
        <input
          type={show ? "text" : "password"}
          name="password"
          placeholder="#sixseasonsandamovie"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div
          className={classNames(styles.passHideButton, { [styles.hide]: !show })}
          onClick={showSwitchHandler}
        >
          <div
            className={classNames(
              styles.image,
              { [styles.passShowImage]: show },
              { [styles.passHideImage]: !show }
            )}
          />
        </div>
      </div>
      <a href="#" className={`${styles.link} ${styles.littleLink}`}>
        Forgot your password?
      </a>
      <button
        className={classNames(styles.formSubmitButton, {
          [styles.canSubmitButton]: email && password,
        })}
        onClick={emailSwitchHandler}
      >
        Sign in
      </button>
    </form>
  );
}
