import { motion } from "framer-motion";
import { Mail, Phone, MapPin, User } from "lucide-react";

const ContactFooter = () => (
  <footer className="gradient-emerald py-12 sm:py-16">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 sm:mb-12"
      >
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3">
          Contáctenos
        </h2>
        <p className="text-sm sm:text-base text-white font-bold max-w-lg mx-auto px-2">
          Estamos listos para acompañarle en su camino hacia la excelencia organizacional.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
        {[
          { icon: Mail, label: "Email Corporativo", value: "consultoresptm@gmail.com" },
          { icon: User, label: '"Gestión Calidad y Comercial"', value: "+57 316 820 3824" },
          { icon: Phone, label: '"Gestión Ambiental"', value: "+57 322 856 7651" },
          { icon: User, label: '"Gestión SST"', value: "+57 317 378 2683" },
          { icon: MapPin, label: "Ubicación", value: "Bogotá D.C." },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex flex-col items-center gap-3 text-center"
          >
            <div className="w-11 h-11 rounded-full bg-gold/20 flex items-center justify-center">
              <item.icon className="w-5 h-5 text-gold" />
            </div>
            <div className="min-w-0 max-w-full">
              <p className="text-xs text-white font-bold uppercase tracking-wider mb-1 break-words">
                {item.label}
              </p>
              <p className="text-sm font-bold text-white break-words">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-gold/15 text-center">
        <p className="text-xs text-white font-bold">
          © {new Date().getFullYear()} Consultores PTM Gestión & Cumplimiento SAS. Todos los
          derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default ContactFooter;
