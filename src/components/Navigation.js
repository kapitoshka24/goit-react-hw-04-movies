import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../routes";
import "../styles/navigation.scss";

const Navigation = () => {
  return (
    <nav className="nav">
      <NavLink
        exact
        to={routes.home}
        className="nav-link"
        activeClassName="active"
      >
        Home
      </NavLink>
      <NavLink to={routes.movies} className="nav-link" activeClassName="active">
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
