import React, { useState } from 'react';
import Gallery from './components/Gallery/Gallery';
import Input from './components/Input/Input';
import './styling/main.scss';
import { onChangeInputElementEvent } from './types/types';

const App: React.FC = () => {
  const title: string = 'unSplash';
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchResultValue, setsearchResultValue] = useState<string>('');
  return (
    <div>
      <h1>{title}</h1>
      <div className="search_container">
        <Input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={
            (event: onChangeInputElementEvent) => setSearchValue(event.target.value)
          }
        />
        <Input
          type="number"
          placeholder="Total"
          value={searchResultValue}
          onChange={
            (event: onChangeInputElementEvent) => setsearchResultValue(event.target.value)
          }
        />
      </div>
      <Gallery
        searchValue={searchValue}
        searchResultValue={searchResultValue}
      />
    </div>
  );
};

export default App;
