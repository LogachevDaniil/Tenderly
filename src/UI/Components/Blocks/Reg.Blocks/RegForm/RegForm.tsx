import React, { useState } from "react";
import "./RegForm.css";
import classNames from "classnames";
export const RegForm = () => {
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const btnImageClass = classNames(
    "image",
    { "pass--show-image": show },
    { "pass--hide-image": !show }
  );
  const btnClass = classNames("pass--hide--button", { hide: !show });
  const btnSubmitClass = classNames("form__submit--button", {
    'canSubmit--button': email && password,
  });
  const showSwitchHandler = () => {
    setShow(!show);
  };

  const emailSwitchHandler = (e: React.FormEvent) => {
    e.preventDefault();
    // setEmail(email);
    console.log(email);
  };
  return (
    <form action="" className="reg--form">
      <div className="form__input">
        <label htmlFor="" className="label">
          Email / Username
        </label>
        <input
          type="text"
          name="email"
          placeholder="troybarnes"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form__input">
        <label htmlFor="" className="label">
          Password
        </label>
        <input
          type="text"
          name="password"
          placeholder="#sixseasonsandamovie"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={btnClass} onClick={showSwitchHandler}>
          <div className={btnImageClass} />
        </div>
      </div>
      <a href="#" className="link little--link">
        Forgot your password?
      </a>
      <button className={btnSubmitClass} onClick={emailSwitchHandler}>
        Sign in
      </button>
    </form>
  );
};
