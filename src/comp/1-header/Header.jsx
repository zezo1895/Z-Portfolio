import React, { useEffect, useState } from "react";
import "../1-header/Header.css";

const Header = () => {
  const [Show, setShow] = useState(false);
  const[theme,settheme]=useState(localStorage.getItem("currentmode"??"dark"))
 
  useEffect(() => {
    if(theme==="light"){
      document.body.classList.remove('dark')
      document.body.classList.add('light')
    }
    else{
      document.body.classList.remove('light')
      document.body.classList.add('dark')
    }
  },[theme])
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
      <button onClick={() => {
        // settheme("light")
      localStorage.setItem("currentmode",theme ==="dark" ? "light":"dark")
        settheme(localStorage.getItem("currentmode"))
        // icon-moon-o
      }} className= {theme==="dark"?"icon-moon-o":"icon-sun"}></button>
      {Show && (
        <div className="menulist">
          <ul className="model">
            <li><button className="icon-close" onClick={() => {
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
