import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRef } from "react";
const PHOTO = "https://media.base44.com/images/public/69e69deaacc080e2495df610/5aaa9866f_walterFotoRedSocial.png";

const SKILLS = ["Node.js", "React", "APIs REST", "Testing", "TypeScript", "MongoDB"];

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
        <span className="inline-block w-0.5 h-4 bg-blue-400 ml-0.5 animate-pulse" />
      )}
    </span>
  );
}

export default function HeroSection4({ proyectosRef }) {
  return (
    <section className="relative bg-[#050810] overflow-hidden py-20">

      {/* ── Animated grid background ── */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#60a5fa 1px, transparent 1px), linear-gradient(90deg, #60a5fa 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Blue glow top-left ── */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />

      {/* ── Blue glow bottom-right ── */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />

      {/* ── Floating particles ── */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
          style={{
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{ y: [-10, 10, -10], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-400 text-lg tracking-[0.4em] uppercase font-semibold">
                Disponible para proyectos
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-8xl sm:text-6xl md:text-9xl font-black leading-[0.9] tracking-tight text-white mb-3"
            >
              Walter<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                Cruz
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px flex-1 max-w-[40px] bg-blue-500" />
              <span className="text-gray-400 text-2xl tracking-[0.25em] uppercase font-medium">
                Full Stack Developer
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.9 }}
              className="text-gray-400 text-lg sm:text-2xl leading-relaxed font-light max-w-lg mb-10 py-10 text-justify"
            >
              <TypewriterText text="Desarrollo soluciones tecnológicas escalables que optimizan procesos y generan resultados reales. Me especializo en construir APIs robustas con Node.js y experiencias modernas con React, aplicando buenas prácticas y testing automatizado para garantizar calidad en cada proyecto." />
            </motion.p>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {SKILLS.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.07, duration: 0.4 }}
                  whileHover={{ borderColor: "#60a5fa", color: "#60a5fa" }}
                  className="border border-gray-700 text-gray-400 text-lg px-4 py-1.5 tracking-widest uppercase transition-colors duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="flex flex-wrap gap-4 py-10"
            >
              <motion.button
                onClick={() => {
                  proyectosRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(96,165,250,0.35)" }}
                whileTap={{ scale: 0.97 }}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 text-base tracking-[0.12em] uppercase transition-colors"
              >
                Ver proyectos
              </motion.button>

              <motion.button
                onClick={() => {
                  window.open(
                    "https://wa.me/5493876153799?text=Hola%20Walter,%20vi%20tu%20portfolio%20y%20quiero%20consultar%20por%20tus%20servicios",
                    "_blank"
                  );
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-blue-400 font-bold px-8 py-4 text-base tracking-[0.12em] uppercase transition-colors"
              >
                Contactar
              </motion.button>
            </motion.div>
          </div>

          {/* RIGHT — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex justify-center lg:justify-end lg:pr-10"
          >
            <div className="relative">
              {/* Animated border ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #1d4ed8, #60a5fa, transparent, #1d4ed8)",
                  opacity: 0.6,
                }}
              />

              {/* Static outer ring */}
              <div className="absolute -inset-20 rounded-full  " />

              {/* Photo container */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-2 border-gray-800">
                <img
                  src={PHOTO}
                  alt="Walter Cruz"
                  className="w-full h-full object-cover object-top grayscale-[20%]"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -right-4 top-8 bg-gray-900 border border-gray-700 px-4 py-2 shadow-xl"
              >
                <p className="text-blue-400 text-base font-bold tracking-widest uppercase">Full Stack</p>
                <p className="text-gray-500 text-[12px] tracking-widest">Developer</p>
              </motion.div>

              {/* Floating badge 2 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute -left-4 bottom-10 bg-gray-900 border border-gray-700 px-4 py-2 shadow-xl"
              >
                <p className="text-white text-base font-bold">Node.js · React</p>
                <p className="text-gray-500 text-[12px] tracking-widest uppercase">Stack principal</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Bottom fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050810] to-transparent" />
    </section>
  );
}