"use client";

import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";
import "./HeroSection2.css";
import walterFotoRedSocial from "../../img/walterFotoRedSocial.png";
import TitlesTrain from "../Titles/TitlesTrain";

export default function HeroSection2() {
  const containerRef = useRef(null);
  const containerRef2 = useRef(null);

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

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef2.current) return;

      // Asegurarse que el contenedor es visible
      containerRef2.current.style.visibility = "visible";
      containerRef2.current.style.opacity = "1";

      const pElement = containerRef2.current;
      if (!pElement) return;

      const { words } = splitText(pElement);

      // Animar las palabras dentro del párrafo
      animate(
        words,
        { opacity: [0, 1], y: [20, 0] },
        {
          type: "spring",
          duration: 1.5,
          bounce: 0.2,
          delay: stagger(0.1),
        }
      );
    });
  }, []);

  return (
    <div className="hero-container" >
      
      <div className="hero-content">
        
        <div className="hero-image-container">
          <img
            src={walterFotoRedSocial}
            alt="Walter Cruz"
            className="hero-image"
          />
        </div>

        <div className="hero-text">
          <h1 className="charm-regular titleh1" ref={containerRef}>
            <p>Cruz Walter</p> | <span className="wavy">Full Stack Developer</span>
          </h1>
          <p className="instrument-serif-regular justificado-centrado">
            Creo soluciones tecnológicas escalables que optimizan procesos y
            mejoran la experiencia del usuario. Especializado en Node.js,
            Express, React y TypeScript, diseño APIs RESTful eficientes,
            desarrollo interfaces intuitivas y aplico pruebas automatizadas con
            Jest para garantizar calidad y estabilidad.
          </p>
          <TitlesTrain/>
        </div>
        
      </div>
    </div>
  );
}

//generador de grip
