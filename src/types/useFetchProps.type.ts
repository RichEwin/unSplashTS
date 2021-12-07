import { IReturnedUnsplashAPIData } from './returnedUnsplashAPIData.type';

export interface IUseFetchProps {
  data: IReturnedUnsplashAPIData[];
  isError: string;
  isLoading: boolean;
  fetchData: () => void;
}
