import { motion } from "framer-motion";
import {
    CalendarDays,
    Users,
    Bell,
    BarChart3,
    TrendingUp,
    Smile,
    Clock3,
    DollarSign,
    ArrowRight,
    Sparkles,
    Package,
    Boxes,
    BadgeCheck

} from "lucide-react";
import mockupSist from "../img/mockupSistemaBlack.png";

export default function LandingMainProject() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#020509] text-white px-4 sm:px-6 py-16 flex items-center justify-center">

            {/* GRID BACKGROUND */}
            <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:72px_72px]" />

            {/* GLOW EFFECTS */}
            <div className="absolute top-[-150px] left-[15%] w-[600px] h-[600px] bg-blue-600/15 blur-[160px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-200px] right-[5%] w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none" />
            <div className="absolute top-[40%] left-[-100px] w-[300px] h-[300px] bg-blue-800/10 blur-[120px] rounded-full pointer-events-none" />

            {/* MAIN CONTAINER */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 max-w-10xl w-full"
            >

                {/* ── HEADER TITLE (fuera del card) ── */}
                <div className="mb-10 text-center">


                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tight leading-none select-none"
                    >
                        <span className="relative inline-block">
                            {/* stroke text outline effect */}
                            <span
                                className="absolute inset-0 text-transparent"
                                style={{ WebkitTextStroke: "1px rgba(59,130,246,0.18)" }}
                                aria-hidden="true"
                            >
                                Mi Proyecto
                            </span>
                            <span className="bg-gradient-to-b from-white via-white/80 to-white/20 bg-clip-text text-transparent">
                                Mi Proyecto
                            </span>
                        </span>
                        <br />
                        <span className="relative inline-block mt-1">
                            <span
                                className="absolute inset-0 text-transparent"
                                style={{ WebkitTextStroke: "1px rgba(34,211,238,0.15)" }}
                                aria-hidden="true"
                            >
                                Principal
                            </span>
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(59,130,246,0.4)]">
                                Principal
                            </span>
                        </span>
                    </motion.h2>

                    {/* decorative line under title */}
                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                        className="mx-auto mt-6 w-32 h-[1px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent"
                    />
                </div>

                {/* OUTER CARD */}
                <div className="rounded-[32px] border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-2xl p-8 md:p-14 shadow-[0_0_120px_rgba(59,130,246,0.10),inset_0_1px_0_rgba(255,255,255,0.07)]">

                    <div className="grid lg:grid-cols-2 gap-8 items-start">

                        {/* ─── LEFT CONTENT ─── */}
                        <div className="">

                            {/* BADGE */}
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="inline-flex items-center gap-2.5 px-4 py-3 rounded-full border border-blue-400/25 bg-blue-500/10 text-blue-300 text-xs tracking-[0.18em] uppercase mb-9 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                            >
                                <Sparkles size={13} className="text-blue-400" />
                                Proyecto Principal
                            </motion.div>

                            {/* TITLE */}
                            <motion.h1
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.18, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className="text-5xl md:text-[7rem] font-black leading-[0.92] tracking-tight mb-7 py-3"
                            >
                                <span className="text-white">Sistema de</span>
                                <br />
                                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                                    Gestión
                                </span>
                                <br />
                                <span className="text-white/90">de Turnos</span>
                            </motion.h1>

                            {/* ANIMATED LINE */}
                            <motion.div
                                initial={{ scaleX: 0, opacity: 0 }}
                                animate={{ scaleX: 1, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
                                className="origin-left w-20 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-transparent rounded-full mb-8"
                            />

                            {/* DESCRIPTION */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.45 }}
                                className="py-3 text-gray-400 text-xl leading-[1.85] max-w-lg mb-12 text-justify"
                            >
                                Sistema integral que optimiza la administración en
                                establecimientos dedicados al cuidado de mascotas,
                                mejorando la productividad, la experiencia del cliente y
                                la toma de decisiones estratégicas.
                            </motion.p>

                            {/* FEATURES GRID */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="py-3 grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-7 mb-10"
                            >
                                <FeatureCard icon={<CalendarDays size={20} />} title="Gestión de Turnos" desc="Agenda inteligente y reservas automatizadas." />
                                <FeatureCard icon={<Boxes size={20} />} title="Control de Inventarios y Productos" desc="Seguimiento detallado de inventario y productos." />
                                <FeatureCard icon={<Users size={20} />} title="Clientes y Mascotas" desc="Historial completo y perfiles personalizados." />
                                <FeatureCard icon={<BarChart3 size={20} />} title="Reportes Inteligentes" desc="Métricas y estadísticas estratégicas. Reportes de gastos, ventas y rendimiento" />
                                <FeatureCard icon={<Bell size={20} />} title="Notificaciones" desc="Alertas y recordatorios automáticos." />
                                <FeatureCard icon={<Package size={20} />} title="Control Comercial" desc="Centraliza el control de mercadería, compras y ventas para optimizar la administración del negocio." />
                            </motion.div>

                            {/* CTA BUTTON */}
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="py-3"
                            >
                                <a
                                    href="https://www.sistemapy.com.ar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-12 py-6 text-white text-sm font-semibold tracking-wide shadow-[0_0_40px_rgba(59,130,246,0.35)] hover:shadow-[0_0_60px_rgba(59,130,246,0.55)] transition-all duration-300 hover:scale-[1.03]">

                                        <span className="relative z-10 flex items-center gap-3 text-xl">
                                            Ver Demo del Sistema

                                            <ArrowRight
                                                size={16}
                                                className="transition-transform duration-300 group-hover:translate-x-1"
                                            />
                                        </span>

                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </button>
                                </a>
                            </motion.div>

                            {/* TECH STACK */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="grid grid-cols-2 sm:grid-cols-3 gap-5 mt-9 py-3 mb-10"
                            >
                                {["React.js", "TypeScript", "Tailwind CSS", "MongoDB", "N8N", "Node.js"].map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-center px-5 py-3 rounded-lg border border-white/[0.08] bg-white/[0.03] text-gray-400 text-base hover:border-blue-500/30 hover:text-blue-300 transition-all duration-200 cursor-default"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </motion.div>
                        </div>

                        {/* ─── RIGHT CONTENT ─── */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col gap-5"
                        >

                            {/* DESCRIPTION */}

                            <div className="grid grid-cols-[300px_1fr] gap-20 items-center mt-0">

                                <motion.div
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="flex items-center justify-center h-full"
                                >
                                    <BadgeCheck
                                        size={50}
                                        strokeWidth={1.8}
                                        className="text-blue-700"
                                    />
                                </motion.div>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.45 }}
                                    className="text-gray-400 text-xl leading-[1.85] max-w-lg text-justify"
                                >
                                    Software activo en establecimientos veterinarios y petshops de Salta, impulsando una administración moderna, eficiente y escalable, con proyección de expansión a nivel nacional.
                                </motion.p>
                            </div>



                            {/* STATS GRID */}
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                <StatCard icon={<TrendingUp size={20} />} value="+35%" label="Productividad" color="blue" />
                                <StatCard icon={<Smile size={20} />} value="+45%" label="Satisfacción" color="cyan" />
                                <StatCard icon={<Clock3 size={20} />} value="-60%" label="Tiempo Admin." color="indigo" />
                                {/* <StatCard icon={<DollarSign size={20} />} value="+25%" label="Ingresos" color="sky" /> */}
                            </div>

                            {/* PREVIEW CARD */}
                            <PreviewCard />
                        </motion.div>

                    </div>
                </div>
            </motion.div>
        </section>
    );
}

/* ─── FEATURE CARD ─── */
function FeatureCard({ icon, title, desc }) {
    return (
        <motion.div
            whileHover={{ y: -3, scale: 1.01 }}
            transition={{ duration: 0.25 }}
            className="group relative rounded-2xl border border-gray-500/[0.06] bg-white/[0.025] p-4  overflow-hidden cursor-default"
        >
            {/* hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/[0.06] to-cyan-500/[0.03] rounded-2xl" />
            <div className="absolute inset-0 rounded-2xl border border-blue-400/0 group-hover:border-blue-400/15 transition-all duration-400" />

            <div className="relative z-10">
                <div className="w-20 h-20 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-500/20 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300">
                    {icon}
                </div>
                <h3 className="font-semibold text-xl text-white/90 mb-1.5">{title}</h3>
                <p className="text-xl text-gray-500 leading-relaxed text-justify">{desc}</p>
            </div>
        </motion.div>
    );
}

/* ─── STAT CARD ─── */
const colorMap = {
    blue: { glow: "rgba(59,130,246,0.18)", text: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    cyan: { glow: "rgba(34,211,238,0.15)", text: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    indigo: { glow: "rgba(99,102,241,0.15)", text: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    sky: { glow: "rgba(14,165,233,0.15)", text: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-500/20" },
};

function StatCard({ icon, value, label, color }) {
    const c = colorMap[color];
    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            style={{ boxShadow: `0 0 0 0 ${c.glow}` }}
            className="group relative rounded-xl border border-gray-800 bg-white/[0.02] p-4 text-center overflow-hidden cursor-default hover:border-gray-700 transition-all duration-300group relative rounded-lg border border-white/5 bg-[#0f0f10] p-4 text-center overflow-hidden transition-all duration-300 hover:border-white/10"
        >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-white/[0.03] to-transparent" />
            {/* <div className={`relative z-10 w-14 h-20 rounded-xl ${c.bg} ${c.border} border flex items-center justify-center ${c.text} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {icon}
                </div> */}
            <div className="mx-auto w-20 h-20 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-500/20 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300">
                {icon}
            </div>
            <h3 className={`text-4xl font-black mb-1 ${c.text}`}>{value}</h3>
            <p className="text-lg text-gray-500 tracking-wide">{label}</p>
        </motion.div>
    );
}

/* ─── PREVIEW CARD (right column showcase) ─── */
function PreviewCard() {
    const slots = [
        { time: "09:00", name: "Rex — Baño completo", status: "done" },
        { time: "10:30", name: "Luna — Corte de pelo", status: "active" },
        { time: "12:00", name: "Max — Consulta vet.", status: "pending" },
        { time: "14:00", name: "Mochi — Uñas", status: "pending" },
    ];

    return (
        <div className="w-full flex justify-center mt-10">
            <img
                src={mockupSist}
                className="w-[80%] object-contain drop-shadow-[0_0_40px_rgba(59,130,246,0.25)] hover:scale-[1.02] transition-all duration-500"
            />
        </div>
    );
}

function StatusDot({ status }) {
    const map = {
        done: "bg-emerald-400/20 text-emerald-400 border-emerald-400/30",
        active: "bg-blue-400/20 text-blue-300 border-blue-400/30",
        pending: "bg-gray-600/20 text-gray-500 border-gray-600/30",
    };
    const label = { done: "Listo", active: "En curso", pending: "Pendiente" };
    return (
        <span className={`text-[10px] px-2.5 py-1 rounded-full border font-medium ${map[status]}`}>
            {label[status]}
        </span>
    );
}