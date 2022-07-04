import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaRegCopyright } from "react-icons/fa";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        CopyRight <FaRegCopyright /> 2022 All rights reserved. | Made with
        <BsFillSuitHeartFill color="red" /> by
        <a
          href="https://www.linkedin.com/in/sanidhya-mahajan-00271a193/"
          target="_blank"
        >
          <strong> Sanidhya Mahajan</strong>
        </a>
      </p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <GrLinkedinOption />
      </p>
    </div>
  );
};

export default Footer;
