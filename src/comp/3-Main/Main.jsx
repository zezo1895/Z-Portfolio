import React, { useEffect, useState } from "react";
import "../3-Main/Main.css";
import p2 from "../../../src/pic/p1.gif";
import p3 from "../../../src/pic/p2.gif";
import p4 from "../../../src/pic/p3.gif";
import p5 from "../../../src/pic/p4.gif";
import { motion , AnimatePresence } from "framer-motion";

const myprojects = [
  {
    projectitle: "Films Website",
    details:
      " this website show many Films and Series with fake api from internet",
    category: ["react", "bootsrtap", "html"],
    imgpath: p2,
    linkgit:"https://github.com/zezo1895/news",
    linkrev:"https://zezo1895.github.io/news/",
    key: 1,
  },
  {
    projectitle: "landing1",
    details: "This landing page with css from Elzero chanel",
    category: ["css", "html","bootsrtap"],
    imgpath: p3,
    linkgit:"https://github.com/zezo1895/hospice",
    linkrev:"https://zezo1895.github.io/hospice/",
    key: 2,
  },
  {
    projectitle: "Template1",
    details: "This Template with css to show very good design",
    category: ["css", "html"],
    imgpath: p4,
    linkgit:"https://github.com/zezo1895/T1",
    linkrev:"https://zezo1895.github.io/T1/",
    key: 3,
  },
  {
    projectitle: "Template2",
    details: "This Template with css to show very good design",
    category: ["css", "html"],
    imgpath: p5,
    linkgit:"https://github.com/zezo1895/T2",
    linkrev:"https://zezo1895.github.io/T2/",
    key: 4,
  },
];

const Main = () => {
  // useEffect(() => {
  //   myprojects
  // }, []);
  const [active, setactive] = useState("html");

  const [arr, setnewarr] = useState(myprojects);

  const handel = (type) => {
    const newarr = myprojects.filter((item) => {
      const zz = item.category.find((myitem) => {
        return myitem === type;
      });
      return zz == type;
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
          Recat
        </button>
      </div>
      {/* ========================================================== */}
      <div  className="projects d-flex">
      <AnimatePresence>
        {arr.map((item) => {
          return (
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
                      More <span className="icon-arrow-right"></span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
        </AnimatePresence>

        {/*  */}
      </div>
    </section>
  );
};
export default Main;
