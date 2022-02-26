import { BrowserRouter, Route, Routes } from 'react-router-dom'
import VehiculeIndex from './pages/Home/VehiculeIndex'
import Vehicule from './pages/Vehicule/Vehicule'
import './styles/index.scss'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VehiculeIndex />}></Route>
        <Route path="/vehicule/:id" element={<Vehicule />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
