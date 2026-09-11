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
]
export function Estadisticas(){

    const { t } = useTranslation("global");



    return(
        <div>
                
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-14">

          {beneficios.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
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
        
    )
}