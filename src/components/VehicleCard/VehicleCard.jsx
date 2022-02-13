import Doors from "./subComponents/Doors";
import style from "./VehicleCard.module.scss";

// Fix : passage d'une variable à une constante pour VehicleCard
const VehicleCard = (props) => {
  // Review: descruturation de la props ( améliration de la pérénité et lisibilité du code)
  const {vehicle } = props
  return (
    <div className={style.container}>
      <div>
        #{vehicle.id} - {vehicle.make_and_model}(
        {vehicle.color})
      </div>
      <div>
        {/* Review : création d'un components enfants pour gerer le nombres de porte */}
        <Doors doors={vehicle.doors}></Doors>
      </div>
      <div>{vehicle.mileage} miles</div>
    </div>
  );
};

export default VehicleCard;
