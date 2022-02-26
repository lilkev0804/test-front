import { useNavigate } from 'react-router-dom'
import Doors from './subComponents/Doors'

const VehicleCard = ({ vehicle }) => {
  const { id, make_and_model, color, doors, mileage } = vehicle
  const navigate = useNavigate()
  const handleVisitedCard = (id) => {
    navigate(`/vehicule/${id}`)
  }

  return (
    <div className="container">
      <button onClick={() => console.log(vehicle)} className="buttonOpen">
        Voir plus
      </button>
      <div className="headerCardContainer">
        <div className="badgeColor" style={{ backgroundColor: color }} />
        {make_and_model}
      </div>
      <div>
        <Doors doors={doors}></Doors>
      </div>
      <div>{mileage} miles</div>
    </div>
  )
}

export default VehicleCard
