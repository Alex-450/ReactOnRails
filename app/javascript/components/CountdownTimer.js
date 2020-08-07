import React, { useEffect, useState } from "react";

function CountDownTimer() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2020-09-01") - +new Date();
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
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      <h1>Boulder Bike Tour</h1>
      <h1>August 1st, 2020</h1>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span>Boulder Bike Tour 2020 is over - come back next year!</span>
      )}
    </div>
  );
}

export default CountDownTimer;
