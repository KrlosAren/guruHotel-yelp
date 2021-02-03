import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

// components
import GridItems from '../components/GridItems';
import Message from '../components/Message';
import Search from '../components/Search';
import Spinner from '../components/Spinner';
import { setError } from '../store/user';

const Home = () => {
  const dispatch = useDispatch();
  // state
  const { user } = useSelector((state) => state);

  // user
  const { results, isError, isLoading, error, total } = user;
  const isResults = results.length > 0;

  const handleNotResults = () => {
    dispatch(setError('Not Found Restaurants 😥.Try Again.'));
  };

  useEffect(() => {
    if (total === 0) {
      handleNotResults();
    }
  }, [results]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {!isResults && (
        <h3 className='home-intro'>
          Let&#39;s Start! 😎.
          <span> Search for your favorite food 😋</span>
        </h3>
      )}
      <div className='container'>
        <div className={!isResults ? 'home' : 'home-with-search'}>
          {!isResults && (
            <div className='home__input'>
              <Search />
            </div>
          )}
          {isResults && <GridItems results={results} />}
          {isError && <Message msg={error} />}
        </div>
      </div>
    </>
  );
};

export default Home;
