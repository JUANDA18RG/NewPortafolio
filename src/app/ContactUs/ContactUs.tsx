import { useRef } from "react";
import StickerPeel from "../../components/layout/StickerPeel";
import Aurora from "../../components/layout/Aurora";
import Logo from "../../assets/logo.png";
import Gmail from "../../assets/gmail.png";

export default function ContactUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Aurora invertida en colores */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Aurora
          colorStops={["#f5f5f5", "#8E24AA", "#f5f5f5"]}
          blend={0}
          amplitude={1.5}
          speed={1}
          flipY
        />
      </div>

      {/* Sticker arrastrable — bounds = toda la sección */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-20">
        <StickerPeel
          className="pointer-events-auto"
          imageSrc={Gmail}
          width={100}
          rotate={8}
          peelBackHoverPct={35}
          peelBackActivePct={50}
          shadowIntensity={0.6}
          lightingIntensity={0.15}
          initialPosition={{ x: 60, y: 280 }}
          peelDirection={-45}
        />
        <StickerPeel
          className="pointer-events-auto"
          imageSrc={Logo}
          width={250}
          rotate={-12}
          peelBackHoverPct={35}
          peelBackActivePct={50}
          shadowIntensity={0.6}
          lightingIntensity={0.15}
          initialPosition={{ x: 1150, y: 320 }}
          peelDirection={45}
        />
      </div>

      {/* Formulario de contacto */}
      <div className="relative z-10 w-full max-w-lg mx-auto px-6">
        <div className="backdrop-blur-xl bg-principal/40 border border-secundario/40 rounded-3xl p-8 shadow-2xl">
          {/* Encabezado */}
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-extrabold text-complemento drop-shadow-lg mb-2">
              Hablemos 👋
            </h2>
            <p className="text-complemento/70 text-base font-light">
              ¿Tienes un proyecto en mente? Escríbeme y lo hacemos realidad.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const mailto = `mailto:tu@email.com?subject=${encodeURIComponent(data.get("subject") as string)}&body=${encodeURIComponent(`Nombre: ${data.get("name")}\n\n${data.get("message")}`)}`;
              window.location.href = mailto;
            }}
            className="flex flex-col gap-5"
          >
            {/* Nombre */}
            <div className="flex flex-col gap-1">
              <label className="text-complemento/80 text-sm font-semibold tracking-wide">
                Nombre
              </label>
              <input
                name="name"
                required
                type="text"
                placeholder="Juan Pérez"
                className="bg-white/10 border border-white/25 rounded-xl px-4 py-3 text-complemento placeholder-complemento/40 outline-none focus:border-secundario focus:ring-2 focus:ring-secundario/30 transition-all"
              />
            </div>

            {/* Asunto */}
            <div className="flex flex-col gap-1">
              <label className="text-complemento/80 text-sm font-semibold tracking-wide">
                Asunto
              </label>
              <input
                name="subject"
                required
                type="text"
                placeholder="Proyecto freelance · Colaboración · ..."
                className="bg-white/10 border border-white/25 rounded-xl px-4 py-3 text-complemento placeholder-complemento/40 outline-none focus:border-secundario focus:ring-2 focus:ring-secundario/30 transition-all"
              />
            </div>

            {/* Mensaje */}
            <div className="flex flex-col gap-1">
              <label className="text-complemento/80 text-sm font-semibold tracking-wide">
                Mensaje
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Cuéntame sobre tu idea..."
                className="bg-white/10 border border-white/25 rounded-xl px-4 py-3 text-complemento placeholder-complemento/40 outline-none focus:border-secundario focus:ring-2 focus:ring-secundario/30 transition-all resize-none"
              />
            </div>

            {/* Botón enviar */}
            <button
              type="submit"
              className="mt-2 w-full bg-secundario hover:bg-secundario/80 text-complemento font-bold py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              Enviar mensaje ✉️
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
