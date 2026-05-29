import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, FileCheck, Search, ArrowLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { servicesData, type MainCategory, type SubCategory } from "@/data/services";

// Keeping the assets for potential background if needed, but styling favors #F8F9FA base.
import bgAmbiental from "@/assets/bg-ambiental.jpg";
import bgSst from "@/assets/bg-sst.jpg";
import bgCalidad from "@/assets/bg-calidad.jpg";
import bgEducacion from "@/assets/bg-educacion.jpg";
import bgSig from "@/assets/bg-sig.jpg";
import bgSostenibilidad from "@/assets/bg-sostenibilidad.jpg";
import bgPlaneacion from "@/assets/bg-planeacion.jpg";
import bgEnergia from "@/assets/bg-energia.jpg";
import bgAuditorias from "@/assets/bg-auditorias.jpg";
import bgDocumental from "@/assets/bg-documental.jpg";
import bgTramites from "@/assets/bg-tramites.jpg";

const iconMap: Record<string, React.ElementType> = {
  Briefcase,
  FileCheck,
  Search,
};

const bgImageMap: Record<string, string> = {
  ambiental: bgAmbiental,
  sst: bgSst,
  calidad: bgCalidad,
  educacion: bgEducacion,
  sig: bgSig,
  sostenibilidad: bgSostenibilidad,
  planeacion: bgPlaneacion,
  energia: bgEnergia,
  auditorias: bgAuditorias,
  documental: bgDocumental,
  tramites: bgTramites,
};

type View =
  | { level: "main" }
  | { level: "sub"; category: MainCategory }
  | { level: "detail"; category: MainCategory; sub: SubCategory };

const ServicesHub = () => {
  const [view, setView] = useState<View>({ level: "main" });

  const goToMain = () => setView({ level: "main" });

  const goBack = () => {
    if (view.level === "detail") {
      setView({ level: "sub", category: view.category });
    } else if (view.level === "sub") {
      setView({ level: "main" });
    }
  };

  const currentBg =
    view.level === "detail" && view.sub.backgroundImage
      ? bgImageMap[view.sub.backgroundImage]
      : null;

  return (
    <section id="servicios" className="py-20 lg:py-32 bg-[var(--ptm-bg-light)] relative overflow-hidden">
      
      {/* Dynamic background image for details view */}
      <AnimatePresence>
        {currentBg && (
          <motion.div
            key={currentBg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-0"
          >
            <img
              src={currentBg}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#0D1B2A]/85 backdrop-blur-[4px]" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-[#31849B]" />
            <h2 className="text-3xl lg:text-5xl font-heading font-extrabold text-[#0D1B2A] tracking-tight">
              Nuestros <span className="text-[#31849B]">Servicios</span>
            </h2>
            <div className="h-px w-8 bg-[#31849B]" />
          </div>
          <p className="text-base text-[#0D1B2A]/70 max-w-xl mx-auto">
            Soluciones integrales diseñadas para el cumplimiento y la excelencia empresarial
          </p>
        </motion.div>

        <div className="min-h-[480px] relative">
          <AnimatePresence mode="wait">
            {view.level === "main" && (
              <motion.div
                key="main"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {servicesData.map((cat, i) => {
                  const Icon = iconMap[cat.icon] || Briefcase;
                  return (
                    <motion.button
                      key={cat.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                      onClick={() => setView({ level: "sub", category: cat })}
                      className="group relative bg-white rounded-2xl p-8 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(49,132,155,0.2)] focus:outline-none overflow-hidden"
                    >
                      {/* Top Gradient Border */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-teal-gold" />

                      <div className="flex justify-between items-start mb-8">
                        <div className="w-14 h-14 rounded-full bg-gradient-teal flex items-center justify-center p-0.5 group-hover:shadow-[0_0_20px_rgba(49,132,155,0.4)] transition-all duration-300">
                          <div className="w-full h-full rounded-full border border-white/20 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                          </div>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#31849B] bg-[#31849B]/10 px-3 py-1 rounded-full">
                          {cat.subCategories.length} Especialidades
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-heading font-bold text-[#0D1B2A] mb-3 group-hover:text-[#31849B] transition-colors">
                        {cat.label}
                      </h3>
                      <p className="text-sm font-body text-[#0D1B2A]/70 mb-8 leading-relaxed">
                        {cat.description}
                      </p>
                      
                      <span className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 rounded-xl bg-[#31849B] text-white font-medium text-sm hover:bg-[#1a4a5a] transition-colors">
                        Ver Detalles <ChevronRight className="w-4 h-4" />
                      </span>
                    </motion.button>
                  );
                })}
              </motion.div>
            )}

            {view.level === "sub" && (
              <motion.div
                key={`sub-${view.category.id}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
              >
                <BackButton onClick={goBack} label="Volver a Servicios" />
                <div className="flex items-center gap-3 mt-4 mb-8">
                  <div className="w-2 h-8 bg-[#D4A853] rounded-full" />
                  <h3 className="text-2xl lg:text-3xl font-heading font-bold text-[#0D1B2A]">
                    {view.category.label}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {view.category.subCategories.map((sub, i) => (
                    <motion.button
                      key={sub.id}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                      onClick={() =>
                        setView({ level: "detail", category: view.category, sub })
                      }
                      className="group bg-white rounded-xl p-6 text-left border-l-[4px] border-[#31849B] hover:bg-[#31849B]/[0.02] transition-colors duration-300 hover:shadow-[0_10px_30px_-10px_rgba(13,27,42,0.1)] flex flex-col justify-between min-h-[140px]"
                    >
                      <h4 className="text-lg font-heading font-bold text-[#0D1B2A] mb-3 group-hover:text-[#31849B] transition-colors">
                        {sub.label}
                      </h4>
                      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4A853]">
                        Ver detalle 
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {view.level === "detail" && view.sub.details && (
              <motion.div
                key={`detail-${view.sub.id}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
                className={`${currentBg ? 'text-white' : ''}`}
              >
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <BackButton onClick={goBack} label={`Volver a ${view.category.label}`} light={!!currentBg} />
                  <BackButton onClick={goToMain} label="Menú Principal" light={!!currentBg} />
                </div>
                <div className={`rounded-2xl p-8 lg:p-10 max-w-3xl ${currentBg ? 'glass-panel-dark' : 'bg-white shadow-xl shadow-black/5 border border-black/5'}`}>
                  <h3 className={`text-2xl lg:text-3xl font-heading font-bold mb-6 ${currentBg ? 'text-white' : 'text-[#0D1B2A]'}`}>
                    {view.sub.details.title}
                  </h3>
                  <ul className="space-y-4">
                    {view.sub.details.items.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06, duration: 0.3 }}
                        className="flex items-start gap-4"
                      >
                        <div className={`mt-1 w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${currentBg ? 'bg-white/10' : 'bg-[#31849B]/10'}`}>
                          <CheckCircle2 className="w-4 h-4 text-[#D4A853]" />
                        </div>
                        <span className={`text-base font-body leading-relaxed ${currentBg ? 'text-white/90' : 'text-[#0D1B2A]/80'}`}>
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const BackButton = ({ onClick, label, light = false }: { onClick: () => void; label: string; light?: boolean }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center gap-2 text-sm font-heading font-semibold uppercase tracking-wider transition-all hover:-translate-x-1 ${
      light ? 'text-[#D4A853] hover:text-white' : 'text-[#31849B] hover:text-[#D4A853]'
    }`}
  >
    <ArrowLeft className="w-4 h-4" />
    {label}
  </button>
);

export default ServicesHub;
