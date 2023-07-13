import React from "react";
import { request } from "../config/request";

 export const useAxios = ({ url = null, body = null, method = null }) => {
  const [loading, setLoading] = React.useState(true);
  const [data , setData] = React.useState([]);
  const [error , setError] = React.useState(false);

  const fetchData = () => {
    request({method, body, url})
      .then(response => {
        setData(response.data) 
        setLoading(false)
      })
      .catch(error => {
        setError(error)
        console.log(error);
        setLoading(false)
      })
  }


  React.useEffect(() => {
    if(url && method){
      fetchData();
    }
  },[method, body, url])


  return {
    data, 
    loading, 
    error
  }
};



export default useAxios;
