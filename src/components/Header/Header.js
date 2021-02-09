import React from "react";
import Navbar from "../Navbar/Navbar";

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
            City Hall, New York City
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
            12-15 MARCH 2022
          </p>
        </div>
        <div className="info__countdown">
          <div className="info__countdown--time">
            <p className="zeros">00</p>
            <p>Days</p>
          </div>
          <div className="info__countdown--time">
            <p className="zeros">00</p>
            <p>Hours</p>
          </div>
          <div className="info__countdown--time">
            <p className="zeros">00</p>
            <p>Minutes</p>
          </div>
          <div className="info__countdown--time">
            <p className="zeros">00</p>
            <p>Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
