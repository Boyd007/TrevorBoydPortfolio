import logo from "./logo.svg";
import Footer from "./component/Footer/Footer";
import Nav from "./component/Nav/Nav";
import Footerwaves from "./component/FooterWaves/Footerwaves";
import Portfoliocarousel from "./component/Portfoliocarousel/Portfoliocarousel";
function App() {
  return (
    <>
      <Nav />
      {/* <Portfoliocarousel /> */}
      <Footerwaves />
      <Footer />
      
    </>
  );
}

export default App;
