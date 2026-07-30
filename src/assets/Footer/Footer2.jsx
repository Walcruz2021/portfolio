import { motion } from "framer-motion";
// import { Phone, FileText, Github, Linkedin, Mail } from "lucide-react";
import { FileText, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer2() {

const openCV = () => {
  window.open("/FullStackDeveloperWalterCruz.pdf", "_blank");
};

  return (
    <footer className="relative bg-black overflow-hidden border-t border-white/10">

      {/* Background decorative blobs */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
      <div className="absolute -top-20 right-0 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-6 pt-16 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 border-b border-white/10 pb-12">

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-1 h-6 bg-blue-500 rounded-full" />
              <span className="text-[10px] tracking-[0.35em] uppercase text-blue-400 font-semibold">
                Walter Cruz
              </span>
            </div>
            <h2 className="text-7xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-5">
              Desarrollador<br />
              <span className="text-blue-400">Full Stack</span>
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed max-w-xl font-light text-justify">
              Con experiencia en el desarrollo de proyectos propios y soluciones para clientes.
              Especializado en backend con Node.js, MongoDB, PostgreSQL y SQL, y en frontend con React.
              Me enfoco en crear aplicaciones funcionales, escalables y orientadas a resolver
              necesidades reales.
            </p>
          </motion.div>

          {/* Contact + CV */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-5"
          >
            <div>
              <p className="text-[12px] tracking-[0.3em] uppercase text-gray-500 font-semibold mb-4">
                Contacto
              </p>
              <a
                href="tel:3876153799"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 no-underline transition-colors duration-200 group mb-3"
              >
                <span className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500/40 group-hover:bg-blue-500/10 transition-all duration-200">
                  <Phone className="w-5 h-5" strokeWidth={1.6} />
                </span>
                <span className="text-xl">(387) 6153799</span>
              </a>
            </div>

            {/* CV Button */}
            <div>
              <p className="text-[12px] tracking-[0.3em] uppercase text-gray-500 font-semibold mb-4">
                Más sobre mí
              </p>
              <motion.button
                onClick={openCV}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white text-xl font-semibold tracking-wide px-5 py-3 transition-colors duration-200 w-full justify-center rounded-sm"
              >
                <FileText className="w-6 h-6" strokeWidth={1.8} />
                Curriculum Vitae
              </motion.button>
            </div>

            {/* Social links */}
            <div className="flex gap-3 pt-1">
              {[
                { icon: FaGithub, href: "https://github.com/Walcruz2021", label: "FaGithub" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/walcruz1988/", label: "FaLinkedin" },
                { icon: FaEnvelope, href: "mailto:walcruz1988.21@gmail.com", label: "FaEnvelope" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-20 h-20 rounded-lg bg-white/8 border border-gray flex items-center justify-center text-gray-500 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-200"
                >
                  <Icon className="w-10 h-10" strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
         
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-gray-600 text-xl tracking-widest uppercase">
              Disponible para trabajar
            </span>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}