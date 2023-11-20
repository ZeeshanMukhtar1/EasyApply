import { useState, useEffect } from 'react';
import axios from 'axios';
import { RAPID_API_KEY } from '@env';

const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState(null);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': rapidApiKey,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },

    params: { ...query },
  };
  const fetchDate = async () => {
    setisLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setisLoading(false);
    } catch (error) {
      seterror(error);
      alert('there is an error', error);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchDate();
  }, []);

  const refetch = () => {
    setisLoading(true);
    fetchDate();
  };

  return { data, isLoading, error, refetch };
};
