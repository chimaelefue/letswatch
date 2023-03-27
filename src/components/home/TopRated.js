import React, {useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../index.css'
import { FavouriteIcon, BookmarkIcon } from '../../icons';
import { Link } from 'react-router-dom';
import { fetchTopRated } from '../../store/actions';
import { useSelector, useDispatch } from "react-redux";
import { MOVIE_DETAILS } from '../../routes';

// import required modules
import { Pagination } from "swiper";

/// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const TopRated = () => {
    const { topRated, isLoading, error } = useSelector((state) => state.movie);
    const dispatch = useDispatch();
 
    useEffect(() => {
        dispatch(fetchTopRated());
    }, [dispatch]);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    
    return (
        <>
            <div className='my-swiper'>
                <div className='top-rated-title'>
                    <h2>Top Rated</h2>
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
                    <div className='top-rated-container '>
                        
                        <div className='top-rated-slide '>
                        { topRated && topRated?.results.map((data) => (
                            <SwiperSlide key={data.id}>
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
                                    <Link to={`${MOVIE_DETAILS}/${data.id}`} className='link'>
                                        <div className='img-container'>
                                            <img src={`${process.env.REACT_APP_API_IMG}${data.poster_path}`} alt='popular1'/>
                                            <div className='lower-card'>
                                                <div className='card-title'>
                                                    <h5>{data.title}</h5>
                                                </div>
                                                <h6>
                                                    <span>{data.release_date}</span>
                                                </h6>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                        </div>

                    </div>
                </Swiper>
            </div>
        </>
    );
}

export default TopRated