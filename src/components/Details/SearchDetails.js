import React, { useState, useEffect } from 'react';
import Header from '../layout/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination } from 'swiper';
import { useParams } from 'react-router';
import FetchSearchData from '../../utils/FetchSearchData';
import { Link } from 'react-router-dom';
import { MOVIE_DETAILS } from '../../routes';

const SearchDetails = () => {
  const {query} = useParams()
  const [ data,  isLoading] = FetchSearchData(query);
  
  
           
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!data) {
    return <div>No results found</div>;
  }
  return (
    <>
      <Header />
      <div className="search-details-body">
        <h1>Search Results for "{query}"</h1>

        
        {data.length === 0 ? (
          <div>No movies found</div>
        ) : (   
          <Swiper
            slidesPerView={4}
            grid={{
              column: 4,
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
          >
          {data[0]?.results?.map((searchDetails) => (
            <SwiperSlide key={searchDetails.id}>
              <Link to={`${MOVIE_DETAILS}/${searchDetails.id}`} className='link'>
                <div className='search-details-container'>
                  <div className="search-details-upper-card">
                  {searchDetails.poster_path && (
                    <img
                      src={`${process.env.REACT_APP_API_IMG}${searchDetails.poster_path}`}
                      alt={searchDetails.title}
                    />
                  )}
                  </div>
                  <div className="search-details-lower-card">
                    <h2>{searchDetails.title}</h2>
                    <h6>{searchDetails.release_date}</h6>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}

          </Swiper>
        )}
      </div>
    </>
  );
};

export default SearchDetails;
