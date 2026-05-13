import { useState } from 'react'
import logo from './assets/imagenes/logo.webp'
import reloj from './assets/imagenes/reloj.webp'
import telefono from './assets/imagenes/iconos/telefono.webp'
import correo from './assets/imagenes/iconos/correo.webp'
import isla from './assets/imagenes/portadas/3-islas.webp'
import chiva from './assets/imagenes/portadas/chiva.webp'
import volcan from './assets/imagenes/portadas/volcan.webp'
import bora from './assets/imagenes/portadas/bora-bora.webp'
import bora_vip from './assets/imagenes/portadas/bora-vip.webp'
import mucura from './assets/imagenes/portadas/mucura.webp'
import pao_pao from './assets/imagenes/portadas/pao-pao.webp'
import ancestral from './assets/imagenes/portadas/ancestral.webp'
import tour_isla from './assets/imagenes/tours/3-islas.webp'
import tour_volcan from './assets/imagenes/tours/volcan.webp'
import tour_chiva from './assets/imagenes/tours/chiva.webp'
import tour_bora_vip from './assets/imagenes/tours/borabora.webp'
import tour_bora from './assets/imagenes/tours/bora.webp'
import tour_pao from './assets/imagenes/tours/pao-pao.webp'
import tour_ancestral from './assets/imagenes/tours/ancestral.webp'
import tour_mucura from './assets/imagenes/tours/mucura.webp'
import tiktok from './assets/imagenes/iconos/tik-tok.webp'
import facebook from './assets/imagenes/iconos/facebook.webp'
import WhatsApp from './assets/imagenes/iconos/whatsapp.webp'
import Instagram from './assets/imagenes/iconos/instagram.webp'


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
{
    id: 6,
    title: "Isla Múcura",
    tag: "Plan Relax en el Paraíso",
    price: "$420.000",
    excerpt: "Escápate a aguas cristalinas con almuerzo premium caribeño y acceso completo a zonas sociales y de juegos.",
    miniImg: mucura,
   fullFlyer: tour_mucura
  },
  {
    id: 7,
    title: "Pao Pao Beach Club",
    tag: "Wellness y Relax (+12 años)",
    price: "$390.000",
    excerpt: "Hotel y restaurante con piscina de agua dulce, actividades diarias de bienestar y snorkel guiado incluido.",
    miniImg: pao_pao,
    fullFlyer: tour_pao
  },
  {
    id: 8,
    title: "Ancestral Beach Club",
    tag: "Lounge Club de Playa.",
    price: "$190.000 adultos y $140 niños",
    excerpt: "Experiencia premium de playa con tarifas especiales para agencias y ambiente lounge inigualable.",
    miniImg: ancestral,
    fullFlyer: tour_ancestral 
  },
];

function App() {
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

  return (
    <div className="bg-white min-h-screen">
      {/* HEADER RESPONSIVO */}
      <header className="fixed top-0 w-full flex bg-[#ece2c6] justify-between items-center px-6 py-2 z-50 shadow-md">
        <div className='w-24 cursor-pointer' onClick={() => scrollTo('inicio')}>
          <img src={logo} alt="Logo HR Tours" className='w-full'/>
        </div>

        {/* Desktop Menu */}
        <nav className='hidden md:flex gap-8 font-bold text-[#123499] uppercase text-sm'>
          <button onClick={() => scrollTo('sobre-nosotros')} className="hover:text-[#C5A059] transition-colors">Quienes somos</button>
          <button onClick={() => scrollTo('tures')} className="hover:text-[#C5A059] transition-colors">Tures</button>
          <button onClick={() => scrollTo('contacto')} className="hover:text-[#C5A059] transition-colors">Contacto</button>
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
    <button className="text-left" onClick={() => scrollTo('sobre-nosotros')}>Quienes somos</button>
    <button className="text-left" onClick={() => scrollTo('tures')}>Tures</button>
    <button className="text-left" onClick={() => scrollTo('contacto')}>Contacto</button>
  </div>
)}
      </header>

      <main className='pt-16'>
        {/* HERO */}
        <div id='inicio' className='relative'>
          <img src={reloj} alt="Cartagena Reloj" className='w-screen h-[50vh] object-cover'/>
          <div className='absolute inset-0 bg-black/30 flex items-center justify-center'>
            <h2 className='text-white text-4xl md:text-6xl font-black text-center px-4'>VIVE CARTAGENA <br/><span className='text-[#C5A059]'>CON EXPERTOS</span></h2>
          </div>
        </div>

        {/* SOBRE NOSOTROS */}
        <section id='sobre-nosotros' className="py-20 bg-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-full text-center max-w-3xl mx-auto">
              <h2 className="text-[#123499] text-sm font-bold tracking-widest uppercase mb-2">Sobre Nosotros</h2>
              <h3 className="text-4xl font-bold text-gray-800 mb-6">Pasión por <span className="text-[#C5A059]">Cartagena</span></h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                En <strong>HR Tours Cartagena</strong>, diseñamos recuerdos que perduran. Combinamos la calidez local con la eficiencia técnica para que disfrutes sin preocupaciones.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-center justify-center gap-3 font-semibold text-[#123499]">
                  <span className="text-[#C5A059] text-2xl">✔</span> Tours Exclusivos
                </div>
                <div className="flex items-center justify-center gap-3 font-semibold text-[#123499]">
                  <span className="text-[#C5A059] text-2xl">✔</span> Calidad Recomendada
                </div>
              </div>
            </div>
          </div>
        </section>
          {/* CONTACTO */}
        <section id='contacto' className="py-20 flex justify-center p-4">
          <div className='bg-[#123499] text-white rounded-3xl shadow-2xl p-8 xl:w-2xl border-b-4 border-[#C5A059] text-center'>
            <h2 className='font-bold text-3xl uppercase tracking-widest text-[#C5A059] mb-4'>Contacto</h2>
            <p className='text-blue-100 mb-8'>¿Listo para la aventura? ¡Escríbenos ahora!</p>
            <div className='flex flex-col md:flex-row justify-center gap-6'>
              <a href="https://wa.me/573174849442" target="_blank" rel="noreferrer" className='flex items-center gap-3 bg-white/10 p-3 rounded-xl hover:bg-white/20'>
                <img src={telefono} className='w-8' alt="" />
                <span>+57 317 4849442</span>
              </a>
              <a href="mailto:hrtourscartagena@gmail.com" className='flex items-center gap-3 bg-white/10 p-3 rounded-xl hover:bg-white/20'>
                <img src={correo} className='w-8' alt="" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </section>
        {/* SECCIÓN DE TURES (GRID) */}
        <section id='tures' className='py-20 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold text-[#123499] text-center mb-10'>NUESTROS PLANES</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {toursData.map((tour) => (
                <div key={tour.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col transform transition-all hover:scale-105">
                  <div className="relative h-44">
                    <img src={tour.miniImg} alt={tour.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 right-3 bg-[#123499] text-white px-3 py-1 rounded-full text-xs font-bold border border-[#C5A059]">
                      {tour.price}
                    </div>
                  </div>
                  <div className="p-5 flex-grow">
                    <span className="text-[#C5A059] text-xs font-bold uppercase tracking-widest">{tour.tag}</span>
                    <h3 className="text-xl font-bold text-[#123499] mt-1 mb-2">{tour.title}</h3>
                    <p className="text-gray-600 text-sm mb-5">{tour.excerpt}</p>
                    <button 
                      onClick={() => setSelectedFlyer(tour.fullFlyer)}
                      className="w-full bg-[#C5A059] text-white font-bold py-3 rounded-xl hover:bg-[#b38f4d] transition-colors"
                    >
                      Ver Mas...
                    </button>
                  </div>
                </div>
              ))}
            </div>
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
    <footer className='flex flex-col items-center bg-[#ece2c6] py-8 border-t border-[#C5A059]'>
  {/* Título con el color dorado de la marca */}
  <h1 className='text-2xl text-center font-bold text-[#C5A059] mb-2'>
    Nuestras Redes
  </h1>
  <p className='text-gray-700 mb-6'>Síguenos en nuestras redes sociales</p>

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

export default App