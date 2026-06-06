import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Header } from "../components/Header";
import { Contacto } from "../components/Contacto";
import { Footer } from "../components/Footer";
import p_islas from "../assets/imagenes/portadas/hero/p_islas.webp";
import city from "../assets/imagenes/portadas/hero/city.webp";
import cartagena from "../assets/imagenes/portadas/city/cartagena.webp";
import barranquilla from "../assets/imagenes/portadas/city/barranquilla.webp";
import santamarta from "../assets/imagenes/portadas/city/santamarta.webp";
import chiva from "../assets/imagenes/portadas/city/chiva.webp";
import chiva_rumbera from "../assets/imagenes/portadas/city/chiva-rumbera.webp";
import tour_city_cartagena from "../assets/imagenes/tours/city-tous/tour-cartagena.webp";
import tour_city_barranquilla from "../assets/imagenes/tours/city-tous/tour-barranquilla.webp";
import tour_city_santamarta from "../assets/imagenes/tours/city-tous/tour-barranquilla-santamarta.webp";
import tour_chiva from "../assets/imagenes/tours/city-tous/tour-chiva.webp";
import tour_chiva_rumbera from "../assets/imagenes/tours/city-tous/tour-chiva-rumbera.webp";
const toursCity = [
  {
    id: 1,
    title: "City Tour Cartagena",
    price: "$100.000 COP",
    miniImg: cartagena,
    fullFlyer: tour_city_cartagena,
    descriptionKey:"touresCity.cartagena.description"
  },
  {
    id: 2,
    title: "City Tour Barranquilla",
    price: "$220.000 COP",
    miniImg: barranquilla,
    fullFlyer: tour_city_barranquilla,
             descriptionKey:"touresCity.cartagena.description"
  },
  {
    id: 3,
    title: "City tour Barranquilla y Santa  marta",
    price: "$250.000 COP",
    miniImg: santamarta,
    fullFlyer: tour_city_santamarta,
     descriptionKey:"touresCity.cartagena.description"
  },
  {
    id: 4,
    title: "City Tour chiva",
    price: "$55.000 COP",
    miniImg: chiva,
    fullFlyer: tour_chiva,
     descriptionKey:"chivas.description1"
  },
    {
    id: 5,
    title: "City Tour chiva Rumbera",
    price: "$55.000 COP",
    miniImg: chiva_rumbera,
    fullFlyer: tour_chiva_rumbera,
     descriptionKey:"chivas.description2"
  }
];

export function CategoriaCity() {
  const { t } = useTranslation("global");

 const [selectedTour, setSelectedTour] = useState(null);

  return (
    <div>
      <Header />

      <main>
        <Contacto />

        {/* HERO */}
        <div className="relative w-full h-[80vh] sm:h-[100vh] overflow-hidden">
           <img
                      src={city}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover blur-xl scale-110"
                    />
                   <img
                     src={city}
                     alt="Islas"
                     className="absolute inset-0 w-full h-full object-contain"
                   />
         
          <div className="absolute inset-0 bg-black/30" />

          <div className="relative z-10 flex items-center justify-center h-full">
            <h1 className="text-white text-5xl md:text-7xl font-black text-center">
              {t("city.title")}
            </h1>
          </div>
        </div>

        {/* TEXTO */}
        <section className="px-5 py-10 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-[#123499]">
           {t("city.subtitle")}
          </h2>

          <p className="mt-5 max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
            {t("city.text")}
          </p>
        </section>

        {/* TOURS */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-5">
          {toursCity.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="h-[320px] overflow-hidden">
                <img
                  src={tour.miniImg}
                  alt={tour.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6 flex flex-col items-center text-center">
                <h3 className="text-2xl font-black text-[#123499]">
                  {tour.title}
                </h3>

                <p className="mt-2 text-lg font-semibold text-gray-700">
                  {tour.price}
                </p>

                <button
                  onClick={() => setSelectedTour(tour)}
                  className="mt-5 bg-[#C5A059] hover:bg-[#af8c4c] transition text-white px-10 py-3 rounded-full font-bold"
                >
                  {t("top.button")}
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* MODAL */}
        {selectedTour && (
                        <div
  className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
  onClick={() => setSelectedTour(null)}
>
  <div
    className="
      relative
      bg-white
      rounded-2xl
      max-w-5xl
      w-full
      max-h-[90vh]
      overflow-y-auto
    "
    onClick={(e) => e.stopPropagation()}
  >

    <button
      onClick={() => setSelectedTour(null)}
      className="
        absolute top-4 right-4
        w-10 h-10
        rounded-full
        bg-white
        shadow-lg
        font-bold
      "
    >
      ✕
    </button>

         <img
                src={selectedTour.miniImg}
                alt={selectedTour.title}
                className="
                  w-full h-full
                  object-cover
                  group-hover:scale-110
                  transition duration-700
                "
              />

    <div className="p-6">
        <h2 className="text-3xl font-black text-[#123499]">
        {selectedTour.title}
      </h2>

      <p className="text-[#C5A059] text-xl font-bold mt-2">
        {selectedTour.price}
      </p>

      <p className="text-gray-700 mt-4 whitespace-pre-line leading-relaxed">
        {t(selectedTour.descriptionKey)}
      </p>
    <img
      src={selectedTour.fullFlyer}
      alt={selectedTour.title}
      className="w-full"
    />

    </div>
          <a
  href={`https://wa.me/573174849442?text=${encodeURIComponent(
    `${t("reservas.mensaje")} ${selectedTour.title}.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="
    flex
    justify-center
    items-center
    w-fit
    mx-auto
    bg-[#C5A059]
    text-white
    font-bold
    px-6
    py-3
    rounded-xl
    transition
    hover:scale-105
  "
>
  {t("reservas.button")}
</a>
  </div>
</div>
        )}
      </main>
      <Footer/>
    </div>
  );
}