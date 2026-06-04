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



export function Principal() {
  

const [t, i18n] = useTranslation("global")
  // Función para scroll suave





  return (
    <div className="bg-white min-h-screen">
      {/* componente Header*/}
      <Header/>

      <main className='pt-16'>
          <Oferta/>
        {/* HERO CAROUSEL */}
       <Hero />

       
       <Contacto/>


      {/*seccion de top */}
       <Top/>
      
        {/* SECCIÓN DE TURES (GRID) */}
      
        <CategoriasTures/>




      </main>

   
      

  {/* aqui comienza el footer, para que se dirijan a las redes sociales */}
   <Footer/>
    </div>
  )
}