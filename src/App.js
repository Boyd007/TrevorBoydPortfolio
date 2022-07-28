import Contact from "./component/Contact Form/Contactform";
import About from "./component/About/About"
import Page from "./component/Page/Page";
import { useState } from "react";
import logo from "./logo.svg";
import Footer from "./component/Footer/Footer";
import Nav from "./component/Nav/Nav";
import Footerwaves from "./component/FooterWaves/Footerwaves";
import Portfoliocarousel from "./component/Portfoliocarousel/Portfoliocarousel";
import {Routes, Route} from "react-router-dom";




function App() {
  const [pagename, setpagename] = useState("about");
  // function renderpage () {
  //   switch (pagename) {
  //     case "about":
  //     return <About />;
  //     case "projects":
  //       return <h1>Projects</h1> 
  //     case "contact":
  //     return <Contact />;
  //     case "resume":
  //       return <h1>Resume</h1>
  //     case "resources":
  //       return <h1>Resources</h1>
  //   }
  // }
  return (<>
    <Nav />

    <Routes>
      {/* {renderpage()} */}
      <Route path="/" element={<About />} />
      <Route path="/projects" element={<Portfoliocarousel />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/resume" element={<Resume />} /> */}
      {/* <Route path="/resources" element={<Resources />} /> */}

      
      
    </Routes>
  <Footerwaves />
  <Footer /></>
  );
}

export default App;
