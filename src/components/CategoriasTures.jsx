import { useState, useEffect } from 'react';
import { BotonReservar } from './BotonReservar';
import { BotonCompartir } from './BotonCompartir';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const API_URL = "http://127.0.0.1:8000/api/tours/"; 
const API_BASE = "http://127.0.0.1:8000";

// Normalizador universal de rutas media
const formatearUrlMedia = (urlMedia) => {
  if (!urlMedia) return "";
  if (urlMedia.startsWith("http") || urlMedia.startsWith("/media/")) {
    return urlMedia.startsWith("http") ? urlMedia : `${API_BASE}${urlMedia}`;
  }
  return `${API_BASE}/media/${urlMedia}`;
};

// Mapeo de categorías con sus IDs correspondientes y rutas
const CATEGORIAS_CONFIG = [
  { id: 'pasadiaMaritimos', titulo: 'Tours Marítimos', ids: [7, 16, 15, 21, 18], ruta: '/CategoriaPasadíasMarítimos', mostrarTituloGeneral: true },
  { id: 'tierraBomba', titulo: 'Tierra Bomba Tours', ids: [10, 12, 23], ruta: '/CategoriaTierraBomba' },
  { id: 'publicoRosario', titulo: 'Público Rosario Tours', ids: [8, 25, 26], ruta: '/CategoriaPublicoRosario' },
  { id: 'clasicoRosario', titulo: 'Clásico Rosario Tours', ids: [27, 28, 42], ruta: '/CategoriaClasicoRosario' },
  { id: 'baru', titulo: 'Terrestre Barú Tours', ids: [33, 35, 39], ruta: '/CategoriaTerrestreBaru' },
  { id: 'bahia', titulo: 'Bahía Tours', ids: [37, 40], ruta: '/CategoriaBahia' },
  { id: 'city', titulo: 'City Tours', ids: [1, 3, 4], ruta: '/CategoriaCity' },
  { id: 'chivas', titulo: 'Chivas Tours', ids: [5, 6], ruta: '/CategoriasChivas' },
];

export function CategoriasTures() {
  const [toursBD, setToursBD] = useState([]);
  const [selectedTour, setSelectedTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation("global");

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        const toursRaw = Array.isArray(data) ? data : (data.results || []);
        setToursBD(toursRaw);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error cargando los tours de la BD:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-10 font-bold text-[#123499]">Cargando toures desde la base de datos...</div>;
  }

  return (
    <div>
      {CATEGORIAS_CONFIG.map((cat) => {
        const toursFiltrados = toursBD.filter(tour => cat.ids.includes(tour.id));

        if (toursFiltrados.length === 0) return null;

        return (
          <section key={cat.id} id={cat.id} className="py-6">
            {cat.mostrarTituloGeneral && (
              <h2 className="text-3xl md:text-4xl font-black text-[#123499] text-center mb-10">
                {t("subtoures.category")}
              </h2>
            )}

            <div className="flex items-center justify-between mb-6 px-2">
              <h3 className="text-2xl md:text-4xl font-black text-[#123499]">
                {cat.titulo}
              </h3>
              <Link to={cat.ruta} className="bg-[#2fb86a] text-white font-bold px-4 py-2 rounded-2xl transition-all duration-300 hover:scale-105 shadow-md">
                {t("top.button")}
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[250px] gap-3 md:gap-5">
              {toursFiltrados.map((tour, index) => (
                <div
                  key={tour.id}
                  className={`relative rounded-3xl overflow-hidden group cursor-pointer
                    ${index === 0 ? "col-span-2 row-span-2 md:row-span-3" : ""}
                    ${index === 2 ? "md:col-span-1 md:row-span-3" : ""}
                  `}
                >
                  <img
                    src={formatearUrlMedia(tour.imagen_portada)}
                    alt={tour.titulo_es}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-3 right-3 bg-[#339259] border border-[#ffffff] text-white px-3 py-1 rounded-full text-[10px] md:text-xs font-bold z-10 shadow-lg">
                    ${new Intl.NumberFormat('es-CO').format(Number(tour.precio_adulto || 0))} COP
                  </div>
                  <div className="absolute bottom-0 p-3 md:p-5 text-white z-10">
                    <h3 className={`font-black leading-tight mt-1 ${index === 0 ? "text-2xl md:text-4xl" : "text-lg md:text-2xl"}`}>
                      {i18n.language === "en" ? tour.titulo_en : tour.titulo_es}
                    </h3>
                    <button
                      onClick={() => setSelectedTour(tour)}
                      className="mt-3 md:mt-4 bg-[#C5A059] text-white px-4 md:px-5 py-2 rounded-full text-sm font-bold hover:scale-105 transition-all duration-300"
                    >
                      {t("top.button")}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      {/* ================= MODAL DETALLES ================= */}
      {selectedTour && (() => {
        const precioAdulto = Number(selectedTour.precio_adulto || 0);
        const precioNinoEspecial = Number(selectedTour.precio_nino || 0);
        const tieneDescuentoNino = precioNinoEspecial > 0 && precioNinoEspecial < precioAdulto;

        return (
          <div
            className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedTour(null)}
          >
            <div
              className="bg-[#eee7da] rounded-2xl max-w-4xl w-full my-8 relative overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedTour(null)}
                className="absolute right-4 top-4 w-10 h-10 rounded-full bg-white text-black text-xl font-black shadow-xl flex items-center justify-center hover:bg-gray-200 transition z-50"
              >
                ✕
              </button>

              <div className="p-6 max-h-[85vh] overflow-y-auto">
                <h2 className="text-3xl font-black text-[#123499] text-center">
                  {i18n.language === "en" ? selectedTour.titulo_en : selectedTour.titulo_es}
                </h2>

                <div className="text-center my-6 bg-blue-50/50 p-4 rounded-xl max-w-md mx-auto border border-blue-100">
                  <p className="text-sm font-semibold text-gray-700">
                    {t("reservas.tarifaAdulto")} <span className="text-[#123499] font-bold">${precioAdulto.toLocaleString('es-CO')} COP</span>
                  </p>
                  {tieneDescuentoNino ? (
                    <p className="text-sm font-semibold text-gray-700 mt-1">
                      {t("reservas.tarifaNiños")} ({selectedTour.rango_edad_nino || "Niños"} años): <span className="text-[#123499] font-bold">${precioNinoEspecial.toLocaleString('es-CO')} COP</span>
                    </p>
                  ) : (
                    <p className="text-xs text-gray-500 mt-1 italic">
                      {t("reservas.noAplica")}
                    </p>
                  )}
                </div>

                {selectedTour.video && (
                  <div className="mt-5 rounded-xl overflow-hidden bg-black shadow-inner">
                    <video
                      src={formatearUrlMedia(selectedTour.video)}
                      controls
                      autoPlay
                      className="w-full max-h-[400px] object-contain"
                    />
                  </div>
                )}

                <div className="mt-5 text-[#322c9f] text-left whitespace-pre-line leading-relaxed border-l-4 border-[#C5A059] pl-4">
                  {i18n.language === "es" ? selectedTour.descripcion_es : selectedTour.descripcion_en}
                </div>

                {selectedTour.flyer && (
                  <div className="mt-5 rounded-xl overflow-hidden shadow">
                    <img
                      src={formatearUrlMedia(selectedTour.flyer)}
                      className="w-full h-auto object-cover"
                      alt="Flyer Informativo"
                    />
                  </div>
                )}

                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                  <BotonReservar tour={selectedTour} />
                  <BotonCompartir tour={selectedTour} />
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}