import React from "react";
import Navbar from "../Navbar/Navbar";
import Countdown from "../Countdown/Countdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

import "./header.styles.scss";

function Header(props) {
  return (
    <div className="Header">
      <Navbar />
      <h1>CONFERENCE</h1>
      <div className="Header__hero">
        <div className="hero__frame"></div>
        <div className="hero__text">
          <p>Digital Coding</p>
          <p> Conference </p>
          <p>2022 Dallas</p>
        </div>
        <div className="hero__button">
          <button type="button">Add to Your Calendar</button>
        </div>
      </div>
      <div className="Header__info">
        <div className="info__location">
          <p>
            <span>
              <FontAwesomeIcon
                className="info-icons active"
                icon={faMapMarkerAlt}
              />
            </span>
            AT&T Stadium, Dallas-TX
          </p>
        </div>
        <div className="info__time">
          <p>
            <span>
              <FontAwesomeIcon
                className="info-icons active"
                icon={faCalendarAlt}
              />
            </span>{" "}
            26-28 MARCH 2022
          </p>
        </div>
        <div className="info__countdown">
          <Countdown />
        </div>
      </div>
    </div>
  );
}

export default Header;
