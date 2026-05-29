import { motion } from "framer-motion";
import { Scale, TrendingUp, RefreshCw, Layers } from "lucide-react";
import bgDiferenciales from "@/assets/bg-diferenciales.png"; // keep for subtle overlay if wanted

const factors = [
  {
    icon: Scale,
    title: "Cumplimiento Normativo",
    description: "Mantenimiento riguroso de la organización bajo la normatividad vigente y estándares globales.",
  },
  {
    icon: TrendingUp,
    title: "Generación de Valor",
    description: "Creación de valor medible y control de externalidades en la operación empresarial.",
  },
  {
    icon: RefreshCw,
    title: "Seguimiento Continuo",
    description: "Auditorías permanentes y mantenimiento periódico de los sistemas implementados.",
  },
  {
    icon: Layers,
    title: "Escalabilidad",
    description: "Aplicabilidad transversal a múltiples modelos de producción y sectores económicos.",
  },
];

const SuccessFactors = () => (
  <section id="diferenciales" className="py-20 lg:py-32 bg-[var(--ptm-bg-dark)] relative overflow-hidden">
    {/* Subtle texture over dark background */}
    <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#31849B]/50 to-transparent" />
    <div className="absolute -left-[20%] top-[20%] w-[50%] h-[50%] bg-[#31849B] rounded-full blur-[150px] opacity-10" />

    <div className="section-container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-16 lg:mb-24"
      >
        <h2 className="text-3xl lg:text-5xl font-heading font-extrabold text-white mb-4 tracking-tight">
          Nuestros <span className="text-[#D4A853]">Diferenciales</span>
        </h2>
        <p className="text-base lg:text-lg text-white/70 max-w-2xl mx-auto font-body font-light">
          Metodologías comprobadas que garantizan resultados excepcionales y elevan el nivel competitivo de su organización.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {factors.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
            className="group relative glass-panel-dark rounded-2xl p-8 hover:bg-white/[0.03] transition-all duration-500 overflow-hidden"
          >
            {/* Background Number */}
            <div className="absolute -top-4 -right-4 text-[120px] font-heading font-extrabold text-[#D4A853] opacity-[0.05] group-hover:opacity-[0.1] group-hover:scale-110 transition-all duration-500 pointer-events-none select-none">
              0{i + 1}
            </div>

            {/* Light border glow on hover */}
            <div className="absolute inset-0 border border-[#31849B]/0 group-hover:border-[#31849B]/50 rounded-2xl transition-colors duration-500" />
            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-[#31849B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-full bg-gradient-teal flex items-center justify-center mb-8 shadow-lg shadow-[#31849B]/20 group-hover:shadow-[0_0_25px_rgba(49,132,155,0.6)] transition-all duration-300">
                <f.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-[#D4A853] transition-colors duration-300">
                {f.title}
              </h3>
              <p className="text-sm font-body text-white/60 leading-relaxed font-light">
                {f.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SuccessFactors;
