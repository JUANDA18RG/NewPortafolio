import { useState, useEffect } from "react";
import GooeyNav from "../../components/layout/GooeyNav";
import MetallicPaint from "../../components/layout/MetallicPaint";
import ThemeToggle from "../../components/ui/ThemeToggle";
import LanguageToggle from "../../components/ui/LanguageToggle";
import Logo from "../../assets/logo.png";
import RawItems from "../../data/Navigation.json";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const Items = RawItems.map((item) => ({
    label: t(item.labelKey),
    href: item.href,
  }));

  // Cerrar menú al hacer resize a desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleMobileNav = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="flex items-center justify-between w-full fixed top-0 left-0 z-50 p-0">
        {/* Logo */}
        <div className="shrink-0 w-20 h-20 md:w-36 md:h-36">
          <MetallicPaint
            imageSrc={Logo}
            seed={10}
            scale={1.8}
            patternSharpness={2}
            noiseScale={0.3}
            speed={0.5}
            liquid={0.4}
            mouseAnimation={false}
            brightness={1.6}
            contrast={1.2}
            refraction={0.04}
            blur={0.008}
            chromaticSpread={1}
            fresnel={2}
            angle={30}
            waveAmplitude={0.4}
            distortion={0.5}
            contour={0.1}
            lightColor="#ffffff"
            darkColor="#8e24aa"
            tintColor="#2d2d2d"
          />
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex shrink-0 items-center gap-4 mr-6 backdrop-blur-md border-2 border-secundario/40 shadow-lg rounded-2xl px-4 py-2">
          <GooeyNav
            items={Items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
          <LanguageToggle />
          <ThemeToggle />
        </div>

        {/* Mobile: toggles + hamburger */}
        <div className="flex md:hidden items-center gap-2 mr-4">
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="p-2 rounded-xl border-2 border-secundario/40 backdrop-blur-md text-white hover:bg-secundario/20 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col md:hidden"
          style={{
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Spacer para el navbar */}
          <div className="h-20" />

          <nav className="flex flex-col items-center justify-center flex-1 gap-3 px-6">
            {Items.map((item, i) => (
              <button
                key={i}
                onClick={() => handleMobileNav(item.href)}
                className="w-full max-w-xs text-center text-lg font-semibold py-3 px-6 rounded-2xl border border-secundario/40 text-white hover:bg-secundario/30 hover:border-secundario transition-all duration-200"
                style={{
                  textShadow: "0 0 10px rgba(142,36,170,0.5)",
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
