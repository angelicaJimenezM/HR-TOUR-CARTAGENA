import { useLocation, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Header } from "../components/Header";
import { Contacto } from "../components/Contacto";
import { Footer } from "../components/Footer";
import pincelazo from "../assets/imagenes/portadas/hero/pincelazo.webp";

const API = "http://127.0.0.1:8000";

export function Reserva() {
    const location = useLocation();
    const navigate = useNavigate();
    const tour = location.state?.tour;
    const { t, i18n } = useTranslation("global");

    // Estados para controlar los modales
    const [mostrarModalExito, setMostrarModalExito] = useState(false);
    const [mostrarModalSinCupo, setMostrarModalSinCupo] = useState(false);

    // Estado para la aceptación de Políticas y Términos
    const [aceptaPoliticas, setAceptaPoliticas] = useState(false);
    const [aceptaTerminosYCondiciones, setaceptaTerminosYCondiciones] = useState(false);

    // Conteo de pasajeros inicializados en cadena vacía
    const [cantAdultos, setCantAdultos] = useState("");
    const [cantNinos, setCantNinos] = useState("");
    
    // Sub-desglose de tarifa especial para niños
    const [ninosConDescuento, setNinosConDescuento] = useState(0);

    if (!tour) {
        return <h1 className="text-center py-20 font-bold text-xl">No hay tour seleccionado</h1>;
    }

    // Precios
    const precioAdulto = Number(tour.precio_adulto || tour.precio) || 0;
    
    // Evaluación de tarifa especial / Descuento para niños
    const tieneRangoValido = Boolean(
        tour.rango_edad_nino && 
        tour.rango_edad_nino !== "0" && 
        String(tour.rango_edad_nino).trim() !== ""
    );

    const tienePrecioNinoEspecial = (
        tour.precio_nino !== null && 
        tour.precio_nino !== undefined && 
        Number(tour.precio_nino) < precioAdulto
    );

    const tieneDescuentoNino = tieneRangoValido && tienePrecioNinoEspecial;
    const precioNinoEspecial = tieneDescuentoNino ? Number(tour.precio_nino) : precioAdulto;

    // Valores numéricos seguros para los cálculos
    const numAdultos = Number(cantAdultos) || 0;
    const numNinos = Number(cantNinos) || 0;

    // Manejo de cambio en el total de niños
    const handleCambioTotalNinos = (val) => {
        setCantNinos(val);
        const totalNum = Number(val) || 0;
        if (ninosConDescuento > totalNum) {
            setNinosConDescuento(totalNum);
        }
    };

    // Cálculo exacto del saldo
    const ninosConDescuentoAplicado = tieneDescuentoNino ? ninosConDescuento : 0;
    const ninosSinDescuento = tieneDescuentoNino 
        ? Math.max(0, numNinos - ninosConDescuentoAplicado)
        : numNinos;

    const subtotalAdultos = numAdultos * precioAdulto;
    const subtotalNinosConDescuento = ninosConDescuentoAplicado * precioNinoEspecial;
    const subtotalNinosSinDescuento = ninosSinDescuento * precioAdulto;

    const saldoTotal = subtotalAdultos + subtotalNinosConDescuento + subtotalNinosSinDescuento;
    const totalPasajeros = numAdultos + numNinos;

    // Calcular fecha mínima (24 horas de anticipación)
    const fechaMinima = new Date(Date.now() + 24 * 60 * 60 * 1000);
    const minFecha = fechaMinima.toISOString().split("T")[0];

    const obtenerUrlFlyer = (flyerPath) => {
        if (!flyerPath) return "";
        if (flyerPath.startsWith("http://") || flyerPath.startsWith("https://")) {
            return flyerPath;
        }
        return `${API}${flyerPath.startsWith('/') ? '' : '/'}${flyerPath}`;
    };

    const nombreTour = tour.titulo_es || tour.titulo || tour.nombre || "Tour seleccionado";

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (numAdultos < 1) {
            alert("⚠️ Debe seleccionar al menos 1 adulto para realizar la reserva.");
            return;
        }

        if (!aceptaPoliticas) {
            alert("⚠️ Debe aceptar la Política de Privacidad para continuar.");
            return;
        }
        if (!aceptaTerminosYCondiciones) {
            alert("⚠️ Debe aceptar los Términos y Condiciones para continuar.");
            return;
        }

        const fechaIngresada = e.target.fecha_reserva.value;
        const horaIngresada = e.target.hora_reserva.value || "00:00";

        // Validar anticipación de 24 horas
        const fechaHoraReserva = new Date(`${fechaIngresada}T${horaIngresada}`);
        const ahoraMas24Horas = new Date(Date.now() + 24 * 60 * 60 * 1000);

        if (fechaHoraReserva < ahoraMas24Horas) {
            alert("⚠️ La reserva debe realizarse con un mínimo de 24 horas de anticipación.");
            return;
        }

        // Consultar disponibilidad previa
        try {
            const checkRes = await fetch(`${API}/api/reservas/?tour=${tour.id}&fecha=${fechaIngresada}`);
            if (checkRes.ok) {
                const reservasExistentes = await checkRes.json();
                const listaReservas = Array.isArray(reservasExistentes) ? reservasExistentes : (reservasExistentes.results || []);
                
                if (listaReservas.length >= 2) {
                    setMostrarModalSinCupo(true);
                    return;
                }
            }
        } catch (error) {
            console.error("Error al consultar disponibilidad previa:", error);
        }

        const datosReserva = {
            tour: tour.id,            
            nombre_tour: nombreTour,  
            documento: e.target.numero_documento.value,
            fecha: fechaIngresada,
            hora: horaIngresada,
            saldo: saldoTotal,
            adultos: numAdultos,
            ninos: numNinos,
            nombre_persona: e.target.nombre_persona.value,
            celular: e.target.celular.value,
            pais: e.target.pais.value,
            cantidad_personas: totalPasajeros
        };

        try {
            const response = await fetch(`${API}/api/reservas/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(datosReserva),
            });

            if (response.ok) {
                e.target.reset();
                setCantAdultos("");
                setCantNinos("");
                setNinosConDescuento(0);
                setAceptaPoliticas(false);
                setaceptaTerminosYCondiciones(false);
                
                setMostrarModalExito(true);
            } else {
                const errorData = await response.json().catch(() => ({}));
                console.error("Detalle del error devuelto por Django:", errorData);
                alert(`Error del servidor: ${JSON.stringify(errorData)}`);
            }
        } catch (error) {
            console.error("Error de conexión con la API:", error);
            alert("No se pudo conectar con el servidor.");
        }
    };

    const esFormularioValido = aceptaPoliticas && aceptaTerminosYCondiciones;

    return (
        <div className="min-h-screen bg-[#b4ebfa] flex flex-col ">
            <Header />
            
            <div className="max-w-4xl mx-auto p-5 pt-24 flex-grow w-full">
        
                <div className="relative flex justify-center items-center my-4 max-w-2xl mx-auto">
                  <img 
                    src={pincelazo} 
                    alt="Fondo pincelada" 
                    className="absolute inset-0 w-full h-full object-fill scale-y-145 pointer-events-none z-0"
                  />

                  <h1 className=" font-urban relative z-10 text-3xl md:text-4xl text-center text-white px-8 py-2 drop-shadow-md">
                    Reserva: {nombreTour}
                  </h1>
                </div>

                <div className="mb-6 flex justify-center">
                    <img
                        src={obtenerUrlFlyer(tour.flyer)}
                        alt={nombreTour}
                        className="w-full max-w-sm rounded-2xl shadow-md object-cover"
                        onError={(e) => {
                            if (tour.flyer && !e.target.src.endsWith(tour.flyer)) {
                                e.target.src = tour.flyer;
                            }
                        }}
                    />
                </div>

                <div className="mt-5 text-[#322c9f] text-left whitespace-pre-line leading-relaxed max-w-xl mx-auto">
                    {i18n.language === "es" ? tour.descripcion_es : tour.descripcion_en}
                </div>

                {/* TARIFAS DEL TOUR */}
                <div className="text-center my-6 bg-blue-50/50 p-4 rounded-xl max-w-md mx-auto border border-blue-100">
                    <p className="text-sm font-semibold text-gray-700">
                        {t("reservas.tarifaAdulto")} <span className="text-[#123499] font-bold">${precioAdulto.toLocaleString()} COP</span>
                    </p>
                    {tieneDescuentoNino ? (
                        <p className="text-sm font-semibold text-gray-700 mt-1">
                            {t("reservas.tarifaNiños")} ({tour.rango_edad_nino}): <span className="text-[#123499] font-bold">${precioNinoEspecial.toLocaleString()} COP</span>
                        </p>
                    ) : (
                        <p className="text-xs text-gray-500 mt-1 italic">
                            {t("reservas.noAplica")}
                        </p>
                    )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto mb-10 text-left bg-[#d1f0fb] p-6 rounded-2xl border border-gray-100 shadow-sm">
                    
                    <div>
                        <label className="block font-bold text-[#322c9f] mb-1">{t("reservas.nombrePersona")}</label>
                        <input
                            name="nombre_persona"
                            required
                            placeholder="Nombre completo"
                            className="w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-[#123499] bg-white"
                        />
                    </div>

                    <div>
                        <label className="block font-bold text-[#322c9f] mb-1">{t("reservas.documento")}</label>
                        <input
                            name="numero_documento"
                            required
                            placeholder="C.C. / Pasaporte"
                            className="w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-[#123499] bg-white"
                        />
                    </div>

                    <div>
                        <label className="block font-bold text-[#322c9f] mb-1">{t("reservas.celular")}</label>
                        <input
                            name="celular"
                            required
                            placeholder="Ej: +57 300..."
                            className="w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-[#123499] bg-white"
                        />
                    </div>

                    <div>
                        <label className="block font-bold text-[#322c9f] mb-1">{t("reservas.pais")}</label>
                        <input 
                            name="pais"
                            required
                            type="text" 
                            placeholder="País de origen"
                            className="w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-[#123499] bg-white"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block font-bold text-[#322c9f] mb-1">{t("reservas.fecha")}</label>
                            <input 
                                name="fecha_reserva"
                                required
                                type="date" 
                                min={minFecha}
                                className="w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-[#123499] bg-white"
                            />
                        </div>
                        <div>
                            <label className="block font-bold text-[#322c9f] mb-1">{t("reservas.hora")}</label>
                            <input 
                                name="hora_reserva"
                                required
                                type="time" 
                                className="w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-[#123499] bg-white"
                            />
                        </div>
                    </div>

                    <p className="text-xs text-amber-600 font-semibold mt-1">
                        {t("reservas.aviso")}
                    </p>

                    <div className="grid grid-cols-2 gap-4 pt-2">
                        <div>
                            <label className="block font-bold text-[#322c9f] mb-1">{t("reservas.adulto")}</label>
                            <input 
                                name="cantidad_adultos"
                                required
                                type="number" 
                                min="1"
                                placeholder="Ej: 2"
                                value={cantAdultos}
                                className="w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-[#123499] bg-white"
                                onChange={(e) => setCantAdultos(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block font-bold text-[#322c9f] mb-1">{t("reservas.niños")}</label>
                            <input 
                                name="cantidad_ninos"
                                type="number" 
                                min="0"
                                placeholder="Ej: 0"
                                value={cantNinos}
                                className="w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-[#123499] bg-white"
                                onChange={(e) => handleCambioTotalNinos(e.target.value)}
                            />
                        </div>
                    </div>

                    {numNinos > 0 && tieneDescuentoNino && (
                        <div className="bg-blue-50/70 p-3.5 rounded-xl border border-blue-200 text-xs space-y-2">
                            <p className="font-bold text-gray-800">
                                {t("reservas.calificacionNiños")} {numNinos} {t("reservas.niños")}:
                            </p>
                            
                            <div className="flex items-center justify-between">
                                <label className="text-gray-700">
                                    {t("reservas.cuantosNiños")} ({tour.rango_edad_nino} {t("reservas.años")}):
                                </label>
                                <select 
                                    value={ninosConDescuento}
                                    onChange={(e) => setNinosConDescuento(Number(e.target.value))}
                                    className="border border-blue-300 rounded-lg p-1.5 bg-white font-bold text-[#123499] outline-none"
                                >
                                    {Array.from({ length: numNinos + 1 }, (_, i) => (
                                        <option key={i} value={i}>{i}</option>
                                    ))} 
                                </select>
                            </div>

                            {ninosSinDescuento > 0 && (
                                <p className="text-[#de7723] font-semibold italic border-t border-blue-200/60 pt-1">
                                    * {ninosSinDescuento} {t("reservas.rango")} (${precioAdulto.toLocaleString()} COP).
                                </p>
                            )}
                        </div>
                    )}

                    <div className="bg-[#123499]/5 p-4 rounded-xl border border-[#123499]/20 space-y-2 my-4">
                        <div className="flex justify-between text-sm text-gray-600">
                            <span>{numAdultos} {t("reservas.adulto")}(s):</span>
                            <span className="font-semibold">${subtotalAdultos.toLocaleString()} COP</span>
                        </div>

                        {ninosConDescuentoAplicado > 0 && (
                            <div className="flex justify-between text-sm text-gray-600">
                                <span>{ninosConDescuentoAplicado} {t("reservas.niños")} {t("reservas.tarifaE")}</span>
                                <span className="font-semibold">${subtotalNinosConDescuento.toLocaleString()} COP</span>
                            </div>
                        )}

                        {ninosSinDescuento > 0 && (
                            <div className="flex justify-between text-sm text-gray-600">
                                <span>{ninosSinDescuento} {t("reservas.niños")} {t("reservas.tarifaR")}</span>
                                <span className="font-semibold">${subtotalNinosSinDescuento.toLocaleString()} COP</span>
                            </div>
                        )}

                        <div className="border-t border-gray-200 pt-2 flex justify-between items-center mt-2">
                            <span className="font-bold text-[#123499]">
                                {t("reservas.saldoT")} ({totalPasajeros} {t("reservas.personas")}{totalPasajeros > 1 ? 's' : ''}):
                            </span>
                            <span className="text-xl font-black text-[#123499]">
                                ${saldoTotal.toLocaleString()} COP
                            </span>
                        </div>
                    </div>

                    {/* CASILLA DE VERIFICACIÓN: POLÍTICA DE PRIVACIDAD */}
                    <div className="flex items-start gap-2 pt-2">
                        <input
                            type="checkbox"
                            id="acepta_politicas"
                            required
                            checked={aceptaPoliticas}
                            onChange={(e) => setAceptaPoliticas(e.target.checked)}
                            className="mt-1 h-4 w-4 rounded border-gray-300 text-[#123499] focus:ring-[#123499] cursor-pointer"
                        />
                        <label htmlFor="acepta_politicas" className="text-xs text-gray-700 leading-tight cursor-pointer">
                            Acepto la{" "}
                            <Link 
                                to="/PrivacyPolicy" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-[#123499] font-bold underline hover:text-[#0e2773]"
                            >
                                Política de Privacidad
                            </Link>{" "}
                            y autorizo el tratamiento de mis datos personales.
                        </label>
                    </div>

                    {/* CASILLA DE VERIFICACIÓN: TÉRMINOS Y CONDICIONES */}
                    <div className="flex items-start gap-2 pt-2">
                        <input
                            type="checkbox"
                            id="acepta_TerminosYCondiciones"
                            required
                            checked={aceptaTerminosYCondiciones}
                            onChange={(e) => setaceptaTerminosYCondiciones(e.target.checked)}
                            className="mt-1 h-4 w-4 rounded border-gray-300 text-[#123499] focus:ring-[#123499] cursor-pointer"
                        />
                        <label htmlFor="acepta_TerminosYCondiciones" className="text-xs text-gray-700 leading-tight cursor-pointer">
                            Acepto los{" "}
                            <Link 
                                to="/TerminosYCondiciones" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-[#123499] font-bold underline hover:text-[#0e2773]"
                            >
                                Términos y Condiciones
                            </Link>{" "}
                            del servicio.
                        </label>
                    </div>

                    <button 
                        type="submit"
                        disabled={!esFormularioValido}
                        className={`w-full p-3 rounded-xl font-bold transition mt-4 ${
                            esFormularioValido 
                                ? "bg-[#2fb86a] hover:bg-[#249655] text-white cursor-pointer shadow-md" 
                                : "bg-gray-400 text-gray-200 cursor-not-allowed shadow-none"
                        }`}
                    >
                        {t("reservas.button3")}
                    </button>
                </form>

                <Contacto />
            </div>
            
            {/* MODALES */}
            {mostrarModalExito && (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center border border-gray-100 animate-fade-in">
      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
        ✓
      </div>
      <h2 className="text-2xl font-black text-[#123499] mb-3">
        {t("modalExito.titulo")}
      </h2>
      <p className="text-gray-600 mb-6 text-sm leading-relaxed">
        {t("modalExito.mensajeParte1")}{' '}
        <strong className="text-gray-800">{nombreTour}</strong>.{' '}
        {t("modalExito.mensajeParte2")}
      </p>
      <button
        onClick={() => {
          setMostrarModalExito(false);
          navigate("/");
        }}
        className="w-full bg-[#123499] hover:bg-[#0e2773] text-white font-bold py-3 px-6 rounded-xl transition shadow-lg"
      >
        {t("modalExito.botonAceptar")}
      </button>
    </div>
  </div>
)}

            {mostrarModalSinCupo && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center border border-gray-100 animate-fade-in">
                        <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                            !
                        </div>
                        <h2 className="text-2xl font-black text-amber-800 mb-3">
                            Fecha Sin Disponibilidad
                        </h2>
                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                            Lo sentimos, para la fecha seleccionada ya se ha alcanzado el <strong>límite máximo de reservas</strong> para <strong className="text-gray-800">{nombreTour}</strong>.
                            <br /><br />
                            <strong className="text-black">Por favor, selecciona otro día en el calendario para programar tu viaje.</strong> 
                        </p>
                        <button
                            onClick={() => setMostrarModalSinCupo(false)}
                            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-xl transition shadow-lg"
                        >
                            Elegir otra fecha
                        </button>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}