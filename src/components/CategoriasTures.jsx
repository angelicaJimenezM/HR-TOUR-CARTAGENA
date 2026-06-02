import { useState } from 'react'
import isla from '../assets/imagenes/portadas/islas/3-islas.webp'
import palmas from '../assets/imagenes/portadas/islas/palmas.webp'
import luxury from '../assets/imagenes/portadas/islas/luxury.webp'
import rosario from '../assets/imagenes/portadas/islas/isla-rosario.webp'
import mucura from '../assets/imagenes/portadas/islas/mucura.webp'
import tour_isla from '../assets/imagenes/tours/islas/3-islas.webp'
import tour_palmas from '../assets/imagenes/tours/islas/isla-palmas.webp'
import tour_bora_vip from '../assets/imagenes/tours/borabora.webp'
import tour_luxury from '../assets/imagenes/tours/islas/isla-luxury.webp'
import tour_mucura from '../assets/imagenes/tours/islas/isla-mucura.webp'
import cartagena from "../assets/imagenes/portadas/city/cartagena.webp";
import barranquilla from "../assets/imagenes/portadas/city/barranquilla.webp";
import santamarta from "../assets/imagenes/portadas/city/santamarta.webp";
import tour_city_cartagena from "../assets/imagenes/tours/city-tous/tour-cartagena.webp";
import tour_city_barranquilla from "../assets/imagenes/tours/city-tous/tour-barranquilla.webp";
import tour_city_santamarta from "../assets/imagenes/tours/city-tous/tour-barranquilla-santamarta.webp";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
    price: "$150.000 COP",
    miniImg: barranquilla,
    fullFlyer: tour_city_barranquilla,
      descriptionKey:"touresCity.barranquilla.description"
  },
  {
    id: 3,
    title: "City Tour Barranquilla y Santa Marta",
    price: "$250.000 COP",
    miniImg: santamarta,
    fullFlyer: tour_city_santamarta,
     descriptionKey:"touresCity.santamarta.description"
  },
];

const toursIslas = [
  {
    id: 1,
    title: "Top 3 Islas",
    price: "$510.000 COP",
    miniImg: isla,
    fullFlyer: tour_isla,
     descriptionKey:"touresIslas.top3islas.description"
  },
  {
    id: 2,
    title: "Mucura",
    price: "$420.000 COP",
    miniImg: mucura,
    fullFlyer: tour_mucura,
     descriptionKey:"touresIslas.mucura.description"
  },
  {
    id: 3,
    title: "Palma",
    price: "$420.000 COP",
    miniImg: palmas,
    fullFlyer: tour_palmas,
    descriptionKey:"touresIslas.palma.description"

  },
  {
    id: 4,
    title: "Islas de Rosario sencillo",
    price: "$160.000 COP",
    miniImg: rosario,
    fullFlyer: tour_bora_vip,
    descriptionKey:"touresIslas.rosario.description"

  },
  {
    id: 5,
    title: "luxury",
    price: "$$480.000 COP",
    miniImg: luxury,
    fullFlyer: tour_luxury,
descriptionKey:"touresIslas.luxury.description"
  },
];

export function CategoriasTures() {

const [selectedTour, setSelectedTour] = useState(null);

  const [t] = useTranslation("global");

  return (

    <div className="bg-gray-50">

      {/* ================= ISLAS ================= */}

      <section id='tours-islas' className='py-20'>

        <h2 className="text-3xl md:text-4xl font-black text-[#123499] text-center mb-10">
          {t("subtoures.category")}
        </h2>

        <div className='flex items-center justify-between mb-6 px-2'>

          <h3 className="text-2xl md:text-4xl font-black text-[#123499]">
            {t("subtoures.islass")}
          </h3>

          <Link
            to="/CategoriaIslas"
            className="
              bg-[#C5A059]
              text-white
              font-bold
              px-4 py-2
              rounded-2xl
              transition-all duration-300
              hover:scale-105
              shadow-md
            "
          >
            {t("top.button")}
          </Link>

        </div>

        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            auto-rows-[180px]
            md:auto-rows-[250px]
            gap-3 md:gap-5
          "
        >

          {toursIslas.map((tour, index) => (

            <div
              key={tour.id}
              className={`
                relative
                rounded-3xl
                overflow-hidden
                group
                cursor-pointer

                ${index === 0 ? "col-span-2 row-span-2 md:row-span-3" : ""}
                ${index === 2 ? "md:col-span-1 md:row-span-3" : ""}
              `}
            >

              {/* Imagen */}

              <img
                src={tour.miniImg}
                alt={tour.title}
                className="
                  w-full h-full
                  object-cover
                  group-hover:scale-110
                  transition duration-700
                "
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-black/20"></div>

              {/* Precio */}

              <div
                className="
                  absolute top-3 right-3
                  bg-[#123499]
                  border border-[#C5A059]
                  text-white
                  px-3 py-1
                  rounded-full
                  text-[10px] md:text-xs
                  font-bold
                  z-10
                  shadow-lg
                "
              >
                {tour.price}
              </div>

              {/* Contenido */}

              <div
                className="
                  absolute bottom-0
                  p-3 md:p-5
                  text-white
                  z-10
                "
              >

                <h3
                  className={`
                    font-black
                    leading-tight
                    mt-1

                    ${index === 0
                      ? "text-2xl md:text-4xl"
                      : "text-lg md:text-2xl"
                    }
                  `}
                >
                  {tour.title}
                </h3>

                <button
                  onClick={() => setSelectedTour(tour)}
                  className="
                    mt-3 md:mt-4
                    bg-[#C5A059]
                    text-white
                    px-4 md:px-5
                    py-2
                    rounded-full
                    text-sm
                    font-bold
                    hover:scale-105
                    transition-all duration-300
                  "
                >
                  {t("top.button")}
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ================= CITY TOURS ================= */}

      <section id='tours-city' className='py-20'>

        <div className='flex items-center justify-between mb-6 px-2'>

          <h3 className="text-2xl md:text-4xl font-black text-[#123499]">
            City Tours
          </h3>

          <Link
            to="/CategoriaCity"
            className="
              bg-[#C5A059]
              text-white
              font-bold
              px-4 py-2
              rounded-2xl
              transition-all duration-300
              hover:scale-105
              shadow-md
            "
          >
            {t("top.button")}
          </Link>

        </div>

        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            auto-rows-[180px]
            md:auto-rows-[250px]
            gap-3 md:gap-5
          "
        >

          {toursCity.map((tour, index) => (

            <div
              key={tour.id}
              className={`
                relative
                rounded-3xl
                overflow-hidden
                group
                cursor-pointer

                ${index === 0 ? "col-span-2 row-span-2 md:row-span-3" : ""}
                ${index === 2 ? "md:col-span-1 md:row-span-3" : ""}
              `}
            >

              {/* Imagen */}

              <img
                src={tour.miniImg}
                alt={tour.title}
                className="
                  w-full h-full
                  object-cover
                  group-hover:scale-110
                  transition duration-700
                "
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-black/20"></div>

              {/* Precio */}

              <div
                className="
                  absolute top-3 right-3
                  bg-[#123499]
                  border border-[#C5A059]
                  text-white
                  px-3 py-1
                  rounded-full
                  text-[10px] md:text-xs
                  font-bold
                  z-10
                  shadow-lg
                "
              >
                {tour.price}
              </div>

              {/* Contenido */}

              <div
                className="
                  absolute bottom-0
                  p-3 md:p-5
                  text-white
                  z-10
                "
              >

                <h3
                  className={`
                    font-black
                    leading-tight
                    mt-1

                    ${index === 0
                      ? "text-2xl md:text-4xl"
                      : "text-lg md:text-2xl"
                    }
                  `}
                >
                  {tour.title}
                </h3>

                <button
                  onClick={() => setSelectedTour(tour)}
                  className="
                    mt-3 md:mt-4
                    bg-[#C5A059]
                    text-white
                    px-4 md:px-5
                    py-2
                    rounded-full
                    text-sm
                    font-bold
                    hover:scale-105
                    transition-all duration-300
                  "
                >
                  {t("top.button")}
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ================= MODAL ================= */}

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

      <p className="text-gray-700 mt-4 leading-relaxed">
        {t(selectedTour.descriptionKey)}
      </p>
    <img
      src={selectedTour.fullFlyer}
      alt={selectedTour.title}
      className="w-full"
    />

    </div>

  </div>
</div>

      )}

    </div>
  )
}