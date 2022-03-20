import React, { useCallback, useEffect, useState } from "react";
import Loading from "../../components/loading/Loading";
import ManageBar from "../../components/manageBar/ManageBar";
import NavBar from "../../components/navBar/NavBar";
import VehicleCard from "../../components/VehicleCard/VehicleCard";
import getVehicles from "../../services/vehicles";
import { ToggleBlackWhite } from "../../store/Countext";
const VehiculeIndex = () => {
  const [cars, setCars] = useState([]);
  const [toggleColor, setToggleColor] = useState(true);
  const [textBtnToggle, setTextBtnToggle] = useState("Only black & white");
  const [orginalCars, setOrignalsCars] = useState([]);
  const [alertNoResult, setAlertNoResult] = useState("");

  useEffect(() => {
    const fetchCars = async () => {
      setCars(await getVehicles());
    };
    fetchCars();
  }, []);

  const refresh = useCallback(() => {
    const fetchCars = async () => {
      setCars(await getVehicles());
    };
    fetchCars();
  }, []);

  const toggleBW = useCallback(() => {
    toggleColor
      ? setTextBtnToggle("Reset oder")
      : setTextBtnToggle("Only black & white");

    setToggleColor(!toggleColor);
  }, [toggleColor]);

  const handleSubmit = (data, numberRequest, word) => {
    setOrignalsCars(cars);
    if (word) {
      const newArray = [];
      cars.map(
        (car) =>
          car.make_and_model.toLowerCase().includes(data.toLowerCase()) &&
          newArray.push(car)
      );
      if (newArray.length === 0) {
        setAlertNoResult("No result ....");
      } else {
        setCars(newArray);
      }
    } else {
      if (numberRequest.length === 1) {
        if (numberRequest[0] === "km-min") {
          const newArray = [];
          cars.map(
            (car) =>
              car.kilometrage >= data.kilometrageMin && newArray.push(car)
          );
          setCars(newArray);
        } else {
          const newArray = [];
          cars.map(
            (car) =>
              car.kilometrage <= data.kilometrageMax && newArray.push(car)
          );
          setCars(newArray);
        }
      }
      if (numberRequest.length === 2) {
        const newArray = [];
        cars.map(
          (car) =>
            car.kilometrage >= data.kilometrageMin &&
            car.kilometrage <= data.kilometrageMax &&
            newArray.push(car)
        );
        setCars(newArray);
      }
    }
  };

  const handleReset = () => {
    setCars(orginalCars);
  };

  return cars.length === 0 && orginalCars.length === 0 ? (
    <Loading />
  ) : (
    <ToggleBlackWhite.Provider
      value={{ toggleBW, refresh, textBtn: textBtnToggle }}
    >
      <NavBar handleSubmit={(data) => handleSubmit(data, null, "words")} />
      <ManageBar
        handleReset={() => handleReset()}
        cars={cars}
        handleSubmit={(data, e) => handleSubmit(data, e)}
      />
      <div className="containerCards">
        {alertNoResult !== "" && (
          <p className="alertMessage">{alertNoResult}</p>
        )}
        <div className="cardsContainer">
          {cars.map((car, i) =>
            toggleColor ? (
              <VehicleCard key={i} vehicle={car} color={car.color} />
            ) : car.color === "Black" || car.color === "White" ? (
              <VehicleCard key={i} vehicle={car} color={car.color} />
            ) : null
          )}
        </div>
      </div>
    </ToggleBlackWhite.Provider>
  );
};

export default VehiculeIndex;
