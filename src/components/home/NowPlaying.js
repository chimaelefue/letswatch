import React from 'react'
import { Navigation, Pagination,   Autoplay } from 'swiper';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../index.css'

const NowPlaying = () => {

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
        
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide  className='now-playing-content my-swiper'>
          <Link to="/movie-details" className='link'>
            <img src="tvBanner.jpg" alt="slide1" />
            <div className='now-playing-text'>
              <h3>Movie Title 3</h3>
              <p>Release Date: 2022-03-01</p>
              <p>Vote Average: 8.5</p>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide className='now-playing-content my-swiper'>
          <Link to="/movie-details" className='link'>
              <img src="tvBanner.jpg" alt="slide1" />
              <div className='now-playing-text'>
                <h3>Movie Title 3</h3>
                <p>Release Date: 2022-03-01</p>
                <p>Vote Average: 8.5</p>
              </div>
            </Link>
        </SwiperSlide>
          
        <SwiperSlide  className='now-playing-content my-swiper'>
          <Link to="/movie-details" className='link'>
              <img src="tvBanner.jpg" alt="slide1" />
              <div className='now-playing-text'>
                <h3>Movie Title 3</h3>
                <p>Release Date: 2022-03-01</p>
                <p>Vote Average: 8.5</p>
              </div>
            </Link>  
        </SwiperSlide>
      </Swiper>

    </div>
  )
}

export default NowPlaying
