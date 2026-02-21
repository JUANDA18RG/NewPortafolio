import LogoLoop from "../../components/ui/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiNestjs,
  SiBootstrap,
  SiMongodb,
  SiGraphql,
  SiShadcnui,
  SiCplusplus,
  SiAngular,
} from "react-icons/si";
import { GridScan } from "../../components/layout/GridScan";

export default function Tech() {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    {
      node: <SiJavascript />,
      title: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      node: <SiNodedotjs />,
      title: "Node.js",
      href: "https://nodejs.org",
    },
    {
      node: <SiPython />,
      title: "Python",
      href: "https://www.python.org",
    },
    {
      node: <SiPostgresql />,
      title: "PostgreSQL",
      href: "https://www.postgresql.org",
    },
    {
      node: <SiNestjs />,
      title: "NestJS",
      href: "https://nestjs.com",
    },
    {
      node: <SiBootstrap />,
      title: "Bootstrap",
      href: "https://getbootstrap.com",
    },
    {
      node: <SiMongodb />,
      title: "MongoDB",
      href: "https://www.mongodb.com",
    },
    {
      node: <SiGraphql />,
      title: "GraphQL",
      href: "https://graphql.org",
    },
    {
      node: <SiShadcnui />,
      title: "shadcn/ui",
      href: "https://ui.shadcn.com",
    },
    {
      node: <SiCplusplus />,
      title: "C++",
      href: "https://isocpp.org",
    },
    {
      node: <SiAngular />,
      title: "Angular",
      href: "https://angular.io",
    },
  ];
  return (
    <div
      id="skills"
      className="w-full py-20 relative flex items-center justify-center bg-principal scroll-mt-20 md:scroll-mt-36"
    >
      {/* Fondo interactivo */}
      <div className="absolute inset-0 w-full h-full">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#f5f5f5"
          gridScale={0.1}
          scanColor="#8e24aa"
          scanOpacity={0.8}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>
      {/* Carrusel encima del fondo */}
      <div className="relative z-10 w-full">
        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="left"
          logoHeight={60}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="transparent"
          ariaLabel="Technology partners"
          iconColor="#f5f5f5"
        />
      </div>
    </div>
  );
}
