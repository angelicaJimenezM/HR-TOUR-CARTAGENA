import React from "react";
import {useTranslation} from "react-i18next";
import { Header } from "../components/Header";
import { Contacto } from "../components/Contacto";
import p_islas from "../assets/imagenes/portadas/p_islas.webp";
import { useState } from "react";
import rosario from "../assets/imagenes/portadas/islas/isla-rosario.webp"
import mucura from "../assets/imagenes/portadas/islas/mucura.webp"
import palmas from "../assets/imagenes/portadas/islas/palmas.webp"
import baru from "../assets/imagenes/portadas/islas/baru.webp"
import palmerito from "../assets/imagenes/portadas/islas/palmerito.webp"
import ibbiza_baru from "../assets/imagenes/portadas/islas/ibbiza-baru.webp"
import rosario2 from "../assets/imagenes/portadas/islas/rosario-isla.webp"
import sabai from "../assets/imagenes/portadas/islas/sabai.webp"
import fenix from "../assets/imagenes/portadas/islas/fenix.webp"
import ancestral from "../assets/imagenes/portadas/islas/ancestral.webp"
import isla_3 from "../assets/imagenes/portadas/islas/3-islas.webp"
import isla_4 from "../assets/imagenes/portadas/islas/4-islas.webp"
import encanto_baru from "../assets/imagenes/portadas/islas/encanto.webp"
import cocoliso from "../assets/imagenes/portadas/islas/cocoliso.webp"
import mangata from "../assets/imagenes/portadas/islas/mangata.webp"
import tour_isla_3 from "../assets/imagenes/tours/islas/3-islas.webp"
import tour_isla_4 from "../assets/imagenes/tours/islas/4-islas.webp"
import tour_ancestral from "../assets/imagenes/tours/islas/isla-ancetral.webp"
import tour_capri_baru from "../assets/imagenes/tours/islas/isla-capri-baru.webp"
import tour_isla_fenix from "../assets/imagenes/tours/islas/isla-fenix.webp"
import tour_ibbiza_baru from "../assets/imagenes/tours/islas/isla-ibbiza-baru.webp"
import tour_mucura from "../assets/imagenes/tours/islas/isla-mucura.webp"
import tour_isla_palmas from "../assets/imagenes/tours/islas/isla-palmas.webp"
import tour_isla_palmerito from "../assets/imagenes/tours/islas/isla-palmerito.webp"
import tour_isla_rosario from "../assets/imagenes/tours/islas/isla-rosario.webp"
import tour_isla_rosario2 from "../assets/imagenes/tours/islas/isla-rosario2.webp"
import tour_isla_sabaia from "../assets/imagenes/tours/islas/isla-sabai.webp"
import tour_isla_baru from "../assets/imagenes/tours/islas/isla-encanto-baru.webp"
import tour_isla_cocoliso from "../assets/imagenes/tours/islas/isla-cocoliso.webp"
import tour_isla_mangata from "../assets/imagenes/tours/islas/isla-mangata.webp"




const tursIslas = [
  {
      id: 1,
        title: "Top 3 Islas",
        price: "$510.000 COP",
       miniImg: isla_3,
       fullFlyer: tour_isla_3
  },
   {
      id: 2,
        title: "Top 4 Islas",
        price: "$180.000 COP",
       miniImg: isla_4,
        fullFlyer: tour_isla_4
  },
   {
      id: 3,
        title: "Ancestral",
        price: "$190.000 COP",
       miniImg: ancestral,
       fullFlyer: tour_ancestral
  },
   {
      id: 4,
        title: "palmerito",
        price: "$230.000 COP",
       miniImg: palmerito,
       fullFlyer: tour_isla_palmerito
  },
   {
      id: 5,
        title: "Capri Baru",
        price: "$460.000 COP",
        miniImg: baru,
        fullFlyer: tour_capri_baru
  },
   {
      id: 6,
        title: "Isla Fenix Plan Basico",
        price: "$195.000 COP",
       miniImg: fenix,
       fullFlyer: tour_isla_fenix
  },
   {
      id: 7,
        title: "Isla Ibbiza Baru",
        price: "$380.000 COP",
        miniImg: ibbiza_baru,
        fullFlyer: tour_ibbiza_baru
  },
   {
      id: 8,
        title: "Isla Mucura",
        price: "$420.000 COP",
        miniImg: mucura,
        fullFlyer: tour_mucura
  },
   {
      id: 10,
        title: "Isla Palmas",
        price: "$420.000 COP",
        miniImg: palmas,
        fullFlyer: tour_isla_palmas
  },
   {
      id: 11,
        title: "Isla Rosario secillo",
        price: "$160.000 COP",
        miniImg: tour_isla_rosario,
        fullFlyer: rosario
  },
   {
      id: 12,
        title: "Isla Rosario",
        price: "$360.000 COP",
        miniImg: tour_isla_rosario2,
        fullFlyer: rosario
  },
   {
      id: 13,
        title: "Isla Sabai",
        price: "$480.000 COP",
        miniImg: sabai,
        fullFlyer: tour_isla_sabaia
  },
 {
      id: 14,
        title: "Isla del encanto Baru",
        price: "$420.000 COP",
        miniImg: encanto_baru,
        fullFlyer: tour_isla_baru
  },
  {
      id: 15,
        title: "Cocoliso",
        price: "$420.000 COP",
        miniImg: cocoliso,
        fullFlyer: tour_isla_cocoliso
  },
  {
      id: 16,
        title: "Mangata",
        price: "$399.000 COP",
        miniImg: mangata,
        fullFlyer: tour_isla_mangata
  }

]






export function CategoriaIslas() {


const [t, i18n] = useTranslation("global")




  const [selectedFlyer, setSelectedFlyer] = useState(null);
  return (
    <div>
      <Header/>

      <main>
            
              <Contacto/>
    <div
  style={{ backgroundImage: `url(${p_islas})` }}
  className="
    w-full
    sm:h-[140vh]
    h-[80vh]
    bg-contain
    bg-no-repeat
    bg-center
    flex
    items-center
    justify-center
    relative
    overflow-hidden 
  "
>
  

  {/* Texto */}
  <h1 className="relative z-10 text-white text-5xl md:text-7xl font-black">
    {t("islas.title")}
  </h1>

</div>
        <h2 className="text-center font-bold text-2xl mt-3 text-[#123499]">{t("islas.subtitle")}</h2>
        <p className="mt-4">{t("islas.text")}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5">
  {tursIslas.map((tour) => (

    <div
      key={tour.id}
      className="relative h-[480px] rounded-3xl overflow-hidden group shadow-lg "
>

      <div className="h-2/3">

      <img
        src={tour.miniImg}
        alt={tour.title}
        className="object-cover w-full h-full "
      />
      </div>

      



     
      <div className="absolute bottom-0 p-11 sm:left-39 justify-center ">
        <h3 className="text-2xl font-black text-center ">
          {tour.title}
        </h3>
      <p>
        {tour.price}
      </p>

        <button onClick={() => setSelectedFlyer(tour.fullFlyer)} className="mt-4 bg-[#C5A059] text-white px-28 py-2 rounded-full font-bold">
          Ver más
        </button>


      </div>
{selectedFlyer && (
  <div
    className="fixed inset-0 bg-black/10 flex items-center justify-center z-50"
    onClick={() => setSelectedFlyer(null)}
  >
    <img
      src={selectedFlyer}
      alt="Flyer"
      className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
    />
  </div>
)}

    </div>

  ))}

</div>

      </main>
    </div>
  );
}