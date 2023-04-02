import React, {useState,  useEffect} from 'react';
import ViewFavourite from './ViewFavourite';
import './ViewFavourite.css';



const MovieGrid = () => {

    const [checkedMovies, setCheckedMovies] = useState([]);

    useEffect(() => {
        const storedCheckedMovies = localStorage.getItem('checkedMovies');
        if (storedCheckedMovies) {
          setCheckedMovies(JSON.parse(storedCheckedMovies));
        }
    }, []);
      
  return (
    <div className="movie-grid">
      {checkedMovies.map(movie => (
        <ViewFavourite key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieGrid;
