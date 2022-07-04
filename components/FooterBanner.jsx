import React from "react";

import Link from "next/link";
import { urlFor } from "../lib/client";

const FooterBanner = ({ footerBanner: { product, image, desc } }) => {
  // console.log(product, image, desc);
  return (
    <div className="deal-of-the-week">
      <section>
        <div className="deal-of-the-week-img">
          <img src={urlFor(image)} alt="" width="100%" />
        </div>
        <div className="deal-description">
          <div className="deal-title">
            <h3>Deal Of The Week</h3>
          </div>
          <div className="deal-timer">
            <ul>
              <li>
                <span>
                  <b>34</b>
                </span>
                <br />
                Days
              </li>
              <li>
                <span>
                  <b>34</b>
                </span>
                <br />
                Hour
              </li>
              <li>
                <span>
                  <b>34</b>
                </span>
                <br />
                Mins
              </li>
              <li>
                <span>
                  <b>34</b>
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
