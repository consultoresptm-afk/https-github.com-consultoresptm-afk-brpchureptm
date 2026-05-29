import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import logo from '@/assets/Logo_corporativo_clean.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0D1B2A]/95 backdrop-blur-md shadow-lg shadow-black/20 py-3'
          : 'bg-[#31849B]/10 backdrop-blur-[12px] py-5'
      }`}
    >
      <div className="section-container flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo container area */}
          <div className="w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105">
            <img src={logo} alt="Consultores PTM Logo" className="w-full h-full object-contain" />
          </div>
          <div className="hidden sm:block">
            <h1 className={`font-heading font-bold text-lg leading-none ${scrolled ? 'text-white' : 'text-[#0D1B2A]'}`}>
              Consultores PTM
            </h1>
            <p className={`font-body text-[10px] uppercase tracking-wider ${scrolled ? 'text-white/70' : 'text-[#0D1B2A]/70'}`}>
              Gestión & Cumplimiento
            </p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {['Inicio', 'Servicios', 'Diferenciales', 'Contacto'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-body text-sm font-semibold tracking-wide transition-colors hover:text-[#D4A853] ${
                scrolled ? 'text-white/90' : 'text-[#0D1B2A]/90'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contacto"
            className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-teal-gold text-white font-heading font-medium text-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,168,83,0.4)] hover:-translate-y-0.5"
          >
            Solicitar Consulta
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
