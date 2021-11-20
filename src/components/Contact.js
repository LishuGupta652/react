import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Transition from "./Transition";
const Contact = () => {
  const contact = gsap.timeline();
  const contacth1 = useRef(null);
  const contactimg = useRef(null);
  useEffect(() => {
    contact.from(
      contacth1.current,
      {
        duration: 0.6,
        skewX: 10,
        x: -100,
        color: "black",
        opacity: 0,
      },
      "-=1.5"
    );
    contact.from(
      contactimg.current,
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
      <Transition timeline={contact} />
      <div className="contact-image contact-overlay" ref={contactimg}></div>
      <div className="container-contact">
        <h1 ref={contacth1}>contact page</h1>
      </div>
    </div>
  );
};

export default Contact;
