//npm install motion-plus
"use client";

import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";

export default function TitlesEffect() {

  const containerRef = useRef(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      // Mostrar el contenedor cuando las fuentes están listas
      containerRef.current.style.visibility = "visible";

      const h1Element = containerRef.current.querySelector("h1");
      if (!h1Element) return; // Evita errores si no hay <h1>

      const { words } = splitText(h1Element);

      // Animar las palabras dentro del h1
      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        }
      );
    });
  }, []);

  return (
    <div ref={containerRef}>
      <h1 className="titleh1">
        Estoy convencido de que mi capacidad para desarrollar soluciones
        eficientes y escalables puede aportar valor a su empresa, ayudando a
        optimizar sus procesos tecnológicos y mejorar la experiencia de sus
        usuarios
      </h1>
  
    </div>
  );
}

