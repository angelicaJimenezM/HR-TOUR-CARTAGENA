import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function Preguntas() {
  const { t } = useTranslation("global");
  const [abierta, setAbierta] = useState(null);

  // Obtiene la lista traducida directamente del JSON
  const preguntas = t("preguntas.items", { returnObjects: true }) || [];

  const togglePregunta = (id) => {
    setAbierta(abierta === id ? null : id);
  };

  return (
    <section className="max-w-4xl mx-auto px-5 py-16" id="preguntasFrecuentes">
      <h2 className="text-4xl font-bold text-center text-[#123499] mb-10">
        {t("preguntas.titulo")}
      </h2>

      <div className="space-y-4">
        {Array.isArray(preguntas) && preguntas.map((item) => (
          <div
            key={item.id}
            className="bg-[#ddd5be] rounded-2xl shadow-md overflow-hidden"
          >
            <button
              onClick={() => togglePregunta(item.id)}
              className="w-full flex justify-between items-center p-5 text-left font-semibold text-lg"
            >
              {item.pregunta}

              <span className="text-2xl text-[#123499]">
                {abierta === item.id ? "−" : "+"}
              </span>
            </button>

            <AnimatePresence>
              {abierta === item.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 text-gray-600">
                    {item.respuesta}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}