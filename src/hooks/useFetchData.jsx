
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function useFetchData(path) {
  const [data, setData] = useState([]);
  const [isLoder, setIsLoder] = useState(true);
  const [isError, setIsError] = useState(null);
  const getData = async () => {
    try {
      const response = await axios.get(path);

      setData(response.data);
    } catch (error) {
      setIsError(true);
      console.log("error");
    } finally {
      setIsLoder(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return({data, isLoder, isError});
  
}
