import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MOVIES, FAVOURITE_MOVIES, MOVIE_SEARCH_DETAILS } from '../../routes';

const Header = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`${MOVIE_SEARCH_DETAILS}/${query}`);
    setQuery('');
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="header-bar">
      <div className="header-first-details">
        <div>
          <Link to={MOVIES} className="home-link-text">
            <h1>Letswatch</h1>
          </Link>
        </div>
      </div>
      <div className="header-second-details">
        <Link to={FAVOURITE_MOVIES} className='link'>
          <h2>Favourites</h2>
        </Link>  
        <form className="header-input-text" onSubmit={handleSearchSubmit}>
          <input
            className="header-input-text-class"
            type="text"
            placeholder="Search"
            value={query}
            onChange={handleQueryChange}
          />
        </form>
        <div className="avatar">
          <img src="prof2.jpg" alt="Avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;
