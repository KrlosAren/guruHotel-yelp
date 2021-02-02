import React from 'react';
import { useSelector } from 'react-redux';

// components
import GridItems from '../components/GridItems';
import Search from '../components/Search';
import Spinner from '../components/Spinner';

const Home = () => {
  const { user } = useSelector((state) => state);
  const { results, isError, isLoading } = user;
  const isResults = results.length > 0;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className='container'>
      <div className={!isResults ? 'home' : 'home-with-search'}>
        {!isResults && (
          <div className='home__input'>
            <Search />
          </div>
        )}
        {isResults && <GridItems />}
        <ul className='errors' id='msg'>
          {isError && <li>😅 Something has happened !. Try again!</li>}
        </ul>
      </div>
    </div>
  );
};

export default Home;
