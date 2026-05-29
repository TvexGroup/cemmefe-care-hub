import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const grantConsent = () => {
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      analytics_storage: "granted",
    });
  }
};

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (accepted === "true") {
      grantConsent();
    } else {
      setTimeout(() => setShow(true), 2000);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "true");
    grantConsent();
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "false");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border p-4 shadow-lg"
        >
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Utilizamos cookies para melhorar sua experiência e analisar o tráfego do site.
              Ao aceitar, você concorda com nossa{" "}
              <a href="/contato" className="underline hover:text-primary">
                política de privacidade
              </a>{" "}
              (LGPD).
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                onClick={decline}
                className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted"
              >
                Recusar
              </button>
              <button
                onClick={accept}
                className="rounded-lg bg-primary px-6 py-2 text-sm font-semibold text-secondary transition-transform hover:scale-105"
              >
                Aceitar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
