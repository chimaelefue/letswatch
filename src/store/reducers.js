import { createSlice } from "@reduxjs/toolkit";
import {
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
  fetchUpcomingMoviesFailure,
} from './actions';

const initialState = {
  email: null,
  nowPlaying: null,
  popular: null,
  upcomingMovies: null,
  topRated: null,
  isLoading: false,
  error: null,
};

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
});

const movieReducer = movieSlice.reducer;

export default movieReducer;
