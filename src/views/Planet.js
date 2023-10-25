import { useEffect, useContext } from "react";
import { Context } from "../store/context";
import { useParams } from "react-router-dom";

const Planet = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.getPlanetInfo(params.id);
  }, []);

  return (
    <div className="container-fluid">
      <h1
        className="title text-center mb-4"
      
      >
        {store.planet.name}
      </h1>
      <hr className="line" />
      <br />
      <div className="row justify-content-md-center">
        <div className="col-6">
          <img
            src="https://assets-prd.ignimgs.com/2022/02/10/07-nal-hutta-1644525955610.jpeg"
            className="imagen-planetas"
            alt="..."
      
          />
        </div>
        <div className="col-6  mt-4">
          <p className="texto-descripcion">Rotation Period: {store.planet.rotation_period}</p>
          <p className="texto-descripcion">Orbital Period: {store.planet.orbital_period}</p>
          <p className="texto-descripcion">Diameter: {store.planet.diameter}</p>
          <p className="texto-descripcion">Climate: {store.planet.climate}</p>
          <p className="texto-descripcion">Gravity: {store.planet.gravity}</p>
          <p className="texto-descripcion">Terrain: {store.planet.terrain}</p>
          <p className="texto-descripcion">Surface Water: {store.planet.surface_water}</p>
          <p className="texto-descripcion">Population: {store.planet.population}</p>
        </div>
      </div>
    </div>
  );
};

export default Planet;
