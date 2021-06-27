import React from "react";
import defaultPerson from "../images/defaultPerson.jpg";
import "../styles/cast.scss";
import PropTypes from "prop-types";

const Cast = ({ cast }) => (
  <>
    {cast.length > 0 ? (
      <ul className="cast">
        {cast.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/original/${profile_path}`
                  : defaultPerson
              }
              alt={name}
            ></img>
            <p className="movie-character">{name}</p>
            <p>
              <span className="movie-character">Character:</span>{" "}
              {character || "Not indicated"}
            </p>
          </li>
        ))}
      </ul>
    ) : (
      <p className="not-info">
        We don't have any information about this movie's cast.
      </p>
    )}
  </>
);

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};

Cast.defaultProps = { cast: { character: "Not indicated" } };

export default Cast;
