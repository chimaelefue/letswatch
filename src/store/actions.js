import axios from "axios";
import { createAction } from "@reduxjs/toolkit";

export const updateEmail = createAction("movie/updateEmail");

export const fetchNowPlayingRequest = createAction(
  "movie/fetchNowPlayingRequest"
);
export const fetchNowPlayingSuccess = createAction(
  "movie/fetchNowPlayingSuccess"
);
export const fetchNowPlayingFailure = createAction(
  "movie/fetchNowPlayingFailure"
);

export const fetchPopularRequest = createAction("movie/fetchPopularRequest");
export const fetchPopularSuccess = createAction("movie/fetchPopularSuccess");
export const fetchPopularFailure = createAction("movie/fetchPopularFailure");

export const fetchTopRatedRequest = createAction(
  "movie/fetchTopRatedRequest"
);
export const fetchTopRatedSuccess = createAction(
  "movie/fetchTopRatedSuccess"
);
export const fetchTopRatedFailure = createAction(
  "movie/fetchTopRatedFailure"
);

export const fetchUpcomingMoviesRequest = createAction(
  "movie/fetchUpcomingMoviesRequest"
);
export const fetchUpcomingMoviesSuccess = createAction(
  "movie/fetchUpcomingMoviesSuccess"
);
export const fetchUpcomingMoviesFailure = createAction(
  "movie/fetchUpcomingMoviesFailure"
);

export const fetchNowPlaying = () => async (dispatch) => {
  dispatch(fetchNowPlayingRequest());
  try {
    const URL = `${process.env.REACT_APP_API_URL_2}?api_key=${process.env.REACT_APP_API_KEY}&${process.env.REACT_APP_API_LNG_1}`;

    const response = await axios.get(URL);
    dispatch(fetchNowPlayingSuccess(response.data));
  } catch (error) {
    dispatch(fetchNowPlayingFailure(error.message));
  }
};

export const fetchPopular = () => async (dispatch) => {
  dispatch(fetchPopularRequest());
  try {
    const URL = `${process.env.REACT_APP_API_URL_3}?api_key=${process.env.REACT_APP_API_KEY}&${process.env.REACT_APP_API_LNG_1}`;

    const response = await axios.get(URL);
    dispatch(fetchPopularSuccess(response.data));
  } catch (error) {
    dispatch(fetchPopularFailure(error.message));
  }
};

export const fetchTopRated = () => async (dispatch) => {
  dispatch(fetchTopRatedRequest());
  try {
    const URL = `${process.env.REACT_APP_API_URL_4}?api_key=${process.env.REACT_APP_API_KEY}&${process.env.REACT_APP_API_LNG_1}`;

    const response = await axios.get(URL);
    dispatch(fetchTopRatedSuccess(response.data));
  } catch (error) {
    dispatch(fetchTopRatedFailure(error.message));
  }
};

export const fetchUpcomingMovies = () => async (dispatch) => {
  dispatch(fetchUpcomingMoviesRequest());
  try {
    const URL = `${process.env.REACT_APP_API_URL_5}?api_key=${process.env.REACT_APP_API_KEY}&${process.env.REACT_APP_API_LNG_1}`;

    const response = await axios.get(URL);
    dispatch(fetchUpcomingMoviesSuccess(response.data));
  } catch (error) {
    dispatch(fetchUpcomingMoviesFailure(error.message));
  }
};
