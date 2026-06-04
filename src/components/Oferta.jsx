import React, { useState } from "react";
import {useTranslation} from "react-i18next";
import empresa from "../assets/imagenes/tours/especiales/servicio-empresa.webp"

export function Oferta() {
    const [t, i18n] = useTranslation("global")
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div>
    <div className="fixed inset-0 bg-black/80 z-[100] flex flex-col items-center justify-center p-4">

  <h1 className="text-white text-3xl md:text-5xl font-bold mb-6 text-center">
    {t("oferta.title")}
  </h1>

  <img
    src={empresa}
    alt=""
    className="max-h-[80vh] rounded-xl"
  />

  <button
    onClick={() => setVisible(false)}
    className="
      absolute
      top-4
      right-4
      w-10
      h-10
      rounded-full
      bg-white
      shadow-lg
      font-bold
      text-xl
    "
  >
    ✕
  </button>

</div>
    </div>
  );
}