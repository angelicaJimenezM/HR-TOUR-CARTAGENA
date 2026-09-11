import React, { useState } from "react";
import logo from "../assets/imagenes/logo.webp";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa";

export function Header() {
  const [openLanguage, setOpenLanguage] = useState(false);
  const [openTours, setOpenTours] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [t, i18n] = useTranslation("global");

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
      setOpenTours(false);
    }
  };

  return (
    <div className="fixed top-0 w-full flex bg-[#eee7da] justify-between items-center px-6 h-16 z-50 shadow-md">
      
      {/* Selector de Idiomas */}
      <div className="relative">
        <button
          onClick={() => {
            setOpenLanguage(!openLanguage);
            setOpenTours(false);
          }}
          className="flex items-center gap-2 hover:text-[#000000] transition-colors font-medium text-sm"
        >
          🌐 {t("languages.language")}
        </button>

        {openLanguage && (
          <div className="absolute left-0 mt-3 bg-[#eee7da] border border-[#d8c9a6] rounded-xl shadow-xl flex flex-col min-w-[160px] overflow-hidden z-50">
            <button
              onClick={() => {
                i18n.changeLanguage("es");
                setOpenLanguage(false);
              }}
              className="px-4 py-3 text-left hover:bg-[#d8c9a6] transition"
            >
              🇪🇸 Español
            </button>
            <button
              onClick={() => {
                i18n.changeLanguage("en");
                setOpenLanguage(false);
              }}
              className="px-4 py-3 text-left hover:bg-[#d8c9a6] transition"
            >
              🇺🇸 English
            </button>
          </div>
        )}
      </div>

      {/* Logo Centrado */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-1/3 -translate-y-[35%] cursor-pointer z-30"
        onClick={() => scrollTo("inicio")}
      >
        <Link to="/">
          <img
            src={logo}
            alt="HR Tours Cartagena"
            className="w-32 max-w-none sm:w-36 md:max-w-36 h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>

      {/* Menú Desktop */}
      <nav className="hidden md:flex gap-8 font-bold text-[#123499] text-sm items-center">
        <Link to="/Nosotros" className="hover:text-[#000000] transition-colors">
          {t("header.about")}
        </Link>

        {/* Desplegable de Tours */}
        <div className="relative">
          <button
            onClick={() => {
              setOpenTours(!openTours);
              setOpenLanguage(false);
            }}
            className="flex items-center gap-1 hover:text-[#000000] transition-colors focus:outline-none"
          >
            {t("header.destinations")}
            <FaChevronDown
              className={`text-xs transition-transform duration-200 ${
                openTours ? "rotate-180" : ""
              }`}
            />
          </button>

          {openTours && (
            <div className="absolute right-0 mt-3 bg-[#eee7da] border border-[#d8c9a6] rounded-xl shadow-xl flex flex-col min-w-[220px] overflow-hidden z-50">
              <button
                className="px-4 py-2.5 text-left hover:bg-[#d8c9a6] transition"
                onClick={() => scrollTo("pasadiaMaritimos")}
              >
                🚤 Tours Marítimos
              </button>
              <button
                className="px-4 py-2.5 text-left hover:bg-[#d8c9a6] transition"
                onClick={() => scrollTo("tierraBomba")}
              >
                🏝️ Tours Tierra Bomba
              </button>
              <button
                className="px-4 py-2.5 text-left hover:bg-[#d8c9a6] transition"
                onClick={() => scrollTo("publicoRosario")}
              >
                🐠 Tours Público Rosario
              </button>
              <button
                className="px-4 py-2.5 text-left hover:bg-[#d8c9a6] transition"
                onClick={() => scrollTo("clasicoRosario")}
              >
                🌊 Tours Clásico Rosario
              </button>
              <button
                className="px-4 py-2.5 text-left hover:bg-[#d8c9a6] transition"
                onClick={() => scrollTo("baru")}
              >
                🏖️ Tours Terrestre Barú
              </button>
              <button
                className="px-4 py-2.5 text-left hover:bg-[#d8c9a6] transition"
                onClick={() => scrollTo("bahia")}
              >
                ⛵ Tours Bahía
              </button>
              <button
                className="px-4 py-2.5 text-left hover:bg-[#d8c9a6] transition"
                onClick={() => scrollTo("city")}
              >
                🏙️ City Tours
              </button>
              <button
                className="px-4 py-2.5 text-left hover:bg-[#d8c9a6] transition"
                onClick={() => scrollTo("chivas")}
              >
                🚌 Tours Chivas
              </button>
            </div>
          )}
        </div>

        {/* Preguntas Frecuentes */}
        <button
          className="hover:text-[#000000] transition-colors"
          onClick={() => scrollTo("preguntasFrecuentes")}
        >
          {t("preguntas.titulo")}
        </button>

        {/* Contacto */}
        <button
          onClick={() => scrollTo("redes")}
          className="hover:text-[#000000] transition-colors"
        >
          {t("header.contact")}
        </button>
      </nav>

      {/* Botón Menú Móvil */}
      <button
        className="md:hidden text-[#123499] transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        )}
      </button>

      {/* Menú Móvil */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#eee7da] flex flex-col p-4 gap-4 md:hidden shadow-xl font-bold text-[#123499]">
          <Link
            to="/Nosotros"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#000000] transition-colors"
          >
            {t("header.about")}
          </Link>

          {/* Submenú Móvil */}
          <div>
            <button
              className="flex justify-between items-center w-full text-left hover:text-[#000000] transition-colors"
              onClick={() => setOpenTours(!openTours)}
            >
              <span>{t("header.destinations")}</span>
              <FaChevronDown
                className={`text-xs transition-transform duration-200 ${
                  openTours ? "rotate-180" : ""
                }`}
              />
            </button>

            {openTours && (
              <div className="flex flex-col gap-3 pl-4 mt-3 pt-2 border-l-2 border-[#123499] font-medium text-sm">
                <button className="text-left hover:text-[#000000]" onClick={() => scrollTo("pasadiaMaritimos")}>
                  🚤 Tours Marítimos
                </button>
                <button className="text-left hover:text-[#000000]" onClick={() => scrollTo("tierraBomba")}>
                  🏝️ Tours Tierra Bomba
                </button>
                <button className="text-left hover:text-[#000000]" onClick={() => scrollTo("publicoRosario")}>
                  🐠 Tours Público Rosario
                </button>
                <button className="text-left hover:text-[#000000]" onClick={() => scrollTo("clasicoRosario")}>
                  🌊 Tours Clásico Rosario
                </button>
                <button className="text-left hover:text-[#000000]" onClick={() => scrollTo("baru")}>
                  🏖️ Tours Terrestre Barú
                </button>
                <button className="text-left hover:text-[#000000]" onClick={() => scrollTo("bahia")}>
                  ⛵ Tours Bahía
                </button>
                <button className="text-left hover:text-[#000000]" onClick={() => scrollTo("city")}>
                  🏙️ City Tours
                </button>
                <button className="text-left hover:text-[#000000]" onClick={() => scrollTo("chivas")}>
                  🚌 Tours Chivas
                </button>
              </div>
            )}
          </div>

          <button
            className="text-left hover:text-[#000000] transition-colors"
            onClick={() => scrollTo("preguntasFrecuentes")}
          >
            {t("preguntas.titulo")}
          </button>

          <button
            className="text-left hover:text-[#000000] transition-colors"
            onClick={() => scrollTo("redes")}
          >
            {t("header.contact")}
          </button>
        </div>
      )}
    </div>
  );
}