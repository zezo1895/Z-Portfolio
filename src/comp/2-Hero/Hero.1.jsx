import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../src/anm/Animation - 1713828937616.json";
import pic from "../../../src/avtar.png";

export const Hero = () => {
  return (
    <section className="hero d-flex">
      <div className="heroleft">
        <div className="avater">
          <img src={pic} className="avatarpic" alt="" />
          <div className="icon-verified"></div>
        </div>
        <h1 className="title">Software designer,frontend development</h1>
        <div className="subtitle">
          I am a front-end developer. I live in Egypt, Cairo Governorate. I have
          created some websites and provide good services
        </div>
        <ul className="iconcon">
          <li>
            <a className="icon-whatsapp" href="https://wa.me/201205988417"></a>
          </li>
          <li>
            <a
              className="icon-facebook-f"
              href="https://www.facebook.com/ziad.adel.35977897?mibextid=ZbWKwL"
            ></a>
          </li>
          <li>
            <a
              className="icon-instagram"
              href="https://www.instagram.com/urfav_zezo0?igsh=OGQ5ZDc2ODk2ZA=="
            ></a>
          </li>
          <li>
            <a className="icon-linkedin" href=""></a>
          </li>
        </ul>
      </div>
      <div className="herorigth">
        <Lottie
          className="deve"
          style={{}}
          animationData={groovyWalkAnimation}
        />
      </div>
    </section>
  );
};
