import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import isla from "../assets/imagenes/portadas/islas/3-islas.webp";
import luxury from "../assets/imagenes/portadas/islas/luxury.webp"
import mucura from "../assets/imagenes/portadas/islas/mucura.webp";

import tour_isla from "../assets/imagenes/tours/islas/3-islas.webp";
import tour_isla_luxury from "../assets/imagenes/tours/islas/isla-luxury.webp";
import tour_mucura from "../assets/imagenes/tours/islas/isla-mucura.webp";

const TOP = [
  {
    id: 1,
    nombre: "3 Islas",
    precio: "$510.000 COP",
    src: isla,
    fullFlyer: tour_isla,
    descriptionKey: "touresIslas.top3islas.description",
  },
  {
    id: 2,
    nombre: "Luxury",
    precio: "$480.000 COP",
     src: luxury,
     fullFlyer: tour_isla_luxury,
    descriptionKey: "touresIslas.luxury.description",
  },
  {
    id: 3,
    nombre: "Múcura",
    precio: "$420.000 COP",
    src: mucura,
    fullFlyer: tour_mucura,
    descriptionKey: "touresIslas.mucura.description",
  },
];

export function Top() {
  const [t] = useTranslation("global");

  const [topCurrent, setTopCurrent] = useState(0);
  const [selectedFlyer, setSelectedFlyer] = useState(null);

  const nextTopSlide = () => {
    setTopCurrent((prev) => (prev + 1) % TOP.length);
  };

  const prevTopSlide = () => {
    setTopCurrent((prev) => (prev - 1 + TOP.length) % TOP.length);
  };

  return (
    <div className="pt-2">
      <h1 className="text-2xl font-bold text-center text-[#123499]">
        {t("top.title")}
      </h1>

      <div className="relative w-full h-[450px] flex items-center justify-center overflow-hidden">
        {TOP.map((tour, index) => {
          const position =
            index === topCurrent
              ? "center"
              : index === (topCurrent - 1 + TOP.length) % TOP.length
              ? "left"
              : index === (topCurrent + 1) % TOP.length
              ? "right"
              : "hidden";

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
                backgroundImage: `url(${tour.src})`,
              }}
            >
              <div className="absolute inset-0 bg-black/33" />

              <div className="absolute top-4 right-4 bg-[#123499] border border-[#b38f4d] px-4 py-2 rounded-full shadow-lg z-10">
                <p className="font-bold text-sm text-white">
                  {tour.precio}
                </p>
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl font-bold">
                  {tour.nombre}
                </h2>

                <p className="text-sm mt-2 text-gray-100 line-clamp-3">
                  {t(tour.descriptionKey)}
                </p>

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

      {/* MODAL */}

      {selectedFlyer && (
        <div
          className="
            fixed inset-0
            bg-black/80
            z-[100]
            flex items-center justify-center
            p-4
          "
          onClick={() => setSelectedFlyer(null)}
        >
          <div
            className="
              bg-white
              rounded-2xl
              max-w-5xl
              w-full
              max-h-[90vh]
              overflow-y-auto
              relative
            "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedFlyer(null)}
              className="
                absolute
                top-4
                right-4
                w-10
                h-10
                rounded-full
                bg-white
                shadow-lg
                text-black
                font-bold
              "
            >
              ✕
            </button>

            <img
              src={selectedFlyer.fullFlyer}
              alt={selectedFlyer.nombre}
              className="w-full"
            />

            <div className="p-6">
              <h2 className="text-3xl font-black text-[#123499]">
                {selectedFlyer.nombre}
              </h2>

              <p className="text-[#C5A059] text-xl font-bold mt-2">
                {selectedFlyer.precio}
              </p>

              <p className="text-gray-700 mt-4 whitespace-pre-line leading-relaxed">
                {t(selectedFlyer.descriptionKey)}
              </p>
            </div>
            <a
  href={`https://wa.me/573174849442?text=${encodeURIComponent(
    `${t("reservas.mensaje")} ${selectedFlyer.title}.`
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
    </div>
  );
}