import React from "react";
import "./App.css";
import "../Public.css";
import Reg from "../Pages/Reg";
import CookieConsent, { Cookies } from "react-cookie-consent";
import { CookiesBlock } from "../Components/Blocks/CookiesBlock/CookiesBlock";
function App() {
  return (
    <>
      <Reg />
      <div className="flex">
        <CookiesBlock />
      </div>
      {/* <CookieConsent
        contentClasses="content"
        overlayClasses="overlay"
        containerClasses="conteiner"
        buttonWrapperClasses="wrapper"
        style={{background:'transparent', display:"flex", }}
      >
        <div className="cookies-block">asdsaddas</div>
      </CookieConsent> */}
    </>
  );
}

export default App;
