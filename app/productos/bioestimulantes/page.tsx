'use client';

import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronRight,
  ChevronDown,
  Sprout, 
  Sparkles, 
  ArrowUp,
  Calculator,
  Home,
  FileText,
  Info,
  CheckCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

export default function BioestimulantesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSpecs, setShowSpecs] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const categoryName = "Bioestimulantes";
  const categoryDef = "Los Bioestimulantes son moduladores metabólicos de alto rendimiento formulados a base de fitohormonas reguladas, aminoácidos libres de absorción foliar directa y micronutrientes de choque. Actúan revirtiendo el marchitamiento, promoviendo el cierre estomático selectivo durante déficits hídricos intensos y acelerando drásticamente el crecimiento post-granizada.";

  const product = {
    name: "BIOASIS",
    logo: "/imgi_2_logo-bioasis.png",
    oneLineDesc: "Bioestimulante hormonal de shock que induce una asombrosa resistencia hídrica del tejido y activa la rápida recuperación foliar ante factores climáticos de estrés.",
    description: "Bioasis está formulado con una combinación precisa de L-aminoácidos libres, extractos de algas selectas y reguladores de crecimiento endógenos. Permite a las plantas de soja, maíz y girasol reanudar activamente la transpiración controlada y regenerar clorofila incluso después de sufrir sequías extremas, granizadas de magnitud o fitotoxicidad por herbicidas.",
    specs: [
      { label: "Composición Química", val: "L-Aminoácidos libres activos (15.5% p/v) + Fitoprobióticos orgánicos" },
      { label: "Precursores Hormonales", val: "Citocininas naturales, Auxinas de inducción y Giberelinas reguladoras" },
      { label: "Efecto Metabólico", val: "Resistencia biológica activa al marchitamiento abiótico y estrés hídrico-térmico" },
      { label: "Dosis Recomendada", val: "1.5 a 2.5 Litros por Hectárea (vía atomización foliar)" },
      { label: "Presentación", val: "Bidones de 5 Litros optimizados para rápida dilución" },
      { label: "Sello de Calidad", val: "Producto Certificado por SENASA. Establecimiento N° 41.660" }
    ],
    dosages: [
      { step: "1. Momitero y Momento", detail: "Aplicar preventivamente ante reportes de sequía inminente o de inmediato de 24 a 48 hs de transcurrida una granizada o fitotoxicidad." },
      { step: "2. Preparación de Tanque", detail: "Incorporar directamente al tanque de aspersión con agitación constante. Apto para el co-pulverizador Biomagna-Biocalda." },
      { step: "3. Ejecución", detail: "Asegurar un mojado uniforme y homogéneo de toda la biomasa foliar activa para una máxima penetración celular." }
    ]
  };

  const handleDownloadPdf = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2C3322] font-sans relative" id="bioestimulantes-root">
      
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
          <a href="/productos" className="hover:text-[#1E2315] transition-colors">Productos</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1E2315] font-semibold">{categoryName}</span>
        </div>
      </div>

      {/* HERO BANNER SECTION */}
      <section className="bg-gradient-to-r from-[#442C15] to-[#6B441D] text-white py-16 px-4 relative overflow-hidden" id="category-hero-banner">
        <div className="absolute inset-0 z-0 opacity-25 select-none pointer-events-none">
          <Image 
            src="https://images.unsplash.com/photo-1463123081488-729f60c19264?q=80&w=1200"
            alt="Fondo cultivo estresado recuperado"
            fill
            className="object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-[#E8D385] text-xs font-mono font-bold tracking-widest uppercase">
              <Sparkles className="w-4 h-4 text-[#E8D385]" />
              <span>Bio-Activación Celular</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-none uppercase">
              {categoryName}
            </h1>
            <p className="text-xs sm:text-sm text-stone-300 max-w-3xl font-light leading-relaxed">
              {categoryDef}
            </p>
          </div>
          <div className="md:col-span-4 hidden md:flex justify-end">
            <div className="relative w-72 h-44 rounded-2xl overflow-hidden border border-white/20 shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-500 bg-[#442C15]">
              <Image 
                src="https://images.unsplash.com/photo-1463123081488-729f60c19264?q=80&w=600"
                alt="Tecno Bioestimulantes"
                fill
                className="object-cover object-center brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3.5 pt-8">
                <span className="text-[10px] font-mono text-[#E8D385] tracking-widest uppercase font-bold block mb-0.5">Tolerancia Celular</span>
                <span className="text-xs text-white/90 font-bold block">Shock de Vigor Energético</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT CONTENT */}
      <main className="max-w-7xl mx-auto px-4 py-16 flex-grow">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <h2 className="text-xs uppercase font-mono font-black text-[#4C533C]/60 tracking-widest border-b border-[#EAE5DB] pb-3">
            Ficha del Producto Especializado
          </h2>

          {/* Core product card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-[#FAF8F5] border-4 border-[#EAE5DB]/40 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden" 
            id="product-bioasis-card"
          >
            <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-[#7A4D1D]/5 to-transparent rounded-bl-full pointer-events-none" />

            <div className="space-y-8">
              
              {/* Product Header / Logo section */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b border-[#EAE5DB] pb-8">
                <div className="relative w-48 sm:w-56 h-14 bg-white/70 backdrop-blur rounded-xl px-4 py-2 flex items-center justify-center shadow-inner border border-[#EAE5DB]/60">
                  <Image 
                    src={product.logo} 
                    alt="Logo Bioasis" 
                    fill
                    className="object-contain p-2"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="bg-[#7A4D1D]/10 text-[#7A4D1D] px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider">
                  Shock Fisiológico Avanzado
                </div>
              </div>

              {/* One line details */}
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-black text-[#1E2315] tracking-tight leading-snug">
                  {product.oneLineDesc}
                </h3>
                <p className="text-xs text-[#4C533C] font-light leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-[#EAE5DB]/40">
                <button
                  type="button"
                  onClick={() => setShowSpecs(!showSpecs)}
                  className="bg-[#4C533C]/10 hover:bg-[#4C533C]/20 text-[#4C533C] font-bold text-xs py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 flex-grow"
                >
                  <Info className="w-4 h-4" />
                  <span>{showSpecs ? 'Ocultar Información' : 'Ver más detalles'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleDownloadPdf}
                  className="bg-[#4C533C] hover:bg-[#3B412E] text-[#FAF8F5] font-bold text-xs py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 flex-grow shadow"
                >
                  <FileText className="w-4 h-4" />
                  <span>Descargar Ficha Técnica PDF</span>
                </button>
              </div>

              {/* Specifications dropdown */}
              <AnimatePresence>
                {showSpecs && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden border-t border-[#EAE5DB]/40 pt-6 mt-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      
                      {/* Specs */}
                      <div className="space-y-4">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1E2315]">Propiedades Químicas y Clínicas:</h4>
                        <div className="bg-[#FAF8F5] rounded-2xl border border-[#EAE5DB]/60 divide-y divide-[#EAE5DB]/40 text-xs text-[#2C3322]">
                          {product.specs.map((item, idx) => (
                            <div key={idx} className="p-3 grid grid-cols-12 gap-2">
                              <span className="col-span-5 font-bold text-[#4C533C]/80">{item.label}</span>
                              <span className="col-span-7 font-light">{item.val}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Application */}
                      <div className="space-y-4">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1E2315]">Protocolo de Aplicación Hortícola/Climática:</h4>
                        <div className="space-y-3.5">
                          {product.dosages.map((item, idx) => (
                            <div key={idx} className="bg-white rounded-xl border border-[#EAE5DB]/40 p-3.5 flex gap-3 text-xs shadow-inner">
                              <span className="w-6 h-6 rounded-lg bg-[#4C533C]/10 text-[#4C533C] flex items-center justify-center font-bold font-mono flex-shrink-0">
                                {idx + 1}
                              </span>
                              <div className="space-y-1">
                                <p className="font-bold text-[#1E2315]">{item.step.replace(/\d\.\s/, '')}</p>
                                <p className="text-stone-500 font-light leading-relaxed">{item.detail}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Alert success */}
              <AnimatePresence>
                {downloadSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl flex items-start gap-3 mt-4 text-xs text-emerald-800 shadow-sm"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Ficha de Bioasis Iniciada con Éxito</p>
                      <p className="font-light mt-0.5 opacity-90">Simulando la preparación del archivo oficial Biomagna-Bioasis-FichaTecnica.pdf para su descarga inmediata.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

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
