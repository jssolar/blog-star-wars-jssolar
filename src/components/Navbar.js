import { Link } from "react-router-dom";
import { Context } from "../store/context";
import { useContext, useEffect } from "react";
import '../index.css'

function Navbar(props) {
  const { store, actions } = useContext(Context);
  useEffect(() => {}, [store.listOfFavorites]);
  return (
    <nav className="navbar navbar-expand-md ">
      <div className="container-fluid">
        <Link
          to={"/"}
          className="navbar-brand  texto-nav "
          aria-current="page"
        >
          STAR-WARS
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          
        </button>
        <div className="collapse navbar-collapse boton-favorites" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle texto-nav "
                data-bs-toggle="dropdown"
              >
                FAVORITOS
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                {store.listOfFavorites.map((favorite) => {
                  return (
                    <li>
                      <div className="d-flex justify-between mb-1 me-2">
                        <Link className="dropdown-item">{favorite}</Link>
                        <button
                          type="button"
                          className="btn btn-outline-secondary dropdown-toggle-split"
                          onClick={() => {
                            const isLargeNumber = (element) =>
                              element === favorite;
                            actions.deleteFav(
                              store.listOfFavorites.findIndex(isLargeNumber)
                            );
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 448 512"
                          >
                            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                          </svg>
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
