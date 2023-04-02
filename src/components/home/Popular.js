import React, {useEffect, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../index.css'
import { FavouriteIcon, BookmarkIcon } from '../../icons';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { fetchPopular } from '../../store/actions';
import { MOVIE_DETAILS } from '../../routes';


// import required modules
import { Pagination } from "swiper";

/// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const Popular = () => {
    const { popular, isLoading, error } = useSelector((state) => state.movie);
    const dispatch = useDispatch();
    const [checkedMovies, setCheckedMovies] = useState([]);

 
    useEffect(() => {
        dispatch(fetchPopular());
    }, [dispatch]);

    useEffect(() => {
        const storedMovies = JSON.parse(localStorage.getItem('checkedMovies'));
        if (storedMovies) {
          setCheckedMovies(storedMovies);
        }
      }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const handleCheckboxChange = (event, data) => {
        const updatedCheckedMovies = event.target.checked
          ? [...checkedMovies, data]
          : checkedMovies.filter((id) => id !== data);
    
        setCheckedMovies(updatedCheckedMovies);
        localStorage.setItem('checkedMovies', JSON.stringify(updatedCheckedMovies));
    };
    
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
                        

                            <div className='popular-container'>
                            
                                <div className='popular-slide' >
                                {popular && popular?.results.map((data) => (
                                    <SwiperSlide  key={data.id}>
                                        <div className='movie-card'>
                                            <div className='upper-card'>
                                                <span className='upper-card-span'>
                                                    <input 
                                                        type='checkbox'
                                                        checked={checkedMovies.includes(data)}
                                                        onChange={(event) => handleCheckboxChange(event, data)} 
                                                    />
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

export default Popular