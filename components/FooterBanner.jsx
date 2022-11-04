import React, { useState, useEffect, useRef } from "react";

import Link from "next/link";
import { urlFor } from "../lib/client";

const FooterBanner = ({ footerBanner: { product, image, desc } }) => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  // const [futureDate, setFutureDate] = useState(
  //   new Date(new Date(Date.now() + 10 * 1000))
  // );
  let interval = useRef();

  const startTimer = () => {
    let countDownDate = new Date("1 Dec 2022").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  // console.log(product, image, desc);
  return (
    <div className="deal-of-the-month">
      <section>
        <div className="deal-of-the-month-img">
          <img src={urlFor(image)} alt="" width="100%" />
        </div>
        <div className="deal-description">
          <div className="deal-title">
            <h3>Deal Of The Month</h3>
          </div>
          <div className="deal-timer">
            <ul>
              <li>
                <span>
                  <b>{timerDays}</b>
                </span>
                <br />
                Days
              </li>
              <li>
                <span>
                  <b>{timerHours}</b>
                </span>
                <br />
                Hour
              </li>
              <li>
                <span>
                  <b>{timerMinutes}</b>
                </span>
                <br />
                Mins
              </li>
              <li>
                <span>
                  <b>{timerSeconds}</b>
                </span>
                <br />
                Secs
              </li>
            </ul>
          </div>
          <div className="deal-shop-now-btn">
            <Link href={`/product/${product}`}>SHOP NOW</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FooterBanner;

{
  /* <div className="footer-banner-container">
  <div className="banner-desc">
    <div className="left">
      <p>{discount}</p>
      <h3>{largeText1}</h3>
      <h3>{largeText2}</h3>
      <p>{saleTime}</p>
    </div>
    <div className="right">
      <p>{smallText}</p>
      <h3>{midText}</h3>
      <p>{desc}</p>
      <Link href={`/product/${product}`}>
        <button type="button">{buttonText}</button>
      </Link>
    </div>

    <img src={urlFor(image)} alt="" className="footer-banner-image" />
  </div>
</div>; */
}
