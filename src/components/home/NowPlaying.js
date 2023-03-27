import React, {useEffect} from 'react'
import { Navigation, Pagination,   Autoplay } from 'swiper';
import { Link } from 'react-router-dom';
import { MOVIE_DETAILS } from '../../routes';
import { useSelector, useDispatch } from "react-redux";
import { fetchNowPlaying } from '../../store/actions';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../index.css'


const NowPlaying = () => {
  const { nowPlaying, isLoading, error } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(fetchNowPlaying());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="now-playing-container ">
      
      <Swiper
        // install Swiper modules
        modules={[Autoplay, Pagination, Navigation]}
        
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
          autoplay={{
              delay: 2000,
              disableOnInteraction: false
          }}
        
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >

        {nowPlaying && nowPlaying?.results.map((data) => (

           <SwiperSlide  className='now-playing-content my-swiper' key={data.id}>
           <Link to={`${MOVIE_DETAILS}/${data.id}`} className='link'>
             <img src ={`${process.env.REACT_APP_API_IMG}${data.backdrop_path}`} alt="slide1" />
             <div className='now-playing-text'>
               <h3>{data.title}</h3>
               <p>Release Date: {data.release_date}</p>
               <p>Vote Average: {data.vote_average}</p>
             </div>
           </Link>
         </SwiperSlide>
        ))}
       
      </Swiper>

    </div>
  )
}

export default NowPlaying
