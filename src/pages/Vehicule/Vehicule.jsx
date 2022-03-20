import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import getVehicles from "../../services/vehicles";

export default function Vehicule() {
  const [myCar, setMyCar] = useState([]);
  useEffect(() => {
    const fetchCars = async () => {
      setMyCar(await getVehicles("random"));
    };
    fetchCars();
  }, []);
  return (
    <div>
      <NavBar />
    </div>
  );
}
