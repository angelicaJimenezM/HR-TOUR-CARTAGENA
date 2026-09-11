import React from 'react';
import { Header } from './Header';
import { useTranslation } from 'react-i18next';

export default function PrivacyPolicy() {
  const [t] = useTranslation('global');

  return (
    <div>
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12 text-slate-800 bg-[#ece2c6] pt-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-slate-900">
          {t("politicaPrivacidad.titulo")}
        </h1>
        <p className="text-sm text-slate-500 mb-8">
          {t("politicaPrivacidad.ultimaActualizacion")}
        </p>

        <div className="space-y-8 text-base leading-relaxed">
          {/* 1. Identificación */}
          <section>
            <h2 className="text-xl font-semibold mb-3 text-slate-900">
              {t("politicaPrivacidad.seccion1.titulo")}
            </h2>
            <p>
              {t("politicaPrivacidad.seccion1.descripcion")}
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>{t("politicaPrivacidad.seccion1.ciudadEtiqueta")}:</strong> {t("politicaPrivacidad.seccion1.ciudadValor")}</li>
              <li><strong>{t("politicaPrivacidad.seccion1.correoEtiqueta")}:</strong> contacto@hrtourscartagena.com</li>
              <li><strong>{t("politicaPrivacidad.seccion1.sitioEtiqueta")}:</strong> https://hrtourscartagena.com</li>
            </ul>
          </section>

          {/* 2. Datos Recolectados */}
          <section>
            <h2 className="text-xl font-semibold mb-3 text-slate-900">
              {t("politicaPrivacidad.seccion2.titulo")}
            </h2>
            <p className="mb-2">
              {t("politicaPrivacidad.seccion2.descripcion")}
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>{t("politicaPrivacidad.seccion2.item1")}</li>
              <li>{t("politicaPrivacidad.seccion2.item2")}</li>
              <li>{t("politicaPrivacidad.seccion2.item3")}</li>
              <li>{t("politicaPrivacidad.seccion2.item4")}</li>
              <li>{t("politicaPrivacidad.seccion2.item5")}</li>
            </ul>
          </section>

          {/* 3. Finalidad */}
          <section>
            <h2 className="text-xl font-semibold mb-3 text-slate-900">
              {t("politicaPrivacidad.seccion3.titulo")}
            </h2>
            <p className="mb-2">{t("politicaPrivacidad.seccion3.descripcion")}</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>{t("politicaPrivacidad.seccion3.item1")}</li>
              <li>{t("politicaPrivacidad.seccion3.item2")}</li>
              <li>{t("politicaPrivacidad.seccion3.item3")}</li>
              <li>{t("politicaPrivacidad.seccion3.item4")}</li>
              <li>{t("politicaPrivacidad.seccion3.item5")}</li>
              <li>{t("politicaPrivacidad.seccion3.item6")}</li>
            </ul>
          </section>

          {/* 4. Derechos del Usuario */}
          <section>
            <h2 className="text-xl font-semibold mb-3 text-slate-900">
              {t("politicaPrivacidad.seccion4.titulo")}
            </h2>
            <p className="mb-2">
              {t("politicaPrivacidad.seccion4.descripcion")}
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>{t("politicaPrivacidad.seccion4.item1")}</li>
              <li>{t("politicaPrivacidad.seccion4.item2")}</li>
              <li>{t("politicaPrivacidad.seccion4.item3")}</li>
              <li>{t("politicaPrivacidad.seccion4.item4")}</li>
              <li>{t("politicaPrivacidad.seccion4.item5")}</li>
            </ul>
          </section>

          {/* 5. Servicios de Terceros */}
          <section>
            <h2 className="text-xl font-semibold mb-3 text-slate-900">
              {t("politicaPrivacidad.seccion5.titulo")}
            </h2>
            <p>
              {t("politicaPrivacidad.seccion5.descripcion")}
            </p>
          </section>

          {/* 6. Cookies */}
          <section>
            <h2 className="text-xl font-semibold mb-3 text-slate-900">
              {t("politicaPrivacidad.seccion6.titulo")}
            </h2>
            <p>
              {t("politicaPrivacidad.seccion6.descripcion")}
            </p>
          </section>

          {/* 7. Contacto */}
          <section>
            <h2 className="text-xl font-semibold mb-3 text-slate-900">
              {t("politicaPrivacidad.seccion7.titulo")}
            </h2>
            <p>
              {t("politicaPrivacidad.seccion7.descripcionPre")}{' '}
              <strong>"{t("politicaPrivacidad.seccion7.asunto")}"</strong>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}