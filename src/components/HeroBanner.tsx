import { motion } from "framer-motion";

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  image?: string;
  children?: React.ReactNode;
}

const HeroBanner = ({ title, subtitle, children }: HeroBannerProps) => (
  <section className="bg-[#F3F3F0] py-16 md:py-24">
    <div className="container mx-auto px-4 text-left md:text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[34px] md:text-[44px] lg:text-[48px] font-heading font-bold text-secondary mb-4 leading-tight"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base md:text-lg text-[#545454] max-w-2xl md:mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
      {children && <div className="mt-6">{children}</div>}
    </div>
  </section>
);

export default HeroBanner;
