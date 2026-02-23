import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Envelope from './components/Envelope';
import MainContent from './components/MainContent';

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-wedding-paper text-wedding-olive font-serif selection:bg-wedding-green/20">
      <AnimatePresence>
        {!isEnvelopeOpen && (
          <Envelope onOpen={() => setIsEnvelopeOpen(true)} />
        )}
      </AnimatePresence>
      
      {isEnvelopeOpen && <MainContent />}
    </div>
  );
}
