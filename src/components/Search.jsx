import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useHistory, useParams } from 'react-router-dom';
import { fetchSearch, setError } from '../store/user';

const Search = () => {
  const dispatch = useDispatch();
  const form = useRef(null);
  const history = useHistory();
  const { pathname } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    // get from from useRef
    const formData = new FormData(form.current);

    const query = {
      search: formData.get('search'),
      location: formData.get('location') || 'santiago',
    };

    dispatch(fetchSearch(query));
    // localStorage.clear();

    // push to client to / when the user fetch from detail page
    if (pathname !== '/') {
      history.push('/');
    }
  };

  return (
    <form className='search' ref={form}>
      <label className='search__container' htmlFor='search'>
        <input
          className='search__input'
          type='text'
          name='search'
          id='search'
          placeholder='Search'
          required
        />
      </label>
      <label className='search__location' htmlFor='location'>
        <input
          className='search__input'
          type='text'
          name='location'
          id='location'
          placeholder='Santiago'
        />
      </label>
      <button type='submit' onClick={handleSubmit}>
        <IconContext.Provider value={{ color: 'white', size: '1em' }}>
          <FaSearch />
        </IconContext.Provider>
      </button>
    </form>
  );
};

export default Search;
