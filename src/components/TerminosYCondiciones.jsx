import React from 'react';
import { Header } from './Header';

import { useTranslation } from 'react-i18next';

export default function TermsAndConditions() {
  const [t] = useTranslation('global');

  return (
    <div className="min-h-screen bg-[#ece2c6]">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12 text-slate-800 pt-20">
        {/* Encabezado Principal */}
        <header className="mb-10 border-b border-slate-300 pb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-slate-900 uppercase tracking-tight">
            {t("terminosCondiciones.titulo", "Términos y Condiciones")}
          </h1>
          <p className="text-sm text-slate-600 font-medium">
            {t("terminosCondiciones.ultimaActualizacion", "Última actualización: Septiembre 2026")}
          </p>
        </header>

        {/* Contenido de Términos y Condiciones */}
        <div className="space-y-8 text-base leading-relaxed">
          
          {/* 1. Aspectos Generales */}
          <section>
            <h2 className="text-xl font-bold mb-3 text-slate-900 uppercase tracking-wide">
              {t("terminosCondiciones.seccion1.titulo", "1. Condiciones del Sitio Web")}
            </h2>
            <p className="mb-3">
              {t("terminosCondiciones.seccion1.descripcion", "Al usar este sitio web, el usuario ratifica su acuerdo con los términos y condiciones expuestos a continuación. Por favor, léalos cuidadosamente antes de utilizar los servicios.")}
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>{t("terminosCondiciones.seccion1.contactoEtiqueta", "Correo de contacto")}:</strong> contacto@hrtourscartagena.com</li>
              <li><strong>{t("terminosCondiciones.seccion1.sitioEtiqueta", "Sitio Web")}:</strong> https://hrtourscartagena.com</li>
            </ul>
          </section>

          {/* 2. Reservas y Pagos */}
          <section>
            <h2 className="text-xl font-bold mb-3 text-slate-900 uppercase tracking-wide">
              {t("terminosCondiciones.seccion2.titulo", "2. Reservas y Pagos")}
            </h2>
            <p className="mb-2">
              {t("terminosCondiciones.seccion2.descripcion", "Todas las reservas de tours y servicios turísticos están sujetas a disponibilidad y confirmación de pago.")}
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>{t("terminosCondiciones.seccion2.item1", "Los precios están expresados en la moneda especificada e incluyen impuestos aplicables.")}</li>
              <li>{t("terminosCondiciones.seccion2.item2", "El cupo se garantiza únicamente tras recibir el comprobante o confirmación de pago correspondiente.")}</li>
              <li>{t("terminosCondiciones.seccion2.item3", "El cliente debe verificar los datos de la reserva antes de confirmar la transacción.")}</li>
            </ul>
          </section>

          {/* 3. Cancelaciones y Reembolsos */}
          <section>
            <h2 className="text-xl font-bold mb-3 text-slate-900 uppercase tracking-wide">
              {t("terminosCondiciones.seccion3.titulo", "3. Políticas de Cancelación y Reembolsos")}
            </h2>
            <p className="mb-2">
              {t("terminosCondiciones.seccion3.descripcion", "Las solicitudes de cancelación deben enviarse por escrito a través de nuestros canales oficiales:")}
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>{t("terminosCondiciones.seccion3.item1", "Cancelaciones realizadas con más de 48 horas de anticipación pueden optar a reembolso total o reprogramación.")}</li>
              <li>{t("terminosCondiciones.seccion3.item2", "Las cancelaciones con menos de 24 horas o la no presentación (no-show) no tendrán reembolso.")}</li>
              <li>{t("terminosCondiciones.seccion3.item3", "En caso de condiciones meteorológicas adversas, se ofrecerá reprogramación del servicio.")}</li>
            </ul>
          </section>

          {/* 4. Responsabilidades del Usuario */}
          <section>
            <h2 className="text-xl font-bold mb-3 text-slate-900 uppercase tracking-wide">
              {t("terminosCondiciones.seccion4.titulo", "4. Responsabilidad y Obligaciones")}
            </h2>
            <p className="mb-2">
              {t("terminosCondiciones.seccion4.descripcion", "Al contratar nuestros servicios, el usuario se compromete a:")}
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>{t("terminosCondiciones.seccion4.item1", "Suministrar información verídica, exacta y completa al momento de realizar la reserva.")}</li>
              <li>{t("terminosCondiciones.seccion4.item2", "Cumplir con los horarios estipulados y las instrucciones del personal a cargo.")}</li>
              <li>{t("terminosCondiciones.seccion4.item3", "Contar con sus documentos de identidad e itinerario en regla para realizar las actividades.")}</li>
            </ul>
          </section>

          {/* 5. Modificaciones de Términos */}
          <section>
            <h2 className="text-xl font-bold mb-3 text-slate-900 uppercase tracking-wide">
              {t("terminosCondiciones.seccion5.titulo", "5. Modificaciones de las Condiciones")}
            </h2>
            <p>
              {t("terminosCondiciones.seccion5.descripcion", "Nos reservamos el derecho de actualizar o modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor a partir de su publicación en el sitio web.")}
            </p>
          </section>

          {/* 6. Contacto y Soporte */}
          <section className="pt-4 border-t border-slate-300">
            <h2 className="text-xl font-bold mb-3 text-slate-900 uppercase tracking-wide">
              {t("terminosCondiciones.seccion6.titulo", "6. Contacto")}
            </h2>
            <p>
              {t("terminosCondiciones.seccion6.descripcionPre", "Si tiene dudas sobre estos Términos y Condiciones, por favor contáctenos con el asunto")}{' '}
              <strong className="text-slate-900">"{t("terminosCondiciones.seccion6.asunto", "Consulta Términos y Condiciones")}"</strong>.
            </p>
          </section>

        </div>
      </main>
      
    </div>
  );
}