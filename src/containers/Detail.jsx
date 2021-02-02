import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaMapMarkerAlt, FaMoneyBillAlt, FaPhoneAlt } from 'react-icons/fa';
import { MdSchedule } from 'react-icons/md';
import Rating from '../components/Rating';
import Review from '../components/Review';
import Hours from '../components/Hours';

const Detail = () => {
  const { id } = useParams();
  const { results } = useSelector((state) => state.user);

  const item = results.find((r) => r.id === id);

  const history = useHistory();
  const {
    name,
    rating,
    price,
    photos,
    hours,
    review_count,
    display_phone,
    location,
    reviews,
  } = item;

  return (
    <div className='container'>
      <div className='detail-layout'>
        <div className='detail__card'>
          <div className='detail__card--img'>
            <img src={photos} alt={name} />
          </div>
          <div className='detail__card--info'>
            <h1>{name}</h1>
            <div className='info__review'>
              <Rating value={rating} />
              <span>{review_count} reviews</span>
            </div>
            <div className='card-info_hours'>
              <p className='info__price'>
                <FaMoneyBillAlt size={20} style={{ color: '#ff5a29' }} />
                <span>{price || 'Not info'}</span>
              </p>
              <div className='info__location'>
                <div>
                  <FaMapMarkerAlt size={20} style={{ color: '#ff5a29' }} />
                  <span>{location.formatted_address}</span>
                </div>
                <div>
                  <FaPhoneAlt size={20} style={{ color: '#ff5a29' }} />{' '}
                  <span>{display_phone}</span>
                </div>
              </div>
              <div className='info__hours'>
                <MdSchedule />
                {hours[0]
                  ? hours[0].open.map((hour) => <Hours hour={hour} />)
                  : 'Not Info'}
              </div>
              <div className='info__open'>
                <span>Status:</span>
                {hours[0] ? (
                  hours[0].is_open_now ? (
                    <span>Open</span>
                  ) : (
                    <span style={{ color: '#ec4646' }}>Closed</span>
                  )
                ) : (
                  <span>Not Info</span>
                )}
              </div>
              <Link to='/' className='button-back'>
                Back
              </Link>
            </div>
          </div>
        </div>

        <div className='reviews__container'>
          {reviews?.map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
