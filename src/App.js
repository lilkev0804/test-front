import { BrowserRouter, Route, Routes } from "react-router-dom";
import VehiculeIndex from "./domains/Vehicles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<VehiculeIndex />}></Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
