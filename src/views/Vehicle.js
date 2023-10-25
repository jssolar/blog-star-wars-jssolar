import { useEffect, useContext } from "react";
import { Context } from "../store/context";
import { useParams } from "react-router-dom";

const Vehicle = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.getVehicleInfo(params.id);
  }, []);

  return (
    <div className="container-fluid">
      <h1
        className="title"
        
      >
        {store.vehicle.name}
      </h1>
      <hr className="line"/>
      <br />
      <div className="row justify-content-md-center">
        <div className="col-6">
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/bb-8-main_72775463.jpeg?region=187%2C40%2C882%2C496"
            className="imagen-vehiculo"
            alt="..."
          />
        </div>
        <div className="col-6 ">
          <p className="texto-descripcion">Model: {store.vehicle.model}</p>
          <p className="texto-descripcion">Length: {store.vehicle.length}</p>
          <p className="texto-descripcion">Passengers: {store.vehicle.passengers}</p>
          <p className="texto-descripcion">Capacity: {store.vehicle.cargo_capacity}</p>
          <p className="texto-descripcion">Consumables: {store.vehicle.consumables}</p>
          <p className="texto-descripcion">Crew: {store.vehicle.crew}</p>
          <p className="texto-descripcion">Created: {store.vehicle.created}</p>
          <p className="texto-descripcion">Edited: {store.vehicle.edited}</p>
        </div>
      </div>
    </div>
  );
};
export default Vehicle;
