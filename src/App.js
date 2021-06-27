import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import AppBar from "./components/AppBar";
import Loader from "react-loader-spinner";
import { routes } from "./routes";
import "./styles/main.scss";

const HomePage = lazy(() => import("./views/HomePage"));
const MoviesPage = lazy(() => import("./views/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./views/MovieDetailsPage"));

function App() {
  return (
    <>
      <AppBar />
      <Suspense
        fallback={
          <Loader
            className="Loader"
            type="ThreeDots"
            color="#feb386"
            height={70}
            width={70}
          />
        }
      >
        <Switch>
          <Route path={routes.home} exact component={HomePage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Route path={routes.movies} component={MoviesPage} />

          <Route component={HomePage} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
