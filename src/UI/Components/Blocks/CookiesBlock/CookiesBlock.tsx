import React, { useState } from 'react';
import './CookiesBlock.css';
import classNames from 'classnames';

function CookiesBlock() {
  const [closeCookies, setCloseCookies] = useState(false);
  const closeCookiesSwitchHandler = () => {
    setCloseCookies(!closeCookies);
  };
  return (
    <div className={classNames('CookiesBlock', { close: closeCookies })}>
      <div className="description-side">
        <p className="Cookies__title">We use cookies! 🍪</p>
        <div className="description-scroll-block">
          Hi, we use essential cookies to ensure your Tenderly Dashboard works
          as expected. 🥰 In addition to these essential cookies, we use 3rd
          party tools that help us understand how to improve the product for
          everyone. As we value your privacy, you can opt-out of all
          non-essential cookies. 😶
        </div>
      </div>
      <div className="buttons-side">
        <button type="button" className="Cookies__button margin-bottom transparent">
          Manage individual preferences
        </button>
        <button
          type="button"
          className="Cookies__button margin-bottom purpul"
          onClick={closeCookiesSwitchHandler}
        >
          Accept all
        </button>
        <button type="button" className="Cookies__button purpul">Reject all</button>
      </div>
    </div>
  );
}

export default CookiesBlock;
