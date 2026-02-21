import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import type { RefObject } from "react";
import {
  FaCode,
  FaUser,
  FaHeart,
  FaStar,
  FaGraduationCap,
} from "react-icons/fa";
import TargetCursor from "../../components/ui/TargetCursor";
import Carousel from "../../components/ui/Carousel";
import Antigravity from "../../components/layout/Antigravity";
import VariableProximity from "../../components/ui/VariableProximity";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function AboutMe() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: "2", label: t("about.stat_exp") },
    { value: "10+", label: t("about.stat_projects") },
    { value: "6+", label: t("about.stat_tech") },
  ];

  const carouselItems = [
    {
      id: 1,
      title: t("about.facet1_title"),
      description: t("about.facet1_desc"),
      icon: <FaCode style={{ width: 28, height: 28 }} />,
    },
    {
      id: 2,
      title: t("about.facet2_title"),
      description: t("about.facet2_desc"),
      icon: <FaUser style={{ width: 28, height: 28 }} />,
    },
    {
      id: 3,
      title: t("about.facet3_title"),
      description: t("about.facet3_desc"),
      icon: <FaHeart style={{ width: 28, height: 28 }} />,
    },
    {
      id: 4,
      title: t("about.facet4_title"),
      description: t("about.facet4_desc"),
      icon: <FaStar style={{ width: 28, height: 28 }} />,
    },
    {
      id: 5,
      title: t("about.facet5_title"),
      description: t("about.facet5_desc"),
      icon: <FaGraduationCap style={{ width: 28, height: 28 }} />,
    },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden scroll-mt-20 md:scroll-mt-36 py-24 px-4"
    >
      {/* Cursor objetivo */}
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={false}
        parallaxOn
        hoverDuration={0.2}
      />

      {/* Capa 1 — color base */}
      <div className="absolute inset-0 z-0 bg-[#0d0514]" />

      {/* Capa 2 — partículas antigravedad */}
      <div className="absolute inset-0 w-full h-full z-1 pointer-events-none">
        <Antigravity
          count={220}
          color="#f5f5f5"
          particleSize={1.8}
          magnetRadius={8}
          ringRadius={12}
          waveSpeed={0.3}
          waveAmplitude={0.8}
          autoAnimate
          particleShape="sphere"
          rotationSpeed={0.08}
          pulseSpeed={0.6}
        />
      </div>

      {/* Capa 3 — velo de color sobre las partículas */}
      <div className="absolute inset-0 z-2 bg-linear-to-b from-secundario/30 via-principal/70 to-secundario/20 pointer-events-none" />

      {/* ── Contenido principal ── */}
      <div className="relative z-30 w-full max-w-6xl flex flex-col items-center gap-10">
        {/* Título con VariableProximity */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="text-center"
        >
          <VariableProximity
            label={t("about.title")}
            containerRef={containerRef as RefObject<HTMLElement>}
            className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight"
            fromFontVariationSettings="'wght' 100, 'wdth' 75"
            toFontVariationSettings="'wght' 900, 'wdth' 125"
            radius={180}
            falloff="linear"
          />
        </motion.div>

        {/* Rol con línea decorativa */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="flex items-center gap-4"
        >
          <span className="h-px w-12 bg-secundario/60" />
          <span className="text-center text-lg md:text-xl font-semibold text-secundario tracking-wider uppercase">
            {t("about.role")}
          </span>
          <span className="h-px w-12 bg-secundario/60" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          className="text-xl md:text-2xl text-white font-medium text-center max-w-2xl leading-relaxed"
        >
          {t("about.tagline")}
        </motion.p>

        {/* Descripción */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
          className="text-base md:text-lg text-white text-center max-w-3xl leading-loose"
        >
          {t("about.description")}
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={5}
          className="grid grid-cols-3 gap-4 md:gap-8 w-full max-w-xl"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="cursor-target flex flex-col items-center gap-1 px-4 py-5 rounded-2xl border border-secundario/30 bg-white/5 backdrop-blur-sm hover:border-secundario/70 hover:bg-secundario/10 transition-all duration-300 group"
            >
              <span className="text-3xl md:text-4xl font-black text-white group-hover:text-secundario transition-colors duration-300">
                {s.value}
              </span>
              <span className="text-xs md:text-sm text-white/50 text-center leading-tight group-hover:text-white/70 transition-colors duration-300">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Separador */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={6}
          className="flex items-center gap-4 w-full max-w-lg"
        >
          <span className="h-px flex-1 bg-linear-to-r from-transparent to-secundario/40" />
          <span className="text-secundario/60 text-lg">✦</span>
          <span className="h-px flex-1 bg-linear-to-l from-transparent to-secundario/40" />
        </motion.div>

        {/* Carrusel de facetas */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={7}
          className="w-full flex justify-center "
        >
          <div className="w-full max-w-150 cursor-target">
            <Carousel
              items={carouselItems}
              baseWidth={600}
              autoplay
              autoplayDelay={3500}
              pauseOnHover
              loop
              round={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
