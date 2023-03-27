import React ,{useEffect} from 'react'
import '../../index.css'
import Header from '../layout/Header'
import { useParams } from 'react-router';
import FetchData from '../../utils/FetchData';

import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from "swiper";

/// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const MovieDetails = () => {
    const {id} = useParams()
    const [data, isLoading] = FetchData(id);

    // useEffect(() => {
        
    // }, [id]);
        
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const movieDetails = data[0];
  
  const cast = data[1]
 
  return (
    <>
        <Header />
        <div className='movie-details-container'>
            <div className='upper-details'>
                <div>
                    <img src={`${process.env.REACT_APP_API_IMG}${movieDetails?.poster_path}`}alt='name of movie'/>
                </div>
                <div>
                    <h2>{movieDetails?.title}</h2>
                    <h5>Overview:</h5>
                    <p>{movieDetails?.overview}</p>
                    <h5>Released dated: {movieDetails?.release_date}</h5>
                    <h5>Genre:
                        {movieDetails?.genres?.map(genre => (
                            <button key={genre.id}>{genre.name}</button>
                        ))}
                    </h5>
                    <h5>Crew:</h5>
                   
                    <div className='crew-card'>
                    {cast?.crew
                        .filter((member) => member.job === 'Producer' || member.job === 'Director')
                        .slice(0, 2)
                        .map((member) => (
                        
                        <div key={member.id} className='individual-crew-card'  >
                            <strong>{member.job}: </strong>
                            <p>{member.name}</p>
                        </div>
                    
                    ))}
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
                    {cast?.cast?.map((castMember) => (
                        <SwiperSlide key={castMember.id}>
                            <div className='cast-container'>
                                <img src={`${process.env.REACT_APP_API_IMG}${castMember.profile_path}`} alt={castMember.name}/>
                                <div className='cast-info'>
                                    <h5>{castMember.name}</h5>
                                    <h6>{castMember.character}</h6>
                                    
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </>
  )
}

export default MovieDetails