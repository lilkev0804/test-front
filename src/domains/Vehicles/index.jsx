import React, { useEffect, useState } from 'react'
import VehicleCard from '../../components/VehicleCard/VehicleCard'
import { getVehicles } from '../../services/vehicles'
import styles from './VehiclesIndex.module.scss'

const VehiculeIndex = () => {
  // Fix : initialisation de la state cars par un empty Array
  const [cars, setCars] = useState([])
  // Fix : suppréssion de la variable order et création d'une state order.
  const [order, setOrder] = useState(true)
  useEffect(() => {
    const fetchCars = async () => {
      setCars(await getVehicles())
    }
    fetchCars()
  }, [])


  return cars.length === 0 ? (
    <>loading</>
  ) : (
    <>
      <h3>My garage</h3>
      <div className={styles.actionsContainer}>
        <button
          // Review : passage en classe active
          className={
            order ? styles.switchButtonEnable : styles.switchButtonDisable
          }
          onClick={() => setOrder(!order)}
        >
          {order ? `Only black & white` : 'Reset oder'}
        </button>
      </div>
      <div className={styles.cardsContainer}>
        
        {/* Fix : utilisation des filter */}
        {cars.map((car ,i) =>
          order ? (
            <VehicleCard key={i} vehicle={car}></VehicleCard>
          ) : car.color === 'Black' || car.color === 'White' ? (
            <VehicleCard key={i} vehicle={car}></VehicleCard>
          ) : null,
        )}
      </div>
    </>
  )
}

export default VehiculeIndex
