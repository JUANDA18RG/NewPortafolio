import GooeyNav from "../../components/layout/GooeyNav";
import MetallicPaint from "../../components/layout/MetallicPaint";
import ThemeToggle from "../../components/ui/ThemeToggle";
import LanguageToggle from "../../components/ui/LanguageToggle";
import Logo from "../../assets/logo.png";
import RawItems from "../../data/Navigation.json";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();

  const Items = RawItems.map((item) => ({
    label: t(item.labelKey),
    href: item.href,
  }));

  return (
    <div className="flex items-center justify-between w-full  fixed top-0 left-0 z-20 p-0 ">
      <div className="shrink-0 w-36 h-36 ">
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
          // Colors
          lightColor="#ffffff"
          darkColor="#8e24aa"
          tintColor="#2d2d2d"
        />
      </div>

      <div className="shrink-0 flex items-center gap-4 mr-6 backdrop-blur-md border-2 border-secundario/40 shadow-lg rounded-2xl px-4 py-2">
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
    </div>
  );
}
