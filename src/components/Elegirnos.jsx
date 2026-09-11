import React from "react";
import { useTranslation } from "react-i18next";
import coche from "../assets/imagenes/iconos/coche.webp";
import hospedaje from "../assets/imagenes/iconos/hospedaje.webp";
import certificado from "../assets/imagenes/iconos/certificado.webp";
import calidad from "../assets/imagenes/iconos/calidad.webp";

const beneficios = [
  {
    icono: calidad,
    titulo: "estadisticas.tituloCalidad",
    descripcion: "estadisticas.recomendados"
  },
  {
    icono: coche,
    titulo: "estadisticas.tituloTransporte",
    descripcion: "estadisticas.transporte"
  },
  {
    icono: hospedaje,
    titulo: "estadisticas.tituloHospedaje",
    descripcion: "estadisticas.hospedaje"
  },
  {
    icono: certificado,
    titulo: "estadisticas.tituloCertificados",
    descripcion: "estadisticas.certificados"
  }
];

export function Elegirnos() {



    const { t } = useTranslation("global");
  return (
    <section className="py-16 px-5">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-center text-3xl md:text-5xl font-bold text-[#123499]">
          {t("estadisticas.title")}
        </h2>

        <p className="text-center text-gray-500 mt-4 max-w-3xl mx-auto">
          {t("estadisticas.text")}
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-14">

          {beneficios.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#c7edf7] 
                rounded-3xl
                p-8
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
                text-center
              "
            >
              <img
                src={item.icono}
                alt={t(item.titulo)}
                className="w-20 h-20 mx-auto object-contain"
              />

              <h3 className="mt-6 text-xl font-bold text-[#123499]">
                {t(item.titulo)}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                 {t(item.descripcion)}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}