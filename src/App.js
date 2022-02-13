import { BrowserRouter, Route, Routes } from "react-router-dom";
import VehiculeIndex from "./domains/Vehicles";
import Vehicule from "./domains/Vehicule/Vehicule";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<VehiculeIndex />}></Route>
      <Route path="/vehicule/:id" element={<Vehicule />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
