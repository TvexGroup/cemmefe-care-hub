import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoCompact from "@/assets/logo-compact.png";

const navLinks = [
  { label: "Inicial", path: "/" },
  { label: "Sobre", path: "/sobre" },
  { label: "Serviços", path: "/servicos" },
  { label: "Equipe", path: "/equipe" },
  { label: "Convênios", path: "/convenios" },
  { label: "Galeria", path: "/galeria" },
  { label: "Blog", path: "/blog" },
  { label: "Contato", path: "/contato" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 shadow-sm"
        style={{ backgroundColor: "#FFFFFF", opacity: 1 }}
      >
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoCompact} alt="CEMMEFE" className="h-10 md:h-12" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5542988622662"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-secondary transition-transform hover:scale-105"
            >
              Agendar Consulta
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-secondary"
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border overflow-hidden"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <nav className="flex flex-col gap-1 p-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3.5 rounded-lg text-base font-medium transition-colors min-h-[44px] flex items-center ${
                      location.pathname === link.path
                        ? "bg-primary/10 text-primary"
                        : "text-secondary hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="https://wa.me/5542988622662"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 rounded-lg bg-primary px-5 py-3.5 text-center text-base font-semibold text-secondary min-h-[44px]"
                >
                  Agendar Consulta
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
