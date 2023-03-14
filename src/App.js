import {
  Route,
  Routes,
  Link
} from "react-router-dom";
import './App.css';
import MovieDetails from "./components/Details/MovieDetails";
import HomePage from "./components/home/HomePage";
import DefaultPage from "./components/LoginPage/DefaultPage";




function App() {
  return (
    <>
      
      <Routes>
      <Route path="/" element= { <DefaultPage />} />
      <Route path="/movies" element= {<HomePage />} />
      <Route path="/movie-details/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
