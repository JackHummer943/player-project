import React from 'react';
import {Link} from "react-router-dom";
function Header() {
  return (    
  <div className="header">
  <div className="container">
<Link to="/">
<div className="header__logo">
      <img 
      width="70" 
      src="data:image/png;base64,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" 
      alt="Project logo" />
      <div>
        <h1>Player Project</h1>
        <p>Лучшая мультипликация</p>
      </div>
    </div>
</Link>
    <div className="header__cart">
      <Link to="/player" className="button button--cart">
        <span>520 ₽</span>
        <div className="button__delimiter"></div>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>3</span>
      </Link>
    </div>
  </div>
</div>
);
}

export default Header;