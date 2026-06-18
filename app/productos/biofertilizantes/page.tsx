'use client';

import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronRight,
  Sprout, 
  Droplet, 
  ArrowUp,
  Calculator,
  Home,
  CheckCircle,
  FileText,
  Layers,
  ChevronDown,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

export default function BiofertilizantesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const categoryName = "Biofertilizantes";
  const categoryDef = "Los Biofertilizantes son preparados líquidos de origen microbiano vivo o activadores hormonales que potencian el vigor del suelo. Solubilizan macro y micronutrientes bloqueados (como el Fósforo), aumentan la asimilación del nitrógeno asimbiótico libre, y expanden el tejido de raíces activas para una nutrición equilibrada y ecológica.";

  const products = [
    {
      id: "biofree",
      name: "BIOFREE",
      logo: "/imgi_2_biofree-1-1.png",
      oneLineDesc: "Biofertilizante fijador de nitrógeno libre y solubilizador activo de nutrientes para una máxima asimilación radicular.",
      fullDesc: "Biofree es un formulado biológico de alta densidad a base de bacterias benéficas Azospirillum brasilense de cepa optimizada y alta viabilidad osmótica. Induce un drástico incremento de pelos radiculares activos en el cultivo durante sus fases iniciales de implantación, mejorando el rinde en soja, trigo y maíz.",
      specs: [
        { key: "Microorganismo", val: "Azospirillum brasilense (cepa Biomagna Ab-08)" },
        { key: "Concentración", val: "Mínimo 1 x 10^9 células viables/mL" },
        { key: "Cultivos", val: "Cereales (Maíz, Trigo), Oleaginosas, Pasturas" },
        { key: "Dosis Recomendada", val: "200 mL a 400 mL por cada 100 kg de semilla" }
      ],
      advantages: ["Aumenta la captura activa de agua y microelementos", "Maximiza el volumen de suelo explorado por el sistema de raíz", "Reduce las pérdidas por volatilización de nitrógeno químico tradicional"]
    },
    {
      id: "promotor",
      name: "PROMOTOR",
      logo: "/imgi_3_PROMOTOR-1-2048x369-2.png",
      oneLineDesc: "Activador hormonal y fisiológico concentrado a base de fitohormonas reguladoras del crecimiento.",
      fullDesc: "Promotor es un concentrado líquido rico en inductores hormonales (auxinas y precursores) y extractos orgánicos seleccionados. Activa el metabolismo basal vegetal, acelerando la germinación uniforme, estimulando la inducción de raíces laterales e induciendo respuestas defensivas sistémicas.",
      specs: [
        { key: "Componente Activo", val: "Complejos fitohormonales y ácidos húmico-fúlvicos" },
        { key: "Concentración", val: "Alta titulación fisiológicamente activa (BM-Promote-9)" },
        { key: "Cultivos", val: "Soja, Maíz, Girasol, Trigo, Cebada, Legumbres" },
        { key: "Dosis Recomendada", val: "100 a 150 mL por cada 100 kg de semilla o aplicación foliar en V4" }
      ],
      advantages: ["Unidad germinativa uniforme ante climas fríos o lotes pesados", "Expansión foliar temprana óptima para captación fotosintética de luz", "Compatible con biofungicidas y caldos mixtos de tratamiento de semilla"]
    },
    {
      id: "powertrop",
      name: "POWERTROP",
      logo: "/imgi_4_powertrop.png",
      oneLineDesc: "Energizante microbiano premium y potenciador biológico de la asimilación del fósforo y microrregión.",
      fullDesc: "Powertrop combina bacterias solubilizadoras con co-factores de micronutrientes quelados que estimulan la velocidad fotosintética basal y la asimilación foliar. Funciona como un regulador biológico de choque durante etapas críticas de alta demanda metabólica vegetativa.",
      specs: [
        { key: "Ingredientes", val: "Pseudomonas fluorescens solubilizadoras + micronutrientes (Zinc, Boro, Manganeso)" },
        { key: "Metabolismo", val: "Solubilizador de Fósforo (FBN complementario)" },
        { key: "Cultivos", val: "Maíz, Trigo, Soja, Girasol y Papa" },
        { key: "Dosis Recomendada", val: "1.0 a 2.0 Litros por Hectárea (vía foliar)" }
      ],
      advantages: ["Acelera la movilización del fósforo insoluble retenido en raíces", "Promueve un vigoroso llenado lateral de vainas y espigas", "Excelente compatibilidad en mezclas y pulverizadoras de mediano porte"]
    },
    {
      id: "biocalda",
      name: "BIOCALDA",
      logo: "/imgi_5_biocalda-1.png",
      oneLineDesc: "Corrector de caldo biológico y coadyuvante vegetal de dispersión y absorción uniforme.",
      fullDesc: "Biocalda de Biomagna es un optimizador del caldo de pulverización de base totalmente orgánica y vegetal. Combina propiedades emulsionantes y correctores que neutralizan sales agresivas del agua, estabilizando y potenciando la persistencia física de caldos mixtos químico-biológicos.",
      specs: [
        { key: "Composición", val: "Ésteres de ácidos grasos vegetales emulsionantes + secuestrante de cationes" },
        { key: "Función Principal", val: "Tensión superficial reducida, antiespumante, protector de viabilidad microbiana" },
        { key: "Compatibilidad", val: "Apto para toda mezcla que combine biológicos y defensivos químicos" },
        { key: "Dosis Recomendada", val: "50-100 mL cada 100 L de caldo total de aspersión" }
      ],
      advantages: ["Preserva la viabilidad física de bacterias benéficas en tanques de aspersión", "Reduce drásticamente la deriva por ráfagas de viento y evaporación foliar", "Acción penetrante que rompe de manera homogénea la cera cuticular foliar"]
    }
  ];

  const handleDownloadPdf = (productId: string) => {
    setDownloadSuccess(productId);
    setTimeout(() => setDownloadSuccess(null), 4000);
  };

  const toggleExpand = (productId: string) => {
    if (expandedProduct === productId) {
      setExpandedProduct(null);
    } else {
      setExpandedProduct(productId);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2C3322] font-sans relative" id="biofertilizantes-root">
      
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
      <section className="bg-gradient-to-r from-[#1E3F4A] to-[#255B6C] text-white py-16 px-4 relative overflow-hidden" id="category-hero-banner">
        <div className="absolute inset-0 z-0 opacity-25 select-none pointer-events-none">
          <Image 
            src="https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?q=80&w=1200"
            alt="Fondo cultivo soja biofertilizantes"
            fill
            className="object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-[#E8D385] text-xs font-mono font-bold tracking-widest uppercase">
              <Droplet className="w-4 h-4 text-[#E8D385]" />
              <span>Bio-Nutrición Avanzada</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-none uppercase">
              {categoryName}
            </h1>
            <p className="text-xs sm:text-sm text-stone-300 max-w-3xl font-light leading-relaxed">
              {categoryDef}
            </p>
          </div>
          <div className="md:col-span-4 hidden md:flex justify-end">
            <div className="relative w-72 h-44 rounded-2xl overflow-hidden border border-white/20 shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-500 bg-[#1E3F4A]">
              <Image 
                src="https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?q=80&w=600"
                alt="Tecno Biofertilizantes"
                fill
                className="object-cover object-center brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3.5 pt-8">
                <span className="text-[10px] font-mono text-[#E8D385] tracking-widest uppercase font-bold block mb-0.5">Nutrición Activa</span>
                <span className="text-xs text-white/90 font-bold block">Suelo Fértil &amp; Vigor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <main className="max-w-7xl mx-auto px-4 py-16 flex-grow">
        <h2 className="text-xs uppercase font-mono font-black text-[#4C533C]/60 tracking-widest border-b border-[#EAE5DB] pb-3 mb-10">
          Línea Comercial Biofertilizantes en Grilla
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="biofertilizantes-products-grid">
          {products.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#FAF8F5] border border-[#EAE5DB] hover:border-[#4C533C]/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden shadow-sm"
            >
              <div className="space-y-6">
                
                {/* Logo with clean placeholder padding */}
                <div className="flex items-center justify-between border-b border-[#EAE5DB]/50 pb-5">
                  <div className="relative w-40 h-11 bg-white rounded-lg px-3 py-1 flex items-center justify-center shadow-inner border border-[#EAE5DB]/40">
                    <Image 
                      src={p.logo} 
                      alt={`Logo ${p.name}`} 
                      fill
                      className="object-contain p-2"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-[9px] font-mono font-bold px-2 py-0.5 bg-[#4C533C]/10 text-[#4C533C] rounded-full">
                    Nutrición Activa
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg font-black text-[#1E2315] tracking-tight">{p.name}</h3>
                  <p className="text-xs text-[#4C533C]/90 font-medium leading-relaxed">{p.oneLineDesc}</p>
                </div>

                {/* Action buttons: "Ver más" and "Descargar" */}
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => toggleExpand(p.id)}
                    className="flex-grow bg-[#4C533C]/10 hover:bg-[#4C533C]/20 text-[#4C533C] text-[11px] font-bold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>{expandedProduct === p.id ? 'Ocultar' : 'Ver más'}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expandedProduct === p.id ? 'rotate-180' : ''}`} />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDownloadPdf(p.id)}
                    className="flex-grow bg-[#4C533C] hover:bg-[#3B412E] text-white text-[11px] font-bold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Ficha</span>
                  </button>
                </div>

                {/* Detailed Information Accordion */}
                <AnimatePresence>
                  {expandedProduct === p.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-[#EAE5DB]/40 pt-5 mt-5 space-y-4 text-xs text-[#2C3322]"
                    >
                      <p className="font-light leading-relaxed text-stone-600">{p.fullDesc}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Specs */}
                        <div>
                          <p className="font-bold text-[#1E2315] mb-2 flex items-center gap-1"><Info className="w-3.5 h-3.5" /> Ficha Técnica</p>
                          <div className="bg-[#FAF8F5] border border-[#EAE5DB]/60 rounded-xl divide-y divide-[#EAE5DB]/40">
                            {p.specs.map((item, idx) => (
                              <div key={idx} className="p-2 flex justify-between gap-1 text-[11px]">
                                <span className="font-extrabold text-[#4C533C]/80">{item.key}:</span>
                                <span className="font-light text-right">{item.val}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Advantages */}
                        <div>
                          <p className="font-bold text-[#1E2315] mb-2 flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Ventajas Clave</p>
                          <ul className="space-y-1.5 text-[11px] font-light text-stone-600 leading-relaxed">
                            {p.advantages.map((adv, idx) => (
                              <li key={idx} className="flex gap-1.5">
                                <span className="text-[#4C533C] font-black">•</span>
                                <span>{adv}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Local PDF success action bar */}
                <AnimatePresence>
                  {downloadSuccess === p.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-2.5 mt-4 text-[11px] text-emerald-800"
                    >
                      <CheckCircle className="w-4.5 h-4.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">Ficha de {p.name} Iniciada</p>
                        <p className="font-light mt-0.5 opacity-90">Simulando descarga... Lote-{p.id}-FichaTecnica.pdf preparado por SENASA.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </motion.div>
          ))}
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
