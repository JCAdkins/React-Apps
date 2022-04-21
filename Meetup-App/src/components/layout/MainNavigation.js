import { Link } from "react-router-dom";
import { useContext } from "react";

import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/home">Meet-Ups Home</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/all-meetups">All Meet-Ups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meet-Up</Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorites
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
