import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../index.css'
import { FavouriteIcon, BookmarkIcon } from '../../icons';
import { Link } from 'react-router-dom';

// import required modules
import { Pagination } from "swiper";

/// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const Popular = () => {
  return (
        <>
            <div className='my-swiper'>
                <div className='popular-title'>
                    <h2>Popular</h2>
                </div>
                <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper "
                
                >
                    <div className='popular-container '>
                        
                        <div className='popular-slide '>
                            <SwiperSlide>
                                <div className='movie-card'>
                                    <div className='upper-card'>
                                        <span className='upper-card-span'>
                                            <input type='checkbox' />
                                            <FavouriteIcon />
                                        </span>
                                        <span className='upper-card-span'> 
                                            <input type='checkbox' />
                                            <BookmarkIcon />
                                        </span>
                                    </div>
                                    <Link to="/movie-details" className='link'>
                                        <div className='img-container'>
                                            <img src='prof2.jpg' alt='popular1'/>
                                            <div className='lower-card'>
                                                <div className='card-title'>
                                                    <h5>Movie Title</h5>
                                                </div>
                                                <h6>
                                                    <span>2023-03-03</span>
                                                </h6>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='movie-card'>
                                    <div className='upper-card'>
                                        <span className='upper-card-span'>
                                            <input type='checkbox' />
                                            <FavouriteIcon />
                                        </span>
                                        <span className='upper-card-span'> 
                                            <input type='checkbox' />
                                            <BookmarkIcon />
                                        </span>
                                    </div>
                                    <Link to="/movie-details" className='link'>
                                        <div className='img-container'>
                                            <img src='prof2.jpg' alt='popular1'/>
                                            <div className='lower-card'>
                                                <div className='card-title'>
                                                    <h5>Movie Title</h5>
                                                </div>
                                                <h6>
                                                    <span>2023-03-03</span>
                                                </h6>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='movie-card'>
                                    <div className='upper-card'>
                                        <span className='upper-card-span'>
                                            <input type='checkbox' />
                                            <FavouriteIcon />
                                        </span>
                                        <span className='upper-card-span'> 
                                            <input type='checkbox' />
                                            <BookmarkIcon />
                                        </span>
                                    </div>
                                    <Link to="/movie-details" className='link'>
                                        <div className='img-container'>
                                            <img src='prof2.jpg' alt='popular1'/>
                                            <div className='lower-card'>
                                                <div className='card-title'>
                                                    <h5>Movie Title</h5>
                                                </div>
                                                <h6>
                                                    <span>2023-03-03</span>
                                                </h6>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='movie-card'>
                                    <div className='upper-card'>
                                        <span className='upper-card-span'>
                                            <input type='checkbox' />
                                            <FavouriteIcon />
                                        </span>
                                        <span className='upper-card-span'> 
                                            <input type='checkbox' />
                                            <BookmarkIcon />
                                        </span>
                                    </div>
                                    <Link to="/movie-details" className='link'>
                                        <div className='img-container'>
                                            <img src='prof2.jpg' alt='popular1'/>
                                            <div className='lower-card'>
                                                <div className='card-title'>
                                                    <h5>Movie Title</h5>
                                                </div>
                                                <h6>
                                                    <span>2023-03-03</span>
                                                </h6>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='movie-card'>
                                    <div className='upper-card'>
                                        <span className='upper-card-span'>
                                            <input type='checkbox' />
                                            <FavouriteIcon />
                                        </span>
                                        <span className='upper-card-span'> 
                                            <input type='checkbox' />
                                            <BookmarkIcon />
                                        </span>
                                    </div>
                                    <Link to="/movie-details" className='link'>
                                        <div className='img-container'>
                                            <img src='prof2.jpg' alt='popular1'/>
                                            <div className='lower-card'>
                                                <div className='card-title'>
                                                    <h5>Movie Title</h5>
                                                </div>
                                                <h6>
                                                    <span>2023-03-03</span>
                                                </h6>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        </div>

                    </div>
                </Swiper>
            </div>
        </>
    );
}

export default Popular