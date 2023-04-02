import useFetch from "../hooks/useFetch";

const FetchSearchData = (query) => {
  return useFetch([
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&language=en-US&page=1`
  ]);
}

export default FetchSearchData;
