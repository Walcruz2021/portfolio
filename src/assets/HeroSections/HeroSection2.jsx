
import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";
import "./HeroSection2.css";
import walterFotoRedSocial from "../../img/walterFotoRedSocial.png";

export default function HeroSectionPro() {
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!titleRef.current) return;

      const wavyText = titleRef.current.querySelector(".role");
      const { chars } = splitText(wavyText);

      const staggerDelay = 0.05;

      animate(
        chars,
        { y: [-10, 10] },
        {
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          duration: 1.8,
          delay: stagger(staggerDelay, {
            startDelay: -staggerDelay * chars.length,
          }),
        }
      );
    });
  }, []);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!textRef.current) return;

      const { words } = splitText(textRef.current);

      animate(
        words,
        { opacity: [0, 1], y: [20, 0] },
        {
          duration: 1,
          delay: stagger(0.05),
        }
      );
    });
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">

        {/* TEXTO */}
        <div className="hero-text">
          <h1 ref={titleRef}>
            <span className="name">Walter Cruz</span>
            <span className="role">Full Stack Developer</span>
          </h1>

          <p ref={textRef} className="description">
            Desarrollo soluciones tecnológicas escalables que optimizan procesos y generan resultados reales. 
            Me especializo en construir APIs robustas con Node.js y experiencias modernas con React, 
            aplicando buenas prácticas y testing automatizado para garantizar calidad en cada proyecto.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Ver proyectos</button>
            <button className="btn-secondary">Contactarme</button>
          </div>
        </div>

        {/* IMAGEN */}
        <div className="hero-image-container">
          <img src={walterFotoRedSocial} alt="Walter Cruz" />
        </div>

      </div>
    </section>
  );
}