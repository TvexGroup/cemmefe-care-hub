import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="mb-3 w-72 rounded-2xl bg-background shadow-xl border border-border p-5"
          >
            <button onClick={() => setOpen(false)} className="absolute top-3 right-3 text-muted-foreground hover:text-foreground">
              <X size={16} />
            </button>
            <p className="text-sm text-foreground mb-4">
              Olá! Como podemos ajudar você hoje? 😊
            </p>
            <a
              href="https://wa.me/5542988622662"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => { e.preventDefault(); window.open("https://wa.me/5542988622662", "_blank"); }}
              className="block w-full rounded-lg bg-[#25D366] py-2.5 text-center text-sm font-semibold text-background transition-transform hover:scale-105"
            >
              Iniciar Conversa
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110 animate-pulse-soft"
        aria-label="WhatsApp"
      >
        <MessageCircle size={28} className="text-background" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
