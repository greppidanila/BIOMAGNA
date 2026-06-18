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
  Send,
  Check,
  Building,
  UserCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

export default function ContactoPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Form coordinates
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [clientType, setClientType] = useState<'productor' | 'distribuidor'>('productor');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate generation of code
    const randomId = Math.floor(1000 + Math.random() * 9000);
    setTrackingId(randomId.toString());
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2C3322] font-sans relative" id="contacto-root">
      
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
            <a href="/#quienes-somos" className="text-sm font-medium text-stone-300 hover:text-[#E8D385] transition-colors">Nosotros</a>
            <a href="/productos" className="text-sm font-medium text-stone-300 hover:text-[#E8D385] transition-colors">Productos</a>
            <a href="/#benefits-interactive" className="text-sm font-medium text-stone-300 hover:text-[#E8D385] transition-colors">Beneficios</a>
            <a href="/#biokato-showcase" className="text-sm font-medium text-stone-300 hover:text-[#E8D385] transition-colors">BIOKATO</a>
            <a href="/#trials-validation-section" className="text-sm font-medium text-stone-300 hover:text-[#E8D385] transition-colors">Ensayos</a>
            <a href="/representantes" className="text-sm font-medium text-stone-300 hover:text-[#E8D385] transition-colors">Representantes</a>
            <a href="/contacto" className="text-sm font-semibold text-[#E8D385] border-b-2 border-[#E8D385] pb-0.5">Contacto</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="/representantes" 
              id="cta-nav-button"
              className="bg-[#E8D385] hover:bg-[#ebd58d] text-[#1E2315] px-5 py-2.5 rounded-lg text-xs font-bold shadow-md transition-all flex items-center justify-center gap-1.5 group"
            >
              <span>Ver Representantes</span>
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
                <a href="/#quienes-somos" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold py-2 border-b border-white/10 text-stone-200">Nosotros</a>
                <a href="/productos" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold py-2 border-b border-white/10 text-stone-200">Productos</a>
                <a href="/#benefits-interactive" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold py-2 border-b border-white/10 text-stone-200">Beneficios</a>
                <a href="/#biokato-showcase" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold py-2 border-b border-white/10 text-stone-200">BIOKATO</a>
                <a href="/#trials-validation-section" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold py-2 border-b border-white/10 text-stone-200">Ensayos de Campo</a>
                <a href="/representantes" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold py-2 border-b border-white/10 text-stone-200">Representantes</a>
                <a href="/contacto" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold py-2 border-b border-white/10 text-[#E8D385] font-bold">Contacto</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section className="bg-[#1E2315] text-[#FAF8F5] py-16 px-4 relative overflow-hidden" id="contacto-hero">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image 
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1920" 
            alt="Fondo de campo contacto" 
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <span className="text-xs font-mono font-bold uppercase text-[#E8D385] tracking-widest block">
            Canales de Atención Directa
          </span>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-none text-white">
            Ponte en Contacto
          </h1>
          <p className="text-sm md:text-base text-stone-300 font-light max-w-2xl mx-auto leading-relaxed">
            Estamos listos para responder sus dudas técnicas o comerciales. Complete la solicitud y un asesor agrónomo se contactará a la brevedad.
          </p>
        </div>
      </section>

      {/* CONTENT GRID */}
      <section className="py-16 px-4 max-w-7xl mx-auto w-full flex-1" id="contact-main-grid">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Coordinates details */}
          <div className="lg:col-span-5 space-y-8" id="contact-details-panel">
            <div>
              <span className="text-xs font-mono font-bold text-[#4C533C] uppercase tracking-wider block mb-2">Canales de Venta</span>
              <h2 className="text-3xl font-black text-[#1E2315] tracking-tight">Atención Ejecutiva</h2>
              <p className="text-xs text-neutral-500 mt-2 font-light leading-relaxed">
                Nuestras líneas de atención están disponibles de lunes a viernes para coordinar envíos logísticos de emergencia agrícola pampeana.
              </p>
            </div>

            <div className="space-y-6" id="coordinates-cards-grid">
              
              {/* Card Tel */}
              <div className="bg-white border border-[#EAE5DB] p-6 rounded-2xl flex gap-4 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-full bg-[#4C533C]/10 text-[#4C533C] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-neutral-400 uppercase font-mono">Teléfonos Directos</h3>
                  <p className="text-[#1E2315] text-sm font-extrabold mt-1">+54 9 3412 42-0420</p>
                  <p className="text-[#1E2315] text-sm font-extrabold mt-0.5">+54 9 341 606 2456</p>
                </div>
              </div>

              {/* Card Email */}
              <div className="bg-white border border-[#EAE5DB] p-6 rounded-2xl flex gap-4 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-full bg-[#4C533C]/10 text-[#4C533C] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-neutral-400 uppercase font-mono">Correo Técnico</h3>
                  <a href="mailto:info@biomagnasa.com" className="text-[#1E2315] text-sm font-extrabold mt-1 hover:underline block">
                    info@biomagnasa.com
                  </a>
                </div>
              </div>

              {/* Card Address */}
              <div className="bg-white border border-[#EAE5DB] p-6 rounded-2xl flex gap-4 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-full bg-[#4C533C]/10 text-[#4C533C] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-neutral-400 uppercase font-mono">Dirección Comercial</h3>
                  <p className="text-[#1E2315] text-sm font-extrabold mt-1 leading-relaxed">
                    Paz Alberto J 1065 T2 Of.4, Rosario, Santa Fe
                  </p>
                  <p className="text-[11px] text-neutral-400 font-light mt-1">
                    Atención de distribuidores con turno programado para retiro de lotes.
                  </p>
                </div>
              </div>

            </div>

            {/* Visual Callout block */}
            <div className="p-6 bg-[#EAE5DB]/20 border border-[#EAE5DB] rounded-2xl text-xs space-y-3" id="organic-guarantees-info">
              <h4 className="font-bold text-[#1E2315] uppercase tracking-wider font-mono">Respaldo SENASA Orgánico</h4>
              <p className="text-[#555] font-light leading-relaxed">
                Todas nuestras formulaciones están autorizadas por normativas oficiales para su uso en agricultura convencional y orgánica. Garantizamos trazabilidad lote por lote.
              </p>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7 bg-[#EAE5DB]/35 rounded-3xl p-6 sm:p-8 border border-[#EAE5DB]" id="interactive-contact-form-panel">
            <div className="mb-6">
              <span className="text-xs font-mono font-bold text-[#4C533C] block uppercase mb-1">Agro-Inscripciones</span>
              <h3 className="text-2xl font-black text-[#1E2315]">Formulario de Alta Comercial</h3>
              <p className="text-xs text-[#555] mt-1.5">Configure sus necesidades para dirigir el trámite al agrónomo de zona correspondiente.</p>
            </div>

            {submitted ? (
              <div className="py-12 bg-white rounded-2xl border border-[#FAF8F5]/30 text-center space-y-4" id="success-message">
                <div className="w-12 h-12 bg-[#4C533C] text-white rounded-full flex items-center justify-center mx-auto shadow">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#1E2315]">¡Mensaje Enviado con Éxito!</h4>
                <p className="text-xs text-[#555] max-w-sm mx-auto leading-relaxed">
                  Gracias por escribirnos. Su solicitud de contacto comercial con el perfil de <span className="font-bold uppercase text-[#4C533C]">{clientType}</span> ha sido derivada satisfactoriamente.
                </p>
                <p className="text-[11px] font-mono text-[#4C533C] font-semibold">
                  Código de Trámite: <span className="font-bold underline">#BM-{trackingId}</span>
                </p>
                <button 
                  type="button" 
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-[#4C533C] underline hover:text-[#1E2315] mt-4"
                >
                  Enviar otro consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" id="contacto-lead-form">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#1E2315] block mb-1">Nombre Completo *</label>
                    <input 
                      type="text" 
                      required 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej. Juan Carlos"
                      className="w-full px-4 py-3 rounded-xl border border-[#EAE5DB] bg-white text-xs text-[#1E2315] focus:outline-none focus:ring-1 focus:ring-[#4C533C]" 
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#1E2315] block mb-1">Celular o WhatsApp *</label>
                    <input 
                      type="tel" 
                      required 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ej. +54 9 341 606 2456"
                      className="w-full px-4 py-3 rounded-xl border border-[#EAE5DB] bg-white text-xs text-[#1E2315] focus:outline-none focus:ring-1 focus:ring-[#4C533C]" 
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#1E2315] block mb-1">Email (Opcional)</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ej. mail@agro.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#EAE5DB] bg-white text-xs text-[#1E2315] focus:outline-none focus:ring-1 focus:ring-[#4C533C]" 
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#1E2315] block mb-1">Ubicación / Localidad *</label>
                  <input 
                    type="text" 
                    required 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Ej. Pergamino, Buenos Aires"
                    className="w-full px-4 py-3 rounded-xl border border-[#EAE5DB] bg-white text-xs text-[#1E2315] focus:outline-none focus:ring-1 focus:ring-[#4C533C]" 
                  />
                </div>

                {/* CRITICAL RADIO BUTTON FIELD SPECIFIED BY USER */}
                <div className="p-4 bg-white/40 border border-[#EAE5DB] rounded-xl">
                  <label className="text-xs font-bold text-[#1E2315] block mb-3">¿Es distribuidor o productor? *</label>
                  <div className="flex gap-6">
                    {/* Producer */}
                    <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-[#1E2315]">
                      <input 
                        type="radio" 
                        name="clientType" 
                        value="productor" 
                        checked={clientType === 'productor'}
                        onChange={() => setClientType('productor')}
                        className="w-4 h-4 accent-[#4C533C]"
                      />
                      <span className="flex items-center gap-1">
                        <UserCheck className="w-3.5 h-3.5 text-[#4C533C]" />
                        Soy Productor
                      </span>
                    </label>

                    {/* Distributor */}
                    <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-[#1E2315]">
                      <input 
                        type="radio" 
                        name="clientType" 
                        value="distribuidor" 
                        checked={clientType === 'distribuidor'}
                        onChange={() => setClientType('distribuidor')}
                        className="w-4 h-4 accent-[#4C533C]"
                      />
                      <span className="flex items-center gap-1">
                        <Building className="w-3.5 h-3.5 text-[#4C533C]" />
                        Soy Distribuidor
                      </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#1E2315] block mb-1">Consulta Técnica / Detalles</label>
                  <textarea 
                    rows={4} 
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Indique cultivos a tratar, hectáreas o interés comercial para distribución"
                    className="w-full px-4 py-3 rounded-xl border border-[#EAE5DB] bg-white text-xs text-[#1E2315] focus:outline-none focus:ring-1 focus:ring-[#4C533C]"
                  />
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    className="w-full py-4 bg-[#4C533C] hover:bg-[#3B412E] text-white font-bold rounded-xl text-xs flex justify-center items-center gap-2 transition-all shadow"
                  >
                    <span>Enviar Formulario</span>
                    <Send className="w-4 h-4" />
                  </button>
                  <span className="text-[9px] font-mono text-neutral-500 block text-center mt-3">
                    🔒 Sus datos están protegidos bajo estricto secreto comercial e industrial.
                  </span>
                </div>
              </form>
            )}

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer id="brand-footer" className="bg-[#1E2315] py-16 px-4 text-[#FAF8F5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">
          <p className="text-sm md:text-base font-medium tracking-wide">
            &ldquo;BIOMAGNA: Especialistas en biológicos. Más productividad, más sustentabilidad, más futuro.&rdquo;
          </p>
          <div className="border-t border-b border-[#FAF8F5]/10 py-6 text-xs text-stone-300 space-y-2 font-mono">
            <p>J J Paso 8540 Piso 2 Of.1 — Rosario, Santa Fe — +54 9 3412 42-0420 — info@biomagnasa.com</p>
          </div>
          <div className="flex justify-center gap-8 text-xs font-medium text-[#E8D385]">
            <a href="#contacto-root" className="hover:underline">Facebook</a>
            <a href="#contacto-root" className="hover:underline">Instagram</a>
            <a href="#contacto-root" className="hover:underline">LinkedIn</a>
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
