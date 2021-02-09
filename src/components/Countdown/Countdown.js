import React, { useEffect, useState, useRef } from "react";

import "./countdown.scss";

const Countdown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("March 26, 2021 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const HOURS = ("0" + hours).slice(-2);

      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(HOURS);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  //componentDidMount()

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="Countdown">
      <div className="info__countdown--time">
        <p className="zeros">{timerDays}</p>
        <p>Days</p>
      </div>
      <div className="info__countdown--time">
        <p className="zeros">{timerHours}</p>
        <p>Hours</p>
      </div>
      <div className="info__countdown--time">
        <p className="zeros">{timerMinutes}</p>
        <p>Minutes</p>
      </div>
      <div className="info__countdown--time">
        <p className="zeros">{timerSeconds}</p>
        <p>Seconds</p>
      </div>
    </div>
  );
};

export default Countdown;
