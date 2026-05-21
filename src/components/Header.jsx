import React from "react";
import logo from '../assets/imagenes/logo.webp';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import {useTranslation} from "react-i18next";

export function Header(){

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
          <img src={logo} alt="Logo HR Tours" className='w-full'/>
        </div>

        {/* Desktop Menu */}
        <nav className='hidden md:flex gap-8 font-bold text-[#123499]  text-sm'>
          <Link to="/Nosotros" className="hover:text-[#C5A059] transition-colors">{t("header.about")}</Link>
          <button onClick={() => scrollTo('tures')} className="hover:text-[#C5A059] transition-colors">{t("header.destinations")}</button>
          <button onClick={() => scrollTo('redes')} className="hover:text-[#C5A059] transition-colors">{t("header.contact")}</button>
          <button onClick={() => i18n.changeLanguage("es")} className="hover:text-[#C5A059] transition-colors">es</button>
          <button onClick={() => i18n.changeLanguage("en")} className="hover:text-[#C5A059] transition-colors">en</button>
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
    <button onClick={() => i18n.changeLanguage("es")} className="hover:text-[#C5A059] transition-colors">es</button>
    <button onClick={() => i18n.changeLanguage("en")} className="hover:text-[#C5A059] transition-colors">en</button>
  </div>
)}

        </div>
    );
}