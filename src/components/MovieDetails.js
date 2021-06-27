import React from "react";
import defaultMovie from "../images/defaultMovie.png";
import "../styles/movieDetails.scss";
import PropTypes from "prop-types";

const MovieDetails = ({
  movie: { genres = [], poster_path, title, vote_average, overview },
}) => (
  <div className="movie">
    <img
      className="movie-image"
      src={
        poster_path
          ? `https://image.tmdb.org/t/p/original${poster_path}`
          : defaultMovie
      }
      alt={title}
    ></img>
    <div className="movie-info">
      <h1 className="movie-title">{title}</h1>
      <p className="movie-paragraph">
        User score: {Math.round((vote_average * 100) / 10)}%
      </p>
      <h2 className="movie-section">Overview</h2>
      <p className="movie-paragraph">
        {overview || "We don't have an overview for this movie."}
      </p>
      <h2 className="movie-section">Genres</h2>

      {genres.length > 0 ? (
        <ul className="movie-genres">
          {genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      ) : (
        <p className="not-info">We don't have any genres for this movie.</p>
      )}
    </div>
  </div>
);

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    genres: PropTypes.arrayOf(
      PropTypes.exact({ id: PropTypes.number, name: PropTypes.string })
    ),
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

MovieDetails.defaultProps = { movie: { genres: [] } };

export default MovieDetails;
