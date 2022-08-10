import React from "react";
import Wave from "react-wavify";
import "./footerwaves.scss";

function Footerwaves() {
  return (
    <div id="footerwaves">
      <Wave mask="url(#mask)" fill="#280137">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0" stopColor="white" />
            <stop offset="0.5" stopColor="white" />
          </linearGradient>
          <mask id="mask">
            <rect x="0" y="0" width="100%" height="75%" fill="url(#gradient)" />
          </mask>
        </defs>
      </Wave>
    </div>
  );
}

// const App = () => (
//   <Wave fill= '#280137'
//   paused={false}
//   options={{
//     height: 220,
//    amplitude: 20,
//     speed: 0.5,
//     points: 3,
//   }}
// />
// )

export default Footerwaves;
