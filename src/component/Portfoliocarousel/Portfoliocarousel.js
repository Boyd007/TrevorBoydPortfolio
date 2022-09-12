// import "./portfoliocarousel.scss";
// import Carousel from "react-bootstrap/Carousel";

// function Portfoliocarousel() {
//   return (
//     <div className="portfolio-carousel">
//       <p>My Portfolio</p>
//       <Carousel style={{ background: "" }}>
//         <Carousel.Item>
//           <a href="https://github.com/Boyd007/C19JATE">
//             Just Another Text Editor J.A.T.E
//           </a>
//           <Carousel.Caption></Carousel.Caption>
//         </Carousel.Item>

//         <Carousel.Item>
//           <a href="https://gitcommitheroku.herokuapp.com/">Git Commit Heroku</a>
//         </Carousel.Item>
//         <Carousel.Item>
//           <a href="https://github.com/Boyd007/C6YourWeatherDash">
//             Your Weather Dashboard
//           </a>
//         </Carousel.Item>
//         <a href="https://github.com/Boyd007/C11NoteTaker">
//           Note Taking Application
//         </a>
//         <Carousel.Item></Carousel.Item>
//         <a href="https://github.com/Boyd007/C9ProReadMe">README Generator</a>
//         <Carousel.Item>
//           <a href="https://github.com/Boyd007/C5Scheduler">
//             Your Workday Scheduler
//           </a>
//         </Carousel.Item>
//         <Carousel.Item>
//           <a href="https://github.com/Boyd007/C3PasswordGenTrevorBoyd">
//             Password Generator
//           </a>
//         </Carousel.Item>
//       </Carousel>
//     </div>
//   );
// }

// export default Portfoliocarousel;

import Carousel from 'react-bootstrap/Carousel';
import "./portfoliocarousel.scss";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          alt=""
        />
        <Carousel.Caption>
          <h3>Work Day Scheduler</h3>
          <p>This application allows you to schedule your activities for the day.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt=""
        />

        <Carousel.Caption>
          <h3>Git Chat</h3>
          <p>This is an application designed to connect developers to one another</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;