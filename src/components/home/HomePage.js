import React from 'react'
import Header from '../layout/Header'
import NowPlaying from './NowPlaying'
import Popular from './Popular'
import '../../index.css'
import TopRated from './TopRated'
import UpcomingMovies from './UpcomingMovies'

const HomePage = () => {
  return (
    <div className='home-container'>
      
      <Header />
      <NowPlaying />
      <Popular />
      <UpcomingMovies />
      <TopRated />

    </div>
  )
}

export default HomePage