import React from 'react'
import '../../index.css'
import Header from '../layout/Header'

import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from "swiper";

/// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const MovieDetails = () => {
  return (
    <>
        <Header />
        <div className='movie-details-container'>
            <div className='upper-details'>
                <div>
                    <img src='prof2.jpg' alt='name of movie'/>
                </div>
                <div>
                    <h2>Movie Title</h2>
                    <h5>Overview:</h5>
                    <p>
                        Jake Sully, portrayed by Sam Worthington, is chosen to participate in the Avatar program, 
                        in which humans remotely control genetically engineered Na'vi bodies to interact with the 
                        planet's inhabitants. As he becomes more integrated into the Na'vi community, Jake becomes 
                        sympathetic to their cause and ultimately leads them in a fight against the humans, who seek
                        to destroy the Na'vi's home in order to mine a valuable mineral called unobtanium.
                    </p>
                    <h5>Released dated: 203-03-03</h5>
                    <h5>Genre: 
                        <button>Action</button>
                        <button>Comedy</button>
                    </h5>
                    <h5>Crew:</h5>
                    <div className='crew-card'>
                    <div className='individual-crew-card'>
                        <strong>Producer: </strong>
                        <p>Johnson Leo</p>
                    </div>
                    <div className='individual-crew-card'>
                        <strong>Director: </strong>
                        <p>Harley Oreo</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className='lower-details'>
                <h2>Casts</h2>
                <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper "
                
                >
                    <SwiperSlide>
                        <div className='cast-container'>
                            <img src='prof2.jpg' alt='cast1'/>
                            <div className='cast-info'>
                                <h5>Name of actor</h5>
                                <h6>Role of cast</h6>
                                
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='cast-container'>
                            <img src='prof2.jpg' alt='cast1'/>
                            <div className='cast-info'>
                                <h5>Name of actor</h5>
                                <h6>Role of cast</h6>
                                
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='cast-container'>
                            <img src='prof2.jpg' alt='cast1'/>
                            <div className='cast-info'>
                                <h5>Name of actor</h5>
                                <h6>Role of cast</h6>
                                
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='cast-container'>
                            <img src='prof2.jpg' alt='cast1'/>
                            <div className='cast-info'>
                                <h5>Name of actor</h5>
                                <h6>Role of cast</h6>
                                
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='cast-container'>
                            <img src='prof2.jpg' alt='cast1'/>
                            <div className='cast-info'>
                                <h5>Name of actor</h5>
                                <h6>Role of cast</h6>
                                
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='cast-container'>
                            <img src='prof2.jpg' alt='cast1'/>
                            <div className='cast-info'>
                                <h5>Name of actor</h5>
                                <h6>Role of cast</h6>
                                
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </>
  )
}

export default MovieDetails