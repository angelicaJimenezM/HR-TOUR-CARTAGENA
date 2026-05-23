import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Header } from "../components/Header";
import { Contacto } from "../components/Contacto";
import p_islas from "../assets/imagenes/portadas/p_islas.webp";
import rosario from "../assets/imagenes/portadas/islas/isla-rosario.webp";
import mucura from "../assets/imagenes/portadas/islas/mucura.webp";
import palmas from "../assets/imagenes/portadas/islas/palmas.webp";
import baru from "../assets/imagenes/portadas/islas/baru.webp";
import palmerito from "../assets/imagenes/portadas/islas/palmerito.webp";
import ibbiza_baru from "../assets/imagenes/portadas/islas/ibbiza-baru.webp";
import sabai from "../assets/imagenes/portadas/islas/sabai.webp";
import fenix from "../assets/imagenes/portadas/islas/fenix.webp";
import ancestral from "../assets/imagenes/portadas/islas/ancestral.webp";
import isla_3 from "../assets/imagenes/portadas/islas/3-islas.webp";
import isla_4 from "../assets/imagenes/portadas/islas/4-islas.webp";
import encanto_baru from "../assets/imagenes/portadas/islas/encanto.webp";
import cocoliso from "../assets/imagenes/portadas/islas/cocoliso.webp";
import mangata from "../assets/imagenes/portadas/islas/mangata.webp";
import luxury from "../assets/imagenes/portadas/islas/luxury.webp";
import tour_isla_3 from "../assets/imagenes/tours/islas/3-islas.webp";
import tour_isla_4 from "../assets/imagenes/tours/islas/4-islas.webp";
import tour_ancestral from "../assets/imagenes/tours/islas/isla-ancestral.webp";
import tour_capri_baru from "../assets/imagenes/tours/islas/isla-capri-baru.webp";
import tour_isla_fenix from "../assets/imagenes/tours/islas/isla-fenix.webp";
import tour_ibbiza_baru from "../assets/imagenes/tours/islas/isla-ibbiza-baru.webp";
import tour_mucura from "../assets/imagenes/tours/islas/isla-mucura.webp";
import tour_isla_palmas from "../assets/imagenes/tours/islas/isla-palmas.webp";
import tour_isla_palmerito from "../assets/imagenes/tours/islas/isla-palmerito.webp";
import tour_isla_rosario from "../assets/imagenes/tours/islas/isla-rosario.webp";
import tour_isla_rosario2 from "../assets/imagenes/tours/islas/isla-rosario2.webp";
import tour_isla_sabai from "../assets/imagenes/tours/islas/isla-sabai.webp";
import tour_isla_baru from "../assets/imagenes/tours/islas/isla-encanto-baru.webp";
import tour_isla_cocoliso from "../assets/imagenes/tours/islas/isla-cocoliso.webp";
import tour_isla_mangata from "../assets/imagenes/tours/islas/isla-mangata.webp";
import tour_isla_luxury from "../assets/imagenes/tours/islas/isla-luxury.webp";

const toursIslas = [
  {
    id: 1,
    title: "Top 3 Islas",
    price: "$510.000 COP",
    miniImg: isla_3,
    fullFlyer: tour_isla_3,
  },
  {
    id: 2,
    title: "Top 4 Islas",
    price: "$180.000 COP",
    miniImg: isla_4,
    fullFlyer: tour_isla_4,
  },
  {
    id: 3,
    title: "Ancestral",
    price: "$190.000 COP",
    miniImg: ancestral,
    fullFlyer: tour_ancestral,
  },
  {
    id: 4,
    title: "Palmerito",
    price: "$230.000 COP",
    miniImg: palmerito,
    fullFlyer: tour_isla_palmerito,
  },
  {
    id: 5,
    title: "Capri Barú",
    price: "$460.000 COP",
    miniImg: baru,
    fullFlyer: tour_capri_baru,
  },
  {
    id: 6,
    title: "Isla Fénix Plan Básico",
    price: "$195.000 COP",
    miniImg: fenix,
    fullFlyer: tour_isla_fenix,
  },
  {
    id: 7,
    title: "Isla Ibbiza Barú",
    price: "$380.000 COP",
    miniImg: ibbiza_baru,
    fullFlyer: tour_ibbiza_baru,
  },
  {
    id: 8,
    title: "Isla Múcura",
    price: "$420.000 COP",
    miniImg: mucura,
    fullFlyer: tour_mucura,
  },
  {
    id: 9,
    title: "Isla Palmas",
    price: "$420.000 COP",
    miniImg: palmas,
    fullFlyer: tour_isla_palmas,
  },
  {
    id: 10,
    title: "Isla Rosario Sencillo",
    price: "$160.000 COP",
    miniImg: rosario,
    fullFlyer: tour_isla_rosario,
  },
  {
    id: 11,
    title: "Isla Rosario",
    price: "$360.000 COP",
    miniImg: rosario,
    fullFlyer: tour_isla_rosario2,
  },
  {
    id: 12,
    title: "Isla Sabai",
    price: "$480.000 COP",
    miniImg: sabai,
    fullFlyer: tour_isla_sabai,
  },
  {
    id: 13,
    title: "Isla del Encanto Barú",
    price: "$420.000 COP",
    miniImg: encanto_baru,
    fullFlyer: tour_isla_baru,
  },
  {
    id: 14,
    title: "Cocoliso",
    price: "$420.000 COP",
    miniImg: cocoliso,
    fullFlyer: tour_isla_cocoliso,
  },
  {
    id: 15,
    title: "Mangata",
    price: "$399.000 COP",
    miniImg: mangata,
    fullFlyer: tour_isla_mangata,
  },
   {
    id: 16,
    title: "luxury",
    price: "$480.000 COP",
    miniImg: luxury,
    fullFlyer: tour_isla_luxury,
  },
];

export function CategoriaIslas() {
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
            src={p_islas}
            alt="Islas"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="relative z-10 flex items-center justify-center h-full">
            <h1 className="text-white text-5xl md:text-7xl font-black text-center">
              {t("islas.title")}
            </h1>
          </div>
        </div>

        {/* TEXTO */}
        <section className="px-5 py-10 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-[#123499]">
            {t("islas.subtitle")}
          </h2>

          <p className="mt-5 max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
            {t("islas.text")}
          </p>
        </section>

        {/* TOURS */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-5">
          {toursIslas.map((tour) => (
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