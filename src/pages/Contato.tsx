import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, Instagram, MapPin, MessageCircle } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import SeoHead from "@/components/SeoHead";
import { images } from "@/config/images";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const contactInfo = [
  { icon: Phone, label: "Telefone", value: "(42) 3532-1037", href: "tel:+554235321037" },
  { icon: MessageCircle, label: "WhatsApp Recepção", value: "(42) 9 8862-2662", href: "https://wa.me/5542988622662" },
  { icon: MessageCircle, label: "WhatsApp Protocolos e Pacotes", value: "(42) 9 8836-6939", href: "https://wa.me/5542988366939" },
  { icon: Mail, label: "E-mail", value: "contato@cemmefe.com.br", href: "mailto:contato@cemmefe.com.br" },
];

const Contato = () => {
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", servico: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${form.nome}. Telefone: ${form.telefone}. Serviço: ${form.servico}. Mensagem: ${form.mensagem}`;
    window.open(`https://wa.me/5542988622662?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <SeoHead title="Contato | CEMMEFE - Fale Conosco" description="Entre em contato com a CEMMEFE. Telefone, WhatsApp, e-mail e formulário de contato. Agende sua consulta." path="/contato" />

      <HeroBanner title="Fale Conosco" subtitle="Estamos prontos para atender você" image={images.contatoBanner} />

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <motion.h2 {...fadeUp} className="text-2xl font-heading font-bold text-secondary mb-8">Informações de Contato</motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((c, i) => (
                  <motion.a key={c.label} {...fadeUp} transition={{ delay: i * 0.1 }} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" onClick={c.href.startsWith("http") ? (e: React.MouseEvent) => { e.preventDefault(); window.open(c.href, "_blank"); } : undefined} className="rounded-xl bg-muted p-5 hover:shadow-sm transition-shadow block">
                    <c.icon size={24} className="text-primary mb-2" />
                    <p className="text-xs text-muted-foreground mb-1">{c.label}</p>
                    <p className="font-semibold text-secondary text-sm">{c.value}</p>
                  </motion.a>
                ))}
              </div>

              {/* Address */}
              <motion.div {...fadeUp} className="rounded-xl bg-muted p-5 mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={20} className="text-primary" />
                  <h3 className="font-semibold text-secondary">Endereço</h3>
                </div>
                <p className="text-muted-foreground text-sm">Rua Paulino Vaz da Silva, 768, Sala 2</p>
                <p className="text-muted-foreground text-sm">Centro - São Mateus do Sul | PR</p>
              </motion.div>

              {/* Hours */}
              <motion.div {...fadeUp} className="rounded-xl bg-muted p-5 mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={20} className="text-primary" />
                  <h3 className="font-semibold text-secondary">Horário de Atendimento</h3>
                </div>
                <p className="text-muted-foreground text-sm">De segunda a sexta, das 8h às 18h</p>
              </motion.div>

              {/* Social */}
              <motion.div {...fadeUp}>
                <h3 className="font-heading font-semibold text-secondary mb-4">Redes Sociais</h3>
                <div className="flex flex-col gap-3">
                  {[
                    { handle: "@cemmefesms", url: "https://www.instagram.com/cemmefesms/" },
                    { handle: "@matheusvelosolopes", url: "https://www.instagram.com/matheusvelosolopes/" },
                    { handle: "@drcristinaveloso", url: "https://www.instagram.com/drcristinaveloso/" },
                  ].map((s) => (
                    <a key={s.handle} href={s.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors">
                      <Instagram size={16} /> {s.handle}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Form */}
            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-heading font-bold text-secondary mb-8">Envie uma Mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} placeholder="Nome completo" required className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm" />
                <input value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} placeholder="Telefone" required className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm" />
                <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" placeholder="E-mail" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm" />
                <select value={form.servico} onChange={(e) => setForm({ ...form, servico: e.target.value })} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground">
                  <option value="">Serviço de interesse</option>
                  <option>Consulta Ginecológica</option>
                  <option>Pré-Natal</option>
                  <option>Ultrassonografia</option>
                  <option>Medicina Fetal</option>
                  <option>Procedimentos</option>
                  <option>Outro</option>
                </select>
                <textarea value={form.mensagem} onChange={(e) => setForm({ ...form, mensagem: e.target.value })} placeholder="Sua mensagem" rows={4} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm resize-none" />
                <button type="submit" className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-secondary transition-transform hover:scale-105">
                  Enviar via WhatsApp
                </button>
              </form>
            </motion.div>
          </div>

          {/* Google Maps */}
          <motion.div {...fadeUp} className="mt-12 rounded-xl overflow-hidden h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.123456789!2d-50.3839!3d-25.8744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua+Paulino+Vaz+da+Silva%2C+768+-+Centro%2C+S%C3%A3o+Mateus+do+Sul+-+PR!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização CEMMEFE"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contato;
