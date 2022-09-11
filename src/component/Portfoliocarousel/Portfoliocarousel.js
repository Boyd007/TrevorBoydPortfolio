import "./portfoliocarousel.scss";
import Carousel from "react-bootstrap/Carousel";

function Portfoliocarousel() {
  return (
    <div className="portfolio-carousel">
      <p>My Portfolio</p>
      <Carousel style={{ background: "" }}>
        <Carousel.Item>
          <a href="https://github.com/Boyd007/C19JATE">
            Just Another Text Editor J.A.T.E
          </a>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <a href="https://gitcommitheroku.herokuapp.com/">Git Commit Heroku</a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://github.com/Boyd007/C6YourWeatherDash">
            Your Weather Dashboard
          </a>
        </Carousel.Item>
        <a href="https://github.com/Boyd007/C11NoteTaker">
          Note Taking Application
        </a>
        <Carousel.Item></Carousel.Item>
        <a href="https://github.com/Boyd007/C9ProReadMe">README Generator</a>
        <Carousel.Item>
          <a href="https://github.com/Boyd007/C5Scheduler">
            Your Workday Scheduler
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://github.com/Boyd007/C3PasswordGenTrevorBoyd">
            Password Generator
          </a>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Portfoliocarousel;