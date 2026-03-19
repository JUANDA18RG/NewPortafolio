import { useTranslation } from "react-i18next";
import Folder from "../../components/ui/Folder";
import LightRays from "../../components/ui/LightRays";
import { projects, type Project } from "../../data/Projects";
import "../../styles/Projects.css";

const statusConfig: Record<
  Project["status"],
  { labelKey: string; className: string }
> = {
  production: {
    labelKey: "projects.in_production",
    className: "bg-green-500/10 border border-green-500/30 text-green-400",
  },
  personal: {
    labelKey: "projects.personal",
    className: "bg-blue-500/10 border border-blue-500/30 text-blue-400",
  },
  wip: {
    labelKey: "projects.in_progress",
    className: "bg-orange-500/10 border border-orange-500/30 text-orange-400",
  },
};

function Proyects() {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen overflow-hidden py-20 px-6 md:px-16 scroll-mt-20 md:scroll-mt-36"
      style={{
        background:
          "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 40%, #1e0a2e 100%)",
      }}
    >
      {/* Orb 1 */}
      <div className="absolute -top-24 -right-24 w-100 h-100 rounded-full bg-[#8e24aa]/20 blur-[80px] pointer-events-none z-0" />
      {/* Orb 2 */}
      <div className="absolute -bottom-20 -left-16 w-75 h-75 rounded-full bg-[#2d2d2d]/80 blur-[80px] pointer-events-none z-0" />

      {/* LightRays — wrapper absoluto para que quede detrás */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-[0.85] pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#f5f5f5"
          raysSpeed={0.6}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          pulsating={false}
          fadeDistance={0.6}
          saturation={0.8}
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center gap-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#f5f5f5] tracking-tight leading-tight">
            {t("projects.heading_prefix", "Lo que he")}{" "}
            <span className="bg-linear-to-r from-[#8e24aa] to-[#ce93d8] bg-clip-text text-transparent">
              {t("projects.heading_highlight", "construido")}
            </span>
          </h2>
          <p className="text-sm text-[#f5f5f5]/50 max-w-md">
            {t(
              "projects.subtitle",
              "Algunos de los proyectos en los que he trabajado",
            )}
          </p>
        </div>

        {/* Grid 3×3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group relative flex flex-col bg-white/3 border border-[#8e24aa]/20 rounded-2xl p-6 cursor-pointer backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#8e24aa]/60 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_30px_rgba(142,36,170,0.1)] cursor-target"
            >
              {/* Número */}
              <span className="absolute top-4 right-4 text-[10px] font-bold text-[#8e24aa]/50 tabular-nums tracking-wide">
                {String(project.id).padStart(2, "0")}
              </span>

              {/* Folder */}
              <div className="flex justify-center items-end h-32.5 mb-3 pt-8">
                <Folder size={0.75} color={project.color} />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-base font-bold text-[#f5f5f5] leading-snug">
                  {t(`projects.items.${project.id}.title`, project.title)}
                </h3>
                <p className="text-[13px] text-[#f5f5f5]/55 leading-relaxed flex-1">
                  {t(
                    `projects.items.${project.id}.description`,
                    project.description,
                  )}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#8e24aa]/15 border border-[#8e24aa]/30 text-[#ce93d8] tracking-wide transition-colors duration-200 group-hover:bg-[#8e24aa]/25 group-hover:border-[#8e24aa]/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Status */}
                <span
                  className={`inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full w-fit mt-2 ${statusConfig[project.status].className}`}
                >
                  <span className="w-1 h-1 rounded-full bg-current" />
                  {t(
                    statusConfig[project.status].labelKey,
                    statusConfig[project.status].labelKey,
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Proyects;
