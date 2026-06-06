import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import gisela from "../assets/imagenes/clientes/gisela.webp";
import nathaniel from "../assets/imagenes/clientes/nathaniel.webp";
import aliette from "../assets/imagenes/clientes/aliette.webp";
import florencia from "../assets/imagenes/clientes/florencia.webp";

const testimonios = [
  {
    id: 1,
    nombre: "Gisela",
    pais: "🇨🇴 Colombia",
    estrellas: "⭐⭐⭐⭐⭐",
    foto: gisela,
    descriptionKey: "testimonios.gisela",
  },
  {
    id: 2,
    nombre: "Nathaniel",
    pais: "🇺🇸 USA",
    estrellas: "⭐⭐⭐⭐⭐",
    foto: nathaniel,
    descriptionKey: "testimonios.nathaniel",
  },
  {
    id: 3,
    nombre: "Aliette",
    pais: "🇺🇸 USA",
    estrellas: "⭐⭐⭐⭐⭐",
    foto: aliette,
    descriptionKey: "testimonios.aliette",
  },
  {
    id: 4,
    nombre: "Florencia",
    pais: "🇦🇷 Argentina",
    estrellas: "⭐⭐⭐⭐⭐",
    foto: florencia,
    descriptionKey: "testimonios.florencia",
  },
];

export function Testimonios() {
  const { t } = useTranslation("global");
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonios.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonios.length) % testimonios.length);
  };

  const actual = testimonios[current];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-5">

        {/* TITULO */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black text-[#123499]">
            Lo que dicen nuestros viajeros
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Experiencias reales de personas que vivieron Cartagena,
            sus islas y sus mejores aventuras con nosotros.
          </p>
        </div>

        {/* TARJETA */}
<div className="
  max-w-xl
  md:max-w-4xl
  lg:max-w-5xl
  xl:max-w-6xl
  mx-auto
  bg-white
  rounded-[32px]
  shadow-xl
  overflow-hidden
">
          {/* FOTO */}
          <img
            src={actual.foto}
            alt={actual.nombre}
            className="
              w-full
              h-[420px]
              object-cover
              sm:object-contain
            "
          />

          {/* CONTENIDO */}
          <div className="p-8">

            <div className="text-center text-2xl mb-4 ">
              {actual.estrellas}
            </div>

            <p
              className="
                text-gray-700
                text-lg
                leading-relaxed
                italic
                text-center
              "
            >
              "{t(actual.descriptionKey)}"
            </p>

            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold text-[#123499]">
                {actual.nombre}
              </h3>

              <p className="text-gray-500 mt-1">
                {actual.pais}
              </p>
            </div>

          </div>
        </div>

        {/* CONTROLES */}
        <div className="flex justify-center items-center gap-6 mt-8">

          <button
            onClick={prev}
            className="
              w-12 h-12
              rounded-full
              bg-[#123499]
              text-white
              font-bold
              hover:scale-105
              transition
            "
          >
            ←
          </button>

          {/* INDICADORES */}
          <div className="flex gap-2">
            {testimonios.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`
                  w-3 h-3 rounded-full transition
                  ${
                    index === current
                      ? "bg-[#C5A059] scale-125"
                      : "bg-gray-300"
                  }
                `}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="
              w-12 h-12
              rounded-full
              bg-[#123499]
              text-white
              font-bold
              hover:scale-105
              transition
            "
          >
            →
          </button>

        </div>
      </div>
    </section>
  );
}