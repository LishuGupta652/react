import React, { useRef, useEffect } from "react";
import Transition from "./Transition";
import gsap from "gsap";
const About = () => {
  const about = gsap.timeline();
  const abouth1 = useRef(null);
  const aboutimg = useRef(null);
  useEffect(() => {
    about.from(
      abouth1.current,
      {
        duration: 0.6,
        skewX: 10,
        x: -100,
        color: "black",
        opacity: 0,
      },
      "-=1.5"
    );
    about.from(
      aboutimg.current,
      {
        duration: 0.6,
        y: -200,
        opacity: 0,
      },
      "-=1.5"
    );
  });
  return (
    <div>
      <Transition timeline={about} />
      <div className="about-image about-overlay" ref={aboutimg}></div>
      <div className="container-about">
        <h1 ref={abouth1}>about page</h1>
      </div>
    </div>
  );
};

export default About;
