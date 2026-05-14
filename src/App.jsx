import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Principal} from "./pages/Principal.jsx"
import { Nosotros} from "./pages/Nosotros.jsx"


function App() {
  return (
    <div>
    <Router>
        <Routes>
          <Route path='/' element={<Principal />} />
          <Route path='/Nosotros' element={<Nosotros />} />
        </Routes>
    </Router>
    </div>
  )
}

export default App;