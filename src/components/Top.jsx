import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BotonReservar } from './BotonReservar'
import { BotonCompartir } from "./BotonCompartir";


const API_URL = "http://127.0.0.1:8000/api/tours/";
const API_BASE = "http://127.0.0.1:8000";

// Normalizador universal de rutas media provenientes de la BD Django
const formatearUrlMedia = (urlMedia) => {
  if (!urlMedia) return "";
  if (urlMedia.startsWith("http") || urlMedia.startsWith("/media/")) {
    return urlMedia.startsWith("http") ? urlMedia : `${API_BASE}${urlMedia}`;
  }
  return `${API_BASE}/media/${urlMedia}`;
};


export function Top() {
  // 📌 Modifica aquí los IDs de los tours que quieres mostrar
  const IDS_TOP_DESEADOS = [7, 8, 15];

  const [toursBD, setToursBD] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topCurrent, setTopCurrent] = useState(0);
  const [selectedFlyer, setSelectedFlyer] = useState(null);

  const [favoritos, setFavoritos] = useState(() => {
    const guardados = localStorage.getItem("favoritos");
    return guardados ? JSON.parse(guardados) : [];
  });

  const { t, i18n } = useTranslation("global");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const toursRaw = Array.isArray(data) ? data : data.results || [];
        const filtrados = toursRaw.filter((tour) =>
          IDS_TOP_DESEADOS.includes(tour.id)
        );
        setToursBD(filtrados);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando los tours de la BD:", err);
        setLoading(false);
      });
  }, []);

 

  const nextTopSlide = () => {
    if (toursBD.length === 0) return;
    setTopCurrent((prev) => (prev + 1) % toursBD.length);
  };

  const prevTopSlide = () => {
    if (toursBD.length === 0) return;
    setTopCurrent((prev) => (prev - 1 + toursBD.length) % toursBD.length);
  };

  if (loading) {
    return (
      <div className="text-center py-10 font-bold text-[#123499]">
        Cargando top tours...
      </div>
    );
  }

  if (toursBD.length === 0) {
    return null;
  }

  return (
    <div className="pt-2 ">
      <h1 className="text-2xl font-bold text-center text-[#123499]">
        {t("top.title")}
      </h1>
     

      <div className="relative w-full h-[450px] flex items-center justify-center overflow-hidden">
        {toursBD.map((tour, index) => {
          const position =
            index === topCurrent
              ? "center"
              : index === (topCurrent - 1 + toursBD.length) % toursBD.length
              ? "left"
              : index === (topCurrent + 1) % toursBD.length
              ? "right"
              : "hidden";

          const titulo = i18n.language === "en" ? tour.titulo_en : tour.titulo_es;
          const descripcion = i18n.language === "en" ? tour.descripcion_en : tour.descripcion_es;

          return (
            <motion.div
              key={tour.id}
              drag={position === "center" ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -100) nextTopSlide();
                if (info.offset.x > 100) prevTopSlide();
              }}
              animate={{
                x:
                  position === "center"
                    ? 0
                    : position === "left"
                    ? -240
                    : position === "right"
                    ? 270
                    : 0,
                scale: position === "center" ? 1 : 0.9,
                opacity: position === "hidden" ? 0 : 1,
                rotateY:
                  position === "left"
                    ? 21
                    : position === "right"
                    ? -19
                    : 0,
                zIndex: position === "center" ? 20 : 10,
              }}
              transition={{ duration: 0.6 }}
              className="
                absolute
                w-[320px]
                sm:w-[700px]
                h-[380px]
                sm:h-[430px]
                rounded-3xl
                bg-cover
                bg-center
                p-5
                flex
                flex-col
                justify-end
                text-white
                shadow-2xl
                overflow-hidden
              "
              style={{
                backgroundImage: `url(${formatearUrlMedia(tour.imagen_portada)})`,
              }}
            >
              <div className="absolute inset-0 bg-black/33" />

              {/* FAVORITO */}
       

              {/* PRECIO */}
              <div className="absolute top-4 right-4 bg-[#123499] border border-[#b38f4d] px-4 py-2 rounded-full shadow-lg z-10">
                <p className="font-bold text-sm text-white">
                  ${Number(tour.precio_adulto || 0).toLocaleString("es-CO")} COP
                </p>
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl font-bold">{titulo}</h2>

                {/* 📌 DESCRIPCIÓN DEVUELTA AL CARRUSEL */}
                <div className="mt-3 text-white text-left whitespace-pre-line leading-relaxed border-l-4 border-[#C5A059] pl-4 line-clamp-3 text-sm md:text-base">
                  {descripcion}
                </div>

                <button
                  onClick={() => setSelectedFlyer(tour)}
                  className="
                    mt-4
                    bg-[#C5A059]
                    text-white
                    font-bold
                    py-3
                    px-6
                    rounded-xl
                    hover:scale-105
                    transition-all
                  "
                >
                  {t("top.button")}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* MODAL DETALLES */}
      {selectedFlyer && (() => {
        const precioAdulto = Number(selectedFlyer.precio_adulto || 0);
        const precioNinoEspecial = Number(selectedFlyer.precio_nino || 0);
        const tieneDescuentoNino = precioNinoEspecial > 0 && precioNinoEspecial < precioAdulto;
        const tituloModal = i18n.language === "en" ? selectedFlyer.titulo_en : selectedFlyer.titulo_es;
        const descModal = i18n.language === "en" ? selectedFlyer.descripcion_en : selectedFlyer.descripcion_es;

        return (
          <div
            className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedFlyer(null)}
          >
            <div
              className="bg-[#eee7da] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedFlyer(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-lg text-black font-bold z-10 hover:bg-gray-200 transition"
              >
                ✕
              </button>

              <div className="p-6">
                <h2 className="text-3xl font-black text-[#123499] text-center">
                  {tituloModal}
                </h2>

                {/* TARIFAS */}
                <div className="text-center my-6 bg-blue-50/50 p-4 rounded-xl max-w-md mx-auto border border-blue-100">
                  <p className="text-sm font-semibold text-gray-700">
                    {t("reservas.tarifaAdulto")} <span className="text-[#123499] font-bold">${precioAdulto.toLocaleString("es-CO")} COP</span>
                  </p>
                  {tieneDescuentoNino ? (
                    <p className="text-sm font-semibold text-gray-700 mt-1">
                      {t("reservas.tarifaNiños")} ({selectedFlyer.rango_edad_nino || "Niños"}): <span className="text-[#123499] font-bold">${precioNinoEspecial.toLocaleString("es-CO")} COP</span>
                    </p>
                  ) : (
                    <p className="text-xs text-gray-500 mt-1 italic">
                      {t("reservas.noAplica")}
                    </p>
                  )}
                </div>

                {/* VIDEO DESDE BD */}
                {selectedFlyer.video && (
                  <div className="mt-5 rounded-xl overflow-hidden bg-black shadow-inner">
                    <video
                      src={formatearUrlMedia(selectedFlyer.video)}
                      controls
                      autoPlay
                      className="w-full max-h-[400px] object-contain"
                    />
                  </div>
                )}

                <div className="mt-5 text-[#123499] text-left whitespace-pre-line leading-relaxed border-l-4 border-[#C5A059] pl-4">
                  {descModal}
                </div>

                {/* FLYER DESDE BD */}
                {selectedFlyer.flyer && (
                  <img
                    src={formatearUrlMedia(selectedFlyer.flyer)}
                    alt={tituloModal}
                    className="w-full mt-6 rounded-xl shadow"
                  />
                )}

                {/* BOTONES */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <BotonReservar tour={selectedFlyer}/>

                  <BotonCompartir tour={selectedFlyer}/>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}