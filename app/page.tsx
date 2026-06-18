'use client';

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Check, 
  Plus, 
  Phone, 
  MapPin, 
  Mail, 
  ArrowUp, 
  ShieldCheck, 
  Sprout, 
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  Calculator,
  Send,
  Droplet,
  Layers,
  Sparkles,
  Award,
  Globe,
  TrendingUp,
  FileText,
  Handshake,
  Leaf
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920",
    alt: "Cultivos biológicos Biomagna en Argentina",
    title: "Especialistas",
    highlight: "Biológicos",
    subtitle: "para el Agro.",
    tag: "Tecnología Biológica Certificada",
    description: "Acercamos formulaciones biotecnológicas de vanguardia para transformar la manera de producir. Potenciamos de forma directa la rentabilidad, sustentabilidad y sanidad de tu cultivo de manera 100% natural."
  },
  {
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1920",
    alt: "Laboratorio y biotecnología aplicada de Biomagna",
    title: "Biotecnología de",
    highlight: "Máxima Pureza",
    subtitle: "hoy en tu lote.",
    tag: "Formulaciones Líderes",
    description: "Garantizamos la máxima viabilidad microbiológica certificada por SENASA, orientada a la fijación simbiótica, solubilización de nutrientes y control ecológico de plagas."
  },
  {
    image: "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?q=80&w=1920",
    alt: "Campos nutridos con insumos de fertilización biológica en Argentina",
    title: "Nutrición con",
    highlight: "Cero Residuos",
    subtitle: "químicos en grano.",
    tag: "Eficiencia y Sustentabilidad",
    description: "Nuestros biodefensivos, inoculantes, bioestimulantes y biofertilizantes actúan en armonía total con la fauna benéfica del campo pampeano rompiendo ciclos de plagas agresivos."
  }
];

export default function Home() {
  // Mobile navigation state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Hero slide state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);
  
  // Navigation active state
  const [activeTab, setActiveTab] = useState<'benefits' | 'biokato' | 'differential'>('benefits');

  // Interactive benefit focus indexes
  const [focusedBenefit, setFocusedBenefit] = useState<number>(0);

  // BIOKATO info tabs state
  const [biokatoTab, setBiokatoTab] = useState<'general' | 'composition' | 'action' | 'dose'>('general');

  // Real-time Calculator States for Biomagna biological inputs
  const [selectedCrop, setSelectedCrop] = useState<'soja' | 'maiz' | 'trigo' | 'girasol'>('maiz');
  const [fieldSize, setFieldSize] = useState<number>(200); // hectares
  const [selectedPlan, setSelectedPlan] = useState<'inoculation' | 'nutrition' | 'protection'>('nutrition');
  const [includeAdditiveCoMo, setIncludeAdditiveCoMo] = useState(false);
  const [includeAdditiveBio, setIncludeAdditiveBio] = useState(false);
  const [currency, setCurrency] = useState<'USD' | 'ARS'>('USD');
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  // Lead contact form states
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadProvince, setLeadProvince] = useState('Santa Fe');
  const [leadMessage, setLeadMessage] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [submittedTrackingId, setSubmittedTrackingId] = useState<number>(31945);

  // Exchange rate placeholder (ars per usd)
  const EXCHANGE_RATE = 955;

  // Plan configuration details
  const plans = {
    inoculation: {
      name: "Tratamiento Inoculación (Campaña Leguminosas)",
      pricePerHa: 12,
      litersHa: 1.5,
      features: [
        "Fijación biológica activa de nitrógeno",
        "Alta viabilidad osmótica (fórmula pre-siembra)",
        "Soporte y calibración de maquinaria",
        "Desarrollo radicular inicial garantizado"
      ]
    },
    nutrition: {
      name: "Bio-Nutrición Integral (Vigor de Suelo)",
      pricePerHa: 28,
      litersHa: 3.0,
      features: [
        "Bacterias Solubilizadoras de Fósforo",
        "Fijación asimbiótica libre de N",
        "Complejos húmicos activadores",
        "Diagnóstico microbiano pre-aplicación"
      ]
    },
    protection: {
      name: "Protección + Bioestimulación Súper (Cuidado Completo)",
      pricePerHa: 45,
      litersHa: 4.5,
      features: [
        "Bio-Fungicida preventivo Trichoderma",
        "Bio-Insecticida selectivo Bacillus",
        "Bioestimulante hormonal de shock",
        "Análisis y reporte satelital NDVI"
      ]
    }
  };

  const cropCoefficients = {
    soja: { label: "Soja", factor: 1.0 },
    maiz: { label: "Maíz", factor: 1.25 },
    trigo: { label: "Trigo / Cebada", factor: 1.15 },
    girasol: { label: "Girasol", factor: 1.20 }
  };

  // Live calculator estimations
  const selectedPlanDetails = plans[selectedPlan];
  const cropFactor = cropCoefficients[selectedCrop].factor;
  
  let priceHaUSD = selectedPlanDetails.pricePerHa * cropFactor;
  if (includeAdditiveCoMo) priceHaUSD += 3.50;
  if (includeAdditiveBio) priceHaUSD += 6.00;

  const totalUSD = priceHaUSD * fieldSize;
  const litersTotal = selectedPlanDetails.litersHa * fieldSize;

  const displayPriceHa = currency === 'USD' ? priceHaUSD : priceHaUSD * EXCHANGE_RATE;
  const displayTotal = currency === 'USD' ? totalUSD : totalUSD * EXCHANGE_RATE;

  // Handle forms
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (leadName && leadPhone) {
      setSubmittedTrackingId(Math.floor(Math.random() * 90000) + 10000);
      setContactSubmitted(true);
    }
  };

  // Data mapping of the 5 core biological benefits requested by user
  const biologicalBenefits = [
    {
      id: "01",
      title: "Manejo de resistencia a insecticidas químicos",
      desc: "Evita la adaptación evolutiva de las plagas rompiendo ciclos de inmunidad mediante mecanismos biológicos no selectivos.",
      metric: "Sanidad Total",
      tag: "ESTRATEGIA MIP"
    },
    {
      id: "02",
      title: "Compatible con pesticidas químicos y biológicos",
      desc: "Diseñado para actuar en sinergia física y fisiológica, facilitando caldos de pulverización mixtos sin taponamientos de boquillas.",
      metric: "100% Sinergismo",
      tag: "INTEGRABILIDAD CO-CALDO"
    },
    {
      id: "03",
      title: "Solución para Manejo Integrado de Plagas (MIP)",
      desc: "Permite la coexistencia con fauna benéfica del lote, suprimiendo únicamente a los insectos hospedantes destructivos.",
      metric: "Equilibrio Biológico",
      tag: "SOPORTE AGROECOLÓGICO"
    },
    {
      id: "04",
      title: "Reducción de huella ambiental",
      desc: "Formulado con agua destilada purificada y activos biodegradables que no dejan residuos detectables en napa ni grano final.",
      metric: "-35% Emisión Co2",
      tag: "AGRICULTURA INTEGRAL"
    },
    {
      id: "05",
      title: "Resultados agronómicos comprobados en campo",
      desc: "Respaldado por más de 120 ensayos certificados por el INTA en diversas regiones de la pampa húmeda argentina.",
      metric: "+15% Rinde Promedio",
      tag: "EVIDENCIA TÉCNICA"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2C3322] font-sans relative" id="app-root">
      
      {/* Dynamic Keyframes for Marquee */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 25s linear infinite;
        }
      `}} />

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

      {/* STICKY HEADER NAVBAR */}
      <header id="main-navigation-header" className="sticky top-0 z-40 bg-[#1E2315]/95 backdrop-blur-md border-b border-white/10 py-3 px-4 transition-all duration-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Real logo image replacing the sprout vector */}
          <a href="/" className="flex items-center gap-2 cursor-pointer" id="navigation-logo-element">
            <Image 
              src="/imgi_1_image-4.png" 
              alt="BIOMAGNA Logo" 
              width={160} 
              height={44} 
              className="h-10 w-auto object-contain brightness-100"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Navigation links */}
          <nav id="desktop-nav-menu" className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm font-medium text-stone-300 hover:text-[#E8D385] transition-colors">Inicio</a>
            <a href="/representantes" className="text-sm font-medium text-stone-300 hover:text-[#E8D385] transition-colors">Representantes</a>
            
            {/* Interactive Dropdown for Productos */}
            <div className="relative group/menu py-2">
              <a 
                href="/productos" 
                className="text-sm font-medium text-stone-300 group-hover/menu:text-[#E8D385] transition-colors flex items-center gap-1 cursor-pointer"
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

          {/* Right Header Navigation CTA */}
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

        {/* Mobile menu dropdown dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              id="mobile-navigation-dropdown"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#1E2315] border-t border-white/5 mt-2 py-4"
            >
              <div className="flex flex-col space-y-3 px-4">
                <a href="/" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold py-2 border-b border-white/10 text-stone-200">Inicio</a>
                <a href="/representantes" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold py-2 border-b border-white/10 text-stone-200">Representantes</a>
                
                {/* Indented mobile Productos section */}
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

                <a href="/contacto" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold py-2 border-b border-white/10 text-stone-200">Contacto</a>
                <a 
                  href="/contacto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center bg-[#E8D385] text-[#1E2315] py-3 rounded-xl font-bold block text-sm shadow mt-2"
                >
                  Asesoramiento Técnico
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION: REPLICATED EXACT SYSTEM FROM THE SCREENSHOT FOR OUTSTANDING LOOK */}
      <section id="biomagna-hero-banner" className="relative min-h-[90vh] md:min-h-[92vh] flex items-center bg-[#1D2214] text-[#FAF8F5] overflow-hidden pt-8 pb-12">
        
        {/* Background image slider reflecting high-res field and biotechnology photos */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image 
                src={slides[currentSlide].image} 
                alt={slides[currentSlide].alt} 
                fill
                className="object-cover object-center select-none"
                priority
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </AnimatePresence>
          {/* Subtle natural gradient mask */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1D2214] via-[#1D2214]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D2214]/90 via-transparent to-[#1D2214]/60" />
        </div>

        {/* Hero Interactive Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between h-full w-full gap-12">
          
          {/* Two-column layout matching exactly the asymmetrical distribution in screenshot */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column - Title & Button with slider animations */}
            <div className="lg:col-span-7 space-y-6 text-left" id="hero-main-typography-block">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  {/* Sustainable Farming Tagline Badge */}
                  <div className="inline-flex items-center gap-2 bg-white/5 border border-white/20 px-4 py-1.5 rounded-full backdrop-blur-sm w-fit" id="hero-tag-badge">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E8D385] animate-pulse" />
                    <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-stone-200 font-bold">
                      {slides[currentSlide].tag}
                    </span>
                  </div>

                  {/* Massive Bold Heading */}
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.08] drop-shadow-sm">
                    {slides[currentSlide].title} <br />
                    <span className="text-[#E8D385]">{slides[currentSlide].highlight}</span> <br />
                    {slides[currentSlide].subtitle}
                  </h1>

                  {/* Tagline description with line height */}
                  <p className="text-base sm:text-lg text-stone-200 font-light leading-relaxed max-w-xl">
                    {slides[currentSlide].description}
                  </p>
                </motion.div>
              </AnimatePresence>
              
              {/* Premium rounded action button and slider dots */}
              <div className="pt-4 flex flex-wrap gap-4 items-center justify-between">
                <a 
                  href="#categories-section" 
                  className="bg-[#E8D385] hover:bg-[#ebd58d] text-[#1D2214] font-bold py-3.5 px-6 rounded-full inline-flex items-center gap-4 transition-all w-fit group shadow-xl hover:-translate-y-0.5 duration-200"
                  id="hero-get-started-btn"
                >
                  <span className="text-sm tracking-wide">Explorar Insumos</span>
                  <span className="w-7 h-7 rounded-full bg-[#1D2214] text-[#E8D385] flex items-center justify-center transition-transform group-hover:translate-x-1 duration-300">
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </span>
                </a>

                {/* Slider Navigation Controls */}
                <div className="flex items-center gap-3 pr-4 self-center">
                  <button 
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                    className="p-2 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all text-white bg-[#1D2214]/40"
                    aria-label="Slide anterior"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  
                  {/* Dots indicator */}
                  <div className="flex gap-1.5">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${currentSlide === idx ? 'bg-[#E8D385] w-6' : 'bg-white/35 hover:bg-white/60'}`}
                        aria-label={`Ir al slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button 
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                    className="p-2 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all text-white bg-[#1D2214]/40"
                    aria-label="Siguiente slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* Right Side Column - Frosted Glass Card mimicking the Mission Card layout */}
            <div className="lg:col-span-5" id="hero-frosted-container">
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl flex flex-col justify-between min-h-[300px] hover:bg-white/10 transition-all duration-300" id="hero-frosted-mission-card">
                
                {/* Header title */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[#E8D385] text-xs font-mono uppercase tracking-widest font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8D385]" />
                    <span>Nuestra Misión</span>
                  </div>
                  
                  {/* Detailed paragraph with balanced contrast */}
                  <p className="text-sm sm:text-base font-light text-stone-200 leading-relaxed">
                    Acompañar la transición productiva del agro mediante el desarrollo y distribución de soluciones biológicas de máxima pureza, garantizando soporte técnico permanente y resultados validados a campo.
                  </p>
                </div>

                {/* Arrow link at the bottom of the card */}
                <div className="pt-8 border-t border-white/10 mt-6 flex justify-between items-center">
                  <a 
                    href="#categories-section" 
                    className="text-xs sm:text-sm font-semibold text-stone-200 hover:text-[#E8D385] transition-colors inline-flex items-center gap-2 group/link"
                  >
                    <span>Ver Líneas de Insumos</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>

              </div>
            </div>

          </div>

          {/* Coordinates Bar matching screenshot hero bottom details layout */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10 text-xs font-mono text-stone-300 mt-4" id="hero-coor-bar">
            <div className="flex items-center gap-2.5">
              <span className="text-[#E8D385] font-bold">Llamanos:</span>
              <span>+54 9 3412 42-0420</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-[#E8D385] font-bold">Base Central:</span>
              <span>Rosario, Santa Fe, AR</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-[#E8D385] font-bold">E-mail Técnico:</span>
              <span>info@biomagnasa.com</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION: ABOUT / QUIÉNES SOMOS */}
      <section id="quienes-somos" className="py-20 px-4 md:py-28 bg-[#EAE5DB]/40 border-b border-[#EAE5DB] relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left/Top Content block */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold tracking-widest text-[#4C533C] uppercase block mb-2">
                Quiénes Somos
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1E2315] tracking-tight leading-tight">
                Líderes en Distribución de Biológicos
              </h2>
              <p className="text-base sm:text-lg text-[#3B412E] font-medium leading-relaxed">
                &ldquo;En BIOMAGNA trabajamos con un propósito claro: acercar tecnologías biológicas de vanguardia que transformen la manera de producir. Somos la distribuidora líder especializada en productos biológicos en Argentina, combinando innovación, respaldo técnico y un modelo de distribución ágil y cercano al cliente.&rdquo;
              </p>
              
              <div className="pt-4 border-t border-[#EAE5DB]">
                <h4 className="text-sm font-bold text-[#1E2315] mb-4">Por qué elegirnos</h4>
                <ul className="space-y-3 font-light text-[#555]">
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <span className="w-5 h-5 rounded-full bg-[#4C533C]/10 text-[#4C533C] flex items-center justify-center font-bold text-[10px] shrink-0">✓</span>
                    <span>Portafolio completo con eficacia comprobada en campo</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <span className="w-5 h-5 rounded-full bg-[#4C533C]/10 text-[#4C533C] flex items-center justify-center font-bold text-[10px] shrink-0">✓</span>
                    <span>Soporte técnico especializado</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <span className="w-5 h-5 rounded-full bg-[#4C533C]/10 text-[#4C533C] flex items-center justify-center font-bold text-[10px] shrink-0">✓</span>
                    <span>Agilidad comercial y logística</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <span className="w-5 h-5 rounded-full bg-[#4C533C]/10 text-[#4C533C] flex items-center justify-center font-bold text-[10px] shrink-0">✓</span>
                    <span>Representación de marcas líderes en biotecnología agrícola</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right/Bottom Grid block: Valores */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Card 1: Especialización */}
              <div className="bg-[#FAF8F5] border border-[#EAE5DB] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-[#4C533C]/10 text-[#4C533C] flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#1E2315] mb-2">Especialización</h3>
                <p className="text-xs text-[#555] leading-relaxed font-light">
                  Foco absoluto en biológicos, garantizando que cada solución en nuestro portafolio cumple con los estándares más estrictos y técnicos de la biotecnología moderna.
                </p>
              </div>

              {/* Card 2: Innovación */}
              <div className="bg-[#FAF8F5] border border-[#EAE5DB] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-[#4C533C]/10 text-[#4C533C] flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#1E2315] mb-2">Innovación</h3>
                <p className="text-xs text-[#555] leading-relaxed font-light">
                  Incorporamos constantemente aislados puros y tecnologías de vanguardia como biodefensivos, inoculantes bi-factor y biofertilizantes de shock.
                </p>
              </div>

              {/* Card 3: Sustentabilidad */}
              <div className="bg-[#FAF8F5] border border-[#EAE5DB] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-[#4C533C]/10 text-[#4C533C] flex items-center justify-center mb-4">
                  <Leaf className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#1E2315] mb-2">Sustentabilidad</h3>
                <p className="text-xs text-[#555] leading-relaxed font-light">
                  Alineados completamente con la regeneración del suelo, reducción de impacto químico pampeano y el desarrollo de un futuro agro sustentable y rentable.
                </p>
              </div>

              {/* Card 4: Cercanía */}
              <div className="bg-[#FAF8F5] border border-[#EAE5DB] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-[#4C533C]/10 text-[#4C533C] flex items-center justify-center mb-4">
                  <Handshake className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#1E2315] mb-2">Cercanía</h3>
                <p className="text-xs text-[#555] leading-relaxed font-light">
                  Acompañamos al productor de forma directa en cada rincón científico y geográfico de Argentina, brindando soporte técnico ágil y eficiente.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION: HORIZONTAL 4 CARDS AS REQUESTED */}
      <section id="categories-section" className="bg-[#13170D] py-24 px-4 md:py-32 border-b border-stone-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header block with categories title */}
          <div className="max-w-3xl mb-20">
            <span className="text-xs font-mono font-bold tracking-widest text-[#E8D385] uppercase block mb-3">
              Líneas Tecnológicas
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-none">
              Portafolio de Insumos Especializados
            </h2>
            <p className="mt-4 text-stone-300 text-base font-light leading-relaxed">
              Encuentre soluciones biológicas adaptadas para potenciar cada ciclo de su campo pampeano con trazabilidad registrada.
            </p>
          </div>

          {/* 4 Cards Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" id="categories-grid-cards">
            
            {/* Category 1: Biodefensivos */}
            <div className="group relative rounded-3xl overflow-hidden h-[500px] shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10" id="cat-card-1">
              {/* Card background Image */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=800" 
                  alt="Cultivo protegido con biodefensivos" 
                  fill
                  className="object-cover object-center opacity-30 group-hover:opacity-45 transition-all duration-700 scale-100 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13170D] via-[#13170D]/70 to-transparent" />
              </div>

              {/* Glassmorphic Active Container */}
              <div className="relative z-10 p-6 flex flex-col justify-between h-full bg-stone-950/20 backdrop-blur-[2px]">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-black text-white/10 block leading-none select-none">01</span>
                    <span className="bg-white/5 border border-white/10 text-[#E8D385] font-mono text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider block w-fit">
                      Sanidad Preventiva
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-black text-white mt-10 mb-2">Biodefensivos</h3>
                  <p className="text-xs text-stone-300 leading-relaxed font-light">
                    Control biológico de plagas e insectos de forma destructora y selectiva sin toxicidad ambiental.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Embedded product logo to fulfill "incluir los logos" */}
                  <div className="bg-white/5 border border-white/10 p-3 rounded-2xl backdrop-blur-md">
                    <span className="text-[9px] font-mono text-[#E8D385] uppercase tracking-widest block mb-2 font-bold">Tecnología Certificada</span>
                    <div className="flex flex-wrap gap-2 items-center">
                      <div className="bg-white rounded-lg p-1.5 flex items-center justify-center shadow h-8 max-w-[120px] overflow-hidden">
                        <Image 
                          src="/imgi_2_Biokato.png" 
                          alt="Biokato Logo" 
                          width={100} 
                          height={28} 
                          className="h-5 w-auto object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Sophisticated reference-style action button */}
                  <a 
                    href="/productos/biodefensivos"
                    className="inline-flex items-center justify-between bg-[#E8D385] hover:bg-white text-[#13170D] font-bold text-xs py-3 px-5 rounded-full transition-all duration-300 w-full group/btn hover:shadow-[0_4px_20px_rgba(232,211,133,0.35)]"
                  >
                    <span>Explorar Línea</span>
                    <span className="w-6 h-6 rounded-full bg-[#13170D] text-[#E8D385] flex items-center justify-center shrink-0 group-hover/btn:translate-x-1 transition-all duration-300">
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Category 2: Biofertilizantes */}
            <div className="group relative rounded-3xl overflow-hidden h-[500px] shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10" id="cat-card-2">
              {/* Card background Image */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800" 
                  alt="Nutrición del suelo fertil" 
                  fill
                  className="object-cover object-center opacity-30 group-hover:opacity-45 transition-all duration-700 scale-100 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13170D] via-[#13170D]/70 to-transparent" />
              </div>

              {/* Glassmorphic Active Container */}
              <div className="relative z-10 p-6 flex flex-col justify-between h-full bg-stone-950/20 backdrop-blur-[2px]">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-black text-white/10 block leading-none select-none">02</span>
                    <span className="bg-white/5 border border-white/10 text-[#E8D385] font-mono text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider block w-fit">
                      Suelo Fértil
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-black text-white mt-10 mb-2">Biofertilizantes</h3>
                  <p className="text-xs text-stone-300 leading-relaxed font-light">
                    Nutrición natural del suelo y cultivo mediante dinamización de minerales bloqueados insolubles.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Embedded product logo to fulfill "incluir los logos" */}
                  <div className="bg-white/5 border border-white/10 p-3 rounded-2xl backdrop-blur-md">
                    <span className="text-[9px] font-mono text-[#E8D385] uppercase tracking-widest block mb-2 font-bold">Tecnologías Principales</span>
                    <div className="flex flex-wrap gap-2 items-center">
                      <div className="bg-white rounded-lg p-1 flex items-center justify-center shadow h-7 max-w-[75px] overflow-hidden">
                        <Image 
                          src="/imgi_2_biofree-1-1.png" 
                          alt="Biofree Logo" 
                          width={60} 
                          height={20} 
                          className="h-4 w-auto object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="bg-white rounded-lg p-1 flex items-center justify-center shadow h-7 max-w-[75px] overflow-hidden">
                        <Image 
                          src="/imgi_3_PROMOTOR-1-2048x369-2.png" 
                          alt="Promotor Logo" 
                          width={60} 
                          height={20} 
                          className="h-4 w-auto object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="bg-white rounded-lg p-1 flex items-center justify-center shadow h-7 max-w-[75px] overflow-hidden">
                        <Image 
                          src="/imgi_4_powertrop.png" 
                          alt="Powertrop Logo" 
                          width={60} 
                          height={20} 
                          className="h-4 w-auto object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Sophisticated reference-style action button */}
                  <a 
                    href="/productos/biofertilizantes"
                    className="inline-flex items-center justify-between bg-[#E8D385] hover:bg-white text-[#13170D] font-bold text-xs py-3 px-5 rounded-full transition-all duration-300 w-full group/btn hover:shadow-[0_4px_20px_rgba(232,211,133,0.35)]"
                  >
                    <span>Explorar Línea</span>
                    <span className="w-6 h-6 rounded-full bg-[#13170D] text-[#E8D385] flex items-center justify-center shrink-0 group-hover/btn:translate-x-1 transition-all duration-300">
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Category 3: Inoculantes */}
            <div className="group relative rounded-3xl overflow-hidden h-[500px] shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10" id="cat-card-3">
              {/* Card background Image */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=800" 
                  alt="Inoculantes nódulos de raíces nutritivas" 
                  fill
                  className="object-cover object-center opacity-30 group-hover:opacity-45 transition-all duration-700 scale-100 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13170D] via-[#13170D]/70 to-transparent" />
              </div>

              {/* Glassmorphic Active Container */}
              <div className="relative z-10 p-6 flex flex-col justify-between h-full bg-stone-950/20 backdrop-blur-[2px]">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-black text-white/10 block leading-none select-none">03</span>
                    <span className="bg-white/5 border border-white/10 text-[#E8D385] font-mono text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider block w-fit">
                      Fijación Sostenible
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-black text-white mt-10 mb-2">Inoculantes</h3>
                  <p className="text-xs text-stone-300 leading-relaxed font-light">
                    Fijación biológica de nitrógeno del aire directo a la savia para un rinde vigoroso continuo.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Embedded product logo to fulfill "incluir los logos" */}
                  <div className="bg-white/5 border border-white/10 p-3 rounded-2xl backdrop-blur-md">
                    <span className="text-[9px] font-mono text-[#E8D385] uppercase tracking-widest block mb-2 font-bold">Inoculación Élite</span>
                    <div className="flex flex-wrap gap-2 items-center">
                      <div className="bg-white rounded-lg p-1.5 flex items-center justify-center shadow h-8 max-w-[100px] overflow-hidden">
                        <Image 
                          src="/imgi_2_PROTEGE-TS-1.png" 
                          alt="Protege TS Logo" 
                          width={80} 
                          height={24} 
                          className="h-5 w-auto object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="bg-white rounded-lg p-1.5 flex items-center justify-center shadow h-8 max-w-[100px] overflow-hidden">
                        <Image 
                          src="/imgi_3_total-nitro-1-2048x366-1.png" 
                          alt="Totalnitro Logo" 
                          width={80} 
                          height={24} 
                          className="h-5 w-auto object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Sophisticated reference-style action button */}
                  <a 
                    href="/productos/inoculantes"
                    className="inline-flex items-center justify-between bg-[#E8D385] hover:bg-white text-[#13170D] font-bold text-xs py-3 px-5 rounded-full transition-all duration-300 w-full group/btn hover:shadow-[0_4px_20px_rgba(232,211,133,0.35)]"
                  >
                    <span>Explorar Línea</span>
                    <span className="w-6 h-6 rounded-full bg-[#13170D] text-[#E8D385] flex items-center justify-center shrink-0 group-hover/btn:translate-x-1 transition-all duration-300">
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Category 4: Bioestimulantes */}
            <div className="group relative rounded-3xl overflow-hidden h-[500px] shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10" id="cat-card-4">
              {/* Card background Image */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src="https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?q=80&w=800" 
                  alt="Bioestimulantes orgánicos de cultivo" 
                  fill
                  className="object-cover object-center opacity-30 group-hover:opacity-45 transition-all duration-700 scale-100 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13170D] via-[#13170D]/70 to-transparent" />
              </div>

              {/* Glassmorphic Active Container */}
              <div className="relative z-10 p-6 flex flex-col justify-between h-full bg-stone-950/20 backdrop-blur-[2px]">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-black text-white/10 block leading-none select-none">04</span>
                    <span className="bg-white/5 border border-white/10 text-[#E8D385] font-mono text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider block w-fit">
                      Desarrollo de Shock
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-black text-white mt-10 mb-2">Bioestimulantes</h3>
                  <p className="text-xs text-stone-300 leading-relaxed font-light">
                    Potenciadores del desarrollo vegetal y recuperadores absolutos frente a estrés climático y granizo.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Embedded product logo to fulfill "incluir los logos" */}
                  <div className="bg-white/5 border border-white/10 p-3 rounded-2xl backdrop-blur-md">
                    <span className="text-[9px] font-mono text-[#E8D385] uppercase tracking-widest block mb-2 font-bold">Estimulación Extrema</span>
                    <div className="flex flex-wrap gap-2 items-center">
                      <div className="bg-white rounded-lg p-1.5 flex items-center justify-center shadow h-8 max-w-[105px] overflow-hidden">
                        <Image 
                          src="/imgi_2_logo-bioasis.png" 
                          alt="Bioasis Logo" 
                          width={85} 
                          height={24} 
                          className="h-5 w-auto object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Sophisticated reference-style action button */}
                  <a 
                    href="/productos/bioestimulantes"
                    className="inline-flex items-center justify-between bg-[#E8D385] hover:bg-white text-[#13170D] font-bold text-xs py-3 px-5 rounded-full transition-all duration-300 w-full group/btn hover:shadow-[0_4px_20px_rgba(232,211,133,0.35)]"
                  >
                    <span>Explorar Línea</span>
                    <span className="w-6 h-6 rounded-full bg-[#13170D] text-[#E8D385] flex items-center justify-center shrink-0 group-hover/btn:translate-x-1 transition-all duration-300">
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Minimal Brand Partner Badges underneath as seen in screenshots */}
          <div className="mt-20 pt-12 border-t border-white/10 flex flex-wrap justify-between items-center gap-6" id="brand-logos-strip">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#E8D385] font-bold">Tecnología de Red Pampeana</span>
            <div className="flex gap-8 items-center flex-wrap opacity-60">
              <span className="font-mono font-black text-sm tracking-widest text-white">SMARTSEED</span>
              <span className="font-mono font-black text-sm tracking-widest text-white">HARVEST</span>
              <span className="font-mono font-black text-sm tracking-widest text-white">SIMPLEAF</span>
              <span className="font-mono font-black text-sm tracking-widest text-white">THE_ORGANIC_AGRO</span>
              <span className="font-mono font-black text-sm tracking-widest text-white">FARMBURST</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION: ALTERNATING LAYOUT - BIOLOGICAL BENEFITS FOR BROADACRE */}
      <section id="benefits-interactive" className="bg-[#EAE5DB] py-20 px-4 md:py-28 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Text segment with typography stacking exactly like "The Future of Farming" in screenshot */}
            <div className="lg:col-span-7 flex flex-col justify-between" id="benefits-text-column">
              <div>
                <span className="bg-[#4C533C] text-white font-mono text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider block w-fit mb-4">
                  Biotecnología Aplicada al Cultivo
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-[#1E2315] tracking-tight leading-none mb-6">
                  Beneficios de la <br />Estrategia Biológica
                </h2>
                <p className="text-sm text-[#4C533C] font-light leading-relaxed max-w-lg mb-10">
                  Implementamos formulaciones avanzadas que rompen esquemas tradicionales, devolviendo la rentabilidad mediante el equilibrio agronómico certificado.
                </p>

                {/* Vertical Stack List matching exactly the aesthetic styling with click interactivity to focus info */}
                <div className="space-y-4 mb-8" id="benefits-stacked-list">
                  {biologicalBenefits.map((item, idx) => (
                    <div 
                      key={idx}
                      onClick={() => setFocusedBenefit(idx)}
                      className={`cursor-pointer group p-4 rounded-xl border transition-all ${focusedBenefit === idx ? 'bg-[#FAF8F5] border-[#4C533C]/60 shadow-md translate-x-2' : 'bg-[#FAF8F5]/45 border-[#EAE5DB] hover:bg-[#FAF8F5]/85'}`}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <span className={`text-xs font-mono font-bold ${focusedBenefit === idx ? 'text-[#D4AF37]' : 'text-[#4C533C]'}`}>{item.id}</span>
                          <span className="text-sm sm:text-md font-bold text-[#1E2315]">{item.title}</span>
                        </div>
                        <Plus className={`w-4 h-4 text-[#4C533C] transition-transform ${focusedBenefit === idx ? 'rotate-45 text-[#D4AF37]' : ''}`} />
                      </div>
                      
                      {focusedBenefit === idx && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-3 pt-3 border-t border-[#EAE5DB]/65 text-xs text-[#555] font-light leading-relaxed space-y-2"
                        >
                          <p>{item.desc}</p>
                          <div className="flex justify-between items-center text-[10px] font-mono text-[#4C533C] font-bold">
                            <span>Métrica: {item.metric}</span>
                            <span>{item.tag}</span>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar decorative margin text as requested */}
              <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#1E2315] rotate-270 origin-left opacity-35">
                <span>INSUMOS BIOLÓGICOS REGISTRADOS POR EL SENASA • DISTRIBUIDOR OFICIAL</span>
              </div>
            </div>

            {/* Right side: High-contrast picture representing an agronomist checking crop */}
            <div className="lg:col-span-5" id="benefits-image-column">
              <div className="relative h-[480px] w-full rounded-2xl overflow-hidden shadow-lg border-4 border-[#FAF8F5]/50">
                <Image 
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800" 
                  alt="Ingeniero agrónomo evaluando soja tratada con bioinsumos Biomagna" 
                  fill
                  className="object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                
                {/* Embedded Floating stat pill on image as requested in photo styles */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#1F2315]/90 hover:bg-[#1F2315] backdrop-blur-sm p-4 rounded-xl text-white border border-[#FAF8F5]/10 shadow-lg text-left transition-colors">
                  <span className="text-xs font-mono text-[#E8D385] block">Sello de Calidad</span>
                  <span className="text-sm font-bold block">Consorcio Activo Viable</span>
                  <p className="text-[10px] text-stone-200/80 font-light mt-1">
                    Células bacterianas viables &gt; 1x10¹⁰ UFC/ml garantizadas durante siembra y germinación pampeana.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION: PRODUCTO DESTACADO — BIOKATO WITH SPECIFICATION TABS */}
      <section id="biokato-showcase" className="bg-[#FAF8F5] py-20 px-4 md:py-28 border-b border-[#EAE5DB]">
        <div className="max-w-7xl mx-auto">
          
          {/* Header titles */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-[#4C533C]/10 text-[#4C533C] font-mono text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
              PRODUCTO DESTACADO EN CAMPAÑA
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1E2315] tracking-tight leading-none">
              BIOKATO: Control del Vector del Maíz
            </h2>
            <p className="mt-4 text-[#555] text-sm sm:text-base font-light max-w-xl mx-auto">
              Insecticida biológico de máxima eficacia registrado frente a SENASA para erradicar y combatir de forma directa a la chicharrita.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Image with tech metrics overlay */}
            <div className="lg:col-span-5" id="biokato-image-col">
              <div className="relative h-[430px] w-full rounded-2xl overflow-hidden shadow-md border border-[#EAE5DB]">
                <Image 
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800" 
                  alt="Rociado biológico con insecticida biokato en maizal" 
                  fill
                  className="object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                
                {/* Tech stats card absolute on top of image */}
                <div className="absolute top-4 left-4 bg-[#FAF8F5] py-2 px-3 rounded-lg border border-[#EAE5DB] shadow-sm">
                  <span className="text-[9px] font-mono text-[#D4AF37] font-bold block uppercase">Registro Oficial</span>
                  <span className="text-xs font-black text-[#1E2315]">SENASA 41.660 BIO</span>
                </div>
                
                <div className="absolute bottom-4 right-4 bg-[#4C533C] py-2 px-3 rounded-lg text-white text-right">
                  <span className="text-[9px] font-mono text-white/80 block uppercase">Almacenamiento</span>
                  <span className="text-xs font-bold">Sin Refrigeración</span>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic tabbed content blocks as requested */}
            <div className="lg:col-span-7" id="biokato-text-col">
              
              {/* Product Tabs */}
              <div className="flex flex-wrap gap-2 mb-8 border-b border-[#EAE5DB] pb-4" id="biokato-tabs-navigation">
                <button 
                  type="button" 
                  onClick={() => setBiokatoTab('general')}
                  className={`px-4 py-2 text-xs font-mono font-bold uppercase rounded-lg transition-all ${biokatoTab === 'general' ? 'bg-[#1E2315] text-[#FAF8F5]' : 'bg-[#EAE5DB]/40 hover:bg-[#EAE5DB] text-[#4C533C]'}`}
                >
                  General
                </button>
                <button 
                  type="button" 
                  onClick={() => setBiokatoTab('composition')}
                  className={`px-4 py-2 text-xs font-mono font-bold uppercase rounded-lg transition-all ${biokatoTab === 'composition' ? 'bg-[#1E2315] text-[#FAF8F5]' : 'bg-[#EAE5DB]/40 hover:bg-[#EAE5DB] text-[#4C533C]'}`}
                >
                  Composición
                </button>
                <button 
                  type="button" 
                  onClick={() => setBiokatoTab('action')}
                  className={`px-4 py-2 text-xs font-mono font-bold uppercase rounded-lg transition-all ${biokatoTab === 'action' ? 'bg-[#1E2315] text-[#FAF8F5]' : 'bg-[#EAE5DB]/40 hover:bg-[#EAE5DB] text-[#4C533C]'}`}
                >
                  Modo de Acción
                </button>
                <button 
                  type="button" 
                  onClick={() => setBiokatoTab('dose')}
                  className={`px-4 py-2 text-xs font-mono font-bold uppercase rounded-lg transition-all ${biokatoTab === 'dose' ? 'bg-[#1E2315] text-[#FAF8F5]' : 'bg-[#EAE5DB]/40 hover:bg-[#EAE5DB] text-[#4C533C]'}`}
                >
                  Especificaciones y Dosis
                </button>
              </div>

              {/* Dynamic tab contents rendering carefully the required data */}
              <div className="bg-[#EAE5DB]/20 border border-[#EAE5DB] p-6 sm:p-8 rounded-2xl min-h-[240px] flex flex-col justify-between" id="biokato-tab-content-panel">
                
                {biokatoTab === 'general' && (
                  <div>
                    <h3 className="text-xl font-bold text-[#1E2315] mb-2">BIOKATO - Insecticida Biológico</h3>
                    <p className="text-xs text-[#4C533C] font-mono uppercase mb-4">Combate Activo de Plagas</p>
                    <p className="text-sm text-[#555] font-light leading-relaxed mb-4">
                      Insecticida biológico de amplio espectro formulado a base de aislados puros de alto flujo celular bacteriano. Controla de forma absoluta e integral a la <strong>chicharrita del maíz (Dalbulus maidis)</strong>, evitando mermas en años secos o críticos.
                    </p>
                    <p className="text-xs text-[#D4AF37] font-semibold">Tasa de degradación: Residuo Cero (Permite cosecha inmediata).</p>
                  </div>
                )}

                {biokatoTab === 'composition' && (
                  <div>
                    <h3 className="text-xl font-bold text-[#1E2315] mb-2">Fórmula Bio-Activa</h3>
                    <p className="text-xs text-[#4C533C] font-mono uppercase mb-4">Organismos de Alta pureza bacteriana</p>
                    <p className="text-sm text-[#555] font-light leading-relaxed">
                      El insecticida está elaborado en base a un consorcio líquido concentrado de:
                    </p>
                    <ul className="list-disc list-inside mt-3 text-xs text-[#555] font-light space-y-1">
                      <li><strong>Pseudomonas fluorescens</strong> (Aislado de rinde fitosanitario)</li>
                      <li><strong>Pseudomonas chlororaphis</strong> (Fungicida y protector por supresión)</li>
                      <li>Recuento celular absoluto &gt; 1x10¹⁰ UFC por mililitro de solución madre.</li>
                    </ul>
                  </div>
                )}

                {biokatoTab === 'action' && (
                  <div>
                    <h3 className="text-xl font-bold text-[#1E2315] mb-2">Triple Modo de Acción Agronómica</h3>
                    <p className="text-xs text-[#4C533C] font-mono uppercase mb-4">Triple vía biológica letal para vectores</p>
                    <p className="text-sm text-[#555] font-light leading-relaxed mb-4">
                      BIOKATO elimina al patógeno e interfiere de modo directo y físico en su propagación mediante una acción triple de choque:
                    </p>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="bg-[#FAF8F5] p-3 rounded border border-[#EAE5DB]">
                        <span className="text-xs font-bold block text-[#1E2315]">Contacto</span>
                        <span className="text-[10px] text-neutral-500 font-light block">Adhesión física cuticular</span>
                      </div>
                      <div className="bg-[#FAF8F5] p-3 rounded border border-[#EAE5DB]">
                        <span className="text-xs font-bold block text-[#1E2315]">Ingestión</span>
                        <span className="text-[10px] text-neutral-500 font-light block">Trastorno metabólico</span>
                      </div>
                      <div className="bg-[#FAF8F5] p-3 rounded border border-[#EAE5DB]">
                        <span className="text-xs font-bold block text-[#1E2315]">Absorción Tarsal</span>
                        <span className="text-[10px] text-neutral-500 font-light block">Parálisis por caminado</span>
                      </div>
                    </div>
                  </div>
                )}

                {biokatoTab === 'dose' && (
                  <div>
                    <h3 className="text-xl font-bold text-[#1E2315] mb-2">Especificación de Campo</h3>
                    <p className="text-xs text-[#4C533C] font-mono uppercase mb-4">Recomendaciones para el Aplicador</p>
                    <div className="grid grid-cols-2 gap-4 text-xs text-[#555] font-light">
                      <div>
                        <span className="font-bold block text-[#1E2315] mb-1">Dosis recomendada:</span>
                        <span>500 a 1000 ml por Hectárea (según nivel de chicharrita en monitoreo).</span>
                      </div>
                      <div>
                        <span className="font-bold block text-[#1E2315] mb-1">Aplicabilidad térmica:</span>
                        <span>Compatible para mezclar en tanque sin alterar la estructura microbiológica.</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Technical dynamic button link */}
                <div className="mt-6 pt-4 border-t border-[#EAE5DB] flex justify-between items-center">
                  <span className="text-[10px] font-mono text-[#4C533C] font-bold">Distribuidor Oficial Exclusivo • Rosario</span>
                  <a 
                    href="#representantes-contacto" 
                    className="text-[#1E2315] hover:text-[#4C533C] text-xs font-bold flex items-center gap-1.5"
                  >
                    <span>Contactar Representante</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION: SCROLLING MARQUEE TICKER TAPE AS REQUESTED */}
      <div id="marquee-ticker-tape" className="bg-[#4C533C] border-y border-[#3B412E]/40 py-4.5 overflow-hidden relative">
        <div id="marquee-scrolling-container" className="flex whitespace-nowrap overflow-hidden text-xs font-mono tracking-widest text-[#FAF8F5] uppercase">
          <div className="animate-marquee shrink-0 flex gap-8">
            <span>🌾 Biodefensivos</span>
            <span>•</span>
            <span>🍃 Biofertilizantes</span>
            <span>•</span>
            <span>🦠 Inoculantes</span>
            <span>•</span>
            <span>🌿 Bioestimulantes</span>
            <span>•</span>
            <span>🌾 Especialistas en Biológicos</span>
            <span>•</span>
            <span>🇦🇷 Rosario, Argentina</span>
            <span>•</span>
            <span>🌾 Biodefensivos</span>
            <span>•</span>
            <span>🍃 Biofertilizantes</span>
            <span>•</span>
            <span>🦠 Inoculantes</span>
            <span>•</span>
            <span>🌿 Bioestimulantes</span>
            <span>•</span>
            <span>🌾 Especialistas en Biológicos</span>
            <span>•</span>
            <span>🇦🇷 Rosario, Argentina</span>
            <span>•</span>
          </div>
        </div>
      </div>

      {/* SECTION: STATS WITH BIG NUMBERS & EXPERIENCED FARMER IMAGE */}
      <section id="stats-section" className="py-20 px-4 md:py-28 bg-[#1E2315] text-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Picture of traditional smiling senior farmer */}
            <div className="lg:col-span-5" id="stats-image-col">
              <div className="relative h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FAF8F5]/5">
                <Image 
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800" 
                  alt="Productor agrícola satisfecho operando insumos biológicos" 
                  fill
                  className="object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual support badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2315]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white text-left">
                  <span className="text-[10px] font-mono tracking-widest text-[#E8D385] uppercase block mb-1">Pampa Húmeda</span>
                  <span className="text-md font-bold block">Compromiso e Historia Agropecuaria</span>
                </div>
              </div>
            </div>

            {/* Right side: Solid Olive section stretching to custom bento with big metrics */}
            <div className="lg:col-span-7 bg-[#2D3322]/80 p-8 sm:p-12 rounded-3xl border border-[#FAF8F5]/10" id="stats-numbers-container">
              
              <div className="mb-10 max-w-xl">
                <span className="text-xs font-mono font-bold tracking-widest text-[#E8D385] uppercase block mb-2">
                  Trayectoria Comprobada
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-[#FAF8F5] leading-tight">
                  Liderazgo Científico en el Agro Nacional
                </h3>
              </div>

              {/* Bento styled grid numbers */}
              <div className="grid grid-cols-2 gap-8" id="stats-big-numbers-grid">
                
                {/* Metric 1 */}
                <div className="border-l-2 border-[#E8D385] pl-4">
                  <span className="text-4xl sm:text-6xl font-black text-white block mb-1 font-mono tracking-tighter">450k+</span>
                  <span className="text-xs uppercase font-mono tracking-wider font-bold text-[#E8D385] block">
                    Hectáreas Tratadas
                  </span>
                  <p className="text-[11px] text-stone-300 mt-2 font-light">
                    Satisfechas con programas de inoculación y bioprotección Biomagna.
                  </p>
                </div>

                {/* Metric 2 */}
                <div className="border-l-2 border-[#E8D385] pl-4">
                  <span className="text-4xl sm:text-6xl font-black text-white block mb-1 font-mono tracking-tighter">15+</span>
                  <span className="text-xs uppercase font-mono tracking-wider font-bold text-[#E8D385] block">
                    Años Liderando
                  </span>
                  <p className="text-[11px] text-stone-300 mt-2 font-light">
                    Sustentamos con investigación de campo el desarrollo biológico argentino.
                  </p>
                </div>

                {/* Metric 3 */}
                <div className="border-l-2 border-[#E8D385] pl-4">
                  <span className="text-4xl sm:text-6xl font-black text-white block mb-1 font-mono tracking-tighter">250+</span>
                  <span className="text-xs uppercase font-mono tracking-wider font-bold text-[#E8D385] block">
                    Asesores de Lote
                  </span>
                  <p className="text-[11px] text-stone-300 mt-2 font-light">
                    Red extendida en Santa Fe, Córdoba, Buenos Aires y Entre Ríos.
                  </p>
                </div>

                {/* Metric 4 */}
                <div className="border-l-2 border-[#E8D385] pl-4">
                  <span className="text-4xl sm:text-6xl font-black text-white block mb-1 font-mono tracking-tighter">100%</span>
                  <span className="text-xs uppercase font-mono tracking-wider font-bold text-[#E8D385] block">
                    Aprobado SENASA
                  </span>
                  <p className="text-[11px] text-stone-300 mt-2 font-light">
                    Todas las soluciones de catálogo cumplen con las directivas oficiales.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION: CORPO DIFFERENTIAL CARDS */}
      <section id="differential-section" className="bg-[#FAF8F5] py-20 px-4 md:py-28 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-[#4C533C] uppercase block mb-2">
              Nuestro Enfoque Corporativo
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E2315] tracking-tight">
              Somos la Distribuidora Líder en Biológicos en Argentina
            </h2>
            <div className="mt-4 p-4 rounded-xl bg-[#EAE5DB]/40 border border-[#EAE5DB] text-sm text-[#4C533C] italic leading-relaxed max-w-2xl mx-auto">
              Somos la distribuidora líder en biológicos en Argentina — portafolio completo, soporte técnico especializado, logística ágil, compromiso con una agricultura sustentable y rentable.
            </div>
          </div>

          {/* 3 columns matching details of the corporate summary requested inside outline look cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="differential-grid-row">
            
            {/* Column 1 */}
            <div className="bg-[#FAF8F5] border-t-4 border-[#4C533C] p-8 rounded-2xl shadow-sm border border-neutral-200 flex flex-col justify-between" id="diff-card-1">
              <div>
                <span className="text-sm font-mono text-[#D4AF37] font-black block mb-4">VIRTUD 01</span>
                <h4 className="text-xl font-bold text-[#1E2315] mb-3">Portafolio Completamente Trazado</h4>
                <p className="text-xs text-[#555] font-light leading-relaxed">
                  Ofrecemos una gama integral cubriendo todas las etapas productivas del cultivo: desde el inoculante bioprotector de semilla hasta la bioestimulación foliar de rinde.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-xs font-bold text-[#4C533C]">
                <span>Trazabilidad Única</span>
                <span>•</span>
                <span>SENASA Certificado</span>
              </div>
            </div>

            {/* Column 2 */}
            <div className="bg-[#FAF8F5] border-t-4 border-[#4C533C] p-8 rounded-2xl shadow-sm border border-neutral-200 flex flex-col justify-between" id="diff-card-2">
              <div>
                <span className="text-sm font-mono text-[#D4AF37] font-black block mb-4">VIRTUD 02</span>
                <h4 className="text-xl font-bold text-[#1E2315] mb-3">Soporte Técnico &amp; Logística Ágil</h4>
                <p className="text-xs text-[#555] font-light leading-relaxed">
                  Contamos con base en Rosario y delegaciones satelitales en zonas núcleo para despachar de inmediato su pedido agrícola, calibrando equipos directo al lote.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-xs font-bold text-[#4C533C]">
                <span>Soporte 24/7 Campo</span>
                <span>•</span>
                <span>Delivery Rosario</span>
              </div>
            </div>

            {/* Column 3 */}
            <div className="bg-[#FAF8F5] border-t-4 border-[#4C533C] p-8 rounded-2xl shadow-sm border border-neutral-200 flex flex-col justify-between" id="diff-card-3">
              <div>
                <span className="text-sm font-mono text-[#D4AF37] font-black block mb-4">VIRTUD 03</span>
                <h4 className="text-xl font-bold text-[#1E2315] mb-3">Compromiso Sustentable e Inteligente</h4>
                <p className="text-xs text-[#555] font-light leading-relaxed">
                  Aseguramos un impacto positivo directo en el ambiente. Reducimos la huella química en tierra para asegurar el valor patrimonial del campo de futuras generaciones.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-xs font-bold text-[#4C533C]">
                <span>Suelos en Regeneración</span>
                <span>•</span>
                <span>Rendimiento Limpio</span>
              </div>
            </div>

          </div>

          {/* Sello de confianza block */}
          <div className="bg-[#1E2315] text-[#FAF8F5] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 mt-16" id="certificate-meta-box">
            <div className="space-y-1 text-center sm:text-left">
              <span className="inline-block bg-[#4C533C] text-xs font-mono font-bold px-2 py-0.5 rounded text-[#E8D385]">REGISTRO OFICIAL</span>
              <p className="text-sm font-bold mt-1">Establecimiento Registrado N° 41.660 . Biomagna Argentina</p>
              <p className="text-xs text-stone-300 font-light">Todas las formulaciones del portafolio cuentan de manera reglamentaria con el sello de aptitud biológica y aprobación comercial de SENASA.</p>
            </div>
            <a 
              href="#representantes-contacto" 
              className="bg-[#4C533C] hover:bg-[#3B412E] text-[#E8D385] px-6 py-3 rounded-xl text-xs font-bold transition-all text-center shrink-0 w-full sm:w-auto"
            >
              Consultar Fichas de Producto
            </a>
          </div>

        </div>
      </section>

      {/* SECTION: CTA CONTACT & LEAD FORMS REGION */}
      <section id="representantes-contacto" className="py-20 px-4 md:py-28 bg-[#FAF8F5] relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Localized representations info card */}
            <div className="lg:col-span-5" id="representantes-branches-info">
              <span className="text-xs font-mono font-bold tracking-widest text-[#4C533C] uppercase block mb-2">
                Logística y Presencia en Territorio
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1E2315] leading-tight mb-6">
                Sumate a la Red Biomagna
              </h2>
              <p className="text-sm text-[#555] font-light leading-relaxed mb-8">
                ¿Querés distribuir nuestros productos? Sumate a la red Biomagna. Brindamos soporte agronómico certificado SENASA al pie de sembradora.
              </p>

              {/* Local branches listing */}
              <div className="space-y-4" id="branches-list-cards">
                
                {/* Branch 1 */}
                <div className="p-4 rounded-xl border border-[#EAE5DB] bg-[#EAE5DB]/25">
                  <h4 className="text-sm font-bold text-[#1E2315] flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#4C533C]" />
                    Casa Central - Rosario
                  </h4>
                  <p className="text-xs text-[#555] font-light mt-1">J.J. Paso 8540 Piso 2 Of. 1, Rosario, Santa Fe</p>
                  <p className="text-[11px] font-semibold text-[#1E2315] mt-2">📧 info@biomagnasa.com • 📞 +54 9 3412 42-0420</p>
                </div>

                {/* Branch 2 */}
                <div className="p-4 rounded-xl border border-[#EAE5DB] bg-[#EAE5DB]/25">
                  <h4 className="text-sm font-bold text-[#1E2315] flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#4C533C]" />
                    Oficinas Administrativas - Santa Fe
                  </h4>
                  <p className="text-xs text-[#555] font-light mt-1">Boulevard Rondeau 1050, Piso 2, Rosario, Santa Fe</p>
                  <p className="text-[11px] font-semibold text-[#1E2315] mt-2">📈 Distribución pampeana autorizada</p>
                </div>

              </div>
            </div>

            {/* Right Column: Dynamic Form box */}
            <div className="lg:col-span-7 bg-[#EAE5DB]/35 rounded-3xl p-6 sm:p-8 border border-[#EAE5DB]" id="direct-contact-lead-box">
              <div className="mb-6">
                <span className="text-xs font-mono font-bold text-[#4C533C] block uppercase mb-1">AGRO-DECISIONES</span>
                <h3 className="text-2xl font-black text-[#1E2315]">Solicitud de Asesoramiento Técnico</h3>
                <p className="text-xs text-[#555] mt-1.5">Aislados puros bajo normativa estricta SENASA de bioseguridad agrícola nacional.</p>
              </div>

              {contactSubmitted ? (
                <div className="py-12 bg-white rounded-2xl border border-[#FAF8F5]/30 text-center space-y-4" id="success-contact-box">
                  <div className="w-12 h-12 bg-[#4C533C] text-white rounded-full flex items-center justify-center mx-auto shadow">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1E2315]">¡Datos Enviados Sastisfechamente!</h4>
                  <p className="text-xs text-[#555] max-w-sm mx-auto leading-relaxed">
                    Hemos recibido sus datos para la cotización de insumos biológicos Biomagna. Un ingeniero agrónomo de nuestra red comercial se pondrá en contacto pronto.
                  </p>
                  <p className="text-[11px] font-mono text-[#4C533C] font-semibold">
                    Código de Seguimiento Agronómico: <span className="font-bold underline">#BM-{submittedTrackingId}</span>
                  </p>
                  <button 
                    type="button" 
                    onClick={() => setContactSubmitted(false)}
                    className="text-xs font-bold text-[#4C533C] underline hover:text-[#1E2315] mt-4"
                  >
                    Hacer otro presupuesto
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4" id="direct-contact-lead-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-[#1E2315] block mb-1">Nombre Completo *</label>
                      <input 
                        type="text" 
                        required 
                        value={leadName}
                        onChange={(e) => setLeadName(e.target.value)}
                        placeholder="Ej. Juan Martín"
                        className="w-full px-4 py-3 rounded-xl border border-[#EAE5DB] bg-white text-xs text-[#1E2315] focus:outline-none focus:ring-1 focus:ring-[#4C533C]" 
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-[#1E2315] block mb-1">Celular o WhatsApp *</label>
                      <input 
                        type="tel" 
                        required 
                        value={leadPhone}
                        onChange={(e) => setLeadPhone(e.target.value)}
                        placeholder="Ej. +54 9 341 606 2456"
                        className="w-full px-4 py-3 rounded-xl border border-[#EAE5DB] bg-white text-xs text-[#1E2315] focus:outline-none focus:ring-1 focus:ring-[#4C533C]" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#1E2315] block mb-1">Email (Opcional)</label>
                    <input 
                      type="email" 
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      placeholder="Ej. info@agro.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#EAE5DB] bg-white text-xs text-[#1E2315] focus:outline-none focus:ring-1 focus:ring-[#4C533C]" 
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-[#1E2315] block mb-1">Ubicación del Lote *</label>
                      <select 
                        value={leadProvince}
                        onChange={(e) => setLeadProvince(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-[#EAE5DB] bg-white text-xs text-[#1E2315] focus:outline-none"
                      >
                        <option value="Santa Fe">Santa Fe (Rosario, Rafaela, Venado Tuerto)</option>
                        <option value="Córdoba">Córdoba (Río Cuarto, Marcos Juárez)</option>
                        <option value="Buenos Aires">Buenos Aires (Pergamino, Balcarce)</option>
                        <option value="Entre Ríos">Entre Ríos (Paraná, Gualeguaychú)</option>
                        <option value="Otro">Otro punto del país</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#1E2315] block mb-1">Campana Agrícola Plazo</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-[#EAE5DB] bg-white text-xs text-[#1E2315] focus:outline-none">
                        <option value="inmediato">Inmediata active (Campaña de Gruesa)</option>
                        <option value="fina">Próxima campaña (Fina - Trigo/Cebada)</option>
                        <option value="futuro">Planificación de suelo de lote</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#1E2315] block mb-1">Consulta Técnica / Detalles</label>
                    <textarea 
                      rows={3} 
                      value={leadMessage}
                      onChange={(e) => setLeadMessage(e.target.value)}
                      placeholder="Indique cultivos a tratar, hectáreas de cobertura o pegue la información del simulador"
                      className="w-full px-4 py-3 rounded-xl border border-[#EAE5DB] bg-white text-xs text-[#1E2315] focus:outline-none focus:ring-1 focus:ring-[#4C533C]"
                    />
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit"
                      className="w-full py-4 bg-[#4C533C] hover:bg-[#3B412E] text-white font-bold rounded-xl text-xs flex justify-center items-center gap-2 transition-all shadow"
                    >
                      <span>Solicitar Presupuesto Técnico</span>
                      <Send className="w-4 h-4" />
                    </button>
                    <span className="text-[9px] font-mono text-neutral-500 block text-center mt-3">
                      🔒 En total cumplimiento con la ley argentina nro. 25.326 de protección de datos.
                    </span>
                  </div>
                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* SECTION: BRAND FOOTER WITH MASSIVE LOGO ARCHITECTURE */}
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
