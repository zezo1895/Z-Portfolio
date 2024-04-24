import React, { useState } from "react";
import "../1-header/Header.css";

const Header = () => {
  const [Show, setShow] = useState(false);
  return (
    <header >
      <button className="icon-menu menu" onClick={() => {
        setShow(true)
      }}></button>
      <div  className="place"/>
<div className="dev">Ziad Adel</div>
      <nav>
        <ul className="listnav d-flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
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
      </nav>
      <button className="icon-moon-o"></button>
      {Show && (
        <div className="menulist">
          <ul className="model">
            <li><button className="icon-cancel" onClick={() => {
              setShow(false)
            }}></button></li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
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
      )}
    </header>
  );
};
export default Header;
