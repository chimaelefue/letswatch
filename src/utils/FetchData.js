import useFetch from "../hooks/useFetch";


const FetchData = (id) => {
    
  
    return useFetch([
      `${process.env.REACT_APP_API_URL_1}${id}?api_key=${process.env.REACT_APP_API_KEY}&${process.env.REACT_APP_API_LNG}`,
      `${process.env.REACT_APP_API_URL_1}${id}${process.env.REACT_APP_API_CRD}?api_key=${process.env.REACT_APP_API_KEY}&${process.env.REACT_APP_API_LNG}`,
    ]);
  }
  
  export default FetchData;