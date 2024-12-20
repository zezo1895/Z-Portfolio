import { createContext, } from "react";
import p2 from "../pic/p1.gif";
import p3 from "../pic/p2.gif";
import p4 from "../pic/p3.gif";
import p5 from "../pic/p4.gif";
import p6 from "../pic/p5.jpg";
import p7 from "../pic/p6.jpg";
import p8 from "../pic/Screenshot 2024-12-09 172454.jpg";

const Datacontext = createContext();

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
    linkgit:"https://github.com/zezo1895/hos",
    linkrev:"https://zezo1895.github.io/hos/",
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
  {
    projectitle: "To-Do-list",
    details: " to-do-list website with firebase auth multi language",
    category: ["css", "html","react"],
    imgpath: p6,
    linkgit:"https://github.com/zezo1895/to-do-list/tree/main",
    linkrev:"https://react-level2-5eb47.web.app/",
    key: 5,
  },
  {
    projectitle: "Mini Store",
    details: " Mini Store for development",
    category: ["css", "html","react"],
    imgpath: p7,
    linkgit:"https://github.com/zezo1895/revision2",
    linkrev:"https://e-kit-793a2.web.app/",
    key: 6,
  },
  {
    projectitle: "X-system 👋",
    details: " Full stack project with node to insert data of user with auth",
    category: ["css", "html","react","node","bootsrtap"],
    imgpath: p8,
    linkgit:"https://github.com/zezo1895/X-Sysytem",
    linkrev:"https://x-sysytem-api.vercel.app",
    key: 7,
  },
];

  



export function DataProvider({ children }) {



  return (
    <Datacontext.Provider value={{ myprojects}}>
      {children}
    </Datacontext.Provider>
  );
}
export default Datacontext;
