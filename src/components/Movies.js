import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import defaultMovie from "../images/defaultMovie.png";

class Movies extends Component {
  render() {
    const { movies, location } = this.props;

    return movies.map(
      ({
        id,
        title,
        poster_path,
        original_title: titleOrig,
        original_name: nameOrig,
      }) => (
        <li key={id}>
          <NavLink
            to={{
              pathname: `/movies/${id}`,
              state: { from: location },
            }}
          >
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/original${poster_path}`
                  : defaultMovie
              }
              alt={title}
            ></img>
            <p> {title || titleOrig || nameOrig}</p>
          </NavLink>
        </li>
      )
    );
  }
}

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      poster_path: PropTypes.string,
      original_title: PropTypes.string,
      original_name: PropTypes.string,
    })
  ).isRequired,
};

export default withRouter(Movies);
