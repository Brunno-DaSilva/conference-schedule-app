import React from "react";
import Navbar from "../Navbar/Navbar";

import "./header.styles.scss";

function Header(props) {
  return (
    <div className="Header">
      <Navbar />
      <div className="Header__hero">
        <div className="hero__text">
          <p>Digital Design</p>
          <p> Conference </p>
          <p>2019 NYC</p>
        </div>
        <div className="hero__button">
          <button type="button">Add to Your Calendar</button>
        </div>
      </div>
      <div className="Header__info">
        <div className="info__location">
          <p>City Hall, New York City</p>
        </div>
        <div className="info__time">
          <p>12-15 MARCH 2022</p>
        </div>
        <div className="info__countdown">
          <div className="info__countdown--time">
            <p className="zero">00</p>
            <p>Days</p>
          </div>
          <div className="info__countdown--time">
            <p className="zero">00</p>
            <p>Hours</p>
          </div>
          <div className="info__countdown--time">
            <p className="zero">00</p>
            <p>Minutes</p>
          </div>
          <div className="info__countdown--time">
            <p>00</p>
            <p>Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
