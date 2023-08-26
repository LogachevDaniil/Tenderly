import React from 'react';
// import classes from
// import classes from './AnotherSignIn'
import './AnotherSignIn.css';

export function AnotherSignIn() {
  return (
    <div>
      <p className="AnotherSignIn__text">
        Or you can continue with one of the following services
      </p>
      <div className="SignIn">
        <button className="SignIn__button white-button">
          <img src="/images/google-logo.svg" alt="" />
          <p className="button__text">Sign in with Google</p>
        </button>
        <button className="SignIn__button dark-button">
          <img src="/images/gitHub-logo.svg" className="dark" alt="" />
          <p className="button__text">Sign in with GitHub</p>
        </button>
      </div>
      <div className="auth-documents">
        <p className="auth-documents__link">Terms of Service</p>
        <div className="dot" />
        <p className="auth-documents__link">Privacy Poilcy</p>
      </div>
    </div>
  );
}

// <>
//   <Header />
//   <main>

//   </main>
//   <Footer />
// </>
