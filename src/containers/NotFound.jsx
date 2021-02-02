import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className='notFound container'>
    <p>404</p>
    <p>Ups!. Theres nothing here.</p>
    <Link to='/'>Go Back!</Link>
  </div>
);

export default NotFound;
