import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { IUseFetchProps } from '../types/useFetchProps.type';
import { IReturnedUnsplashAPIData } from '../types/returnedUnsplashAPIData.type';

const useFetch = (url: string): IUseFetchProps => {
  const [data, setData] = useState<IReturnedUnsplashAPIData[]>([]);
  const [isError, setIsError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = (): void => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response: AxiosResponse) => {
        setIsLoading(false);
        setData(response.data.results);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(error.message);
      });
  };
  return {
    data,
    isError,
    isLoading,
    fetchData,
  };
};

export default useFetch;
