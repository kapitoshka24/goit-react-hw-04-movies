import React, { Component, lazy, Suspense } from "react";
import Button from "../components/Button";
import { routes } from "../routes";
import { Route, NavLink } from "react-router-dom";
import { fetchMovies } from "../services/movies-api";
import MovieDetails from "../components/MovieDetails";
import "../styles/movieDetails.scss";

const Cast = lazy(() => import("../components/Cast" /* */));
const Reviews = lazy(() => import("../components/Reviews"));

class MovieDetailsPage extends Component {
  state = {
    movie: null,
    cast: [],
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    fetchMovies(movieId).then((response) => {
      this.setState({
        movie: { ...response },
        cast: response.credits.cast,
        reviews: response.reviews.results,
      });
    });
  }

  render() {
    const { movie, cast, reviews } = this.state;
    const { match, location } = this.props;

    return (
      <div className="movie-details">
        <Button />

        {movie && <MovieDetails movie={movie} />}

        <div className="movie-additional">
          <h2>Additional information</h2>
          <ul>
            <li>
              <NavLink
                to={{
                  pathname: `${match.url}/cast`,
                  state: { from: location.state.from },
                }}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: `${match.url}/reviews`,
                  state: { from: location.state.from },
                }}
              >
                Review
              </NavLink>
            </li>
          </ul>
        </div>

        <Suspense>
          <Route
            path={routes.cast}
            render={(props) => <Cast {...props} cast={cast} />}
          />

          <Route
            path={routes.reviews}
            render={(props) => <Reviews {...props} reviews={reviews} />}
          ></Route>
        </Suspense>
      </div>
    );
  }
}

export default MovieDetailsPage;
