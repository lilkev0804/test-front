import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Doors from "./Doors";

const VehicleCard = ({ vehicle }) => {
  const { id, make_and_model, color, doors, car_type, kilometrage } = vehicle;
  const navigate = useNavigate();
  const handleVisitedCard = (id) => {
    navigate(`/vehicule/${id}`, {
      params: {
        object: vehicle,
      },
    });
  };
  return (
    <div className="container">
      <div className="headerCardContainer">
        <div className="badgeColor" style={{ backgroundColor: color }} />
        <p className="brand">{make_and_model.split(" ")[0]}</p>
      </div>
      <p className="model">{make_and_model.split(" ")[1]}</p>
      <div className="containerInformation">
        <p>{car_type}</p>
        <Doors doors={doors}></Doors>
      </div>
      <p>{kilometrage} km</p>
      <Button
        onClick={() => handleVisitedCard(id)}
        className="btn btn-green"
        value="Discover more"
      />
    </div>
  );
};

export default VehicleCard;
