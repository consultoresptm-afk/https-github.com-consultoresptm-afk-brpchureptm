import { motion } from "framer-motion";
import { Mail, Phone, MapPin, User, Send, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-ptm.jpg"; // Actually, let's use the CSS-based logo or this image if needed

const ContactFooter = () => (
  <footer id="contacto" className="relative flex flex-col bg-[#0D1B2A] overflow-hidden">
    
    {/* Contact Section */}
    <div className="relative py-20 lg:py-32 bg-gradient-premium-dark">
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />
      
      {/* Decorative World Map SVG or abstract shapes */}
      <svg className="absolute right-0 bottom-0 top-0 h-full w-[50%] opacity-5 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,100 C20,80 40,100 60,60 C80,20 100,50 100,0 L100,100 Z" fill="#D4A853" />
      </svg>
      
      <div className="section-container relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Side: Contact Info */}
        <div className="flex-1 lg:max-w-xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-5xl font-heading font-extrabold text-white mb-6 tracking-tight flex flex-col">
              Conecte con 
              <span className="text-[#D4A853] inline-block relative w-fit">
                Nuestros Expertos
                <motion.div
                  className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-[#D4A853] to-transparent"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </h2>
            <p className="text-lg text-white/70 font-body font-light max-w-md">
              Estamos listos para acompañarle en su camino hacia la excelencia organizacional. Déjenos un mensaje y le responderemos a la mayor brevedad.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {[
              { icon: Mail, label: "Email Corporativo", value: "consultoresptm@gmail.com" },
              { icon: User, label: "Gestión Calidad y Comercial", value: "+57 316 820 3824" },
              { icon: Phone, label: "Gestión Ambiental", value: "+57 322 856 7651" },
              { icon: Phone, label: "Gestión SST", value: "+57 317 378 2683" },
              { icon: MapPin, label: "Sede Principal", value: "Bogotá D.C., Colombia" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group flex flex-row items-center gap-5 p-5 rounded-2xl glass-panel hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#31849B]/20 flex items-center justify-center shrink-0 group-hover:bg-[#31849B] transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-[#D4A853] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-[#CAD4D6] uppercase tracking-wider mb-1 font-heading">
                    {item.label}
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-white tracking-wide">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full"
        >
          <div className="glass-panel-dark p-8 md:p-10 rounded-3xl relative">
            <h3 className="text-2xl font-heading font-bold text-white mb-8">
              Envíenos un mensaje
            </h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-white/70 uppercase tracking-widest pl-2">Nombre completo</label>
                  <input type="text" placeholder="Ej. Juan Pérez" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#D4A853] focus:ring-1 focus:ring-[#D4A853] transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-white/70 uppercase tracking-widest pl-2">Correo electrónico</label>
                  <input type="email" placeholder="juan@empresa.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#D4A853] focus:ring-1 focus:ring-[#D4A853] transition-all" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-semibold text-white/70 uppercase tracking-widest pl-2">Empresa</label>
                <input type="text" placeholder="Nombre de su organización" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#D4A853] focus:ring-1 focus:ring-[#D4A853] transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-white/70 uppercase tracking-widest pl-2">Mensaje o requerimiento</label>
                <textarea rows={4} placeholder="¿Cómo podemos ayudarle con su sistema de gestión?" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#D4A853] focus:ring-1 focus:ring-[#D4A853] transition-all resize-none"></textarea>
              </div>

              <button className="w-full btn-premium py-4 mt-2">
                Enviar Mensaje <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="bg-[#0D1B2A] py-16 border-t border-white/5">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-12">
          
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-teal-gold flex items-center justify-center p-0.5">
                <div className="w-full h-full bg-[#0D1B2A] rounded-full flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-xs tracking-wider">PTM</span>
                </div>
              </div>
              <div>
                <h1 className="font-heading font-bold text-white text-lg leading-none">Consultores PTM</h1>
                <p className="font-body text-[10px] uppercase tracking-wider text-white/50">Gestión & Cumplimiento</p>
              </div>
            </div>
            <p className="text-sm font-body text-[#CAD4D6]/70 leading-relaxed max-w-xs">
              Excelencia en consultoría para el desarrollo sostenible y el cumplimiento normativo de su organización empresarial.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-heading font-semibold mb-2">Secciones Rápidas</h4>
            <div className="flex flex-col gap-3">
              {['Inicio', 'Servicios', 'Diferenciales', 'Contacto'].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-[#CAD4D6]/60 hover:text-[#D4A853] hover:translate-x-1 transition-all w-fit">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-heading font-semibold mb-2">Información Legal</h4>
            <p className="text-sm text-[#CAD4D6]/60 leading-relaxed">
              Consultores PTM Gestión & Cumplimiento SAS.<br/>
              NIT: 901.XXX.XXX-X<br/>
              Bogotá D.C., Colombia
            </p>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 font-body">
            © {new Date().getFullYear()} Consultores PTM. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/40 hover:text-white transition-colors text-xs">Aviso de Privacidad</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors text-xs">Términos de Uso</a>
          </div>
        </div>
      </div>
    </div>

    {/* Floating WhatsApp Button */}
    <a
      href="https://wa.me/573168203824"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/40 hover:scale-110 hover:-translate-y-1 transition-all z-50 animate-bounce"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute w-full h-full rounded-full border border-[#25D366] animate-ping opacity-75" />
    </a>
  </footer>
);

export default ContactFooter;
