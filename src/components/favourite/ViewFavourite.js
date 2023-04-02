import React from 'react';
import './ViewFavourite.css';

const ViewFavourite = ({movie}) => {
  const {title} = movie;

  return (
    <div className="movie-container">
      <div className="poster-box">
        <img src={`${process.env.REACT_APP_API_IMG}${movie.poster_path}`} alt={title} />
      </div>
      <div className="details-box">
        <h2>{title}</h2>
        <p>Released: {movie.release_date}</p>
      </div>
    </div>
  );
}

export default ViewFavourite;
