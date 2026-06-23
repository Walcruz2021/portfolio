import cartera from "../../img/ucropit.jpg";
import carteraBack from "../../img/imgBack.png";
import "./Card3DEffect.css"
import Tilt from "react-parallax-tilt";

const images = [cartera, carteraBack, cartera, carteraBack];
const Card3DEffect = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-white overflow-hidden">

          <Tilt
            tiltMaxAngleX={35}
            tiltMaxAngleY={35}
            perspective={1500}
            transitionSpeed={1500}
            scale={1.2}
            glareEnable={true}
            glareMaxOpacity={0.2}
          >
            <div className="relative flex justify-center items-center">

              {/* Glow detrás */}
              <div
                className="
                  absolute
                  w-[220px]
                  h-[220px]
                  bg-purple-500/30
                  blur-3xl
                  rounded-full
                "
              />

              {/* Imagen trasera */}
              <img
                src={carteraBack}
                alt="parte trasera"
                className="
                  absolute
                  z-0
                  w-[300px]
                  object-contain
                  opacity-60
                  blur-[1px]
                  transition-all
                  duration-500
                "
                style={{
                  transform:
                    "translateX(18px) translateY(8px) rotate(-6deg)",
                }}
              />

              {/* Imagen frontal */}
              <img
                src={cartera}
                alt="cartera"
                className="
                  relative
                  z-10
                  w-[320px]
                  object-contain
                  drop-shadow-[0_35px_35px_rgba(0,0,0,0.45)]
                  animate-[float_4s_ease-in-out_infinite]

                "
              />

            </div>
          </Tilt>
        </div>

    );
};

export default Card3DEffect;