import React from 'react'
import Header from '../layout/Header'
import NowPlaying from './NowPlaying'
import Popular from './Popular'
import '../../index.css'
import LatestMovies from './LatestMovies'
import TopRated from './TopRated'

const HomePage = () => {
  return (
    <div className='home-container'>
      
      <Header />
      <NowPlaying />
      <Popular />
      <LatestMovies />
      <TopRated />

    </div>
  )
}

export default HomePage