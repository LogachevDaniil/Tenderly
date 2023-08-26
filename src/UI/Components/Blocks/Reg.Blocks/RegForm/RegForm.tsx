import React, { useState } from 'react';
import './RegForm.css';
import classNames from 'classnames';

export function RegForm() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          type="email"
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
          type={show ? 'text' : 'password'}
          name="password"
          placeholder="#sixseasonsandamovie"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={classNames('pass--hide--button', { hide: !show })} onClick={showSwitchHandler}>
          <div className={classNames(
            'image',
            { 'pass--show-image': show },
            { 'pass--hide-image': !show },
          )}
          />
        </div>
      </div>
      <a href="#" className="link little--link">
        Forgot your password?
      </a>
      <button
        className={classNames('form__submit--button', {
          'canSubmit--button': email && password,
        })}
        onClick={emailSwitchHandler}
      >
        Sign in
      </button>
    </form>
  );
}
