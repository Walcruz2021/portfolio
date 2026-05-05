import { motion } from "framer-motion";

// ================= FRONTEND =================
export const FRONTEND = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
];

// ================= BACKEND =================
export const BACKEND = [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", icon: "https://cdn.simpleicons.org/express/white" },

    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },

];

// ================= DATABASES =================
// export const DATABASES = [
// ];

// ================= DEVOPS & TOOLS =================
export const DEVOPS = [
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

// ================= TESTING =================
export const TESTING = [
    { name: "Jest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
];

// ================= ARQUITECTURA =================
export const ARQUITECTURA = [
    { name: "REST API", icon: "https://cdn.simpleicons.org/postman" },
];

// ================= IA & AUTOMATIZACIÓN =================
export const IA = [
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "n8n", icon: "https://cdn.simpleicons.org/n8n" },
];

// duplicar para loop infinito
const doubled = (arr) => [...arr, ...arr];

function InfiniteTrack({ items, direction = "left", speed = 35 }) {
    const animationStyle = {
        display: "flex",
        gap: "3rem",
        animation: `scroll-${direction} ${speed}s linear infinite`,
        width: "max-content",
    };

    return (
        <div className="overflow-hidden relative w-full flex justify-center">
            {/* Fade edges */}
            <div
                className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to right, #050810, transparent)" }}
            />
            <div
                className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to left, #050810, transparent)" }}
            />

            <div style={animationStyle}>
                {doubled(items).map((tech, i) => (
                    <div
                        key={i}
                        className="flex flex-col items-center gap-2.5 group cursor-default shrink-0"
                    >
                        <div className="w-24 h-24 sm:w-24 sm:h-24 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center
              group-hover:border-blue-500/40 group-hover:bg-blue-500/10 transition-all duration-300">
                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-10 h-10 sm:w-12 sm:h-12 object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                                onError={(e) => { e.target.style.display = "none"; }}
                            />
                        </div>
                        <span className="text-[10px] tracking-widest uppercase text-gray-600 group-hover:text-blue-400 transition-colors duration-300 font-medium">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function HeroSection5() {
    return (
        <section className="relative bg-[#050810] py-20 overflow-hidden">

            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="max-w-6xl mx-auto px-6 sm:px-12 mb-14 text-center lg:text-left">

          

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                        <span className="w-1 h-5 bg-blue-500 rounded-full" />
                        <span className="text-[12px] tracking-[0.35em] uppercase text-blue-400 font-semibold">
                            Stack tecnológico
                        </span>
                    </div>

                    <h2 className="text-6xl sm:text-7xl font-black text-white tracking-tight">
                        Tecnologías que{" "}
                        <span className="text-blue-400">domino</span>
                    </h2>
                </motion.div>
            </div>

            {/* Frontend */}
            <div>
                <div className="max-w-6xl mx-auto px-6 sm:px-12 mb-4 text-center lg:text-left">
                    <p className="text-[14px] tracking-[0.3em] uppercase text-gray-600 font-semibold">
                        Frontend
                    </p>
                </div>
                <InfiniteTrack items={FRONTEND} direction="right" speed={35} />
            </div>

            {/* Backend */}
            <div className="mb-10 mt-4">
                <div className="max-w-6xl mx-auto px-6 sm:px-12 mb-4 text-center lg:text-left">
                    <p className="text-[14px] tracking-[0.3em] uppercase text-gray-600 font-semibold">
                        Backend
                    </p>
                </div>
                <InfiniteTrack items={BACKEND} direction="left" speed={40} />
            </div>

           <div className="max-w-6xl mx-auto px-6 sm:px-12 mt-16">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

    {/* DEVOPS */}
    <div>
      <p className="text-[14px] tracking-[0.3em] uppercase text-gray-600 font-semibold mb-6 text-center lg:text-left">
        DEVOPS
      </p>

      <div className="grid grid-cols-2 gap-6 justify-items-center">
        {DEVOPS.map((tech, i) => (
          <div key={i} className="flex flex-col items-center gap-3 group">
            <div className="w-24 h-24 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center
              group-hover:border-blue-500/40 group-hover:bg-blue-500/10 transition-all duration-300">
              <img src={tech.icon} alt={tech.name} className="w-11 h-11 object-contain" />
            </div>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* TESTING */}
    <div>
      <p className="text-[14px] tracking-[0.3em] uppercase text-gray-600 font-semibold mb-6 text-center lg:text-left">
        TESTING
      </p>

      <div className="grid grid-cols-2 gap-6 justify-items-center">
        {TESTING.map((tech, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <img src={tech.icon} alt={tech.name} className="w-11 h-11 object-contain" />
            </div>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* ARQUITECTURA */}
    <div>
      <p className="text-[14px] tracking-[0.3em] uppercase text-gray-600 font-semibold mb-6 text-center lg:text-left">
        ARQUITECTURA
      </p>

      <div className="grid grid-cols-2 gap-6 justify-items-center">
        {ARQUITECTURA.map((tech, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <img src={tech.icon} alt={tech.name} className="w-11 h-11 object-contain" />
            </div>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* IA */}
    <div>
      <p className="text-[14px] tracking-[0.3em] uppercase text-gray-600 font-semibold mb-6 text-center lg:text-left">
        IA
      </p>

      <div className="grid grid-cols-2 gap-8 justify-items-center">
        {IA.map((tech, i) => (
          <div key={i} className="flex flex-col items-center gap-3 group">
            <div className="w-24 h-24 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center
              group-hover:border-blue-500/40 group-hover:bg-blue-500/10 transition-all duration-300">
              <img src={tech.icon} alt={tech.name} className="w-11 h-11 object-contain" />
            </div>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>

  </div>
</div>



            {/* Animaciones */}
            <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
        </section>
    );
}