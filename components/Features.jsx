import React from "react";
import { FaTruck } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiAnticlockwiseRotation } from "react-icons/gi";

const Features = () => {
  return (
    <div className="features">
      <section>
        <div className="feature-col-1">
          <FaTruck className="features-icons" />
          <h4>Free Shipping</h4>
          <p>
            {" "}
            For all the products that are available in our store would be
            shipped free of cost.
          </p>
        </div>
        <div className="feature-col-1">
          <RiCustomerService2Fill className="features-icons" />
          <h4>24*7 Customer Support</h4>
          <p>
            Any query or issue that you may possibly have while shopping is
            taken care here.
          </p>
        </div>
        <div className="feature-col-1">
          <GiAnticlockwiseRotation className="features-icons" />
          <h4>45 Days Return</h4>
          <p>
            Free replacement will be provided within 45 days if the product is
            delivered in defective/damaged.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Features;
