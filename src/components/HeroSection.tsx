import { motion } from "framer-motion";
import { Shield, Leaf, GraduationCap, Award, Map, Sprout, ArrowRight } from "lucide-react";
import Navbar from "./Navbar";

const pillars = [
  { icon: Leaf, label: "Ambiental" },
  { icon: Shield, label: "SST" },
  { icon: Award, label: "Calidad" },
  { icon: GraduationCap, label: "Educación" },
  { icon: Map, label: "SIG" },
  { icon: Sprout, label: "Sostenibilidad" },
];

const HeroSection = () => {
  return (
    <>
      <Navbar />

      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-premium-dark pt-20">
        {/* Subtle noise texture */}
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
        
        {/* Abstract animated geometric shapes */}
        <motion.div 
          className="absolute right-[-10%] top-[10%] w-[500px] h-[500px] rounded-full border border-white/5 opacity-50"
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute right-[-5%] top-[20%] w-[350px] h-[350px] rounded-full border border-[#D4A853]/10 opacity-30"
          animate={{ rotate: -360, scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 section-container text-center py-12 lg:py-20 flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            {/* Title with reveal-like effect */}
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Excelencia Operacional y <br className="hidden sm:block" />
              <span className="text-gradient-gold">Cumplimiento Normativo</span>
            </h2>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4A853]" />
              <p className="text-lg sm:text-2xl font-body font-light text-white/90">
                Gestión Ambiental, SST y Calidad de Clase Mundial
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4A853]" />
            </div>

            <p className="text-white/70 font-body leading-relaxed text-sm sm:text-lg max-w-2xl mx-auto mb-12">
              Orientamos a las organizaciones hacia la excelencia, integrando estrategias avanzadas de
              sostenibilidad y tecnología para garantizar el cumplimiento normativo integral.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
            }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-14 max-w-3xl"
          >
            {pillars.map((p) => (
              <motion.div
                key={p.label}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 20 },
                  visible: { opacity: 1, scale: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05 }}
                className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-panel-dark hover:shadow-[0_0_15px_rgba(49,132,155,0.5)] transition-all duration-300 cursor-default"
              >
                <p.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 group-hover:text-[#D4A853] transition-colors" />
                <span className="text-xs sm:text-sm font-medium text-white/90 tracking-wide">{p.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          >
            <a href="#contacto" className="btn-premium w-full sm:w-auto">
              Solicitar Consulta 
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#servicios" className="btn-outline-premium w-full sm:w-auto">
              Nuestros Servicios
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-heading">Descubrir</span>
          <div className="w-[1px] h-12 bg-white/10 overflow-hidden relative">
            <motion.div 
              className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-[#D4A853] to-transparent"
              animate={{ top: ['-50%', '150%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
