import {
  Route,
  Routes,
  Link
} from "react-router-dom";
import { HOME, MOVIES, MOVIE_DETAILS } from "./routes";
import './App.css';
import MovieDetails from "./components/Details/MovieDetails";
import HomePage from "./components/home/HomePage";
import DefaultPage from "./components/LoginPage/DefaultPage";




function App() {
  return (
    <>
      <Routes>
        <Route path={HOME} element={<DefaultPage />} />
        <Route path={MOVIES} element={<HomePage />} />
        <Route path={`${MOVIE_DETAILS}/:id`} element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
