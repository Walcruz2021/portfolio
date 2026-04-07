"use client";

import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";

export default function SplitText() {
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

//   useEffect(() => {
//     document.fonts.ready.then(() => {
//         if (!containerRef.current) return
//         containerRef.current.style.visibility = "visible"
//         const h2Element= containerRef.current.querySelector(".wavy")
//         if (!h2Element) return;
//         const { chars } = splitText(h2Element)

//         const staggerDelay = 0.15

//         animate(
//             chars,
//             { y: [-20, 20] },
//             {
//                 repeat: Infinity,
//                 repeatType: "mirror",
//                 ease: "easeInOut",
//                 duration: 2,
//                 delay: stagger(
//                     staggerDelay,
//                     // By setting this as a negative delay we can start
//                     // the animation part-way through, to ensure we don't
//                     // get an initial iteration where the characters look
//                     // like they're starting to animate one by one.
//                     { startDelay: -staggerDelay * chars.length }
//                 ),
//             }
//         )
//     })
// }, [])

  return (
    <div ref={containerRef}>
      <h1 className="h1">
        Estoy convencido de que mi capacidad para desarrollar soluciones
        eficientes y escalables puede aportar valor a su empresa,
        ayudando a optimizar sus procesos tecnológicos y mejorar la experiencia
        de sus usuarios
      </h1>
      <Stylesheet />

       {/* <div ref={containerRef}>
            <h1 className="h1">
                Cruz Walter |  <span className="wavy">Full Stack Developer</span>.
            </h1>
            <Stylesheet />
        </div> */}

    </div>
  );
}

function Stylesheet() {
  return (
    <style>{`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                max-width: 420px;
                text-align: left;
                visibility: hidden;
            }

            .split-word {
                will-change: transform, opacity;
            }
        `}</style>
  );
}
