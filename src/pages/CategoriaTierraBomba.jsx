import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Header } from "../components/Header";
import { Contacto } from "../components/Contacto";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BotonReservar } from "../components/BotonReservar";
import { BotonCompartir } from "../components/BotonCompartir";
import fondo from '../assets/imagenes/portadas/hero/fondo.webp';
import tierra_bomba from "../assets/imagenes/portadas/hero/tierra_bomba.webp";

const API = "http://127.0.0.1:8000";

const compartirTour = async (tour) => {
  try {
    if (navigator.share) {
      await navigator.share({
        title: tour.titulo_es,
        text: `Mira este tour de HR Tours Cartagena: ${tour.titulo_es}`,
        url: window.location.href
      });
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Enlace copiado al portapapeles");
    }
  } catch (error) {
    console.log(error);
  }
};

export function CategoriaTierraBomba() {
  const [toursIslas, setToursIslas] = useState([]);
  const { t, i18n } = useTranslation("global");
  const [selectedTour, setSelectedTour] = useState(null);

  useEffect(() => {
    fetch(`${API}/api/tours/`)
      .then(res => res.json())
      .then(data => {
        const toursRaw = Array.isArray(data) ? data : (data.results || []);

        const islasTours = toursRaw.filter(
          tour => tour.categoria && tour.categoria.toString().toUpperCase() === "TIERRA_BOMBA_PUNTA_ARENA"
        );

        setToursIslas(islasTours);
      })
      .catch(err =>
        console.error("Error cargando los tours:", err)
      );
  }, []);

  const [favoritos, setFavoritos] = useState(() => {
    const guardados = localStorage.getItem("favoritos");
    return guardados ? JSON.parse(guardados) : [];
  });

  const toggleFavorito = (id) => {
    const nuevosFavoritos = favoritos.includes(id)
      ? favoritos.filter(fav => fav !== id)
      : [...favoritos, id];

    setFavoritos(nuevosFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
  };

  const formatearUrlMedia = (urlMedia) => {
    if (!urlMedia) return "";
    if (urlMedia.startsWith("http") || urlMedia.startsWith("/media/")) {
      return urlMedia.startsWith("http") ? urlMedia : `${API}${urlMedia}`;
    }
    return `${API}/media/${urlMedia}`;
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* CAPA DE FONDO CON OPACIDAD (Independiente del resto de la página) */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-10 pointer-events-none z-0" 
        style={{ backgroundImage: `url(${fondo})` }}
      />

      {/* CONTENIDO PRINCIPAL (Con z-10 para asegurar que quede nítido encima del fondo) */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <Contacto />

          {/* HERO */}
          <div className="relative w-full h-[80vh] sm:h-[100vh] overflow-hidden">
           

            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2.9 }}
              src={tierra_bomba}
              className="absolute inset-0 w-full h-full object-cover"
              alt="Hero Islas"
            />

           

            <div className="relative z-10 flex items-center justify-center h-full flex-col">
              <h1 className="text-[#ffffffe8] text-5xl md:text-7xl font-black text-center">
                Tierra Bomba Tours
              </h1>
            </div>
          </div>

          {/* TEXTO INFORMATIVO */}
          <section className="px-5 py-10 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-[#123499]">
              {t("islas.subtitle")}
            </h2>
            <p className="mt-5 text-gray-700">
              {t("islas.text")}
            </p>
          </section>

          {/* LISTADO DE TOURS */}
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-5">
            <p className="col-span-full text-center text-gray-600 font-medium">
              ❤️ {favoritos.length} favoritos guardados
            </p>

            {toursIslas.length === 0 ? (
              <p className="col-span-full text-center text-gray-400 py-10">
                No se encontraron tours para la categoría "islas".
              </p>
            ) : (
              toursIslas.map((tour) => {
                const precioAdulto = Number(tour.precio_adulto || tour.precio || 0);

                return (
                  <div
                    key={tour.id}
                    className="bg-[#eee7da] rounded-3xl overflow-hidden shadow-lg flex flex-col justify-between"
                  >
                    <div className="relative h-[320px]">
                      <img
                        src={formatearUrlMedia(tour.imagen_portada)}
                        alt={tour.titulo_es}
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                      />

                      <button
                        onClick={() => toggleFavorito(tour.id)}
                        className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-md text-xl hover:scale-110 transition z-10"
                      >
                        {favoritos.includes(tour.id) ? (
                          <FaHeart className="text-red-500" />
                        ) : (
                          <FaRegHeart className="text-gray-600" />
                        )}  
                      </button>

                      <div className="absolute top-4 right-4 bg-[#339259] border border-[#ffffff]  text-white px-3 py-1 rounded-full text-xs font-bold shadow-md z-10">
                        ${precioAdulto.toLocaleString("es-CO")} COP
                      </div>
                    </div>

                    <div className="p-6 text-center flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-[#123499]">
                          {i18n.language === "en" ? tour.titulo_en : tour.titulo_es}
                        </h3>
                        <p className="font-semibold mt-2 text-gray-800">
                          ${precioAdulto.toLocaleString("es-CO")} COP
                        </p>
                      </div>

                      <button
                        onClick={() => setSelectedTour(tour)}
                        className="mt-5 bg-[#322c9f] text-white px-10 py-3 rounded-full font-bold hover:bg-[#b38f4b] transition w-full"
                      >
                        {t("top.button")}
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </section>

          {/* MODAL DETALLE DEL TOUR */}
          {selectedTour && (() => {
            const precioAdulto = Number(selectedTour.precio_adulto || selectedTour.precio || 0);
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
                    <h3 className="text-3xl font-black text-[#123499] text-center">
                      {i18n.language === "en" ? selectedTour.titulo_en : selectedTour.titulo_es}
                    </h3>

                    <div className="text-center my-6 bg-blue-50/50 p-4 rounded-xl max-w-md mx-auto border border-blue-100 shadow-sm">
                      <p className="text-sm font-semibold text-gray-700">
                        {t("reservas.tarifaAdulto")} <span className="text-[#123499] font-bold">${precioAdulto.toLocaleString("es-CO")} COP</span>
                      </p>
                      {tieneDescuentoNino ? (
                        <p className="text-sm font-semibold text-gray-700 mt-1">
                          {t("reservas.tarifaNiños")} ({selectedTour.rango_edad_nino || "Niños"}): <span className="text-[#123499] font-bold">${precioNinoEspecial.toLocaleString("es-CO")} COP</span>
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

                    <div className="mt-5 text-gray-700 text-left whitespace-pre-line leading-relaxed border-l-4 border-[#C5A059] pl-4">
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

                      <BotonCompartir tour={selectedTour}/>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </main>

        <Footer />
      </div>
    </div>
  );
}