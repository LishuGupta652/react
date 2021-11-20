import React, { useRef, useEffect } from "react";
import { Power4 } from "gsap";

const Transition = ({ timeline }) => {
  const trans = useRef(null);
  useEffect(() => {
    timeline.fromTo(
      trans.current,
      { x: "-100vw" },
      {
        duration: 3,
        x: "100vw",
        ease: Power4.easeInOut,
      }
    );
  });

  return (
    <div>
      <div className="transition-effect" ref={trans}></div>
    </div>
  );
};

export default Transition;
