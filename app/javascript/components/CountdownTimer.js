import React, { useEffect, useState } from "react";
import styles from "./app.module.css";

function CountDownTimer() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2020-08-01") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className={styles.countdown}>
      <h1>Time until the race</h1>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span>Boulder Bike Tour 2020 is over - come back next year!</span>
      )}
    </div>
  );
}

export default CountDownTimer;
