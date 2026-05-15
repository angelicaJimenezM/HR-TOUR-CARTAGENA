import jefe from '../assets/imagenes/jefe.webp'
import logo from '../assets/imagenes/logo.webp'
import { Link } from "react-router-dom";
import videoNosotros from "../assets/videos/nosotros.mp4";

export function Nosotros (){
    return(
        <div  className=" bg-white">
            <header className='flex justify-start'>
                <Link to = "/">
                
                    <img src={logo} alt="" className='w-38 sm:3xl'/>
                </Link>
            </header>
            <main>

            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-full text-center max-w-3xl mx-auto">
               <h2 className="text-[#123499] text-2xl font-bold tracking-widest uppercase mb-2">Quienes somos</h2>
               <div className="w-full sm:w-xl max-w-4xl mx-auto my-10 rounded-2xl overflow-hidden shadow-lg ">
              <video  src={videoNosotros} className="w-full  h-auto sm:h-72"  controls   autoPlay loop>
  </video>
</div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Pasión por <span className="text-[#C5A059]">Cartagena</span></h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                En <strong>HR Tours Cartagena</strong>, diseñamos recuerdos que perduran. Combinamos la calidez local con la eficiencia técnica para que disfrutes sin preocupaciones.
              </p>
                <div>
                    <img src={jefe} alt="" />
                </div>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-center justify-center gap-3 font-semibold text-[#123499]">
                  <span className="text-[#C5A059] text-2xl">✔</span> Tours Exclusivos
                </div>
                <div className="flex items-center justify-center gap-3 font-semibold text-[#123499]">
                  <span className="text-[#C5A059] text-2xl">✔</span> Calidad Recomendada
                </div>
              </div>
            </div>
          </div>
            </main>
        </div>
    )
}