import React from "react";
import telefono from '../assets/imagenes/iconos/telefono.webp'
import correo from '../assets/imagenes/iconos/correo.webp'
import Instagram from '../assets/imagenes/iconos/instagram.webp'
import tiktok from '../assets/imagenes/iconos/tik-tok.webp'
import facebook from '../assets/imagenes/iconos/facebook.webp'
import WhatsApp from '../assets/imagenes/iconos/whatsapp.webp'
import {useTranslation} from "react-i18next";






export function Footer (){

const [t, i18n] = useTranslation("global")


    return(
        <div>
            
             <div className='flex flex-col items-center bg-[#ece2c6] py-8 border-t border-[#C5A059]' id='redes'>
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
</div>
        </div>
    )
}