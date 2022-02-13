import axios from 'axios'

const getVehicles = async () => {
  const vehicules = await axios.get(
    'https://random-data-api.com/api/vehicle/random_vehicle?size=50',
  )
  return vehicules.status === 200 ? vehicules.data : []
}

export default getVehicles
