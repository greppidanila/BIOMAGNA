'use client';

import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Sprout, 
  Phone, 
  MapPin, 
  Mail, 
  ArrowUp,
  User,
  Users,
  Map,
  MessageSquare,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

export default function RepresentantesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  // Equipo Interno
  const team = [
    { name: "Eduardo Perez", role: "Gerencia General", phone: "+54 9 341 555 9697", whatsapp: "5493415559697" },
    { name: "Adolfo Mac", role: "Gerencia Comercial", phone: "+54 9 341 570 6900", whatsapp: "5493415706900" },
    { name: "Tomas Toraglio", role: "Coordinador de Desarrollo", phone: "+54 9 341 312 9012", whatsapp: "5493413129012" },
    { name: "Juan Klappenbach", role: "Responsable de Desarrollo", phone: "+54 9 264 504 5768", whatsapp: "5492645045768" },
    { name: "Matias Ramunno", role: "Coordinador de Administración", phone: "+54 9 341 606 2456", whatsapp: "5493416062456" },
    { name: "Sergio Velazquez", role: "Créditos y Cobranzas", phone: "+54 9 341 363 6000", whatsapp: "5493413636000" },
    { name: "Victoria Suidini", role: "Asistente de Ventas", phone: "+54 9 3412 42-0420", whatsapp: "5493412420420" },
    { name: "Lucas Perez", role: "Coordinador de Logística", phone: "+54 9 3413 77-8074", whatsapp: "5493413778074" },
    { name: "Ruben Netcoff", role: "Responsable de Biofungicidas", phone: "+54 9 3412 56-4999", whatsapp: "5493412564999" },
    { name: "Federico Lowe", role: "Responsable de Bioestimulantes", phone: "+54 9 3415 81-3598", whatsapp: "5493415813598" }
  ];

  // Representantes por zona
  const zoneReps = [
    { zone: "NOA", name: "Mauricio Martinez", role: "Representante Técnico NOA" },
    { zone: "NEA", name: "Walter Flores", role: "Representante Técnico NEA" },
    { zone: "Oeste Córdoba", name: "Antonio Cafaro", role: "Representante Técnico Oeste Córdoba" },
    { zone: "Centro Norte Santa Fe", name: "Hugo Ohiggins", role: "Representante Técnico Centro Norte Santa Fe" },
    { zone: "Litoral", name: "Diego Barral", role: "Representante Técnico Litoral" },
    { zone: "Sur Santa Fe y SE Córdoba", name: "Hugo Bruno", role: "Representante Técnico Sur Santa Fe y SE Córdoba" },
    { zone: "Oeste Buenos Aires y La Pampa", name: "Marcelo Lopes da Costa", role: "Representante Técnico Oeste Buenos Aires y La Pampa" },
    { zone: "Centro Norte Córdoba", name: "Javier Sangoy", role: "Representante Técnico Centro Norte Córdoba" },
    { zone: "Sudeste Buenos Aires", name: "Ezequiel Mosso Bancalari", role: "Representante Técnico Sudeste Buenos Aires" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2C3322] font-sans relative" id="representantes-root">
      
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
            <a href="/representantes" className="text-sm font-semibold text-[#E8D385] border-b-2 border-[#E8D385] pb-0.5">Representantes</a>
            
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

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="/contacto" 
              id="cta-nav-button"
              className="bg-[#E8D385] hover:bg-[#ebd58d] text-[#1E2315] px-5 py-2.5 rounded-lg text-xs font-bold shadow-md transition-all flex items-center justify-center gap-1.5 group"
            >
              <span>Contacto Directo</span>
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

        {/* Mobile menu dropdown */}
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
                <a href="/representantes" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold py-2 border-b border-white/10 text-[#E8D385] font-bold">Representantes</a>
                
                {/* Indented mobile dropdown for Productos */}
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section className="bg-[#1E2315] text-[#FAF8F5] py-16 px-4 relative overflow-hidden" id="reps-hero">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image 
            src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=1920" 
            alt="Fondo de campo representantes" 
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <span className="text-xs font-mono font-bold uppercase text-[#E8D385] tracking-widest block">
            Nuestra Gente • Soporte Técnico de Red
          </span>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-none text-white">
            Equipo &amp; Representantes
          </h1>
          <p className="text-sm md:text-base text-stone-300 font-light max-w-2xl mx-auto leading-relaxed">
            Estamos presentes en cada rincón pampeano y regional de Argentina para guiarlo con el mejor asesoramiento biológico del agro.
          </p>
        </div>
      </section>

      {/* SECTION 1: EQUIPO INTERNO */}
      <section className="py-16 px-4 max-w-7xl mx-auto w-full" id="internal-team-section">
        <div className="text-center md:text-left mb-12">
          <span className="text-xs font-mono font-bold text-[#4C533C] uppercase tracking-wider block mb-2">Staff Biomagna</span>
          <h2 className="text-3xl font-black text-[#1E2315] uppercase tracking-tight">Equipo Directivo e Interno</h2>
          <p className="text-xs text-neutral-500 mt-1 max-w-lg font-light leading-relaxed">
            Soporte estratégico y comercial coordinado desde nuestras oficinas centrales de Rosario para toda la República Argentina.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="bg-white border border-[#EAE5DB] rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#4C533C]/15 rounded-full flex items-center justify-center text-[#4C533C]">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-[#1E2315] leading-tight">{member.name}</h3>
                    <span className="text-xs text-[#4C533C] font-semibold">{member.role}</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-[#FAF8F5]/30">
                  <p className="text-xs text-neutral-500 font-mono flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#4C533C]" />
                    <span>{member.phone}</span>
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <a 
                  href={`https://wa.me/${member.whatsapp}?text=Hola%20${encodeURIComponent(member.name)},%20quisiera%20hacer%20una%20consulta%20técnica/comercial.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 bg-[#4C533C] hover:bg-[#3B412E] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Directo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: MAPA INTERACTIVO Y REPRESENTANTES TÉCNICOS POR ZONA */}
      <section className="py-20 px-4 bg-[#EAE5DB]/40 border-y border-[#EAE5DB]" id="zonal-representatives-section">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center md:text-left mb-12">
            <span className="text-xs font-mono font-bold text-[#4C533C] uppercase tracking-wider block mb-2">Presencia Pampeana y Regional</span>
            <h2 className="text-3xl font-black text-[#1E2315] uppercase tracking-tight">Mapa de Cobertura &amp; Asesores</h2>
            <p className="text-xs text-neutral-500 mt-1 max-w-lg font-light leading-relaxed">
              Hacé clic en las regiones del mapa táctico de abajo o utilizá los selectores rápidos para localizar e iniciar un contacto directo con el Ingeniero Agrónomo asignado a tu lote.
            </p>
          </div>

          {/* INTERACTIVE BOARD: MAPA + SELECTORES */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 bg-[#1D2214] text-white p-6 sm:p-10 rounded-3xl shadow-xl border border-white/5 relative" id="interactive-map-board">
            
            {/* Left selector columns & detail sheet */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase bg-[#E8D385] text-[#1D2214] font-bold px-2 py-0.5 rounded-full inline-block mb-2">Paso 1</span>
                <h3 className="text-xl sm:text-2xl font-black text-white">Seleccioná tu Región</h3>
                <p className="text-xs text-stone-300 font-light mt-1">Hacé clic en cualquier polo productivo para revelar el especialista biológico local o filtrá por listado:</p>
              </div>

              {/* Quick filter lists */}
              <div className="flex flex-wrap gap-2" id="map-quick-filters">
                <button
                  type="button"
                  onClick={() => setSelectedRegion(null)}
                  className={`text-xs px-3.5 py-2 rounded-xl border transition-all font-semibold ${
                    selectedRegion === null
                      ? "bg-[#E8D385] text-[#1D2214] border-[#E8D385]"
                      : "bg-white/5 border-white/15 text-stone-300 hover:bg-white/10"
                  }`}
                >
                  Ver Todas las Zonas ({zoneReps.length})
                </button>
                {zoneReps.map((rep, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedRegion(rep.zone)}
                    className={`text-xs px-3.5 py-2 rounded-xl border transition-all font-semibold ${
                      selectedRegion === rep.zone
                        ? "bg-[#E8D385] text-[#1D2214] border-[#E8D385]"
                        : "bg-white/5 border-white/15 text-stone-300 hover:bg-white/10"
                    }`}
                  >
                    {rep.zone}
                  </button>
                ))}
              </div>

              {/* Informative alert or representative active focus card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5" id="map-active-status-reporter">
                {selectedRegion ? (
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono text-[#E8D385] uppercase tracking-widest block font-bold">Filtro Activo Registrado</span>
                    <h4 className="text-lg font-bold text-white">{selectedRegion}</h4>
                    {zoneReps.filter(z => z.zone === selectedRegion).map((rep, idx) => (
                      <div key={idx} className="flex items-center justify-between flex-wrap gap-4 pt-2 border-t border-white/5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#E8D385]/10 text-[#E8D385] flex items-center justify-center">
                            <MapPin className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-[10px] text-stone-300 block">Soporte Técnico de Red:</span>
                            <span className="text-sm font-bold text-white">{rep.name}</span>
                          </div>
                        </div>
                        <a
                          href={`https://wa.me/5493412420420?text=Hola,%20quisiera%20ponerme%20en%20contacto%20con%20el%20representante%20técnico%20de%20la%20zona%20${encodeURIComponent(rep.zone)}%20(${encodeURIComponent(rep.name)}).`}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-[#E8D385] text-[#1D2214] px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#ebd58d] transition-all flex items-center gap-1"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>Escribir por WhatsApp</span>
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center gap-3 text-stone-300 py-2">
                    <Map className="w-8 h-8 text-[#E8D385] shrink-0 animate-pulse" />
                    <p className="text-xs leading-relaxed font-light">
                      Mostrando la red nacional unificada de Biomagna Argentina. Hacé clic en cualquier marcador o botón para aislar el contacto regional sugerido.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Map Canvas representation */}
            <div className="lg:col-span-5 flex items-center justify-center" id="map-graphics-col">
              <div className="relative w-full aspect-[4/5] max-w-[340px] bg-[#1E2315] border border-white/10 rounded-3xl overflow-hidden shadow-2xl p-6 flex flex-col justify-between" id="argentina-svg-map-frame">
                
                {/* Abstract grid lines giving it a highly technological/biological asset map feel */}
                <div className="absolute inset-x-0 top-1/4 border-t border-white/5 pointer-events-none" />
                <div className="absolute inset-x-0 top-2/4 border-t border-white/5 pointer-events-none" />
                <div className="absolute inset-x-0 top-3/4 border-t border-white/5 pointer-events-none" />
                <div className="absolute inset-y-0 left-1/3 border-r border-white/5 pointer-events-none" />
                <div className="absolute inset-y-0 left-2/3 border-r border-white/5 pointer-events-none" />
                
                {/* Visual Title indicator inside map */}
                <div className="relative z-10">
                  <span className="text-[9px] font-mono text-stone-400 uppercase tracking-widest block font-bold">Biomagna Agro-Map</span>
                  <p className="text-xs font-bold text-white mt-0.5">TERRITORIO ARGENTINA</p>
                </div>

                {/* Simulated geographic map outline in CSS dashes representing core productive regions */}
                <div className="absolute inset-x-8 top-16 bottom-16 border-2 border-dashed border-[#E8D385]/10 rounded-3xl pointer-events-none flex items-center justify-center">
                  <div className="text-[10px] uppercase font-mono tracking-widest text-[#E8D385]/10 font-bold rotate-90 whitespace-nowrap">
                    CONO SUR PRODUCTIVO
                  </div>
                </div>

                {/* Glowing Golden Markers/Pins */}
                {[
                  { id: "NOA", label: "NOA", top: "18%", left: "32%" },
                  { id: "NEA", label: "NEA", top: "24%", left: "70%" },
                  { id: "Centro Norte Córdoba", label: "Centro Norte Córdoba", top: "42%", left: "44%" },
                  { id: "Oeste Córdoba", label: "Oeste Córdoba", top: "50%", left: "30%" },
                  { id: "Centro Norte Santa Fe", label: "Centro Norte Santa Fe", top: "44%", left: "56%" },
                  { id: "Litoral", label: "Litoral", top: "48%", left: "72%" },
                  { id: "Sur Santa Fe y SE Córdoba", label: "Sur Santa Fe", top: "58%", left: "54%" },
                  { id: "Oeste Buenos Aires y La Pampa", label: "Oeste BsAs / LP", top: "68%", left: "40%" },
                  { id: "Sudeste Buenos Aires", label: "Sudeste BsAs", top: "76%", left: "58%" }
                ].map((beacon, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedRegion(beacon.id)}
                    className="absolute group z-20 pointer-events-auto"
                    style={{ top: beacon.top, left: beacon.left }}
                  >
                    <span className={`relative flex h-3.5 w-3.5`}>
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${selectedRegion === beacon.id ? "bg-[#E8D385]" : "bg-[#4C533C]"}`}></span>
                      <span className={`relative inline-flex rounded-full h-3.5 w-3.5 border border-white/50 shadow ${selectedRegion === beacon.id ? "bg-[#E8D385] scale-125" : "bg-[#4B552F]"}`}></span>
                    </span>
                    
                    {/* Hover region tooltip helper */}
                    <span className="absolute left-1/2 -translate-x-1/2 -top-7 bg-black text-[#FAF8F5] text-[9px] font-bold px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10 shadow-lg select-none">
                      {beacon.label}
                    </span>
                  </button>
                ))}

                {/* Bottom map metadata legend */}
                <div className="relative z-10 flex justify-between items-center text-[10px] text-stone-400 font-mono">
                  <span>LAT -34.1204</span>
                  <span>LNG -60.4200</span>
                </div>

              </div>
            </div>

          </div>

          {/* ACTIVE GRID ROW */}
          <div className="text-center md:text-left mb-8 pt-4">
            <h3 className="text-xl font-bold text-[#1E2315] uppercase tracking-tight">
              {selectedRegion ? `Asesor Sugerido para ${selectedRegion}` : "Todos los Representantes Técnicos"}
            </h3>
            <p className="text-xs text-neutral-500 mt-1">Se encontraron {selectedRegion ? "1" : "9"} Ingenieros Agrónomos habilitados para esta consulta comercial.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(selectedRegion 
              ? zoneReps.filter(rep => rep.zone.toLowerCase() === selectedRegion.toLowerCase())
              : zoneReps
            ).map((rep, index) => (
              <div 
                key={index} 
                className="bg-[#FAF8F5] border border-[#EAE5DB] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Visual marker highlighting the zone abbreviation */}
                <div className="absolute top-0 right-0 bg-[#4C533C] text-[#FAF8F5] font-mono text-[9px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-xl group-hover:bg-[#E8D385] group-hover:text-[#1E2315] transition-colors shadow-sm">
                  {rep.zone}
                </div>

                <div className="space-y-4 pt-2">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#4C533C] font-bold block mb-1">Zona Cobertura</span>
                    <h3 className="text-lg font-black text-[#1E2315] leading-tight">{rep.zone}</h3>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-[#EAE5DB]/60">
                    <div className="w-9 h-9 rounded-full bg-[#1E2315]/10 text-[#1E2315] flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 leading-none">Ingeniero Técnico</p>
                      <h4 className="text-sm font-bold text-[#1E2315] mt-0.5">{rep.name}</h4>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <a 
                    href={`https://wa.me/5493412420420?text=Hola,%20quisiera%20ponerme%20en%20contacto%20con%20el%20representante%20técnico%20de%20la%20zona%20${encodeURIComponent(rep.zone)}%20(${encodeURIComponent(rep.name)}).`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 bg-transparent border border-[#4C533C] hover:bg-[#4C533C] text-[#4C533C] hover:text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Contactar Zona</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer id="brand-footer" className="bg-[#1E2315] py-16 px-4 text-[#FAF8F5] mt-auto relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">
          <p className="text-sm md:text-base font-medium tracking-wide">
            &ldquo;BIOMAGNA: Especialistas en biológicos. Más productividad, más sustentabilidad, más futuro.&rdquo;
          </p>
          <div className="border-t border-b border-[#FAF8F5]/10 py-6 text-xs text-stone-300 space-y-2 font-mono">
            <p>J J Paso 8540 Piso 2 Of.1 — Rosario, Santa Fe — +54 9 3412 42-0420 — info@biomagnasa.com</p>
          </div>
          <div className="flex justify-center gap-8 text-xs font-medium text-[#E8D385]">
            <a href="#representantes-root" className="hover:underline">Facebook</a>
            <a href="#representantes-root" className="hover:underline">Instagram</a>
            <a href="#representantes-root" className="hover:underline">LinkedIn</a>
          </div>
          <div className="text-[11px] text-stone-500 pt-4 space-y-1">
            <p>Copyright 2026 – Biomagna – Todos los derechos reservados</p>
            <p>Desarrollado por <span className="font-bold hover:text-white">Danila Digital</span></p>
          </div>
        </div>
      </footer>

    </div>
  );
}
