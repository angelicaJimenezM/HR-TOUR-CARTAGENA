import React from "react";
import logo from '../assets/imagenes/logo.webp';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import {useTranslation} from "react-i18next";

export function Header(){
const [openLanguage, setOpenLanguage] = useState(false);
    const [t, i18n] = useTranslation("global")
    const [isOpen, setIsOpen] = useState(false);
    //const [selectedFlyer, setSelectedFlyer] = useState(null);

      const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        }
      };

    return(
        <div className="fixed top-0 w-full flex bg-[#ece2c6] justify-between items-center px-6 py-2 z-50 shadow-md">
            <div className='w-24 cursor-pointer' onClick={() => scrollTo('inicio')}>
           <Link to = "/">
                          
                              <img src={logo} alt="" className='w-38 sm:3xl'/>
                          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className='hidden md:flex gap-8 font-bold text-[#123499]  text-sm'>
          <Link to="/Nosotros" className="hover:text-[#C5A059] transition-colors">{t("header.about")}</Link>
          <button onClick={() => scrollTo('tures')} className="hover:text-[#C5A059] transition-colors">{t("header.destinations")}</button>
          <button onClick={() => scrollTo('redes')} className="hover:text-[#C5A059] transition-colors">{t("header.contact")}</button>
      <div className="relative">

  {/* Botón principal */}
  <button
    onClick={() => setOpenLanguage(!openLanguage)}
    className="
      flex items-center gap-2
      hover:text-[#C5A059]
      transition-colors
    "
  >
    🌐 {t("languages.language")}
  </button>

  {/* Dropdown */}
  {openLanguage && (

    <div className="
      absolute right-0 mt-3
      bg-[#ece2c6]
      border border-[#d6c49a]
      rounded-xl
      shadow-xl
      flex flex-col
      min-w-[160px]
      overflow-hidden
      z-50
    ">

      <button
        onClick={() => {
          i18n.changeLanguage("es");
          setOpenLanguage(false);
        }}
        className="
          px-4 py-3 text-left
          hover:bg-[#d8c9a6]
          transition
        "
      >
        🇪🇸 Español
      </button>

      <button
        onClick={() => {
          i18n.changeLanguage("en");
          setOpenLanguage(false);
        }}
        className="
          px-4 py-3 text-left
          hover:bg-[#d8c9a6]
          transition
        "
      >
        🇺🇸 English
      </button>

    </div>

  )}

</div>
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
    <Link to="/Nosotros" className="hover:text-[#C5A059] transition-colors">{t("header.about")}</Link>
    <button className="text-left" onClick={() => scrollTo('tures')}>{t("header.destinations")}</button>
    <button className="text-left" onClick={() => scrollTo('redes')}>{t("header.contact")}</button>
    <div className="relative">

  {/* Botón principal */}
  <button
    onClick={() => setOpenLanguage(!openLanguage)}
    className="flex items-center gap-2 hover:text-[#C5A059] transition-colors"
  >
    🌐 Idioma
  </button>

  {/* Opciones */}
  {openLanguage && (

    <div className="mt-2 flex flex-col gap-2 pl-4 text-sm">

      <button
        onClick={() => {
          i18n.changeLanguage("es");
          setOpenLanguage(false);
        }}
        className="text-left hover:text-[#C5A059]"
      >
        🇪🇸 Español
      </button>

      <button
        onClick={() => {
          i18n.changeLanguage("en");
          setOpenLanguage(false);
        }}
        className="text-left hover:text-[#C5A059]"
      >
        🇺🇸 English
      </button>

    </div>

  )}

</div>
  </div>
)}

        </div>
    );
}