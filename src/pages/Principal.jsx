import { useState, useEffect } from 'react'
import { motion } from "motion/react"

import telefono from '../assets/imagenes/iconos/telefono.webp'
import correo from '../assets/imagenes/iconos/correo.webp'
import isla from '../assets/imagenes/portadas/3-islas.webp'
import chiva from '../assets/imagenes/portadas/chiva.webp'
import volcan from '../assets/imagenes/portadas/volcan.webp'
import bora from '../assets/imagenes/portadas/bora-bora.webp'
import bora_vip from '../assets/imagenes/portadas/bora-vip.webp'
import mucura from '../assets/imagenes/portadas/mucura.webp'
import pao_pao from '../assets/imagenes/portadas/pao-pao.webp'
import ancestral from '../assets/imagenes/portadas/ancestral.webp'
import bahia from '../assets/imagenes/portadas/bahia.webp'
import tour_isla from '../assets/imagenes/tours/3-islas.webp'
import tour_volcan from '../assets/imagenes/tours/volcan.webp'
import tour_chiva from '../assets/imagenes/tours/chiva.webp'
import tour_bora_vip from '../assets/imagenes/tours/borabora.webp'
import tour_bora from '../assets/imagenes/tours/bora.webp'
import tour_pao from '../assets/imagenes/tours/pao-pao.webp'
import tour_ancestral from '../assets/imagenes/tours/ancestral.webp'
import tour_mucura from '../assets/imagenes/tours/mucura.webp'
import tour_bahia from '../assets/imagenes/tours/bahia.webp'
import tiktok from '../assets/imagenes/iconos/tik-tok.webp'
import facebook from '../assets/imagenes/iconos/facebook.webp'
import WhatsApp from '../assets/imagenes/iconos/whatsapp.webp'
import Instagram from '../assets/imagenes/iconos/instagram.webp'
import { Link } from "react-router-dom";
import { Header } from '../components/Header.jsx'
import { Hero } from '../components/Hero.jsx'
import {useTranslation} from "react-i18next";
const TOP = [
  {
    key: "chiva",
    src: chiva,
    precio: "$55.000 COP",
    fullFlyer: tour_chiva
  },
  {
    key: "pao",
    src: pao_pao,
    precio: "$390.000 COP",
    fullFlyer: tour_pao
  },
  {
    key: "mucura",
    src: mucura,
    precio: "$420.000 COP",
    fullFlyer: tour_mucura
  }
];
// planes de islas

// planes de playa

// planes de pasantia

// planes en la ciudad


//planes en la bahia
// --- 1. Importa tus flyers (asegúrate de que los nombres coincidan con tus archivos) ---
const toursData = [
{
    id: 1,
    title: "Top 3 Islas",
    tag: "Bora Bora, Pao Pao e Isabela",
    price: "$510.000 COP",
    excerpt: "Vive un día inolvidable visitando tres destinos premium en un solo tour con guía bilingüe y almuerzo incluido.",
    miniImg: isla, // Usa tu variable de imagen correspondiente
    fullFlyer: tour_isla
 
  },
  {
    id: 2,
    title: "Volcán del Totumo",
    tag: "Spa Natural y Relajación",
    price: "$120.000 COP", 
    excerpt: "Disfruta la tranquilidad de sumergirte en este increíble spa natural de lodo con propiedades medicinales.",
    miniImg: volcan,
   fullFlyer: tour_volcan
  },
  {
     id: 3,
    title: "Chiva Rumbera",
    tag: "Fiesta en la Ciudad Amurallada",
    price: "$55.000 COP", // Precio promedio base para este tour local
    excerpt: "Súbete a la fiesta sobre ruedas con música en vivo y ambiente rumbero por las calles de Cartagena.",
    miniImg: chiva,
   fullFlyer: tour_chiva
  },
 {
    id: 4,
    title: "Bora Bora Beach Club",
    tag: "Área VIP - Islas del Rosario",
    price: "$490.000 COP",
    excerpt: "Lujo y exclusividad con transporte en lancha rápida, coctel de bienvenida y acceso total a la zona VIP.",
    miniImg: bora,
    fullFlyer: tour_bora_vip
  },
  {
    id: 5,
    title: "Bora Bora - Área Club",
    tag: "Playa y Diversión (+18)",
    price: "$390.000 COP",
    excerpt: "Acceso total al área club de Bora Bora. Incluye transporte ida y vuelta, cóctel de bienvenida y 5 opciones de almuerzo.",
    miniImg: bora,
    fullFlyer: tour_bora
  },


];

export function Principal() {
  

const [t, i18n] = useTranslation("global")
  // Función para scroll suave

const [selectedFlyer, setSelectedFlyer] = useState(null);

const [topCurrent, setTopCurrent] = useState(0);

const nextTopSlide = () => {
  setTopCurrent((prev) => (prev + 1) % TOP.length);
};

const prevTopSlide = () => {
  setTopCurrent((prev) => (prev - 1 + TOP.length) % TOP.length);
};



  return (
    <div className="bg-white min-h-screen">
      {/* componente Header*/}
      <Header/>

      <main className='pt-16'>

        {/* HERO CAROUSEL */}
       <Hero />

       


      {/*seccion de top */}
       
        <section className='pt-2'>
          <h1 className='text-2xl font-bold text-center text-[#123499]'>{t("top.title")}</h1>
          <div className="relative w-full h-[450px] flex items-center justify-center overflow-hidden">
    

  {/*AQUI VA DONDE RENDERIZAN LOS TOP */}
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

        if (info.offset.x < -100) {
          nextTopSlide();
        }

        if (info.offset.x > 100) {
          prevTopSlide();
        }

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

        scale:
          position === "center"
            ? 1
            : 0.9,

        opacity:
          position === "hidden"
            ? 0
            : 1,

        rotateY:
          position === "left"
            ? 21
            : position === "right"
            ? -19
            : 0,

        zIndex:
          position === "center"
            ? 20
            : 10,

      }}

      transition={{
        duration: 0.6
      }}

      className="absolute w-[320px] sm:w-2xl h-[380px] sm:h-11/12 rounded-3xl bg-cover bg-center p-5 flex flex-col justify-end text-white hadow-2xl overflow-hidden"

      style={{
        backgroundImage: `url(${tour.src})`
      }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Precio */}
      <div className="absolute top-4 right-4 bg-[#123499] border border-[#b38f4d] px-4 py-2 rounded-full shadow-lg z-10">
        <p className="font-bold text-sm text-white">
          {tour.precio}
        </p>
      </div>

      {/* Contenido */}
      <div className="relative z-10">

        <h2 className="text-3xl font-bold">
            {t(`top.${tour.key}.nombre`)}
        </h2>

        <p className="text-sm mt-2 text-gray-100 line-clamp-3">
           {t(`top.${tour.key}.descripcion`)}
        </p>

        <button
          onClick={() => setSelectedFlyer(tour.fullFlyer)}
          className="mt-4 bg-[#C5A059] text-white font-bold py-3 px-6 rounded-xl"
        >
            {t("top.buttom")}
        </button>

      </div>

    </motion.div>

  );

})}
</div>
</section>
        {/* SECCIÓN DE TURES (GRID) */}
        <section id='tures' className='py-20 bg-gray-50'>
          <h2 className='text-3xl font-bold text-[#123499] text-center mb-10'>{t("header.destinations")}</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[250px] 
  gap-3 md:gap-5
">

  {toursData.map((tour, index) => (

    <div key={tour.id} className={`relative rounded-3xl overflow-hidden group cursor-pointer

        ${index === 0 ? "col-span-2 row-span-2 md:row-span-3"  : ""}
        ${index === 2  ? "md:col-span-1 md:row-span-3" : "" }
      `}
    >

      {/* Imagen */}
      <img
        src={tour.miniImg}
        alt={tour.title}
        className="
          w-full h-full object-cover
          group-hover:scale-110
          transition duration-700
        "
      />

      {/* Overlay elegante */}
     

      {/* Precio */}
      <div className="
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
      ">
        {tour.price}
      </div>

      {/* Contenido */}
      <div className="
        absolute bottom-0
        p-3 md:p-5
        text-white z-10
      ">
      {(index === 0 || window.innerWidth >= 768) && (
          <p className="
          text-[9px] md:text-xs
          uppercase
          tracking-widest
          text-[#C5A059]
          font-bold
          ">
             {tour.tag}
          </p>
        )}
      

        <h3 className={`
          font-black leading-tight mt-1

          ${index === 0
            ? "text-2xl md:text-4xl"
            : "text-lg md:text-2xl"
          }
        `}>
          {tour.title}
        </h3>

        {/* SOLO algunas cards muestran descripción */}
        {(index === 0 || window.innerWidth >= 768) && (
          <p className="
            text-xs md:text-sm
            text-gray-200
            mt-2
            line-clamp-2
          ">
            {tour.excerpt}
          </p>
        )}

        <button
          onClick={() => setSelectedFlyer(tour.fullFlyer)}
          className="
            mt-3 md:mt-4
            bg-white text-black
            px-4 md:px-5
            py-2
            rounded-full
            text-sm
            font-bold
            hover:bg-[#C5A059]
            hover:text-white
            transition
          "
        >
          {t("top.buttom")}
        </button>

      </div>

    </div>

  ))}

</div>
        </section>

      
      </main>

      {/* MODAL DEL FLYER */}
      {selectedFlyer && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4" onClick={() => setSelectedFlyer(null)}>
          <div className="relative max-w-4xl max-h-[90vh] overflow-auto bg-white rounded-lg" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedFlyer(null)} className="absolute top-2 right-2 text-2xl  rounded-full p-1 text-black font-bold">X</button>
            <img src={selectedFlyer} alt="Flyer" className="w-full h-auto" />
          </div>
        </div>
      )}
  {/* aqui comienza el footer, para que se dirijan a las redes sociales */}
    <footer className='flex flex-col items-center bg-[#ece2c6] py-8 border-t border-[#C5A059]' id='redes'>
  {/* Título con el color dorado de la marca */}
  <h1 className='text-2xl text-center font-bold text-[#C5A059] mb-2'>
    {t("footer.title")}
  </h1>
  <p className='text-gray-700 mb-6'>{t("footer.subtitle")}</p>

  {/* Contenedor de iconos alineado */}
  <div className='flex flex-wrap justify-center gap-8'>
    <a href="https://www.facebook.com/Hrtour.cartagena" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 hover:scale-110 transition-transform'>
      <span className='font-medium text-sm hidden sm:inline'>FACEBOOK</span>
      <img src={facebook} alt="Facebook HR Tours" className='w-8'/>
    </a>

    <a href="https://wa.me/573174849442" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 hover:scale-110 transition-transform'>
      <span className='font-medium text-sm hidden sm:inline'>WhatsApp</span>
      <img src={WhatsApp} alt="WhatsApp HR Tours" className='w-8'/>
    </a>

    <a href="https://www.tiktok.com/@hrtourscartagena?_r=1&_t=ZS-96JW4aKBCAG" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 hover:scale-110 transition-transform'>
      <span className='font-medium text-sm hidden sm:inline'>TikTok</span>
      <img src={tiktok} alt="TikTok HR Tours" className='w-8'/>
    </a>

    <a href="https://www.instagram.com/tu_usuario" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 hover:scale-110 transition-transform'>
      <span className='font-medium text-sm hidden sm:inline'>Instagram</span>
      <img src={Instagram} alt="Instagram HR Tours" className='w-8'/>
    </a>
  </div>

  {/* Crédito al final */}
  <div className='mt-8 text-[10px] text-gray-500'>
     {t("footer.rights-reserved")}
  </div>
</footer>
    </div>
  )
}