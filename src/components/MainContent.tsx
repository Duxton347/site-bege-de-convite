import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Clock, Gift, CheckCircle, Heart, Info, AlertCircle, Navigation, BedDouble, Bus, Home, Users, Shirt, Mail } from 'lucide-react';
import { Divider, Monogram } from './Icons';

export default function MainContent() {
  const [rsvpSent, setRsvpSent] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavItem = ({ label, target }: { label: string; target: string }) => (
    <button 
      onClick={() => scrollToSection(target)}
      className="text-wedding-olive hover:text-wedding-green transition-colors font-serif text-sm uppercase tracking-widest px-3 py-2"
    >
      {label}
    </button>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      className="min-h-screen paper-texture overflow-x-hidden pb-24 md:pb-0"
    >
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-40 bg-wedding-paper/90 backdrop-blur-md border-b border-wedding-olive/10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center gap-4">
          <div className="w-12 h-12">
             <img 
              src="https://irmaosdreon.com.br/wp-content/uploads/2026/02/Copia-de-Eclesiastes-4-12.-E-se-alguem-quiser-prevalecer-contra-um-os-dois-lhe-resistirao-e-o-cordao-de-tres-dobras-nao-se-quebra-tao-depressa.-2.png" 
              alt="Logo" 
              className="w-full h-full object-contain opacity-80"
            />
          </div>
          <div className="flex gap-6">
            <NavItem label="Início" target="hero" />
            <NavItem label="O Casal" target="couple" />
            <NavItem label="Detalhes" target="details" />
            <NavItem label="Hospedagem" target="accommodation" />
            <NavItem label="Transporte" target="transport" />
            <NavItem label="Trajes" target="dresscode" />
            <NavItem label="Presentes" target="gifts" />
            <NavItem label="Confirmação" target="rsvp" />
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-wedding-olive/10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] pb-4">
        <div className="flex overflow-x-auto py-3 px-2 gap-2 no-scrollbar">
          <button onClick={() => scrollToSection('hero')} className="flex flex-col items-center min-w-[70px] gap-1 text-wedding-olive/70 hover:text-wedding-green active:text-wedding-green transition-colors">
            <Home size={20} />
            <span className="text-[10px] uppercase tracking-wider font-serif">Início</span>
          </button>
          <button onClick={() => scrollToSection('couple')} className="flex flex-col items-center min-w-[70px] gap-1 text-wedding-olive/70 hover:text-wedding-green active:text-wedding-green transition-colors">
            <Users size={20} />
            <span className="text-[10px] uppercase tracking-wider font-serif">Casal</span>
          </button>
          <button onClick={() => scrollToSection('details')} className="flex flex-col items-center min-w-[70px] gap-1 text-wedding-olive/70 hover:text-wedding-green active:text-wedding-green transition-colors">
            <MapPin size={20} />
            <span className="text-[10px] uppercase tracking-wider font-serif">Local</span>
          </button>
          <button onClick={() => scrollToSection('accommodation')} className="flex flex-col items-center min-w-[70px] gap-1 text-wedding-olive/70 hover:text-wedding-green active:text-wedding-green transition-colors">
            <BedDouble size={20} />
            <span className="text-[10px] uppercase tracking-wider font-serif">Hospedagem</span>
          </button>
          <button onClick={() => scrollToSection('transport')} className="flex flex-col items-center min-w-[70px] gap-1 text-wedding-olive/70 hover:text-wedding-green active:text-wedding-green transition-colors">
            <Bus size={20} />
            <span className="text-[10px] uppercase tracking-wider font-serif">Transporte</span>
          </button>
          <button onClick={() => scrollToSection('dresscode')} className="flex flex-col items-center min-w-[70px] gap-1 text-wedding-olive/70 hover:text-wedding-green active:text-wedding-green transition-colors">
            <Shirt size={20} />
            <span className="text-[10px] uppercase tracking-wider font-serif">Trajes</span>
          </button>
          <button onClick={() => scrollToSection('gifts')} className="flex flex-col items-center min-w-[70px] gap-1 text-wedding-olive/70 hover:text-wedding-green active:text-wedding-green transition-colors">
            <Gift size={20} />
            <span className="text-[10px] uppercase tracking-wider font-serif">Presentes</span>
          </button>
          <button onClick={() => scrollToSection('rsvp')} className="flex flex-col items-center min-w-[70px] gap-1 text-wedding-olive/70 hover:text-wedding-green active:text-wedding-green transition-colors">
            <Mail size={20} />
            <span className="text-[10px] uppercase tracking-wider font-serif">Confirmação</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-12 overflow-hidden">
        {/* Decorative Lilies - Overlapping */}
        <img 
          src="https://png.pngtree.com/png-vector/20250614/ourmid/pngtree-simple-white-lily-illustration-png-image_16534085.png" 
          alt="" 
          className="absolute top-0 left-0 w-48 md:w-64 opacity-40 md:opacity-80 pointer-events-none -translate-x-1/4 -translate-y-1/4 rotate-180 z-20 mix-blend-multiply"
        />
        <img 
          src="https://png.pngtree.com/png-clipart/20240309/original/pngtree-bouquet-of-flowers-lilies-png-image_14549672.png" 
          alt="" 
          className="absolute bottom-0 right-0 w-64 md:w-96 opacity-50 md:opacity-90 pointer-events-none translate-y-1/4 translate-x-1/4 z-20 mix-blend-multiply"
        />
        
        {/* Floating Petals/Leaves */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-wedding-olive/30 rounded-full blur-[2px]" />
        <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-wedding-green/20 rounded-full blur-[2px]" />

        {/* Watercolor Background Placeholder */}
        <div className="absolute inset-0 z-0 bg-[url('https://irmaosdreon.com.br/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-23-at-09.25.42.jpeg')] bg-cover bg-center md:bg-center opacity-60 mix-blend-multiply" />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-wedding-paper/80 via-transparent to-wedding-paper/80 md:from-wedding-paper md:to-wedding-paper" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-8 pt-12 md:pt-0">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img 
              src="https://irmaosdreon.com.br/wp-content/uploads/2026/02/Copia-de-Eclesiastes-4-12.-E-se-alguem-quiser-prevalecer-contra-um-os-dois-lhe-resistirao-e-o-cordao-de-tres-dobras-nao-se-quebra-tao-depressa.-2.png" 
              alt="Monograma" 
              className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 object-contain drop-shadow-sm"
            />
            <h1 className="font-script text-5xl sm:text-6xl md:text-8xl text-wedding-green mb-4 leading-tight drop-shadow-sm">
              Júlia <span className="text-3xl sm:text-4xl md:text-6xl text-wedding-olive">&</span> Jesse
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 font-serif text-lg sm:text-xl md:text-2xl text-wedding-olive tracking-wide mt-6 font-medium">
              <span>26 de Maio de 2026</span>
              <span className="hidden md:inline">•</span>
              <span>Terça-feira</span>
              <span className="hidden md:inline">•</span>
              <span>15:30</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-lg mx-auto"
          >
            <Divider />
            <p className="font-serif italic text-lg md:text-xl text-wedding-olive/80 px-8">
              "Um cordão de três dobras não se rompe facilmente."
              <br />
              <span className="text-sm not-italic mt-2 block uppercase tracking-widest opacity-60">— Eclesiastes 4:12</span>
            </p>
            <Divider />
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <button 
              onClick={() => scrollToSection('rsvp')}
              className="px-8 py-3 bg-wedding-green text-white font-serif tracking-widest uppercase text-sm hover:bg-wedding-olive transition-colors rounded-sm shadow-md"
            >
              Confirmar Presença
            </button>
            <button 
              onClick={() => scrollToSection('details')}
              className="px-8 py-3 border border-wedding-green text-wedding-green font-serif tracking-widest uppercase text-sm hover:bg-wedding-green/10 transition-colors rounded-sm"
            >
              Ver Local
            </button>
          </motion.div>
        </div>
      </section>

      {/* Couple Section */}
      <section id="couple" className="py-24 px-4 bg-white/50 relative">
        {/* Decorative Elements - Continuity */}
        <img 
          src="https://png.pngtree.com/png-vector/20250614/ourmid/pngtree-simple-white-lily-illustration-png-image_16534085.png" 
          alt="" 
          className="absolute -top-20 left-[-50px] w-56 opacity-20 md:opacity-40 pointer-events-none rotate-45 z-0 mix-blend-multiply"
        />
        <img 
          src="https://png.pngtree.com/png-clipart/20240309/original/pngtree-bouquet-of-flowers-lilies-png-image_14549672.png" 
          alt="" 
          className="absolute top-1/2 right-[-100px] w-64 opacity-15 md:opacity-30 pointer-events-none -rotate-12 z-0 mix-blend-multiply"
        />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-script text-5xl text-wedding-green mb-4">Nossa História</h2>
            <p className="font-serif text-lg text-wedding-olive/80 max-w-2xl mx-auto">
              O amor é paciente, o amor é bondoso. Tudo sofre, tudo crê, tudo espera, tudo suporta.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "O Início", icon: Heart, text: "Nos conhecemos em um café numa tarde de outono. Um olhar tímido transformou-se em uma conversa que durou horas." },
              { title: "O Pedido", icon: Gift, text: "Sob as estrelas, no mesmo lugar do nosso primeiro encontro, decidimos caminhar juntos para sempre." },
              { title: "O Futuro", icon: Calendar, text: "Agora, convidamos você para testemunhar o início do nosso capítulo mais feliz." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-wedding-paper p-8 border border-wedding-olive/10 shadow-sm text-center rounded-sm relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-wedding-green/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150" />
                <item.icon className="w-8 h-8 mx-auto text-wedding-green mb-4 relative z-10" />
                <h3 className="font-serif text-xl font-semibold text-wedding-olive mb-3 relative z-10">{item.title}</h3>
                <p className="font-serif text-wedding-olive/70 leading-relaxed relative z-10">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section id="details" className="py-24 px-4 relative">
        {/* Overlapping Decoration */}
        <img 
          src="https://png.pngtree.com/png-vector/20250614/ourmid/pngtree-simple-white-lily-illustration-png-image_16534085.png" 
          alt="" 
          className="absolute -bottom-20 left-10 w-64 opacity-20 md:opacity-40 pointer-events-none rotate-180 z-20 mix-blend-multiply"
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="border border-wedding-olive/20 p-8 md:p-16 bg-wedding-paper shadow-lg relative overflow-hidden">
            {/* Decorative Lily inside card */}
            <img 
              src="https://png.pngtree.com/png-vector/20250614/ourmid/pngtree-simple-white-lily-illustration-png-image_16534085.png" 
              alt="" 
              className="absolute top-0 right-0 w-48 opacity-20 md:opacity-40 pointer-events-none translate-x-1/3 -translate-y-1/3 rotate-12 mix-blend-multiply"
            />

            {/* Corner Ornaments */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-wedding-green/30" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-wedding-green/30" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-wedding-green/30" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-wedding-green/30" />

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 text-center md:text-left">
                <div>
                  <h2 className="font-script text-5xl text-wedding-green mb-2">O Grande Dia</h2>
                  <Divider className="my-4" />
                </div>
                
                <div className="space-y-6 font-serif text-wedding-olive">
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <Calendar className="w-6 h-6 text-wedding-green shrink-0" />
                    <div className="text-left">
                      <p className="text-sm uppercase tracking-widest opacity-60">Data</p>
                      <p className="text-xl">26 de Maio de 2026</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <Clock className="w-6 h-6 text-wedding-green shrink-0" />
                    <div className="text-left">
                      <p className="text-sm uppercase tracking-widest opacity-60">Horário</p>
                      <p className="text-xl">15:30 (Cerimônia)</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <MapPin className="w-6 h-6 text-wedding-green shrink-0" />
                    <div className="text-left">
                      <p className="text-sm uppercase tracking-widest opacity-60">Local</p>
                      <p className="text-xl font-semibold">Sítio Essência</p>
                      <p className="opacity-80">Rua Abra de Dentro, 380</p>
                      <p className="opacity-80">Caraguatatuba, SP</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                  <a 
                    href="https://maps.app.goo.gl/aPPtKgrtumDP1hv98" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-wedding-olive text-white font-serif uppercase tracking-widest text-xs hover:bg-wedding-green transition-colors rounded-sm"
                  >
                    <MapPin size={16} />
                    Abrir no Maps
                  </a>
                  <a 
                    href="https://waze.com/ul?q=Rua%20Abra%20de%20Dentro%2C%20380%2C%20Caraguatatuba%2C%20SP&navigate=yes" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-wedding-olive text-wedding-olive font-serif uppercase tracking-widest text-xs hover:bg-wedding-olive hover:text-white transition-colors rounded-sm"
                  >
                    <Navigation size={16} />
                    Abrir no Waze
                  </a>
                </div>
              </div>

              <div className="h-full min-h-[300px] bg-gray-200 rounded-sm overflow-hidden relative shadow-inner">
                {/* Map Placeholder */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.209673646639!2d-45.4419!3d-23.6389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM4JzIwLjAiUyA0NcKwMjYnMzAuOCJX!5e0!3m2!1sen!2sbr!4v1620000000000!5m2!1sen!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: '300px' }} 
                  allowFullScreen 
                  loading="lazy"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section id="accommodation" className="py-24 px-4 bg-wedding-olive/5 relative">
        {/* Decorative Elements - Continuity */}
        <img 
          src="https://png.pngtree.com/png-clipart/20240309/original/pngtree-bouquet-of-flowers-lilies-png-image_14549672.png" 
          alt="" 
          className="absolute -top-24 right-0 w-80 opacity-10 md:opacity-20 pointer-events-none translate-x-1/4 z-0 mix-blend-multiply"
        />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-script text-5xl text-wedding-green mb-6">Hospedagem no Sítio</h2>
            <div className="w-24 h-1 bg-wedding-green/20 mx-auto mb-8 rounded-full" />
          </div>

          <div className="bg-white p-8 md:p-12 shadow-lg border-l-4 border-wedding-green rounded-sm relative">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 bg-wedding-green/10 rounded-full flex items-center justify-center shrink-0">
                <BedDouble className="w-10 h-10 text-wedding-green" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-serif text-2xl text-wedding-olive mb-4">Suítes Disponíveis</h3>
                <p className="font-serif text-wedding-olive/80 leading-relaxed mb-4">
                  Para nossos queridos convidados que vêm de longe, queremos que se sintam em casa! 
                  Dispomos de suítes no próprio sítio para que possam descansar e aproveitar a festa 
                  até o último minuto conosco.
                </p>
                <p className="font-serif font-medium text-wedding-green">
                  É nosso presente para vocês. Basta sinalizar o interesse na confirmação de presença abaixo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transport Section */}
      <section id="transport" className="py-24 px-4 relative overflow-visible">
        {/* Decorative Elements - Continuity */}
        <img 
          src="https://png.pngtree.com/png-vector/20250614/ourmid/pngtree-simple-white-lily-illustration-png-image_16534085.png" 
          alt="" 
          className="absolute top-0 left-0 w-64 opacity-15 md:opacity-30 pointer-events-none -translate-x-1/4 -translate-y-1/4 rotate-[-45deg] z-0 mix-blend-multiply"
        />
        <img 
          src="https://png.pngtree.com/png-clipart/20240309/original/pngtree-bouquet-of-flowers-lilies-png-image_14549672.png" 
          alt="" 
          className="absolute bottom-0 right-10 w-56 opacity-15 md:opacity-25 pointer-events-none translate-y-1/2 rotate-12 z-0 mix-blend-multiply"
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-script text-5xl text-wedding-green mb-6">Transporte & Transfer</h2>
            <div className="w-24 h-1 bg-wedding-green/20 mx-auto mb-8 rounded-full" />
            <p className="font-serif text-lg text-wedding-olive/80 max-w-2xl mx-auto">
              Para garantir que todos aproveitem a festa com tranquilidade e segurança, organizamos uma opção de transporte exclusiva.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Info Card */}
            <div className="bg-wedding-paper p-8 md:p-10 border border-wedding-olive/20 shadow-sm rounded-sm relative overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-wedding-olive/5 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-150" />
              
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-wedding-olive/10 rounded-full flex items-center justify-center shrink-0">
                  <Bus className="w-8 h-8 text-wedding-olive" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-wedding-olive mb-2">Transfer de Maresias</h3>
                  <p className="font-serif text-wedding-olive/70 text-sm uppercase tracking-wider">Ida e Volta</p>
                </div>
              </div>
              
              <div className="space-y-4 font-serif text-wedding-olive/80 leading-relaxed">
                <p>
                  Oferecemos um serviço de van saindo de pontos estratégicos em Maresias diretamente para o local da cerimônia e festa.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-wedding-green" />
                    <span>Conforto e segurança para todos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-wedding-green" />
                    <span>Sem preocupação com estacionamento</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-wedding-green" />
                    <span>Aproveite a festa até o final!</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Action Card */}
            <div className="bg-wedding-green/5 p-8 md:p-10 border border-wedding-green/10 rounded-sm flex flex-col justify-center relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-wedding-green/20 to-transparent" />
              
              <h3 className="font-serif text-xl font-semibold text-wedding-olive mb-4 text-center">Como Funciona?</h3>
              
              <div className="space-y-6 text-center">
                <p className="font-serif text-wedding-olive/80 leading-relaxed">
                  Teremos uma van parceira como opção de transporte até o local do casamento.
                </p>
                
                <div className="bg-white/60 p-4 rounded-sm border border-wedding-olive/5 inline-block mx-auto">
                  <p className="font-serif text-wedding-green font-medium italic">
                    O valor será de R$ 60,00 por pessoa.
                  </p>
                </div>

                <p className="font-serif text-wedding-olive/80 leading-relaxed text-sm">
                  Caso tenham interesse em utilizar, pedimos que informem isso na confirmação de presença para organizarmos a reserva.
                </p>

                <div className="pt-4">
                  <button 
                    onClick={() => scrollToSection('rsvp')}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-wedding-olive text-white font-serif tracking-widest uppercase text-xs hover:bg-wedding-green transition-colors rounded-sm shadow-md"
                  >
                    <CheckCircle size={16} />
                    Tenho Interesse
                  </button>
                  <p className="text-xs text-wedding-olive/60 mt-3 uppercase tracking-widest">
                    Marque a opção na Confirmação abaixo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dress Code */}
      <section id="dresscode" className="py-24 px-4 bg-wedding-green/5 relative">
        {/* Decorative Elements - Continuity */}
        <img 
          src="https://png.pngtree.com/png-vector/20250614/ourmid/pngtree-simple-white-lily-illustration-png-image_16534085.png" 
          alt="" 
          className="absolute -top-16 left-1/2 w-48 opacity-10 md:opacity-20 pointer-events-none -translate-x-1/2 rotate-90 z-0 mix-blend-multiply"
        />
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="font-script text-5xl text-wedding-green mb-8">Trajes</h2>
          
          <div className="bg-white p-8 md:p-12 shadow-sm border border-wedding-olive/10 rounded-sm">
            <p className="font-serif text-xl text-wedding-olive mb-8">
              Traje Social (Campo)
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 text-left max-w-lg mx-auto">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wedding-green mt-1" />
                  <p className="font-serif text-wedding-olive/80">Confortável e elegante</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wedding-green mt-1" />
                  <p className="font-serif text-wedding-olive/80">Fique à vontade para escolher a cor do seu traje</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 mt-1" />
                  <p className="font-serif text-red-800/80 font-medium">
                    O uso da cor <span className="font-bold uppercase">branca</span> é terminantemente proibido (reservado à noiva)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-wedding-green mt-1" />
                  <p className="font-serif text-wedding-olive/80">Dica: Salto grosso ou bloco para o gramado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gifts */}
      <section id="gifts" className="py-24 px-4 relative">
        {/* Decorative Elements - Continuity */}
        <img 
          src="https://png.pngtree.com/png-clipart/20240309/original/pngtree-bouquet-of-flowers-lilies-png-image_14549672.png" 
          alt="" 
          className="absolute -top-20 left-[-50px] w-64 opacity-10 md:opacity-20 pointer-events-none rotate-[-15deg] z-0 mix-blend-multiply"
        />
        <img 
          src="https://png.pngtree.com/png-vector/20250614/ourmid/pngtree-simple-white-lily-illustration-png-image_16534085.png" 
          alt="" 
          className="absolute bottom-0 right-0 w-56 opacity-15 md:opacity-25 pointer-events-none translate-x-1/4 translate-y-1/4 z-0 mix-blend-multiply"
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-script text-5xl text-wedding-green mb-6">Lista de Presentes</h2>
          <p className="font-serif text-wedding-olive/80 mb-12 max-w-2xl mx-auto">
            Sua presença é o nosso maior presente! Caso queira nos presentear com algo mais, selecionamos algumas opções para nossa casa nova.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 border border-wedding-olive/10 shadow-sm hover:shadow-md transition-shadow">
              <Gift className="w-10 h-10 text-wedding-green mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold text-wedding-olive mb-2">Lista Virtual</h3>
              <p className="text-sm text-wedding-olive/60 mb-6">Itens para o lar e cotas de lua de mel</p>
              <button className="px-6 py-2 border border-wedding-green text-wedding-green uppercase text-xs tracking-widest hover:bg-wedding-green hover:text-white transition-colors">
                Ver Lista
              </button>
            </div>

            <div className="bg-white p-8 border border-wedding-olive/10 shadow-sm hover:shadow-md transition-shadow">
              <Heart className="w-10 h-10 text-wedding-green mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold text-wedding-olive mb-2">Contribuição via Pix</h3>
              <p className="text-sm text-wedding-olive/60 mb-6">Para nos ajudar a construir nossos sonhos</p>
              <button className="px-6 py-2 border border-wedding-green text-wedding-green uppercase text-xs tracking-widest hover:bg-wedding-green hover:text-white transition-colors">
                Ver Chave Pix
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section id="rsvp" className="py-24 px-4 bg-wedding-olive/5 relative">
        {/* Decorative Elements - Continuity */}
        <img 
          src="https://png.pngtree.com/png-vector/20250614/ourmid/pngtree-simple-white-lily-illustration-png-image_16534085.png" 
          alt="" 
          className="absolute -top-10 right-10 w-40 opacity-10 md:opacity-20 pointer-events-none rotate-45 z-0 mix-blend-multiply"
        />

        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 shadow-lg border-t-4 border-wedding-green relative overflow-hidden z-10">
          {/* Decorative Lily inside card */}
          <img 
            src="https://png.pngtree.com/png-clipart/20240309/original/pngtree-bouquet-of-flowers-lilies-png-image_14549672.png" 
            alt="" 
            className="absolute bottom-0 left-0 w-48 opacity-10 md:opacity-15 pointer-events-none -translate-x-1/3 translate-y-1/3 grayscale mix-blend-multiply"
          />

          <div className="text-center mb-10 relative z-10">
            <h2 className="font-script text-5xl text-wedding-green mb-4">Confirme sua Presença</h2>
            <p className="font-serif text-wedding-olive/80 italic">
              Por favor, responda até 20 de Março
            </p>
          </div>

          {!rsvpSent ? (
            <form onSubmit={(e) => { e.preventDefault(); setRsvpSent(true); }} className="space-y-6 relative z-10 text-left">
              <div>
                <label className="block font-serif text-wedding-olive mb-2 text-xs font-bold uppercase tracking-widest">Nome Completo</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-wedding-paper border border-wedding-olive/20 rounded-sm px-4 py-3 font-serif text-wedding-olive focus:border-wedding-green outline-none transition-colors"
                  placeholder="Digite seu nome"
                />
              </div>

              <div>
                <label className="block font-serif text-wedding-olive mb-2 text-xs font-bold uppercase tracking-widest">WhatsApp</label>
                <input 
                  type="tel" 
                  required
                  className="w-full bg-wedding-paper border border-wedding-olive/20 rounded-sm px-4 py-3 font-serif text-wedding-olive focus:border-wedding-green outline-none transition-colors"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label className="block font-serif text-wedding-olive mb-3 text-xs font-bold uppercase tracking-widest">Você irá comparecer?</label>
                <div className="grid grid-cols-2 gap-4">
                  <button type="button" className="bg-wedding-olive text-white font-serif py-3 rounded-sm shadow-sm hover:bg-wedding-green transition-colors">Sim, com certeza!</button>
                  <button type="button" className="bg-wedding-paper border border-wedding-olive/20 text-wedding-olive font-serif py-3 rounded-sm hover:bg-wedding-olive/5 transition-colors">Infelizmente não</button>
                </div>
              </div>

              <div>
                <label className="block font-serif text-wedding-olive mb-2 text-xs font-bold uppercase tracking-widest">Total de convidados (incluindo você)</label>
                <div className="relative">
                  <select className="w-full bg-wedding-paper border border-wedding-olive/20 rounded-sm px-4 py-3 font-serif text-wedding-olive focus:border-wedding-green outline-none transition-colors appearance-none">
                    <option>1 Pessoa</option>
                    <option>2 Pessoas</option>
                    <option>3 Pessoas</option>
                    <option>4 Pessoas</option>
                    <option>5+ Pessoas</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-wedding-olive">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="font-serif text-wedding-olive text-sm">Precisa de van para o local do casamento?</label>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-wedding-green"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <label className="font-serif text-wedding-olive text-sm">Gostaria de se hospedar no local?</label>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-wedding-green"></div>
                  </label>
                </div>
              </div>

              <div>
                <label className="block font-serif text-wedding-olive mb-2 text-xs font-bold uppercase tracking-widest">Crianças (0-10 anos)</label>
                <input 
                  type="number" 
                  min="0"
                  className="w-full bg-wedding-paper border border-wedding-olive/20 rounded-sm px-4 py-3 font-serif text-wedding-olive focus:border-wedding-green outline-none transition-colors"
                  placeholder="0"
                />
              </div>

              <div>
                <label className="block font-serif text-wedding-olive mb-2 text-xs font-bold uppercase tracking-widest">Mensagem aos Noivos (Opcional)</label>
                <textarea 
                  rows={3}
                  className="w-full bg-wedding-paper border border-wedding-olive/20 rounded-sm px-4 py-3 font-serif text-wedding-olive focus:border-wedding-green outline-none transition-colors resize-none"
                  placeholder="Deixe uma mensagem carinhosa ou informe restrições alimentares..."
                ></textarea>
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full bg-wedding-green text-white font-serif uppercase tracking-widest py-4 hover:bg-wedding-olive transition-colors shadow-md rounded-sm"
                >
                  Enviar Confirmação
                </button>
              </div>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 relative z-10"
            >
              <div className="w-16 h-16 bg-wedding-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-wedding-green" />
              </div>
              <h3 className="font-serif text-2xl text-wedding-olive mb-4">Confirmação Enviada!</h3>
              <p className="text-wedding-olive/70 mb-8">
                Obrigado por fazer parte deste momento especial. Mal podemos esperar para te ver!
              </p>
              <button className="text-wedding-green border-b border-wedding-green pb-1 hover:text-wedding-olive hover:border-wedding-olive transition-colors font-serif italic">
                Enviar mensagem no WhatsApp
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wedding-olive text-wedding-paper py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <img 
            src="https://irmaosdreon.com.br/wp-content/uploads/2026/02/Copia-de-Eclesiastes-4-12.-E-se-alguem-quiser-prevalecer-contra-um-os-dois-lhe-resistirao-e-o-cordao-de-tres-dobras-nao-se-quebra-tao-depressa.-2.png" 
            alt="Monograma" 
            className="w-24 h-24 mx-auto mb-8 object-contain opacity-50 grayscale invert"
          />
          <h2 className="font-script text-4xl mb-6">Júlia & Jesse</h2>
          <p className="font-serif italic opacity-60 mb-8 text-sm">
            "O cordão de três dobras não se rompe facilmente."
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            <button onClick={() => scrollToSection('hero')} className="text-xs uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity">Voltar ao Topo</button>
          </div>
          
          <div className="text-[10px] uppercase tracking-widest opacity-30">
            Feito com amor • 2026
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
