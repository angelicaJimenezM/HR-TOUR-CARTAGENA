import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { Header } from "../components/Header";

import jefe from "../assets/imagenes/jefe.webp";
import videoNosotros from "../assets/videos/nosotros.mp4";
import fondo from "../assets/imagenes/portadas/hero/fondo.webp";

export function Nosotros() {
  const { t } = useTranslation("global");

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <Header />

      {/* =========================================
          FONDO DECORATIVO
      ========================================== */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-[0.07] pointer-events-none z-0"
        style={{ backgroundImage: `url(${fondo})` }}
      />

      <main className="relative z-10">

        {/* =========================================
            HERO
        ========================================== */}
        <section className="min-h-[55vh] flex items-center justify-center px-5 py-20">

          <div className="max-w-5xl mx-auto text-center">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-[#C5A059] font-bold tracking-[0.3em] uppercase text-sm mb-4"
            >
              {t("header.about")}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-7xl font-black text-[#123499] leading-tight"
            >
              {t("aboutus.subtitle")}{" "}
              <span className="text-[#C5A059]">
                Cartagena
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg md:text-xl leading-relaxed"
            >
              {t("aboutus.heroDescription")}
            </motion.p>

          </div>

        </section>


        {/* =========================================
            HISTORIA / MISIÓN Y VISIÓN
        ========================================== */}
        <section className="px-5 md:py-24">

          <div className="max-w-6xl mx-auto">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* FOTO */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >

                <div className="absolute -top-5 -left-5 w-24 h-24 bg-[#C5A059]/20 rounded-full blur-2xl" />

                <div className="relative overflow-hidden rounded-[32px] shadow-2xl">

                  <img
                    src={jefe}
                    alt="HR Tours Cartagena"
                    className="w-full h-[420px] md:h-[520px] object-cover"
                  />

                </div>

              </motion.div>


              {/* TEXTO */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >

                <p className="text-[#C5A059] font-bold tracking-[0.2em] uppercase text-sm mb-3">
                  HR Tours Cartagena
                </p>

                <h2 className="text-3xl md:text-5xl font-black text-[#123499] leading-tight">
                  {t("aboutus.title")}
                </h2>

                <div className="w-20 h-1 bg-[#C5A059] mt-5 mb-7 rounded-full" />

                <p className="text-gray-600 text-lg leading-relaxed">
                  {t("aboutus.historyDescription")}
                </p>

                <div className="mt-8 space-y-5">

                  {/* MISIÓN */}
                  <div className="flex items-start gap-4">

                    <div className="w-10 h-10 rounded-full bg-[#123499] flex items-center justify-center text-white shrink-0 font-bold">
                      ✓
                    </div>

                    <div>
                      <h3 className="font-bold text-[#123499] text-lg">
                        {t("aboutus.mission.title")}
                      </h3>

                      <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                        {t("aboutus.mission.description")}
                      </p>
                    </div>

                  </div>


                  {/* VISIÓN */}
                  <div className="flex items-start gap-4">

                    <div className="w-10 h-10 rounded-full bg-[#C5A059] flex items-center justify-center text-white shrink-0 font-bold">
                      ✓
                    </div>

                    <div>
                      <h3 className="font-bold text-[#123499] text-lg">
                        {t("aboutus.vision.title")}
                      </h3>

                      <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                        {t("aboutus.vision.description")}
                      </p>
                    </div>

                  </div>

                </div>

              </motion.div>

            </div>

          </div>

        </section>


        {/* =========================================
            FRASE DESTACADA
        ========================================== */}
        <section className="px-5 py-16">

          <div className="max-w-5xl mx-auto">

            <div className="bg-[#123499] rounded-[32px] px-8 py-14 md:px-16 text-center shadow-2xl">

              <span className="text-[#C5A059] text-5xl">
                “
              </span>

              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                {t("aboutus.quote.title")}
              </h2>

              <p className="text-white/80 text-lg mt-6 max-w-2xl mx-auto">
                {t("aboutus.quote.description")}
              </p>

            </div>

          </div>

        </section>


        {/* =========================================
            VIDEO
        ========================================== */}
        <section className="px-5 py-16 md:py-24">

          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-10">

              <p className="text-[#C5A059] font-bold uppercase tracking-[0.25em] text-sm">
                {t("aboutus.video.subtitle")}
              </p>

              <h2 className="text-3xl md:text-5xl font-black text-[#123499] mt-3">
                {t("aboutus.video.title")}
              </h2>

            </div>


            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-[32px] shadow-2xl bg-black"
            >

              <video
                src={videoNosotros}
                controls
                playsInline
                className="w-full aspect-video object-cover"
              />

            </motion.div>

          </div>

        </section>


        {/* =========================================
            BENEFICIOS
        ========================================== */}
        <section className="px-5 py-16 bg-slate-50">

          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-12">

              <p className="text-[#C5A059] font-bold uppercase tracking-[0.25em] text-sm">
                {t("aboutus.features.subtitle")}
              </p>

              <h2 className="text-3xl md:text-5xl font-black text-[#123499] mt-3">
                {t("aboutus.features.title")}
              </h2>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* CARD 1 */}
              <div className="bg-white rounded-3xl p-8 shadow-md text-center hover:-translate-y-2 transition-transform duration-300">

                <div className="w-14 h-14 mx-auto rounded-full bg-[#123499] text-white flex items-center justify-center text-2xl">
                  📍
                </div>

                <h3 className="font-bold text-[#123499] text-xl mt-5">
                  {t("aboutus.features.card1.title")}
                </h3>

                <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                  {t("aboutus.features.card1.description")}
                </p>

              </div>


              {/* CARD 2 */}
              <div className="bg-white rounded-3xl p-8 shadow-md text-center hover:-translate-y-2 transition-transform duration-300">

                <div className="w-14 h-14 mx-auto rounded-full bg-[#C5A059] text-white flex items-center justify-center text-2xl">
                  🌴
                </div>

                <h3 className="font-bold text-[#123499] text-xl mt-5">
                  {t("aboutus.features.card2.title")}
                </h3>

                <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                  {t("aboutus.features.card2.description")}
                </p>

              </div>


              {/* CARD 3 */}
              <div className="bg-white rounded-3xl p-8 shadow-md text-center hover:-translate-y-2 transition-transform duration-300">

                <div className="w-14 h-14 mx-auto rounded-full bg-[#123499] text-white flex items-center justify-center text-2xl">
                  🤝
                </div>

                <h3 className="font-bold text-[#123499] text-xl mt-5">
                  {t("aboutus.features.card3.title")}
                </h3>

                <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                  {t("aboutus.features.card3.description")}
                </p>

              </div>


              {/* CARD 4 */}
              <div className="bg-white rounded-3xl p-8 shadow-md text-center hover:-translate-y-2 transition-transform duration-300">

                <div className="w-14 h-14 mx-auto rounded-full bg-[#C5A059] text-white flex items-center justify-center text-2xl">
                  ❤️
                </div>

                <h3 className="font-bold text-[#123499] text-xl mt-5">
                  {t("aboutus.features.card4.title")}
                </h3>

                <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                  {t("aboutus.features.card4.description")}
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================
            CTA
        ========================================== */}
        <section className="px-5 py-20">

          <div className="max-w-5xl mx-auto text-center">

            <h2 className="text-3xl md:text-5xl font-black text-[#123499]">
              {t("aboutus.cta.title")}
            </h2>

            <p className="text-gray-600 text-lg mt-5">
              {t("aboutus.cta.description")}
            </p>

            <a
              href="/"
              className="inline-block mt-8 bg-[#C5A059] hover:bg-[#af8c4c] text-white font-bold px-10 py-4 rounded-full shadow-lg hover:scale-105 transition"
            >
              {t("aboutus.cta.button")}
            </a>

          </div>

        </section>

      </main>

    </div>
  );
}