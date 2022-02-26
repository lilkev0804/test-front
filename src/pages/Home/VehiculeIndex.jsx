import React, { useCallback, useEffect, useState, Children } from 'react'
import Loading from '../../components/loading/Loading'
import ManageBar from '../../components/manageBar/ManageBar'
import NavBar from '../../components/navBar/NavBar'
import VehicleCard from '../../components/VehicleCard/VehicleCard'
import getVehicles from '../../services/vehicles'
import { ToggleBlackWhite } from '../../store/Countext'
const VehiculeIndex = () => {
  const [cars, setCars] = useState([])
  const [toggleColor, setToggleColor] = useState(true)
  const [textBtnToggle, setTextBtnToggle] = useState('Only black & white')
  // const [modal, setModal] = useState(false)
  useEffect(() => {
    const fetchCars = async () => {
      setCars(await getVehicles())
    }
    fetchCars()
  }, [])

  const refresh = useCallback(() => {
    const fetchCars = async () => {
      setCars(await getVehicles())
    }
    fetchCars()
  }, [])

  const toggleBW = useCallback(() => {
    toggleColor
      ? setTextBtnToggle('Reset oder')
      : setTextBtnToggle('Only black & white')

    setToggleColor(!toggleColor)
  }, [toggleColor])

  const handleSubmit = (data, numberRequest) => {
    if (numberRequest.length === 1) {
      const newArray = []
      cars.map(
        (car) =>
          car[numberRequest[0]] === data[numberRequest[0]] &&
          newArray.push(car),
      )
      setCars(newArray)
    }
    if (numberRequest.length === 2) {
    }
    if (numberRequest.length === 3) {
    }
    if (numberRequest.length === 4) {
    }
  }

  return cars.length === 0 ? (
    <Loading />
  ) : (
    <ToggleBlackWhite.Provider
      value={{ toggleBW, refresh, textBtn: textBtnToggle }}
    >
      <NavBar />
      <div className="containerPage">
        <ManageBar
          cars={cars}
          handleSubmit={(data, e) => handleSubmit(data, e)}
        />
        <div className="cardsContainer">
          {cars.map((car, i) =>
            toggleColor ? (
              <VehicleCard
                key={i}
                vehicle={car}
                color={car.color}
              ></VehicleCard>
            ) : car.color === 'Black' || car.color === 'White' ? (
              <VehicleCard
                key={i}
                vehicle={car}
                color={car.color}
              ></VehicleCard>
            ) : null,
          )}
        </div>
      </div>
    </ToggleBlackWhite.Provider>
  )
}

export default VehiculeIndex
