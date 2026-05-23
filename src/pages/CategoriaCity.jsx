import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Header } from "../components/Header";
import { Contacto } from "../components/Contacto";
import p_islas from "../assets/imagenes/portadas/p_islas.webp";
import city from "../assets/imagenes/portadas/city.webp";
import cartagena from "../assets/imagenes/portadas/city/cartagena.webp";
import barranquilla from "../assets/imagenes/portadas/city/barranquilla.webp";
import santamarta from "../assets/imagenes/portadas/city/santamarta.webp";
import tour_city_cartagena from "../assets/imagenes/tours/city-tous/tour-cartagena.webp";
import tour_city_barranquilla from "../assets/imagenes/tours/city-tous/tour-barranquilla.webp";
import tour_city_santamarta from "../assets/imagenes/tours/city-tous/tour-barranquilla-santamarta.webp";

const toursCity = [
  {
    id: 1,
    title: "City Tour Cartagena",
    price: "$100.000 COP",
    miniImg: cartagena,
    fullFlyer: tour_city_cartagena,
  },
  {
    id: 2,
    title: "City Tour Barranquilla",
    price: "$150.000 COP",
    miniImg: barranquilla,
    fullFlyer: tour_city_barranquilla,
  },
  {
    id: 3,
    title: "City tour Barranquilla y Santa  marta",
    price: "$250.000 COP",
    miniImg: santamarta,
    fullFlyer: tour_city_santamarta,
  },

];

export function CategoriaCity() {
  const { t } = useTranslation("global");

  const [selectedFlyer, setSelectedFlyer] = useState(null);

  return (
    <div>
      <Header />

      <main>
        <Contacto />

        {/* HERO */}
        <div className="relative w-full h-[80vh] sm:h-[100vh] overflow-hidden">
          <img
            src={city}
            alt="Islas"
            className="absolute inset-0 w-full h-full object-cover"
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
                  onClick={() => setSelectedFlyer(tour.fullFlyer)}
                  className="mt-5 bg-[#C5A059] hover:bg-[#af8c4c] transition text-white px-10 py-3 rounded-full font-bold"
                >
                  {t("top.button")}
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* MODAL */}
        {selectedFlyer && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-5"
            onClick={() => setSelectedFlyer(null)}
          >
            <img
              src={selectedFlyer}
              alt="Flyer"
              className="max-w-full max-h-full rounded-2xl shadow-2xl"
            />
          </div>
        )}
      </main>
    </div>
  );
}