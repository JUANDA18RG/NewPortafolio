import FloatingLines from "../../components/layout/FloatingLines";
import CurvedLoop from "../../components/ui/CurvedLoop";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div
      id="home"
      className="w-full h-screen relative flex items-center justify-center pt-20 scroll-mt-20 md:scroll-mt-36"
    >
      <div className="absolute inset-0 w-full h-full z-20">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={10}
          lineDistance={100}
          bendRadius={20}
          bendStrength={-2}
          interactive={true}
          parallax={true}
          animationSpeed={0.5}
        />
      </div>

      {/* Texto de presentación centrado */}
      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center z-30 pointer-events-none gap-4 px-6">
        <span className="text-lg md:text-xl text-white/60 tracking-widest uppercase font-semibold text-center">
          {t("hero.greeting")}
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-center text-white drop-shadow-lg leading-tight">
          Juan David
          <br />
          Ramírez Grismaldo
        </h1>
        <p className="text-xl md:text-2xl text-center text-white/70 max-w-lg font-light">
          {t("hero.subtitle")}
        </p>
        <div className="w-full max-w-2xl">
          <CurvedLoop
            marqueeText={t("hero.marquee")}
            speed={2}
            curveAmount={250}
            direction="right"
            interactive={false}
            className="text-3xl"
          />
        </div>
      </div>
    </div>
  );
}
