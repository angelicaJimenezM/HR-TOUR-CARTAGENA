import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Header } from "../components/Header";
import { Contacto } from "../components/Contacto";
import { Footer } from "../components/Footer";
import p_islas from "../assets/imagenes/portadas/hero/p_islas.webp";
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
  descriptionKey: "touresIslas.top3islas.description"
},
{
  id: 2,
  title: "Top 4 Islas",
  price: "$180.000 COP",
  miniImg: isla_4,
  fullFlyer: tour_isla_4,
  descriptionKey: "touresIslas.top4islas.description"
},
{
  id: 3,
  title: "Ancestral",
  price: "$190.000 COP",
  miniImg: ancestral,
  fullFlyer: tour_ancestral,
  descriptionKey: "touresIslas.ancestral.description"
},
{
  id: 4,
  title: "Palmerito",
  price: "$230.000 COP",
  miniImg: palmerito,
  fullFlyer: tour_isla_palmerito,
  descriptionKey: "touresIslas.palmerito.description"
},
{
  id: 5,
  title: "Capri Barú",
  price: "$460.000 COP",
  miniImg: baru,
  fullFlyer: tour_capri_baru,
  descriptionKey: "touresIslas.capribaru.description"
},
{
  id: 6,
  title: "Isla Fénix Plan Básico",
  price: "$195.000 COP",
  miniImg: fenix,
  fullFlyer: tour_isla_fenix,
  descriptionKey: "touresIslas.fenix.description"
},
{
  id: 7,
  title: "Isla Ibbiza Barú",
  price: "$380.000 COP",
  miniImg: ibbiza_baru,
  fullFlyer: tour_ibbiza_baru,
  descriptionKey: "touresIslas.ibbizabaru.description"
},
{
  id: 8,
  title: "Isla Múcura",
  price: "$420.000 COP",
  miniImg: mucura,
  fullFlyer: tour_mucura,
  descriptionKey: "touresIslas.mucura.description"
},
{
  id: 9,
  title: "Isla Palma",
  price: "$420.000 COP",
  miniImg: palmas,
  fullFlyer: tour_isla_palmas,
  descriptionKey: "touresIslas.palma.description"
},
{
  id: 10,
  title: "Isla Rosario Sencillo",
  price: "$160.000 COP",
  miniImg: rosario,
  fullFlyer: tour_isla_rosario,
  descriptionKey: "touresIslas.rosariosencillo.description"
},
{
  id: 11,
  title: "Isla Rosario",
  price: "$360.000 COP",
  miniImg: rosario,
  fullFlyer: tour_isla_rosario2,
  descriptionKey: "touresIslas.rosario.description"
},
{
  id: 12,
  title: "Isla Sabai",
  price: "$480.000 COP",
  miniImg: sabai,
  fullFlyer: tour_isla_sabai,
  descriptionKey: "touresIslas.sabai.description"
},
{
  id: 13,
  title: "Isla del Encanto Barú",
  price: "$420.000 COP",
  miniImg: encanto_baru,
  fullFlyer: tour_isla_baru,
  descriptionKey: "touresIslas.encantobaru.description"
},
{
  id: 14,
  title: "Cocoliso",
  price: "$420.000 COP",
  miniImg: cocoliso,
  fullFlyer: tour_isla_cocoliso,
  descriptionKey: "touresIslas.cocoliso.description"
},
{
  id: 15,
  title: "Mangata",
  price: "$399.000 COP",
  miniImg: mangata,
  fullFlyer: tour_isla_mangata,
  descriptionKey: "touresIslas.mangata.description"
},
{
  id: 16,
  title: "Luxury",
  price: "$480.000 COP",
  miniImg: luxury,
  fullFlyer: tour_isla_luxury,
  descriptionKey: "touresIslas.luxury.description"
}
]


export function CategoriaIslas() {

  const nuevoId = Math.max(...toursIslas.map(tour => tour.id));
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
             src={p_islas}
             alt=""
             className="absolute inset-0 w-full h-full object-cover blur-xl scale-110"
           />
          <img
            src={p_islas}
            alt="Islas"
            className="absolute inset-0 w-full h-full object-contain"
          />

 
          <div className="absolute inset-0 bg-black/20" />

          <div className="relative z-10 flex items-center justify-center h-full flex-col">
            <h1 className="text-white text-5xl md:text-7xl font-black text-center">
              {t("islas.title")}
            </h1>
            {/*<h3 className="text-white text-2xl md:text-7xl  text-center">Contamos con {nuevoId} Toures disponibles</h3>*/}
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