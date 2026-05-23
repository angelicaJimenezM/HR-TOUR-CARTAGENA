import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Principal} from "./pages/Principal.jsx"
import { Nosotros} from "./pages/Nosotros.jsx"
import { CategoriaIslas } from "./pages/CategoriaIslas.jsx";
import { CategoriaCity } from "./pages/CategoriaCity.jsx";

function App() {
  return (
    <div>
    <Router>
        <Routes>
          <Route path='/' element={<Principal />} />
          <Route path='/Nosotros' element={<Nosotros />} />
          <Route path='/CategoriaIslas' element={<CategoriaIslas />} />
          <Route path='/CategoriaCity' element={<CategoriaCity />} />
        </Routes>
    </Router>
    </div>
  )
}

export default App;