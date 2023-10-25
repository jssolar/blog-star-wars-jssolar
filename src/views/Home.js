import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/context";
import Card from "../components/Card";
import '../index.css'


function Home(props) {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.getPeople();
    actions.getPeopleInfo(params.id);
    actions.getPlanet();
    actions.getVehicle();
  }, []);
  return (
    <div className="App">
      <div className="py-2 card-bg">
        <h1 >Characters</h1>
        <div className="container-fluid row justify-content-center m-0">
          {store.listOfPeople.map((people, index) => {
            return (
              <Card
                key={index}
                id={people.uid}
                name={people.name}
                gender={people.gender}
                homeworld={people.homeworld}
                route="people"
                img="https://lumiere-a.akamaihd.net/v1/images/ahsoka-stills-gallery-05_36873fb3.jpeg?region=137%2C0%2C1426%2C803"
              />
            );
          })}
        </div>
      </div>
      <div className="py-2 card-bg">
        <h1 >Vehicles</h1>
        <div className="container-fluid row justify-content-center m-0">
          {store.listOfVehicles.map((vehicle, index) => {
            return (
              <Card
                key={index}
                id={vehicle.uid}
                name={vehicle.name}
                route="vehicle"
                img="https://lumiere-a.akamaihd.net/v1/images/vaders-tie-fighter_8bcb92e1.jpeg?region=185%2C0%2C1169%2C1172"
              />
            );
          })}
        </div>
      </div>
      <div className="py-2 card-bg">
        <h1 >Planets</h1>
        <div className="container-fluid row justify-content-center px-0">
          {store.listOfPlanets.map((planet, index) => {
            return (
              <Card
                key={index}
                id={planet.uid}
                name={planet.name}
                route="planet"
                img="https://lumiere-a.akamaihd.net/v1/images/image_51705c58.jpeg"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
