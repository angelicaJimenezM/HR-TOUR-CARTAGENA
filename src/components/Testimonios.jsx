import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const API = "http://127.0.0.1:8000";

export function Testimonios() {
  const { t } = useTranslation("global");
  const [testimonios, setTestimonios] = useState([]);
  const [tours, setTours] = useState([]); // Listado de tours para el selector y para cruzar nombres
  const [current, setCurrent] = useState(0);

  // Cargar reseñas y tours desde el Backend Django
  useEffect(() => {
    fetch(`${API}/api/resenas/`)
      .then(res => res.json())
      .then(data => {
        console.log("RESEÑAS API:", data);

        const memberData = Array.isArray(data) ? data : (data.results || []);

        // 1. Primero filtramos solo las que estén activas en el Admin de Django
        const resenasActivas = memberData.filter(resena => resena.activo === true);

        // 🚀 2. COLOCA AQUÍ LOS IDs DE LAS RESEÑAS QUE QUIERES MOSTRAR (Máximo las que desees)
        const testimoniodeseado = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

        // 3. Filtramos por ID basándonos en tu lista de elegidas
        const reseñasFiltradas = resenasActivas.filter(resena => testimoniodeseado.includes(resena.id));

        // Guardamos el resultado final limitado en el estado
        setTestimonios(reseñasFiltradas);
      })
      .catch(error => console.error("Error al obtener reseñas:", error));

    fetch(`${API}/api/tours/`)
      .then(res => res.json())
      .then(data => {
        const listadoTours = Array.isArray(data) ? data : (data.results || []);
        setTours(listadoTours);
      })
      .catch(error => console.error("Error al obtener tours:", error));
  }, []);

  const next = () => {
    setCurrent(prev => (prev + 1) % testimonios.length);
  };

  const prev = () => {
    setCurrent(prev => (prev - 1 + testimonios.length) % testimonios.length);
  };

  // Normaliza las URLs de fotos para Django
  const formatearUrlMedia = (urlMedia) => {
    if (!urlMedia) return "";
    if (urlMedia.startsWith("http") || urlMedia.startsWith("/media/")) {
      return urlMedia.startsWith("http") ? urlMedia : `${API}${urlMedia}`;
    }
    return `${API}/media/${urlMedia}`;
  };

  // Función corregida para obtener el título real del tour usando snake_case de Django
  const obtenerNombreTour = (idTourOrObject) => {
    if (!idTourOrObject) return "";
    if (typeof idTourOrObject === "object") {
      return idTourOrObject.titulo_es || idTourOrObject.titulo_en || "";
    }
    const tourEncontrado = tours.find(t => t.id === Number(idTourOrObject));
    return tourEncontrado ? (tourEncontrado.titulo_es || tourEncontrado.titulo_en) : `Tour #${idTourOrObject}`;
  };

  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black text-[#123499]">
            {t("testimonios.title")}
          </h2>
          <p className="mt-4 text-gray-600">
            {t("testimonios.text")}
          </p>
        </div>

        {/* TARJETA DEL TESTIMONIO */}
        {testimonios.length > 0 ? (
          <>
            <div className="max-w-5xl mx-auto bg-white rounded-[32px] shadow-xl overflow-hidden">
              {testimonios[current].foto && (
                <img
                  src={formatearUrlMedia(testimonios[current].foto)}
                  alt={testimonios[current].nombre_persona}
                  className="w-full h-[420px] object-cover"
                />
              )}

              <div className="p-8 relative">
                {/* REFERENCIA DEL TOUR VISIBLE PARA LOS USUARIOS */}
                <div className="absolute top-4 right-6 bg-[#2fb86a] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                  📍 {obtenerNombreTour(testimonios[current].tour)}
                </div>

                <div className="text-center text-2xl mb-4 mt-4">
                  {"⭐".repeat(testimonios[current].estrellas)}
                </div>

                <p className="text-gray-700 text-lg italic text-center px-4">
                  "{testimonios[current].comentario}"
                </p>

                <div className="mt-8 text-center">
                  <h3 className="text-2xl font-bold text-[#123499]">
                    {testimonios[current].nombre_persona}
                  </h3>
                  <p className="text-gray-500">
                    {testimonios[current].pais}
                  </p>
                </div>
              </div>
            </div>

            {/* NAVEGACIÓN DEL CARRUSEL */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-[#123499] text-white font-bold hover:scale-105 transition"
              >
                ←
              </button>

              <div className="flex gap-2">
                {testimonios.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === current ? "bg-[#C5A059] w-6" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-[#123499] text-white font-bold hover:scale-105 transition"
              >
                →
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-6 text-gray-400">
            Aún no hay reseñas registradas o seleccionadas.
          </div>
        )}

        {/* FORMULARIO DE ENVÍO */}
        <FormularioResena tours={tours} setTestimonios={setTestimonios} />
      </div>
    </section>
  );
}

// Sub-componente del Formulario conectado a /api/resenas/
function FormularioResena({ tours, setTestimonios }) {
  const { t } = useTranslation("global");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nombre_persona", e.target.nombre.value);
    formData.append("pais", e.target.pais.value);
    formData.append("comentario", e.target.comentario.value);
    formData.append("estrellas", Number(e.target.estrellas.value));
    formData.append("tour", e.target.tour.value); 

    if (e.target.foto.files[0]) {
      formData.append("foto", e.target.foto.files[0]);
    }

    try {
      const response = await fetch(`${API}/api/resenas/`, {
        method: "POST",
        body: formData 
      });

      if (response.ok) {
        const nuevaResena = await response.json();
        alert("¡Reseña enviada con éxito!");
        
        // Solo la agregamos al carrusel visual si está activa inmediatamente (si Django no requiere aprobación previa)
        if (nuevaResena.activo) {
          setTestimonios(prev => [...prev, nuevaResena]);
        }
        e.target.reset();
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Detalle del error en Django:", errorData);
        alert("Hubo un problema al guardar tu reseña.");
      }
    } catch (error) {
      console.error("Error al enviar la reseña:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-2xl mx-auto bg-[#c7ebf5] border border-gray-100 shadow-xl rounded-3xl p-8 mt-14">
        <h2 className="text-3xl font-black text-center text-[#123499] mb-8">
          {t("testimonios.fromTitulo")} ⭐
        </h2>

        <div className="space-y-5 text-left">
          <div>
            <label className="block font-bold text-gray-700 mb-2">{t("testimonios.fromSeleccionaTour")}</label>
            <select
              name="tour"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#123499] bg-white text-gray-700 cursor-pointer"
            >
              <option value="">-- {t("testimonios.fromelige")} --</option>
              {tours.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.titulo_es || t.titulo_en || `Tour #${t.id}`} 
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-bold text-gray-700 mb-2">{t("testimonios.fromNombre")}</label>
            <input
              name="nombre"
              required
              placeholder="Andrea"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#123499] bg-white"
            />
          </div>

          <div>
            <label className="block font-bold text-gray-700 mb-2">{t("testimonios.fromPais")}</label>
            <input
              name="pais"
              required
              placeholder="Colombia"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#123499] bg-white"
            />
          </div>

          <div>
            <label className="block font-bold text-gray-700 mb-2">{t("testimonios.fromFoto")}</label>
            <input
              type="file"
              name="foto"
              accept="image/*"
              className="w-full border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#123499] file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-slate-100 file:text-[#123499] hover:file:bg-slate-200 cursor-pointer bg-white"
            />
          </div>

          <div>
            <label className="block font-bold text-gray-700 mb-2">{t("testimonios.fromReseña")}</label>
            <textarea
              name="comentario"
              required
              placeholder={t("testimonios.ejemplofrom")}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 h-32 resize-none outline-none focus:ring-2 focus:ring-[#123499] bg-white"
            />
          </div>

          <div>
            <label className="block font-bold text-gray-700 mb-2">{t("testimonios.fromEstrellas")}</label>
            <select
              name="estrellas"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#123499] bg-white"
            >
              <option value="5">⭐⭐⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="2">⭐⭐</option>
              <option value="1">⭐</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#49c169] hover:bg-[#af8c4c] text-white font-bold py-3 rounded-xl transition shadow-lg mt-4"
          >
           {t("testimonios.butomResenia")}
          </button>
        </div>
      </div>
    </form>
  );
}