import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/context";

function Card(props) {
    const { actions } = useContext(Context);

  return (
    <div className="card m-1 col-xl-2 col-lg-3 col-md-4 col-sm-6 justify-content-center px-0 border-0  card-principal">
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-danger-emphasis">{props.name}</h5>
        <div className="d-flex justify-content-between">
          {props.route === "people" ? (
            <Link to={"/character/" + props.id} className="btn btn-dark">
              Learn more
            </Link>
          ) : props.route === "vehicle" ? (
            <Link to={"/vehicle/" + props.id} className="btn btn-dark">
              Learn more
            </Link>
          ) : props.route === "planet" ? (
            <Link to={"/planet/" + props.id} className="btn btn-dark">
              Más información
            </Link>
          ) : null}
          <button
            className={`btn btn-outline-danger`}
            onClick={() => { actions.addFav(props.name) }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
