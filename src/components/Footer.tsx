import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Clock } from "lucide-react";
import { images } from "@/config/images";

const Footer = () => (
  <footer style={{ backgroundColor: '#FDE2D4' }} className="text-secondary">
    <div className="container mx-auto px-6 md:px-4 py-10 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {/* Brand */}
        <div>
          <img src={images.logoRodape} alt="CEMMEFE" className="h-16 mb-4" />
          <p className="text-muted-foreground text-sm leading-relaxed">
            Cuidado integral para cada mulher, em cada fase da vida.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-heading text-lg mb-4 text-secondary">Menu</h4>
          <nav className="flex flex-col gap-2">
            {[
              { label: "Inicial", path: "/" },
              { label: "Sobre", path: "/sobre" },
              { label: "Serviços", path: "/servicos" },
              { label: "Equipe", path: "/equipe" },
              { label: "Convênios", path: "/convenios" },
              { label: "Galeria", path: "/galeria" },
              { label: "Blog", path: "/blog" },
              { label: "Contato", path: "/contato" },
            ].map((l) => (
              <Link key={l.path} to={l.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-lg mb-4 text-secondary">Contato</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <a href="tel:+554235321037" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={16} /> (42) 3532-1037
            </a>
            <a href="https://wa.me/5542988622662" target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open("https://wa.me/5542988622662", "_blank"); }} className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={16} /> (42) 9 8862-2662
            </a>
            <a href="mailto:contato@cemmefe.com.br" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={16} /> contato@cemmefe.com.br
            </a>
            <div className="flex items-start gap-2 mt-2">
              <MapPin size={16} className="shrink-0 mt-0.5" />
              <span>Rua Paulino Vaz da Silva, 768, Sala 2<br />Centro - São Mateus do Sul, PR</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} /> Segunda a Sexta: 8h às 18h
            </div>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-heading text-lg mb-4 text-secondary">Redes Sociais</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <a href="https://www.instagram.com/cemmefesms/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Instagram size={16} /> @cemmefesms
            </a>
            <a href="https://www.instagram.com/drcristinaveloso/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Instagram size={16} /> @drcristinaveloso
            </a>
            <a href="https://pt-br.facebook.com/cemmefe.sms/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Facebook size={16} /> Facebook
            </a>
            <a href="https://www.youtube.com/channel/UCwnGhxuRvp8n4L43xs_uJiA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Youtube size={16} /> YouTube
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
        {new Date().getFullYear()} CEMMEFE - Centro Médico e Medicina Fetal. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
