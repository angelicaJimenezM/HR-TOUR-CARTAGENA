import React from "react";
import WhatsApp from '../assets/imagenes/iconos/whatsapp.webp'

export function Contacto() {

  return (

    <div
      className="
        fixed
        bottom-10
        right-3
        z-50

        flex  flex-col items-center gap-3
      "
    >

   {/* BOTON */}
<a
  href="https://wa.me/573174849442"
  target="_blank"
  rel="noopener noreferrer"
  className="
    bg-[#1cc55a]
    p-4
    rounded-full
    shadow-2xl
    hover:scale-110
    transition-all duration-300
    flex items-center justify-center
  "
>

  <img
    src={WhatsApp}
    alt="WhatsApp HR Tours"
    className="w-8 h-8"
  />

</a>

{/* TEXTO */}
<h1
  className="
    bg-white
    px-4 py-2
    rounded-full
    shadow-lg
    font-bold
    text-[#123499]
    text-sm
  "
>
  Reserva Ahora
</h1>

    </div>

  )

}