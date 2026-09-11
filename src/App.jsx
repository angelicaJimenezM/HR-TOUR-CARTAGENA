import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Principal} from "./pages/Principal.jsx"
import { Nosotros} from "./pages/Nosotros.jsx"
import { CategoriaPasadíasMarítimos } from "./pages/CategoriaPasadíasMarítimos.jsx";
import { CategoriaCity } from "./pages/CategoriaCity.jsx";
import { Reserva } from "./pages/Reserva.jsx"; 
import { CategoriaTierraBomba } from "./pages/CategoriaTierraBomba.jsx";
import { CategoriaClasicoRosario } from "./pages/CategoriaClasicoRosario.jsx";
import { CategoriasChivas } from "./pages/CategoriasChivas.jsx";
import { CategoriaBahia } from "./pages/CategoriaBahia.jsx";
import { CategoriaTerrestreBaru } from "./pages/CategoriaTerrestreBaru.jsx";
import { CategoriaPublicoRosario } from "./pages/CategoriaPublicoRosario.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import TerminosYCondiciones from "./components/TerminosYCondiciones.jsx";





function App() {
  return (
    <div>
    <Router>
        <Routes>
          <Route path='/' element={<Principal />} />
          <Route path='/Nosotros' element={<Nosotros />} />
          <Route path='/CategoriaPasadíasMarítimos' element={<CategoriaPasadíasMarítimos />} />
          <Route path='/CategoriaCity' element={<CategoriaCity />} />
          <Route path='/Reserva' element={<Reserva />} />
          <Route path='/CategoriaTierraBomba' element={<CategoriaTierraBomba />} />
          <Route path='/CategoriaClasicoRosario' element={<CategoriaClasicoRosario />} />
          <Route path='/CategoriasChivas' element={<CategoriasChivas />} />
          <Route path='/CategoriaBahia' element={<CategoriaBahia />} />
          <Route path='/CategoriaTerrestreBaru' element={<CategoriaTerrestreBaru />} />
          <Route path='/CategoriaPublicoRosario' element={<CategoriaPublicoRosario />} />
          <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
          <Route path='/TerminosYCondiciones' element={<TerminosYCondiciones />} />
         

        </Routes>
    </Router>
    </div>
  )
}

export default App;