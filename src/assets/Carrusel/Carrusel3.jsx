import cartera from "../../img/productosInstagram/cartera.jpg"
import zapatos from "../../img/productosInstagram/zapatosDama.webp"
import reloj from "../../img/productosInstagram/reloj.jpg"
import cadena from "../../img/productosInstagram/cadena.avif"
import bolso from "../../img/productosInstagram/bolso.webp"
import tapado from "../../img/productosInstagram/tapado.webp"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Carrusel3() {

    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    // EFECTO CURSOR
    useEffect(() => {

        const moveCursor = (e) => {
            setPosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };

    }, []);

    return (

        <>

            {/* EFECTO CURSOR */}
            <motion.div
                className="
                    fixed
                    top-0
                    left-0
                    w-24
                    h-24
                    rounded-full
                    pointer-events-none
                    bg-white/20
                    backdrop-blur-3xl
                    blur-3xl
                    z-50
                    mix-blend-screen
                    will-change-transform
                "
                animate={{
                    x: position.x - 48,
                    y: position.y - 48,
                    scale: 1.2
                }}
                transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 20,
                    mass: 0.5,
                }}
            />

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

                * {
                    font-family: 'Poppins', sans-serif;
                }

                body {
                    background: #09090b;
                    cursor: none;
                }

                @keyframes floatText {
                    0% {
                        transform: translateY(0px);
                    }
                    25% {
                        transform: translateY(-6px);
                    }
                    50% {
                        transform: translateY(0px);
                    }
                    75% {
                        transform: translateY(6px);
                    }
                    100% {
                        transform: translateY(0px);
                    }
                }

                @keyframes glow {
                    0% {
                        text-shadow:
                            0 0 0px rgba(255,255,255,0),
                            0 0 0px rgba(255,255,255,0);
                    }

                    20% {
                        text-shadow:
                            0 0 20px rgba(255, 255, 255, 0.82),
                            0 0 50px rgba(255, 255, 255, 0.26);
                    }

                    100% {
                        text-shadow:
                            0 0 0px rgba(48, 46, 46, 0),
                            0 0 0px rgba(255,255,255,0);
                    }
                }

                @keyframes gradientMove {
                    0% {
                        background-position: 0% center;
                    }
                    100% {
                        background-position: 200% center;
                    }
                }

                .animated-title span {
                    display: inline-block;
                    animation:
                        floatText 3s ease-in-out infinite,
                        glow 4s ease-in-out infinite;
                }

                .animated-title span:nth-child(1) {
                    animation-delay: 0s;
                }

                .animated-title span:nth-child(2) {
                    animation-delay: 0.2s;
                }

                .animated-title span:nth-child(3) {
                    animation-delay: 0.4s;
                }

                .gradient-text {
                    background: linear-gradient(
                        90deg,
                        #ffffff,
                        #9ca3af,
                        #ffffff,
                        #d4d4d8,
                        #ffffff
                    );

                    background-size: 200% auto;

                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;

                    animation: gradientMove 6s linear infinite;
                }

                .subtitle {
                    animation: floatText 4s ease-in-out infinite;
                }
            `}</style>

            <div className="px-4 md:px-6 py-10 overflow-hidden mb-10 mt-10">

                <div
                    className="
                        flex
                        items-center
                        gap-2
                        h-[650px]
                        md:h-[650px]
                        w-full
                        max-w-7xl
                        mt-10
                        mx-auto
                    "
                >

                    {/* CARD */}
                    <div
                        className="
                            relative
                            group
                            flex-grow
                            transition-all
                            w-20
                            md:w-32
                            rounded-3xl
                            overflow-hidden
                            h-[650px]
                            md:h-[650px]
                            duration-500
                            hover:w-full
                        "
                    >
                        <img
                            className="
                                h-full
                                w-full
                                object-cover
                                object-center
                                group-hover:scale-105
                                transition-transform
                                duration-700
                            "
                            src={bolso}
                            alt="image"
                        />
                    </div>

                    {/* CARD */}
                    <div
                        className="
                            relative
                            group
                            flex-grow
                            transition-all
                            w-20
                            md:w-32
                            rounded-3xl
                            overflow-hidden
                            h-[650px]
                            md:h-[650px]
                            duration-500
                            hover:w-full
                        "
                    >
                        <img
                            className="
                                h-full
                                w-full
                                object-cover
                                object-center
                                group-hover:scale-105
                                transition-transform
                                duration-700
                            "
                            src={cadena}
                            alt="image"
                        />
                    </div>

                    {/* CARD */}
                    <div
                        className="
                            relative
                            group
                            flex-grow
                            transition-all
                            w-20
                            md:w-32
                            rounded-3xl
                            overflow-hidden
                            h-[650px]
                            md:h-[650px]
                            duration-500
                            hover:w-full
                        "
                    >
                        <img
                            className="
                                h-full
                                w-full
                                object-cover
                                object-center
                                group-hover:scale-105
                                transition-transform
                                duration-700
                            "
                            src={reloj}
                            alt="image"
                        />
                    </div>

                    {/* CARD */}
                    <div
                        className="
                            relative
                            group
                            flex-grow
                            transition-all
                            w-20
                            md:w-32
                            rounded-3xl
                            overflow-hidden
                            h-[650px]
                            md:h-[650px]
                            duration-500
                            hover:w-full
                        "
                    >
                        <img
                            className="
                                h-full
                                w-full
                                object-cover
                                object-center
                                group-hover:scale-105
                                transition-transform
                                duration-700
                            "
                            src={zapatos}
                            alt="image"
                        />
                    </div>

                    {/* CARD */}
                    <div
                        className="
                            relative
                            group
                            flex-grow
                            transition-all
                            w-20
                            md:w-32
                            rounded-3xl
                            overflow-hidden
                            h-[500px]
                            md:h-[650px]
                            duration-500
                            hover:w-full
                        "
                    >
                        <img
                            className="
                                h-full
                                w-full
                                object-cover
                                object-center
                                group-hover:scale-105
                                transition-transform
                                duration-700
                            "
                            src={cartera}
                            alt="image"
                        />
                    </div>

                    {/* CARD */}
                    <div
                        className="
                            relative
                            group
                            flex-grow
                            transition-all
                            w-20
                            md:w-32
                            rounded-3xl
                            overflow-hidden
                            h-[650px]
                            md:h-[650px]
                            duration-500
                            hover:w-full
                        "
                    >
                        <img
                            className="
                                h-full
                                w-full
                                object-cover
                                object-center
                                group-hover:scale-105
                                transition-transform
                                duration-700
                            "
                            src={tapado}
                            alt="image"
                        />
                    </div>

                </div>

            </div>

        </>

    );
}

function TypewriterText({ text }) {

    const [displayed, setDisplayed] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {

        if (index < text.length) {

            const timeout = setTimeout(() => {
                setDisplayed((prev) => prev + text[index]);
                setIndex((i) => i + 1);
            }, 35);

            return () => clearTimeout(timeout);
        }

    }, [index, text]);

    return (
        <span>
            {displayed}

            {index < text.length && (
                <span
                    className="
                        inline-block
                        w-0.5
                        h-4
                        bg-blue-400
                        ml-0.5
                        animate-pulse
                        text-center
                    "
                />
            )}
        </span>
    );
}