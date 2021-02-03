import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiFillEye } from 'react-icons/ai';
import handleErrorImg from '../utils/utils';
import Rating from './Rating';

const CardItem = ({ data }) => {
  const {
    id,
    alias,
    name,
    rating,
    photos,
    review_count,
    display_phone,
    location,
  } = data;

  const { views } = useSelector((state) => state.user);
  const isView = views.includes(id);

  return (
    <div className='card__item'>
      <div className='card__item--img'>
        <img src={photos} alt={name} onError={handleErrorImg} />
      </div>
      <div className='card__item--info'>
        <h2>{name}</h2>
        <div className='card__item--review'>
          <Rating value={rating} />
          <span>{review_count} reviews</span>
          {isView && <AiFillEye size={25} color='#ff5a29' />}
        </div>
        <p>
          <FaPhoneAlt color='#ff5a29' />
          <span>{display_phone || 'Not phone'}</span>
        </p>
        <p>
          <FaMapMarkerAlt color='#ff5a29' />
          <span>{location.formatted_address}</span>
        </p>
        <Link to={`/detail/${alias}`} className='card__item--button'>
          View More...
        </Link>
      </div>
    </div>
  );
};

export default CardItem;
