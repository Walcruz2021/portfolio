"use client";

import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";

export default function TitlesWithSaveEffect() {
  const containerRef = useRef(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;
      containerRef.current.style.visibility = "visible";
      const h2Element = containerRef.current.querySelector(".wavy");
      if (!h2Element) return;
      const { chars } = splitText(h2Element);

      const staggerDelay = 0.15;

      animate(
        chars,
        { y: [-20, 20] },
        {
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          duration: 2,
          delay: stagger(
            staggerDelay,
            // By setting this as a negative delay we can start
            // the animation part-way through, to ensure we don't
            // get an initial iteration where the characters look
            // like they're starting to animate one by one.
            { startDelay: -staggerDelay * chars.length }
          ),
        }
      );
    });
  }, []);

  return (
   
      <div ref={containerRef}>
        <h1 className="h1">
          Cruz Walter | <span className="wavy">Full Stack Developer</span>
        </h1>
    
      </div>

  );
}
