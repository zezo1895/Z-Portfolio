

import Header from "./comp/1-header/Header";
import Hero from "./comp/2-Hero/Hero";
import Main from "./comp/3-Main/Main";
import Contact from "./comp/4-Contact/Contact";
import Footer from "./comp/5-Footer/Footer";
import { useEffect, useState } from "react";
import "../src/comp/style.css"
function App() {
  const[totop,settotop]=useState(false)
  useEffect(() => {
    window.addEventListener("scroll",()=>{
      if(window.scrollY>300){
settotop(true)
      }
      else{
        settotop(false)
      }
    })
  },[])
  const handelclick=()=>{
window.scrollTo(0,0)
  }
  return (
    <div className="container">
      <Header />
      
      <Hero />
      <div className="divider"></div>
      <Main />
      <div className="divider"></div>
      <Contact />
      <div className="divider"></div>
      <Footer />
      <button onClick={handelclick} style={{ opacity:totop ? 1 : 0 }} className="totop icon-arrow-thin-right"></button>
    </div>
  );
}

export default App;
