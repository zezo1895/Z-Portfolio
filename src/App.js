import { Container } from "react-bootstrap";

import Header from "./comp/1-header/Header";
import Hero from "./comp/2-Hero/Hero";
import Main from "./comp/3-Main/Main";
import Contact from "./comp/4-Contact/Contact";
import Footer from "./comp/5-Footer/Footer";

function App() {
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
    </div>
  );
}

export default App;
