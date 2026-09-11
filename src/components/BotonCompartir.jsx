import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function BotonCompartir({ tour }) {
  const { t, i18n } = useTranslation("global");

  const compartirTour = async (tourData) => {
    if (!tourData) return;

    const titulo = i18n.language === "en" 
      ? (tourData.titulo_en || tourData.nombre) 
      : (tourData.titulo_es || tourData.nombre);

    const shareData = {
      title: titulo,
      text: `Mira este tour de HR Tours Cartagena: ${titulo}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("¡Enlace copiado al portapapeles!");
      }
    } catch (error) {
      // Ignora el error si el usuario cancela el diálogo de compartir
      if (error.name !== "AbortError") {
        console.error("Error al compartir:", error);
      }
    }
  };

  return (
    <button
      onClick={() => compartirTour(tour)}
      className="flex justify-center items-center bg-[#123499] text-white font-bold px-6 py-3 rounded-xl transition hover:scale-105 shadow"
    >
      {t("reservas.button2")}
    </button>
  );
}