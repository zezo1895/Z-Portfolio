import React, { useContext, useState } from "react";
import "../3-Main/Main.css";

import { motion , AnimatePresence } from "framer-motion";
import "../style.css"
import Datacontext from "../../context/context";



const Main = () => {
  const {myprojects} = useContext(Datacontext);
  const [active, setactive] = useState("html");

  const [arr, setnewarr] = useState(myprojects);

  const handel = (type) => {
    const newarr = myprojects.filter((item) => {
      const zz = item.category.find((myitem) => {
        return myitem === type;
      });
      return zz === type;
    });
    setnewarr(newarr);
  };
  return (
    <section className="main d-flex">
      <div className="buttons d-flex">
        <button
          onClick={() => {
            setactive("html");
            handel("html");
          }}
          className={active === "html" ? "active" : null}
        >
          all projects
        </button>
        <button
          onClick={() => {
            setactive("css");
            handel("css");
          }}
          className={active === "css" ? "active" : null}
        >
          html & css
        </button>
        <button
          onClick={() => {
            setactive("bootsrtap");
            handel("bootsrtap");
          }}
          className={active === "bootsrtap" ? "active" : null}
        >
          Bootsrtap
        </button>
        <button
          onClick={() => {
            setactive("react");
            handel("react")
          }}
          className={active === "react" ? "active" : null}
        >
          React
        </button>
        <button
          onClick={() => {
            setactive("node");
            handel("node")
          }}
          className={active === "node" ? "active" : null}
        >
          Node JS
        </button>
      </div>
      {/* ========================================================== */}
      <div  className="projects d-flex">
      <AnimatePresence>
        {arr.map((item) => {
          return (
            <a href={item.linkrev} target="_blank" rel="noreferrer">
            <motion.article layout transition={{ type:"spring",damping:8,stiffness:50 }}  initial={{ transform:"scale(0)" }} animate={{ transform:"scale(1)" }} exit={{ transform:"scale(0)" }} key={item.key}>
              <img className="coverpro" src={item.imgpath} alt="weza" />
              <div className="box d-flex">
                {" "}
                <h2 className="title">{item.projectitle}</h2>
                <div className="subtitle">{item.details}</div>
                <div className="details d-flex">
                  <div className="icons d-flex">
                    <div>
                      <a className="icon-link" href={item.linkrev}></a>
                    </div>
                    <div>
                      <a className="icon-github" href={item.linkgit}></a>
                    </div>
                  </div>
                  <div className="more d-flex">
                    {" "}
                    <a className=" moree d-flex" href={item.linkrev}>
                      More <span className="icon-arrow-thin-right"></span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
            </a>
          );
        })}
        </AnimatePresence>

        {/*  */}
      </div>
    </section>
  );
};
export default Main;
