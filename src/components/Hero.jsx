import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Importación de las dos versiones de la Torre del Reloj
import relojDia from "../assets/imagenes/portadas/hero/reloj_dia.webp";
import relojNoche from "../assets/imagenes/portadas/hero/reloj_noche.webp";

export function Hero() {
  const [t] = useTranslation("global");
  const [esDeNoche, setEsDeNoche] = useState(false);

  // Transición suave entre día y noche cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setEsDeNoche((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[90vh] bg-black overflow-hidden flex items-center">
      {/* CAPA 1: IMÁGENES DÍA / NOCHE CON FUNDIDO CRUZADO */}
      <div className="absolute inset-0 w-full h-full">
        {/* FONDO BLUR DÍA */}
        <img
          src={relojDia}
          alt="Reloj Día Blur"
          className={`absolute inset-0 w-full h-full object-cover blur-xl scale-110 transition-opacity duration-[2500ms] ease-in-out ${
            esDeNoche ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* FONDO BLUR NOCHE */}
        <img
          src={relojNoche}
          alt="Reloj Noche Blur"
          className={`absolute inset-0 w-full h-full object-cover blur-xl scale-110 transition-opacity duration-[2500ms] ease-in-out ${
            esDeNoche ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* IMAGEN PRINCIPAL DÍA */}
        <img
          src={relojDia}
          alt="Torre del Reloj Día"
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-[2800ms] ease-in-out ${
            esDeNoche ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* IMAGEN PRINCIPAL NOCHE */}
        <img
          src={relojNoche}
          alt="Torre del Reloj Noche"
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-[2700ms] ease-in-out ${
            esDeNoche ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Gradiente oscuro para resaltar el texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-[5]" />
      </div>

      {/* CAPA 2: TEXTO DEL HERO */}
      <div className="absolute left-8 md:left-20 md:bottom-24 text-[#ffffffd3] z-10 max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-bold drop-shadow-lg"
        >
          {t("hero.experto")}
        </motion.h1>
      </div>
    </div>
  );
}