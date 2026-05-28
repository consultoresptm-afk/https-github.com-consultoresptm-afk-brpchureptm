import { motion } from "framer-motion";
import { Scale, TrendingUp, RefreshCw, Layers } from "lucide-react";
import bgDiferenciales from "@/assets/bg-diferenciales.png";

const factors = [
  {
    icon: Scale,
    title: "Mantenimiento bajo Norma Vigente",
    description: "Mantenimiento de la organización bajo la normatividad vigente aplicable.",
  },
  {
    icon: TrendingUp,
    title: "Generación de Valor",
    description: "Generación de valor y control de externalidades en cada proceso organizacional.",
  },
  {
    icon: RefreshCw,
    title: "Seguimiento Periódico",
    description: "Seguimiento y mantenimiento periódico de los sistemas de gestión implementados.",
  },
  {
    icon: Layers,
    title: "Aplicabilidad Universal",
    description: "Aplicabilidad a infinitos modelos de producción y sectores económicos.",
  },
];

const SuccessFactors = () => (
  <section className="py-14 sm:py-20 lg:py-24 relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src={bgDiferenciales} alt="" className="w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
    </div>
    <div className="section-container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 sm:mb-16"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-3">
          Nuestros Diferenciales
        </h2>
        <p className="text-sm sm:text-base text-foreground max-w-xl mx-auto px-2">
          Lo que nos diferencia y garantiza resultados excepcionales.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {factors.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="glass-card-emerald rounded-xl p-5 sm:p-7 text-center group hover:scale-[1.03] transition-transform duration-300"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full gradient-emerald flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:shadow-lg group-hover:shadow-gold/20 transition-shadow">
              <f.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
            </div>
            <h3 className="text-base sm:text-lg font-heading font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm font-medium text-foreground/90 leading-relaxed">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SuccessFactors;
