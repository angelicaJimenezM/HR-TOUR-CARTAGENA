import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import reloj from '../assets/imagenes/reloj.webp';
import pao_pao from '../assets/imagenes/portadas/pao-pao.webp';
import mucura from '../assets/imagenes/portadas/mucura.webp';
import bahia from '../assets/imagenes/portadas/bahia.webp';
import {useTranslation} from "react-i18next"


const HERO =[
  {
    src: reloj
  },
  {
    src: mucura
  },
  {
    src: pao_pao
  },
  {
    src: bahia
  },
]

export function Hero (){
const HERO_KEYS = ["experto", "relax", "recuerdos", "confianza"];

const [t, i18n] = useTranslation("global")

const [heroCurrent, setHeroCurrent] = useState(0);
useEffect(() => {

  const interval = setInterval(() => {
    setHeroCurrent((prev) => (prev + 1) % HERO.length);
  }, 4000);

  return () => clearInterval(interval);

}, []);

    return(
        <div className="relative w-full h-[90vh] bg-black overflow-hidden flex items-center">
            {HERO.map((tour, index) => (
    index === heroCurrent && (
      <motion.div
        key={`bg-${index}`}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 w-full h-full"
      >
        <img src={tour.src} alt="" className="w-full h-full object-cover" />
        {/* Gradiente oscuro para que el texto resalte */}
        <div className="absolute inset-0 bg-gradient-to-t  from-black/70 via-black/30 to-transparent" />
      </motion.div>
    )
  ))}
 
  {/* CAPA 2: TEXTO PRINCIPAL (Alineado a la izquierda) */}
  <div className="absolute left-8 md:left-20  md:bottom-24 text-white z-10 max-w-xl">
    <motion.h1 
  key={heroCurrent}
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="text-4xl md:text-7xl font-bold"
>
  {t(`hero.${HERO_KEYS[heroCurrent]}`)}
</motion.h1>
    
  </div>

  {/* CAPA 3: CARRUSEL DE TARJETAS FLOTANTES (Esquina inferior derecha) */}
  <div className="absolute bottom-12 right-4 md:right-12 flex gap-4 z-20 overflow-visible">
    {HERO.map((tour, index) => {
      // Calculamos si la tarjeta está en cola para aparecer a la derecha
      const isNext = index > heroCurrent && index <= heroCurrent + 3;
      // Si estamos al final de la lista, hacemos el loop para agarrar los primeros elementos
      const isLoopNext = index < (heroCurrent + 4) % HERO.length && heroCurrent + 3 >= HERO.length && index !== heroCurrent;

      if (isNext || isLoopNext) {
        return (
          <motion.div
            key={`thumb-${index}`}
            layout
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-28 sm:w-36 h-40 sm:h-52 rounded-2xl overflow-hidden shadow-2xl border border-white/20 relative cursor-pointer flex-shrink-0 group"
            onClick={() => setHeroCurrent(index)} // Te permite saltar al destino al hacer clic
          >
            <img src={tour.src} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 text-white font-bold text-xs sm:text-sm uppercase tracking-wider leading-tight">
             {t(`hero.${HERO_KEYS[index]}`)?.split(" ")[0]}...{/* Muestra solo la primera palabra para no saturar la miniatura */}
            </span>
          </motion.div>
        );
      }
     
    })}
  </div>
        </div>
    )
}