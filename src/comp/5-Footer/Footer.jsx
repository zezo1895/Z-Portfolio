import React from "react";
import "../5-Footer/Footer.css";


const Footer = () => {
  return (
    <div className="footer d-flex">
      <div className="left">
        <ul className="d-flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Uses</a>
          </li>
        </ul>
      </div>
      <div className="right">© 2023 Spencer Sharp. All rights reserved.</div>
    </div>
  );
};
export default Footer;
