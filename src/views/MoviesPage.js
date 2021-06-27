import React, { Component } from "react";
import queryString from "query-string";
import { findMovies } from "../services/movies-api";
import Movies from "../components/Movies";
import "../styles/moviesPage.scss";
import "../styles/movies.scss";

class MoviesPage extends Component {
  state = {
    searchValue: "",
    movies: [],
  };

  async componentDidMount() {
    const { location } = this.props;

    if (location?.search) {
      const queryParams = queryString.parse(location.search);
      const { query } = queryParams;

      if (query) {
        this.findMoviesByQuery(query);
      }
    }
  }

  findMoviesByQuery = (searchQuery) => {
    findMovies(searchQuery).then((response) =>
      this.setState({ movies: response })
    );
  };

  handleChange = (evt) => {
    const { value } = evt.target;

    this.setState({
      searchValue: value,
    });
  };

  onSubmit = async () => {
    const { searchValue } = this.state;

    this.findMoviesByQuery(searchValue);
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    const { searchValue } = this.state;

    if (searchValue) {
      this.props.history.push({
        search: `?query=${this.state.searchValue}`,
      });

      this.onSubmit();
      this.reset();
    }
  };

  reset = () => {
    this.setState({ searchValue: "" });
  };

  render() {
    const { searchValue, movies } = this.state;
    return (
      <>
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchValue}
            onChange={this.handleChange}
          />

          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
        </form>

        <ul className="movies-list">
          <Movies movies={movies} />
        </ul>
      </>
    );
  }
}

export default MoviesPage;
