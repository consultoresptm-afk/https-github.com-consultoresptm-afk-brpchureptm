import { motion } from "framer-motion";
import { Shield, Leaf, GraduationCap, Award, Map, Sprout } from "lucide-react";
import logo from "@/assets/logo-ptm.jpg";
import shieldIcon from "@/assets/shield-icon-new.jpg";

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
      {/* Logo Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border/50">
        <div className="section-container flex items-center justify-center py-2 sm:py-3">
          <div className="flex items-center gap-2 sm:gap-4 min-w-0">
            <img src={logo} alt="Consultores PTM Logo" className="h-10 sm:h-14 w-auto object-contain shrink-0" />
            <div className="min-w-0">
              <h1 className="text-sm sm:text-lg font-heading font-bold text-foreground leading-tight truncate">
                Consultores PTM
              </h1>
              <p className="text-[10px] sm:text-xs font-body text-muted-foreground truncate">
                Gestión & Cumplimiento SAS
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-emerald opacity-95" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, hsla(155,30%,40%,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsla(42,80%,55%,0.15) 0%, transparent 50%)",
          }}
        />

        <div className="relative z-10 section-container text-center py-12 sm:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4 sm:mb-6">
              <img src={shieldIcon} alt="Escudo de excelencia" className="h-20 w-20 sm:h-28 sm:w-28 object-contain drop-shadow-lg mx-auto rounded-full" style={{ mixBlendMode: 'multiply' }} />
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-3 sm:mb-4 text-balance">
              Consultores PTM
            </h2>
            <p className="text-lg sm:text-2xl font-heading font-light text-primary-foreground/80 mb-2">
              Gestión & Cumplimiento SAS
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 sm:mt-8 max-w-3xl mx-auto"
          >
            <h3 className="text-xl sm:text-3xl font-heading font-semibold text-primary-foreground mb-4 sm:mb-6">
              Quiénes Somos
            </h3>
            <p className="text-primary-foreground/80 font-body leading-relaxed text-sm sm:text-lg">
              Somos un equipo integrado por expertos multidisciplinarios en la Gestión Ambiental,
              Seguridad y Salud en el Trabajo (SST) y Calidad, en diferentes modelos de producción
              y servicios. Nos dedicamos a orientar a las organizaciones hacia el cumplimiento
              normativo integral y la excelencia operacional, integrando estrategias avanzadas de
              sostenibilidad y tecnología.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-gold/20"
              >
                <p.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                <span className="text-xs sm:text-sm font-medium text-primary-foreground/90">{p.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="mt-10 sm:mt-16"
          >
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full gradient-emerald border border-gold/30 text-primary-foreground font-medium hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 text-xs sm:text-sm"
            >
              Descubre nuestros servicios ↓
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
