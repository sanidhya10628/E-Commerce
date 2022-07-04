import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";
const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner">
      <section>
        <div className="hero-banner-desc">
          <div className="hero-banner-large-text">
            {heroBanner.largeText1} <br /> {heroBanner.largeText2}
          </div>
          <div className="hero-banner-small-text">{heroBanner.desc}</div>
          <div className="hero-banner-shop-btn">
            <Link href={`/product/${heroBanner.product}`}>
              <button type="button">{heroBanner.buttonText}</button>
            </Link>
          </div>
        </div>

        <div className="hero-banner-img-div">
          <img
            src={urlFor(heroBanner.image)}
            alt=""
            className="hero-banner-img"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroBanner;

{
  /* <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img
          src={urlFor(heroBanner.image)}
          alt="headphones"
          className="hero-banner-image"
        />

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>

          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div> */
}
