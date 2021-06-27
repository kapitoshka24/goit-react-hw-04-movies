import React, { Component } from "react";
import Movies from "../components/Movies";
import { fetchTrendingMovies } from "../services/movies-api";
import "../styles/movies.scss";

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    fetchTrendingMovies().then((response) =>
      this.setState({ movies: response })
    );
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <h1 className="trending">Trending today</h1>
        <ol className="movies-list">
          <Movies movies={movies} />
        </ol>
      </>
    );
  }
}

export default HomePage;
