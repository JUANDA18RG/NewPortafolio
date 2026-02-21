import { useTranslation } from "react-i18next";
import InfiniteMenu from "../../components/layout/InfiniteMenu";
import LetterGlitch from "../../components/layout/LetterGlitch";
import { experiences } from "../../data/Experience";

export default function Experience() {
  const { t } = useTranslation();

  const items = experiences.map((exp) => ({
    image: exp.image,
    link: exp.link,
    title: t(exp.titleKey),
    description: t(exp.descriptionKey),
  }));

  return (
    <div
      id="experience"
      className="w-full h-screen relative flex items-center justify-center scroll-mt-20 md:scroll-mt-36"
    >
      <div className="absolute inset-0 w-full h-full -z-10">
        <LetterGlitch
          glitchColors={["#2D2D2D", "#8E24AA", "#F5F5F5"]}
          glitchSpeed={50}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
        />
      </div>

      <div className="w-full h-full flex items-center justify-center relative z-10">
        <InfiniteMenu items={items} scale={1} />
      </div>
    </div>
  );
}
