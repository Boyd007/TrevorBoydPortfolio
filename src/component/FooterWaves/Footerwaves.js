import React from "react";
import Wave from 'react-wavify'
import "./footerwaves.css";

function Footerwaves() {
  return (
 <div id="footerwaves">

    <Wave mask="url(#mask)" fill="#280137" >
  <defs>
    <linearGradient id="gradient" gradientTransform="rotate(90)">
      <stop offset="0" stopColor="white" />
      <stop offset="0.5" stopColor="white" />
    </linearGradient>
    <mask id="mask">
      <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)"  />
    </mask>
  </defs>
</Wave>
 </div>
  );
}
export default Footerwaves;
