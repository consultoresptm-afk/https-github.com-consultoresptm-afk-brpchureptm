import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, FileCheck, Search, ArrowLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { servicesData, type MainCategory, type SubCategory } from "@/data/services";

import bgAmbiental from "@/assets/bg-ambiental.jpg";
import bgSst from "@/assets/bg-sst.jpg";
import bgCalidad from "@/assets/bg-calidad.jpg";
import bgEducacion from "@/assets/bg-educacion.jpg";
import bgSig from "@/assets/bg-sig.jpg";
import bgSostenibilidad from "@/assets/bg-sostenibilidad.jpg";
import bgServicios from "@/assets/bg-servicios.png";
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
    <section id="servicios" className="py-14 sm:py-20 lg:py-24 bg-muted/30 relative overflow-hidden">
      {/* Static background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgServicios}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
      </div>
      {/* Dynamic background image */}
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
            <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-3">
            Nuestros Servicios
          </h2>
          <p className="text-sm sm:text-base text-foreground max-w-xl mx-auto px-2">
            Explore nuestras áreas de especialización y descubra cómo podemos ayudarle.
          </p>
        </motion.div>

        <div className="min-h-[420px] sm:min-h-[480px] relative">
          <AnimatePresence mode="wait">
            {view.level === "main" && (
              <motion.div
                key="main"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {servicesData.map((cat, i) => {
                  const Icon = iconMap[cat.icon] || Briefcase;
                  return (
                    <motion.button
                      key={cat.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      onClick={() => setView({ level: "sub", category: cat })}
                      className="glass-card-emerald rounded-xl p-6 sm:p-8 text-left group hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
                    >
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg gradient-emerald flex items-center justify-center mb-4 sm:mb-5">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-heading font-semibold text-foreground mb-2">
                        {cat.label}
                      </h3>
                      <p className="text-sm font-medium text-foreground/90 mb-4">{cat.description}</p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-foreground group-hover:gap-2 transition-all">
                        Explorar <ChevronRight className="w-4 h-4" />
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
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mt-3 mb-6 sm:mb-8">
                  {view.category.label}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {view.category.subCategories.map((sub, i) => (
                    <motion.button
                      key={sub.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.35 }}
                      onClick={() =>
                        setView({ level: "detail", category: view.category, sub })
                      }
                      className="glass-card rounded-xl p-6 text-left group hover:scale-[1.02] transition-transform duration-300 cursor-pointer border-l-4"
                      style={{ borderLeftColor: 'rgb(49, 132, 155)' }}
                    >
                      <h4 className="text-lg font-heading font-semibold text-foreground mb-1">
                        {sub.label}
                      </h4>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-gold group-hover:gap-2 transition-all">
                        Ver detalle <ChevronRight className="w-3 h-3" />
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
              >
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
                  <BackButton onClick={goBack} label={`Volver a ${view.category.label}`} />
                  <BackButton onClick={goToMain} label="Volver al Menú Principal" />
                </div>
                <div className="glass-card rounded-xl p-5 sm:p-8 max-w-2xl border border-gold/10">
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-4 sm:mb-6">
                    {view.sub.details.title}
                  </h3>
                  <ul className="space-y-3">
                    {view.sub.details.items.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06, duration: 0.3 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                        <span className="text-sm sm:text-base text-foreground/85">{item}</span>
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

const BackButton = ({ onClick, label }: { onClick: () => void; label: string }) => (
  <button
    onClick={onClick}
    className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-accent transition-colors cursor-pointer"
  >
    <ArrowLeft className="w-4 h-4" />
    {label}
  </button>
);

export default ServicesHub;
