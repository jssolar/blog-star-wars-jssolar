import { useEffect, useContext } from "react";
import { Context } from "../store/context";
import { useParams } from "react-router-dom";

const Character = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.getPeopleInfo(params.id);
  }, []);

  return (
    <div className="container-fluid">
      <h1
        className="title"
      >
        {store.people.name}
      </h1>
      <hr className="line" />

      <br />
      <div className="row justify-content-md-center">
        <div className="col-6">
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg?region=0%2C67%2C1280%2C720"
            className="imagen-personaje"
            alt="..."
          />
        </div>
        <div className="col-6 mt-4">
          <p className="texto-descripcion">Height: {store.people.height}</p>
          <p className="texto-descripcion">Mass: {store.people.mass}</p>
          <p className="texto-descripcion">Hair: {store.people.hair_color}</p>
          <p className="texto-descripcion">Skin Color: {store.people.skin_color}</p>
          <p className="texto-descripcion">Eye Color: {store.people.eye_color}</p>
          <p className="texto-descripcion">Birth year: {store.people.birth_year}</p>
          <p className="texto-descripcion">Gender: {store.people.gender}</p>
          <p className="texto-descripcion">Created: {store.people.created}</p>
          <p className="texto-descripcion">Edited: {store.people.edited}</p>
        </div>
      </div>
    </div>
  );
};

export default Character;
