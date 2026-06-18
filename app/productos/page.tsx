'use client';

import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronRight,
  ChevronDown,
  Sprout, 
  ShieldCheck, 
  Droplet, 
  Layers, 
  Sparkles,
  ArrowUp,
  Calculator,
  Home
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

export default function ProductosPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 4 Categories specification
  const categories = [
    {
      id: "biodefensivos",
      title: "Biodefensivos",
      definition: "Defensa activa basada en hongos benéficos para el control integrado de plagas, suprimiendo insectos nocivos sin generar resistencias.",
      shortDesc: "Control biológico de alto impacto y protección activa para tus lotes.",
      icon: ShieldCheck,
      color: "bg-[#7A1D1D]/10 text-[#7A1D1D]",
      path: "/productos/biodefensivos",
      products: [
        { name: "Biokato", logo: "/imgi_2_Biokato.png" }
      ]
    },
    {
      id: "biofertilizantes",
      title: "Biofertilizantes",
      definition: "Fórmulas biológicas vivas que solubilizan fósforo, fijan nitrógeno libre y aportan nutrientes esenciales al tejido vegetal.",
      shortDesc: "Vigor de suelo, solubilización de fósforo y nutrición fisiológica completa.",
      icon: Droplet,
      color: "bg-[#1E4E5E]/10 text-[#1E4E5E]",
      path: "/productos/biofertilizantes",
      products: [
        { name: "Biofree", logo: "/imgi_2_biofree-1-1.png" },
        { name: "Promotor", logo: "/imgi_3_PROMOTOR-1-2048x369-2.png" },
        { name: "Powertrop", logo: "/imgi_4_powertrop.png" },
        { name: "Biocalda", logo: "/imgi_5_biocalda-1.png" }
      ]
    },
    {
      id: "inoculantes",
      title: "Inoculantes",
      definition: "Microorganismos noduladores súper-concentrados y protectores osmóticos para asegurar una simbiosis óptima en semillas.",
      shortDesc: "Fijación asombrosa de nitrógeno simbiótico y pre-siembra de alta viabilidad.",
      icon: Layers,
      color: "bg-[#2E5E2E]/10 text-[#2E5E2E]",
      path: "/productos/inoculantes",
      products: [
        { name: "Protege TS", logo: "/imgi_2_PROTEGE-TS-1.png" },
        { name: "Totalnitro", logo: "/imgi_3_total-nitro-1-2048x366-1.png" }
      ]
    },
    {
      id: "bioestimulantes",
      title: "Bioestimulantes",
      definition: "Concentrados hormonales y aminoácidos libres de choque que activan los sistemas de tolerancia al estrés hídrico de la planta.",
      shortDesc: "Shock de recuperación metabólica y tolerancia activa al estrés climático.",
      icon: Sparkles,
      color: "bg-[#7A4D1D]/10 text-[#7A4D1D]",
      path: "/productos/bioestimulantes",
      products: [
        { name: "Bioasis", logo: "/imgi_2_logo-bioasis.png" }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2C3322] font-sans relative" id="productos-root">
      
      {/* TOP ANNOUNCEMENT BAR */}
      <div id="agro-top-ticker" className="bg-[#1E2315] text-[#FAF8F5]/90 text-[11px] font-mono py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-1">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="bg-[#4C533C] text-[#FAF7F2] px-2 py-0.5 rounded text-[9px] font-bold">SENASA</span>
            <span>Establecimiento Registrado N° 41.660 . Biomagna Argentina</span>
            <span>•</span>
            <span>📍 Rosario, Santa Fe</span>
          </div>
          <div className="flex items-center gap-4 text-[#D4AF37] font-semibold">
            <span>📞 Ventas &amp; Logística: +54 9 3412 42-0420</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">🌾 Insumos Certificados</span>
          </div>
        </div>
      </div>

      {/* HEADER NAVBAR */}
      <header id="main-navigation-header" className="sticky top-0 z-40 bg-[#1E2315]/95 backdrop-blur-md border-b border-white/10 py-3 px-4 transition-all duration-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div className="flex items-center gap-2 cursor-pointer" id="navigation-logo-element" onClick={() => window.location.href = '/'}>
            <Image 
              src="/imgi_1_image-4.png" 
              alt="BIOMAGNA Logo" 
              width={160} 
              height={44} 
              className="h-10 w-auto object-contain brightness-100"
              referrerPolicy="no-referrer"
            />
          </div>

          <nav id="desktop-nav-menu" className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm font-medium text-stone-300 hover:text-[#E8D385] transition-colors">Inicio</a>
            <a href="/representantes" className="text-sm font-medium text-stone-300 hover:text-[#E8D385] transition-colors">Representantes</a>
            
            {/* Interactive Dropdown for Productos */}
            <div className="relative group/menu py-2">
              <a 
                href="/productos" 
                className="text-sm font-semibold text-[#E8D385] border-b-2 border-[#E8D385] pb-0.5 flex items-center gap-1 cursor-pointer"
              >
                <span>Productos</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover/menu:rotate-180 duration-200" />
              </a>
              <div className="absolute top-full left-0 mt-1 w-52 bg-[#1E2315] border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-300 z-50 py-2">
                <a href="/productos/biodefensivos" className="block px-4 py-2.5 text-xs font-semibold text-stone-300 hover:text-[#E8D385] hover:bg-white/5 transition-colors">Biodefensivos</a>
                <a href="/productos/inoculantes" className="block px-4 py-2.5 text-xs font-semibold text-stone-300 hover:text-[#E8D385] hover:bg-white/5 transition-colors">INOCULANTES</a>
                <a href="/productos/biofertilizantes" className="block px-4 py-2.5 text-xs font-semibold text-stone-300 hover:text-[#E8D385] hover:bg-white/5 transition-colors">Biofertilizantes</a>
                <a href="/productos/bioestimulantes" className="block px-4 py-2.5 text-xs font-semibold text-stone-300 hover:text-[#E8D385] hover:bg-white/5 transition-colors">Bioestimulantes</a>
                <div className="border-t border-white/5 my-1.5"></div>
                <a href="/productos" className="block px-4 py-1.5 text-xs font-bold text-[#E8D385] hover:text-white hover:bg-white/5 transition-colors">Explorar Todo</a>
              </div>
            </div>

            <a href="/contacto" className="text-sm font-medium text-stone-300 hover:text-[#E8D385] transition-colors">Contacto</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="/contacto" 
              id="cta-nav-button"
              className="bg-[#E8D385] hover:bg-[#ebd58d] text-[#1E2315] px-5 py-2.5 rounded-lg text-xs font-bold shadow-md transition-all flex items-center justify-center gap-1.5 group"
            >
              <span>Sumate a la Red</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <button 
            type="button"
            id="mobile-menu-control-button" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 text-stone-200 focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            id="mobile-navigation-drawer"
            className="md:hidden bg-[#1E2315] border-b border-white/5 px-4 py-6 space-y-4 shadow-inner"
          >
            <div className="flex flex-col gap-4 font-medium text-sm text-stone-300">
              <a href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">Inicio</a>
              <a href="/representantes" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">Representantes</a>
              
              {/* Indented Mobile dropdown for Productos */}
              <div className="py-2 border-b border-white/10 space-y-2">
                <span className="text-base font-semibold text-stone-200 block">Productos</span>
                <div className="grid grid-cols-2 gap-2 pl-4">
                  <a href="/productos/biodefensivos" onClick={() => setMobileMenuOpen(false)} className="text-xs text-stone-300 hover:text-[#E8D385] py-1 border-r border-white/5">Biodefensivos</a>
                  <a href="/productos/inoculantes" onClick={() => setMobileMenuOpen(false)} className="text-xs text-stone-300 hover:text-[#E8D385] py-1">INOCULANTES</a>
                  <a href="/productos/biofertilizantes" onClick={() => setMobileMenuOpen(false)} className="text-xs text-stone-300 hover:text-[#E8D385] py-1 border-r border-white/5">Biofertilizantes</a>
                  <a href="/productos/bioestimulantes" onClick={() => setMobileMenuOpen(false)} className="text-xs text-stone-300 hover:text-[#E8D385] py-1">Bioestimulantes</a>
                  <a href="/productos" onClick={() => setMobileMenuOpen(false)} className="text-xs text-[#E8D385] font-bold py-1 col-span-2">Explorar Todo →</a>
                </div>
              </div>

              <a href="/contacto" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">Contacto</a>
              
              <a 
                href="/contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#E8D385] text-[#1E2315] py-2.5 rounded-lg text-center font-bold text-xs"
              >
                Sumate a la Red
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BREADCRUMB */}
      <div className="bg-[#FAF8F5] border-b border-[#EAE5DB]/50 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#4C533C]/80 font-medium">
          <a href="/" className="hover:text-[#1E2315] transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Inicio</span>
          </a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1E2315] font-semibold">Productos</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-[#FAF8F5] to-[#FAF8F5]/20 px-4">
        <div className="absolute inset-0 z-0 opacity-5 select-none pointer-events-none">
          <Image 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920" 
            alt="Biomagna biological crops landscape" 
            fill
            className="object-cover object-bottom"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <span className="bg-[#4C533C]/10 text-[#4C533C] px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase">
            Portafolio Certificado
          </span>
          <h1 className="text-4xl sm:text-6xl font-semibold text-[#1E2315] tracking-tight leading-none uppercase">
            Insumos Biológicos
          </h1>
          <p className="text-sm sm:text-base text-[#4C533C] max-w-2xl mx-auto font-light leading-relaxed">
            Nuestra línea avanzada de productos certificados por SENASA, diseñada exclusivamente para maximizar el potencial de rendimiento de tus cultivos de forma biológica, segura y rentable.
          </p>
        </div>
      </section>

      {/* CATEGORIES GRID */}
      <main className="max-w-7xl mx-auto px-4 pb-24 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="category-cards-grid">
          {categories.map((cat, index) => {
            const IconComponent = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => window.location.href = cat.path}
                className="bg-[#FAF8F5] border border-[#EAE5DB] hover:border-[#4C533C]/30 hover:shadow-md rounded-2xl p-6 sm:p-8 flex flex-col justify-between cursor-pointer transition-all duration-350 group h-full relative overflow-hidden"
              >
                {/* Visual accent background block */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#EAE5DB]/20 to-transparent rounded-bl-full pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#4C533C]/65">
                      Categoría {index + 1}
                    </span>
                    <div className={`p-3 rounded-xl ${cat.color} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 stroke-[2]" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h2 className="text-2xl font-black text-[#1E2315] tracking-tight group-hover:text-[#4C533C] transition-colors">
                      {cat.title}
                    </h2>
                    <p className="text-xs text-[#4C533C] font-normal leading-relaxed">
                      {cat.definition}
                    </p>
                  </div>

                  {/* Representative small product badges with real logos */}
                  <div className="pt-2">
                    <p className="text-[10px] uppercase font-mono tracking-widest text-[#4C533C]/60 font-bold mb-3">Tecnologías de Portafolio:</p>
                    <div className="flex flex-wrap gap-2.5 items-center">
                      {cat.products.map((p, idx) => (
                        <div key={idx} className="bg-white border border-[#EAE5DB] p-2 rounded-xl flex items-center justify-center shadow-xs h-12 w-28 overflow-hidden hover:scale-105 hover:shadow-sm transition-all duration-300">
                          <Image 
                            src={p.logo} 
                            alt={`${p.name} logo`} 
                            width={100} 
                            height={32} 
                            className="h-7 w-auto object-contain brightness-100 filter drop-shadow-[0_1px_1px_rgba(0,0,0,0.03)]"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    type="button"
                    className="w-full bg-[#4C533C]/10 text-[#4C533C] group-hover:bg-[#4C533C] group-hover:text-white py-3.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 group-hover:shadow-sm"
                  >
                    <span>Ver más</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>

      {/* FOOTER */}
      <footer id="brand-footer" className="bg-[#1E2315] py-20 px-4 text-[#FAF8F5] relative overflow-hidden mt-auto">
        
        {/* Subtle background mask */}
        <div className="absolute inset-0 z-0 opacity-10 select-none pointer-events-none">
          <Image 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920" 
            alt="Biomagna crops background landscape" 
            fill
            className="object-cover object-bottom"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-8">
          
          <div className="space-y-4">
            <span className="text-3xl sm:text-5xl font-black text-[#E8D385] tracking-widest block uppercase font-mono">
              BIOMAGNA
            </span>
            <p className="text-base font-semibold text-white tracking-wide max-w-3xl mx-auto">
              &ldquo;BIOMAGNA: Especialistas en biológicos. Más productividad, más sustentabilidad, más futuro.&rdquo;
            </p>
          </div>

          <div className="border-t border-b border-[#EAE5DB]/15 py-6 text-xs sm:text-sm text-stone-300 font-mono space-y-1">
            <p>J J Paso 8540 Piso 2 Of.1 — Rosario, Santa Fe — +54 9 3412 42-0420 — info@biomagnasa.com</p>
          </div>

          <div className="flex justify-center gap-8 text-xs sm:text-sm font-semibold text-[#E8D385]">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:underline transition-all">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:underline transition-all">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:underline transition-all">LinkedIn</a>
          </div>

          {/* Stretched branding */}
          <div className="pointer-events-none select-none text-center pt-4" id="massive-stretched-footer-logo">
            <span className="text-[12vw] font-black tracking-[0.05em] text-[#E8D385]/5 leading-none select-none uppercase font-mono block">
              BIOMAGNA
            </span>
          </div>

          {/* Lower bottom metadata */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-stone-400 font-light gap-4 pt-4 border-t border-[#EAE5DB]/10" id="footer-bottom-info">
            <div>
              <span>Copyright 2026 – Biomagna – Todos los derechos reservados</span>
            </div>
            
            <div className="flex gap-2 items-center">
              <span>Desarrollado por</span>
              <span className="text-[#E8D385] font-semibold">Danila Digital</span>
            </div>

            <button 
              type="button" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-[#2D3322] hover:bg-[#4C533C] py-2 px-3 rounded-lg text-white font-bold transition-all flex items-center justify-center gap-1.5 shadow"
              aria-label="Volver al inicio"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[9px] font-mono uppercase">Arriba</span>
            </button>
          </div>

        </div>
      </footer>

    </div>
  );
}
