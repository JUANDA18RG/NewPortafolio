import { useTranslation } from "react-i18next";

const languages = {
  es: {
    flag: "https://flagcdn.com/w40/es.png",
    label: "ES",
    alt: "Español",
  },
  en: {
    flag: "https://flagcdn.com/w40/us.png",
    label: "EN",
    alt: "English",
  },
};

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const isSpanish = i18n.language === "es";
  const current = isSpanish ? languages.es : languages.en;
  const next = isSpanish ? languages.en : languages.es;

  const toggle = () => i18n.changeLanguage(isSpanish ? "en" : "es");

  return (
    <button
      onClick={toggle}
      title={isSpanish ? "Switch to English" : "Cambiar a Español"}
      className="group relative flex items-center gap-2 px-3 h-10 rounded-full transition-all duration-300 hover:scale-105 bg-complemento text-principal shadow-md cursor-pointer select-none overflow-hidden border-2 border-secundario/30"
    >
      {/* Estado normal: idioma actual */}
      <span className="flex items-center gap-2 transition-all duration-300 group-hover:-translate-y-8 group-hover:opacity-0">
        <img
          src={current.flag}
          alt={current.alt}
          className="w-5 h-auto rounded-sm object-cover shadow-sm"
        />
        <span className="text-xs font-bold tracking-wider">
          {current.label}
        </span>
      </span>

      {/* Hover: idioma al que va a cambiar */}
      <span className="absolute inset-0 flex items-center justify-center gap-2 translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <img
          src={next.flag}
          alt={next.alt}
          className="w-5 h-auto rounded-sm object-cover shadow-sm"
        />
        <span className="text-xs font-bold tracking-wider">{next.label}</span>
      </span>
    </button>
  );
}
