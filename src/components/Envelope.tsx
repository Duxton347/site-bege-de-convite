import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, PanInfo, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface EnvelopeProps {
  onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  const x = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isSealBroken, setIsSealBroken] = useState(false);
  
  // Smooth out the drag value
  const xSmooth = useSpring(x, { damping: 50, stiffness: 400 });

  // Map drag distance to opening progress (0 to 1)
  // We allow dragging up to 200px to the right or left
  const progress = useTransform(xSmooth, [-200, 0, 200], [1, 0, 1]);
  
  // Flap animations based on progress
  const leftFlapRotate = useTransform(progress, [0, 1], [0, -140]);
  const rightFlapRotate = useTransform(progress, [0, 1], [0, 140]);
  
  const leftFlapX = useTransform(progress, [0, 1], [0, -100]);
  const rightFlapX = useTransform(progress, [0, 1], [0, 100]);
  
  const opacity = useTransform(progress, [0.8, 1], [1, 0]);
  const scale = useTransform(progress, [0, 1], [1, 1.1]);

  const handleDragEnd = (_: any, info: PanInfo) => {
    setIsDragging(false);
    if (Math.abs(info.offset.x) > 100) {
      onOpen();
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-wedding-paper overflow-hidden"
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
      style={{ opacity }}
    >
      {/* Background Texture */}
      <div className="absolute inset-0 paper-texture opacity-50" />

      {/* Envelope Container */}
      <div className="relative w-full max-w-2xl aspect-[4/3] flex items-center justify-center perspective-1000">
        
        {/* Content Preview (Behind flaps) */}
        <motion.div 
          className="absolute inset-0 bg-white shadow-2xl flex items-center justify-center p-12"
          style={{ scale }}
        >
          <div className="text-center">
            <h2 className="font-script text-5xl md:text-7xl text-wedding-green mb-4">Júlia & Jesse</h2>
            <p className="font-serif text-wedding-olive uppercase tracking-widest">26 . 05 . 2026</p>
          </div>
        </motion.div>

        {/* Left Flap */}
        <motion.div 
          className="absolute inset-y-0 left-0 w-1/2 bg-[#EBE5D9] shadow-[5px_0_15px_rgba(0,0,0,0.1)] origin-left z-20 flex items-center justify-end border-r border-black/5"
          style={{ 
            rotateY: leftFlapRotate,
            x: leftFlapX,
            transformStyle: 'preserve-3d'
          }}
        >
           <div className="absolute inset-0 paper-texture opacity-30" />
           
           {/* Left Half of Seal (Visible only when broken) */}
           <motion.div 
             className="absolute right-0 top-1/2 -translate-y-1/2 w-[40px] h-[80px] overflow-hidden z-30 pointer-events-none"
             initial={{ opacity: 0 }}
             animate={{ opacity: isSealBroken ? 1 : 0 }}
             transition={{ duration: 0.2 }}
           >
             <div className="w-[80px] h-[80px] absolute left-0 top-0 bg-gradient-to-br from-[#859778] to-[#666e48] rounded-full shadow-lg flex items-center justify-center border-4 border-white/10">
                <img 
                  src="https://irmaosdreon.com.br/wp-content/uploads/2026/02/Copia-de-Eclesiastes-4-12.-E-se-alguem-quiser-prevalecer-contra-um-os-dois-lhe-resistirao-e-o-cordao-de-tres-dobras-nao-se-quebra-tao-depressa.-2.png" 
                  alt="" 
                  className="w-16 h-16 object-contain opacity-90"
                />
             </div>
           </motion.div>
        </motion.div>

        {/* Right Flap */}
        <motion.div 
          className="absolute inset-y-0 right-0 w-1/2 bg-[#EBE5D9] shadow-[-5px_0_15px_rgba(0,0,0,0.1)] origin-right z-20 flex items-center justify-start border-l border-black/5"
          style={{ 
            rotateY: rightFlapRotate,
            x: rightFlapX,
            transformStyle: 'preserve-3d'
          }}
        >
           <div className="absolute inset-0 paper-texture opacity-30" />

           {/* Right Half of Seal (Visible only when broken) */}
           <motion.div 
             className="absolute left-0 top-1/2 -translate-y-1/2 w-[40px] h-[80px] overflow-hidden z-30 pointer-events-none"
             initial={{ opacity: 0 }}
             animate={{ opacity: isSealBroken ? 1 : 0 }}
             transition={{ duration: 0.2 }}
           >
             <div className="w-[80px] h-[80px] absolute right-0 top-0 bg-gradient-to-br from-[#859778] to-[#666e48] rounded-full shadow-lg flex items-center justify-center border-4 border-white/10">
                <img 
                  src="https://irmaosdreon.com.br/wp-content/uploads/2026/02/Copia-de-Eclesiastes-4-12.-E-se-alguem-quiser-prevalecer-contra-um-os-dois-lhe-resistirao-e-o-cordao-de-tres-dobras-nao-se-quebra-tao-depressa.-2.png" 
                  alt="" 
                  className="w-16 h-16 object-contain opacity-90"
                />
             </div>
           </motion.div>
        </motion.div>

        {/* Intact Seal (Clickable) */}
        <AnimatePresence>
          {!isSealBroken && (
            <motion.button
              className="absolute z-50 w-20 h-20 rounded-full shadow-xl flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 transition-transform"
              style={{ 
                background: 'linear-gradient(135deg, #859778 0%, #666e48 100%)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2), inset 0 2px 5px rgba(255,255,255,0.2)'
              }}
              onClick={() => setIsSealBroken(true)}
              exit={{ scale: 1.1, opacity: 0, transition: { duration: 0.2 } }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <div className="absolute inset-0 rounded-full border-4 border-white/10" />
              <img 
                src="https://irmaosdreon.com.br/wp-content/uploads/2026/02/Copia-de-Eclesiastes-4-12.-E-se-alguem-quiser-prevalecer-contra-um-os-dois-lhe-resistirao-e-o-cordao-de-tres-dobras-nao-se-quebra-tao-depressa.-2.png" 
                alt="Selo" 
                className="w-16 h-16 object-contain p-1 opacity-90"
              />
              
              {/* Pulse Effect */}
              <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping opacity-50" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Interaction Layer (Draggable Area - Only active when seal is broken) */}
        {isSealBroken && (
          <motion.div
            className="absolute z-40 w-40 h-40 rounded-full cursor-grab active:cursor-grabbing flex items-center justify-center"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Visual Hint */}
            {!isDragging && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute top-full mt-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm flex items-center gap-2 text-wedding-olive text-xs uppercase tracking-widest font-semibold whitespace-nowrap pointer-events-none"
              >
                <ArrowLeft size={12} className="animate-pulse" />
                Arraste para abrir
                <ArrowRight size={12} className="animate-pulse" />
              </motion.div>
            )}
          </motion.div>
        )}

      </div>
    </motion.div>
  );
}
