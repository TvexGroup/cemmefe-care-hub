// ─── Cloudinary Image Config ────────────────────────────────────────────────
// Paste the Public ID from Cloudinary next to each label below.
// Find the Public ID: Cloudinary Dashboard → Media Library → click image → copy "Public ID"
// Leave "" for images you haven't uploaded yet — they simply won't appear.
// ────────────────────────────────────────────────────────────────────────────

const CLOUD = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const c = (id: string) =>
  id ? `https://res.cloudinary.com/${CLOUD}/image/upload/${id}` : "";

export const images = {

  // ── LOGOS ──────────────────────────────────────────────────────────────────
  logoHeader: c("Logo_com_espaço_em_branco_cortado_nq2n44"),      // Logo pequeno no menu / cabeçalho
  logoRodape:  c("Logo_com_espaço_em_branco_cortado_nq2n44"),      // Logo grande no rodapé

  // ── PÁGINA INICIAL — Carrossel ─────────────────────────────────────────────
  slide1: c("0G6A1403_q9pk2q"),  // 1ª foto do carrossel
  slide2: c("0G6A0942_ytlvgk"),  // 2ª foto do carrossel
  slide3: c("0G6A1393_szlcx4"),  // 3ª foto do carrossel

  // ── PÁGINA INICIAL — Seção "Sobre a clínica" ───────────────────────────────
  homepageClinica:    c("91cc9a95-38e4-4248-a8ed-7bc0364d9bd4_ndarak"),
  homepageUltrassom:  c("0G6A0104_y0wdfo"),                             // Equipamento de ultrassonografia

  // ── PÁGINA INICIAL — Seção "Nossa Equipe" ─────────────────────────────────
  homepageDraCristina: c("0G6A9923_vkkoto"),    // Foto Dra. Cristina (card na homepage)
  homepageHelen:       c("0G6A9952_xuqacc"),    // Foto Dr. Matheus Veloso (card na homepage)

  // ── PÁGINA SOBRE ───────────────────────────────────────────────────────────
  sobreBanner:  c("91cc9a95-38e4-4248-a8ed-7bc0364d9bd4_ndarak"),  // Foto no topo da página Sobre
  sobreEquipe:  c("91cc9a95-38e4-4248-a8ed-7bc0364d9bd4_ndarak"),  // Foto da equipe na página Sobre

  // ── PÁGINA SERVIÇOS ────────────────────────────────────────────────────────
  servicosBanner: c("65b2284e-c5d1-43d0-93d9-45b693c34f61_lj0o6l"),  // Foto no topo da página Serviços

  // ── PÁGINA EQUIPE ──────────────────────────────────────────────────────────
  equipeBanner:  c("91cc9a95-38e4-4248-a8ed-7bc0364d9bd4_ndarak"),  // Foto no topo da página Equipe
  draCristina:   c("0G6A0127_obbn7h"),   // Foto Dra. Cristina Veloso Andreacci
  helen:         c("0G6A0006_mqxuj8"),   // Foto Dr. Matheus Veloso
  funcionaria1:  c(""),   // Enfermeira
  funcionaria2:  c(""),   // Técnica de Enfermagem
  funcionaria3:  c(""),   // Recepcionista
  funcionaria4:  c(""),   // Auxiliar Administrativo
  funcionaria5:  c(""),   // Técnica em Ultrassonografia
  funcionaria6:  c(""),   // Recepcionista

  // ── PÁGINA CONVÊNIOS ───────────────────────────────────────────────────────
  conveniosBanner: c("65b2284e-c5d1-43d0-93d9-45b693c34f61_lj0o6l"),  // Foto no topo da página Convênios

  // ── PÁGINA BLOG ────────────────────────────────────────────────────────────
  blogBanner: c("0G6A1018_eeyodi"),  // Foto no topo da página Blog

  // ── PÁGINA CONTATO ─────────────────────────────────────────────────────────
  contatoBanner: c("65b2284e-c5d1-43d0-93d9-45b693c34f61_lj0o6l"),  // Foto no topo da página Contato

  // ── PÁGINA GALERIA — Tab "Clínica" ─────────────────────────────────────────
  galeriaClinica1: c("0G6A0756_hzziga"),  // Recepção
  galeriaClinica2: c("0G6A1403_q9pk2q"),                  // Sala de exames
  galeriaClinica3: c("0G6A1197_vonjbb"),                  // Sala de laudos
  galeriaClinica4: c(""),                  // Espaço de espera

  // ── PÁGINA GALERIA — Tab "Equipamentos" ───────────────────────────────────
  galeriaEquipamento1: c(""),  // Ultrassonografia
  galeriaEquipamento2: c(""),  // Sala de procedimentos
  galeriaEquipamento3: c(""),  // Equipamentos modernos
  galeriaEquipamento4: c(""),  // Diagnóstico por imagem

  // ── PÁGINA GALERIA — Tab "Eventos" ────────────────────────────────────────
  galeriaEvento1: c(""),  // Encontro com pacientes
  galeriaEvento2: c(""),  // Palestra educativa
  galeriaEvento3: c(""),  // Workshop da equipe
  galeriaEvento4: c(""),  // Confraternização
};
