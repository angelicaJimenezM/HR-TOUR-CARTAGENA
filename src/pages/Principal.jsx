import { useState, useEffect } from 'react'
import { motion } from "motion/react"
import logo from '../assets/imagenes/logo.webp'
import reloj from '../assets/imagenes/reloj.webp'
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


const HERO =[
  {
    src: reloj, frase: 'VIVE CARTAGENA CON EXPERTOS'
  },
  {
    src: mucura, frase: 'DISFRUTA SIN PREOCUPACIONES'
  },
  {
    src: pao_pao, frase: 'CONVIERTE VIAJES EN RECUERDOS UNICOS'
  },
  {
    src: bahia, frase: 'CONFIA EN HR TOURS CARTAGENA'
  },
]

const TOP=[
  {src: isla, nombre:'Tour 3 Islas', descripcion: 'Vive un día inolvidable visitando tres destinos premium en un solo tour con guía bilingüe y almuerzo incluido.', precio:'$510.000', fullFlyer: tour_isla },
  {src: bahia, nombre:'Tour Bahia', descripcion: 'Disfruta un recorrido inolvidable por la bahía de Cartagena con atardeceres mágicos, música y la mejor vista del mar Caribe.', precio:'$150.000', fullFlyer: tour_bahia },
  {src: volcan, nombre:'Tour Volcan ', descripcion: 'Disfruta la tranquilidad de sumergirte en este increíble spa natural de lodo con propiedades medicinales.', precio:'$120.000', fullFlyer: tour_volcan },
  {src: chiva, nombre:'Chiva Rumbera', descripcion: 'Súbete a la fiesta sobre ruedas con música en vivo y ambiente rumbero por las calles de Cartagena.', precio:'$55.000', fullFlyer: tour_chiva },
  {src: pao_pao, nombre:'Tour a Pao Pao', descripcion: 'Hotel y restaurante con piscina de agua dulce, actividades diarias de bienestar y snorkel guiado incluido.', precio:'$390.000', fullFlyer: tour_pao },
  {src: mucura, nombre:'Tour Isla Múcura', descripcion: 'Escápate a aguas cristalinas con almuerzo premium caribeño y acceso completo a zonas sociales y de juegos.', precio:'$420.000', fullFlyer: tour_mucura },
]

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
    price: "$510.000",
    excerpt: "Vive un día inolvidable visitando tres destinos premium en un solo tour con guía bilingüe y almuerzo incluido.",
    miniImg: isla, // Usa tu variable de imagen correspondiente
    fullFlyer: tour_isla
 
  },
  {
    id: 2,
    title: "Volcán del Totumo",
    tag: "Spa Natural y Relajación",
    price: "$120.000", 
    excerpt: "Disfruta la tranquilidad de sumergirte en este increíble spa natural de lodo con propiedades medicinales.",
    miniImg: volcan,
   fullFlyer: tour_volcan
  },
  {
     id: 3,
    title: "Chiva Rumbera",
    tag: "Fiesta en la Ciudad Amurallada",
    price: "$55.000", // Precio promedio base para este tour local
    excerpt: "Súbete a la fiesta sobre ruedas con música en vivo y ambiente rumbero por las calles de Cartagena.",
    miniImg: chiva,
   fullFlyer: tour_chiva
  },
 {
    id: 4,
    title: "Bora Bora Beach Club",
    tag: "Área VIP - Islas del Rosario",
    price: "$490.000",
    excerpt: "Lujo y exclusividad con transporte en lancha rápida, coctel de bienvenida y acceso total a la zona VIP.",
    miniImg: bora,
    fullFlyer: tour_bora_vip
  },
  {
    id: 5,
    title: "Bora Bora - Área Club",
    tag: "Playa y Diversión (+18)",
    price: "$390.000",
    excerpt: "Acceso total al área club de Bora Bora. Incluye transporte ida y vuelta, cóctel de bienvenida y 5 opciones de almuerzo.",
    miniImg: bora,
    fullFlyer: tour_bora
  },


];

export function Principal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFlyer, setSelectedFlyer] = useState(null);

  // Función para scroll suave
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

const [heroCurrent, setHeroCurrent] = useState(0);
const [topCurrent, setTopCurrent] = useState(0);

const nextTopSlide = () => {
  setTopCurrent((prev) => (prev + 1) % TOP.length);
};

const prevTopSlide = () => {
  setTopCurrent((prev) => (prev - 1 + TOP.length) % TOP.length);
};

useEffect(() => {

  const interval = setInterval(() => {
    setHeroCurrent((prev) => (prev + 1) % HERO.length);
  }, 4000);

  return () => clearInterval(interval);

}, []);

  return (
    <div className="bg-white min-h-screen">
      {/* HEADER RESPONSIVO */}
      <header className="fixed top-0 w-full flex bg-[#ece2c6] justify-between items-center px-6 py-2 z-50 shadow-md">
        <div className='w-24 cursor-pointer' onClick={() => scrollTo('inicio')}>
          <img src={logo} alt="Logo HR Tours" className='w-full'/>
        </div>

        {/* Desktop Menu */}
        <nav className='hidden md:flex gap-8 font-bold text-[#123499]  text-sm'>
          <Link to="/Nosotros" className="hover:text-[#C5A059] transition-colors">Quienes somos</Link>
          <button onClick={() => scrollTo('tures')} className="hover:text-[#C5A059] transition-colors">Nuestros destinos</button>
          <button onClick={() => scrollTo('redes')} className="hover:text-[#C5A059] transition-colors">Redes y Contacto</button>
        </nav>

        {/* Mobile Toggle */}
       {/* 1. EL BOTÓN (Solo cambia el icono) */}
<button className='md:hidden text-[#123499] transition-all duration-300' onClick={() => setIsOpen(!isOpen)}>
  {isOpen ? (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  ) : (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
    </svg>
  )}
</button>

{/* 2. EL MENÚ MÓVIL (Afuera del botón, pero controlado por isOpen) */}
{isOpen && (
  <div className="absolute top-full left-0 w-full bg-[#ece2c6] flex flex-col p-4 gap-4 md:hidden border-t border-gray-200 shadow-xl font-bold ">
    <Link to="/Nosotros" className="hover:text-[#C5A059] transition-colors">Quienes somos</Link>
    <button className="text-left" onClick={() => scrollTo('tures')}>Nuestros destinos</button>
    <button className="text-left" onClick={() => scrollTo('redes')}>Redes y Contacto</button>
  </div>
)}
      </header>

      <main className='pt-16'>

       
 {/* HERO CAROUSEL */}
<section className="relative w-full h-[90vh] bg-black overflow-hidden flex items-center">
  {/* CAPA 1: IMAGEN DE FONDO (Destino Activo) */}
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
      {HERO[heroCurrent].frase}
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
              {tour.frase.split(" ")[0]}... {/* Muestra solo la primera palabra para no saturar la miniatura */}
            </span>
          </motion.div>
        );
      }
     
    })}
  </div>
</section>
       


      {/*seccion de top */}
       
        <section className='pt-2'>
          <h1 className='text-2xl font-bold text-center text-[#123499]'>Tours Más Reservados</h1>
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
          {tour.nombre}
        </h2>

        <p className="text-sm mt-2 text-gray-100 line-clamp-3">
          {tour.descripcion}
        </p>

        <button
          onClick={() => setSelectedFlyer(tour.fullFlyer)}
          className="mt-4 bg-[#C5A059] text-white font-bold py-3 px-6 rounded-xl"
        >
          Ver más
        </button>

      </div>

    </motion.div>

  );

})}
</div>
</section>
        {/* SECCIÓN DE TURES (GRID) */}
        <section id='tures' className='py-20 bg-gray-50'>
          <h2 className='text-3xl font-bold text-[#123499] text-center mb-10'>Nuestros Destinos</h2>
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
          Ver más
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
    Nuestras Redes y Contacto
  </h1>
  <p className='text-gray-700 mb-6'>Síguenos en nuestras redes sociales y Contactanos</p>

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
    © 2026 HR Tours Cartagena. Todos los derechos reservados.
  </div>
</footer>
    </div>
  )
}