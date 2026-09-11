import { useState, useEffect } from 'react'
//import { motion } from "motion/react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import { Header } from '../components/Header.jsx'
import { Hero } from '../components/Hero.jsx'
import {useTranslation} from "react-i18next";
import { Contacto } from '../components/Contacto.jsx'
import { Footer } from '../components/Footer.jsx'
import { Top } from '../components/Top.jsx'
import { Oferta } from '../components/Oferta.jsx'
import { CategoriasTures } from '../components/CategoriasTures.jsx'
import { Testimonios } from '../components/Testimonios.jsx';
import { Elegirnos } from '../components/Elegirnos.jsx';
import { Preguntas } from '../components/Preguntas.jsx';
//import { Estadisticas } from '../components/Estadisticas.jsx';
import fondo from '../assets/imagenes/portadas/hero/fondo.webp'


export function Principal() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* 1. Capa de Imagen de Fondo con opacidad */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 pointer-events-none" 
        style={{ backgroundImage: `url(${fondo})` }}
      />

      {/* 2. Contenido de la página (queda por encima de la imagen) */}
      <div className="relative z-10">
        <Header />
        <main className="pt-16">
          <Oferta />
          <Hero />
          <Elegirnos />
          <Contacto />
          <Top />
          <CategoriasTures />
          <Testimonios />
          <Preguntas />
        </main>
        <Footer />
      </div>
    </div>
  );
}