import { Link } from "react-router-dom";

import classes from "./SideScrollNavigation.css";

function MeetupNav() {
  return (
    <nav className={classes.navBar}>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <Link to="/all-meetups">All Meet-Ups</Link>
        </li>
        <li className={classes.li}>
          <Link to="/new-meetup">Add New Meet-Up</Link>
        </li>
        <li className={classes.li}>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MeetupNav;
