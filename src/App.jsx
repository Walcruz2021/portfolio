import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SplitText from "./SplitText.jsx";
import TitlesEffect from "./assets/Titles/TitlesEffect.jsx";
import HeroSection4 from "../src/assets/HeroSections/HeroSection4.jsx";
import TitleWithSaveEffect from "../src/assets/Titles/TitlesWithSaveEffect.jsx";
import CardProfile from "../src/assets/Cards/CardProfile.jsx";
import TitlesFontsGoogle from "../src/assets/Titles/TitlesFontsGoogle.jsx";
import CardsGroup from "../src/assets/Cards/CardsGroup.jsx";
import Carrusel1 from "../src/assets/Carrusel/Carrusel1.jsx";
import Carrusel2 from "../src/assets/Carrusel/Carrusel2.jsx";
import TitlesTrain from "../src/assets/Titles/TitlesTrain.jsx";
import TitlesReactAwesome from "../src/assets/Titles/TitlesReactAwesome.jsx";
import HeroSection5 from "./assets/HeroSections/HeroSection5.jsx";
import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";
import Footer2 from "./assets/Footer/Footer2.jsx";




function App() {
  const proyectosRef = useRef(null);
  const [count, setCount] = useState(0);
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
  const data = "PROYECTOS";
  return (
    <>
      <div className="bg-gray-900 text-white min-h-screen">
        {/* Navbar */}

        {/* <TitlesEffect/> */}
        {/*<TitlesReactAwesome />*/}




        <div className="min-h-screen bg-[#050810]">
          <HeroSection4 proyectosRef={proyectosRef} />
        </div>

        <div style={{ backgroundColor: "white" }}>
          {/* <TitleWithSaveEffect /> */}
          <div></div>
          <CardProfile />

          <div className="container2">
            <h1 className="instrument-serif-regular titleh1">PROYECTOS</h1>
            <CardsGroup proyectosRef={proyectosRef} />
          </div>

          <div className="min-h-screen bg-[#050810]">
            <HeroSection5 />
          </div>

          <div className="container2">
            <h1 className="instrument-serif-regular titleh1">CERTIFICADOS</h1>
            <Carrusel1 />
          </div>

          <Footer2 />
        </div>
      </div>
    </>
  );
}

export default App;
