import React from 'react';
import useFetch from '../../hooks/useFetch';
import { IGalleryProps } from '../../types/galleryProps.type';
import { baseUrl, apiKey } from '../../utils';
import Button from '../Button/Button';
import './Gallery.scss';

const Gallery: React.FC<IGalleryProps> = ({ searchValue, searchResultValue }) => {
  const url = `${baseUrl}${apiKey}=${searchValue}&per_page=${searchResultValue}`;
  const {
    data,
    isLoading,
    isError,
    fetchData,
  } = useFetch(url);
  return (
    <div>
      <Button onClick={fetchData}>Search</Button>
      <div className="gallery_container">
        { isLoading && <p>Loading...</p> }
        { isError && <p>Error</p> }
        { data && data.map((photo) => (
          <img key={photo.id} src={photo.urls.regular} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
