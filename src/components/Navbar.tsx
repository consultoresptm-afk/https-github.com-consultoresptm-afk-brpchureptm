import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import logo from '@/assets/Logo_corporativo_clean.png';
import { Logo3D } from './Logo3D';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Diferenciales', href: '#diferenciales' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-4">
      <nav 
        className={`flex items-center border max-md:w-full max-md:justify-between border-slate-700 px-6 py-2 rounded-full text-white text-sm transition-colors duration-300 ${
          scrolled ? 'bg-[#0D1B2A]/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-[#0D1B2A]/40 backdrop-blur-md'
        }`}
      >
        <a href="#" className="flex items-center gap-3 shrink-0">
          <Logo3D src={logo} alt="Consultores PTM Logo" className="w-12 h-12" />
        </a>
        
        <div className="hidden md:flex items-center gap-6 ml-7">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="relative overflow-hidden h-5 group">
                <span className="block group-hover:-translate-y-full transition-transform duration-300">{link.name}</span>
                <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 text-[#D4A853]">{link.name}</span>
            </a>
          ))}
        </div>

        <div className="hidden ml-auto md:flex items-center gap-4">
          <a
            href="#contacto"
            className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-white text-sm font-medium transition"
          >
            Contacto
          </a>
          <a
            href="#servicios"
            className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300"
          >
            Solicitar Consulta
          </a>
        </div>
        
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="md:hidden text-gray-300 hover:text-white transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 bg-black border border-slate-700 text-base rounded-2xl flex flex-col items-center gap-4 py-6 shadow-xl z-40 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#D4A853] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="border border-slate-600 hover:bg-slate-800 px-6 py-2 mt-2 rounded-full text-white text-sm font-medium transition"
            >
              Contacto
            </a>
            <a
              href="#servicios"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-white hover:shadow-[0px_0px_20px_5px] shadow-white/30 text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300"
            >
              Solicitar Consulta
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
