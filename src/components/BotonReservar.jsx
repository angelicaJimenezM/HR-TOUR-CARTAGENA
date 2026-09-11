import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"



export function BotonReservar({ tour }) {

  const navigate = useNavigate();
  const { t, i18n } = useTranslation("global");

  const reservar = () => {

    navigate("/reserva", {
      state: {
        tour
      }
    });

  };


  return (

    <button
      onClick={reservar}
      className="
bg-[#2fb86a]
text-white
px-8
py-3
rounded-xl
font-bold
"
    >

     {t("reservas.button1")}

    </button>

  )

}