import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState= {
  
  email: null,
  nowPlaying: null,
  popular: null,
  upcomingMovies: null,
  topRated: null,
  isLoading: false,
  error: null
}
const movieSlice = createSlice({
  name: 'movie',
    initialState,
    reducers:{
      updateEmail: (state, action)=>{
        state.email= action.payload;
      },

      fetchNowPlayingRequest: (state) => {
        state.isLoading = true;
        state.error = null;
      },

      fetchNowPlayingSuccess: (state, action) => {
        state.isLoading = false;
        state.nowPlaying = action.payload;
        state.error = null;
      },

      fetchNowPlayingFailure: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },
      fetchPopularRequest: (state) => {
        state.isLoading = true;
        state.error = null;
      },

      fetchPopularSuccess: (state, action) => {
        state.isLoading = false;
        state.popular = action.payload;
        state.error = null;
      },

      fetchPopularFailure: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },
      fetchTopRatedRequest: (state) => {
        state.isLoading = true;
        state.error = null;
      },

      fetchTopRatedSuccess: (state, action) => {
        state.isLoading = false;
        state.topRated = action.payload;
        state.error = null;
      },

      fetchTopRatedFailure: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },

      fetchUpcomingMoviesRequest: (state) => {
        state.isLoading = true;
        state.error = null;
      },

      fetchUpcomingMoviesSuccess: (state, action) => {
        state.isLoading = false;
        state.upcomingMovies = action.payload;
        state.error = null;
      },

      fetchUpcomingMoviesFailure: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },
    }
})



export const {
  updateEmail,
  fetchNowPlayingRequest,
  fetchNowPlayingSuccess,
  fetchNowPlayingFailure,
  fetchPopularRequest,
  fetchPopularSuccess,
  fetchPopularFailure,
  fetchTopRatedRequest,
  fetchTopRatedSuccess,
  fetchTopRatedFailure,
  fetchUpcomingMoviesRequest,
  fetchUpcomingMoviesSuccess,
  fetchUpcomingMoviesFailure
} = movieSlice.actions;

const API_KEY = "c050b57e2f8bab4f68e33d1d1335fca0"; 

export const fetchNowPlaying = () => async (dispatch) => {
  
  dispatch(fetchNowPlayingRequest());
  try {
    
    const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
    
    const response = await axios.get(URL);
    dispatch(fetchNowPlayingSuccess(response.data));
  } catch (error) {
    dispatch(fetchNowPlayingFailure(error.message));
  }
};

export const fetchPopular = () => async (dispatch) => {
  
  dispatch(fetchPopularRequest());
  try {
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    const response = await axios.get(URL);
    dispatch(fetchPopularSuccess(response.data));
  } catch (error) {
    dispatch(fetchPopularFailure(error.message));
  }
};

export const fetchTopRated = () => async (dispatch) => {
  
  dispatch(fetchTopRatedRequest());
  try {
    
    const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

    const response = await axios.get(URL);
    dispatch(fetchTopRatedSuccess(response.data));
  } catch (error) {
    dispatch(fetchTopRatedFailure(error.message));
  }
};

export const fetchUpcomingMovies= () => async (dispatch) => {
  
  dispatch(fetchUpcomingMoviesRequest());
  try {
    
    const URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;

    const response = await axios.get(URL);
    dispatch(fetchUpcomingMoviesSuccess(response.data));
  } catch (error) {
    dispatch(fetchUpcomingMoviesFailure(error.message));
  }
};

export default movieSlice.reducer