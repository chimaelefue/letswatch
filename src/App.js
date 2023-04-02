import {
  Route,
  Routes,
  Link
} from "react-router-dom";
import { HOME, MOVIES, MOVIE_DETAILS, MOVIE_SEARCH_DETAILS,FAVOURITE_MOVIES } from "./routes";
import './App.css';
import MovieDetails from "./components/Details/MovieDetails";
import HomePage from "./components/home/HomePage";
import DefaultPage from "./components/LoginPage/DefaultPage";
import SearchDetails from "./components/Details/SearchDetails";
import MovieGrid from "./components/favourite/MovieGrid";




function App() {
  return (
    <>
      <Routes>
        <Route path={HOME} element={<DefaultPage />} />
        <Route path={MOVIES} element={<HomePage />} />
        <Route path={`${MOVIE_DETAILS}/:id`} element={<MovieDetails />} />
        <Route path={`${MOVIE_SEARCH_DETAILS}/:query`} element={<SearchDetails />} />
        <Route path={FAVOURITE_MOVIES} element={<MovieGrid />} />
      </Routes>
    </>
  );
}

export default App;
