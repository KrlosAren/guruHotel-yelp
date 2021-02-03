import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaMapMarkerAlt, FaMoneyBillAlt, FaPhoneAlt } from 'react-icons/fa';
import { MdSchedule } from 'react-icons/md';
import Rating from '../components/Rating';
import Review from '../components/Review';
import Hours from '../components/Hours';
import { saveView } from '../store/user';
import handleErrorImg from '../utils/utils';

const Detail = () => {
  const dispatch = useDispatch();
  const { alias } = useParams();

  const { results } = useSelector((state) => state.user);

  const item = results.find((business) => business.alias === alias);

  const history = useHistory();
  const {
    id,
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

  useEffect(() => {
    dispatch(saveView(id));
  }, [id]);

  const info = {
    height: hours && 'auto',
  };

  return (
    <div className='container'>
      <div className='detail-layout'>
        <div className='detail__card'>
          <div className='detail__card--img'>
            <img src={photos} alt={name} onError={handleErrorImg} />
          </div>
          <div className='detail__card--info'>
            <h1>{name}</h1>
            <div className='info__review'>
              <Rating value={rating} />
              <span>{review_count} reviews</span>
            </div>
            <div className='card-info_hours' style={info}>
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
                <div className='detail__info'>
                  <MdSchedule size={20} style={{ color: '#ff5a29' }} />
                  <span>Schedules</span>
                </div>
                {hours[0] ? (
                  hours[0].open.map((hour) => <Hours hour={hour} />)
                ) : (
                  <p>Not Info</p>
                )}
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
                  <span style={{ height: 'initial' }}>Not Info</span>
                )}
              </div>
              <p
                onClick={() => {
                  history.push('/');
                  useDispatch(() => {
                    saveView(alias);
                  });
                }}
                className='button-back'
              >
                Back
              </p>
            </div>
          </div>
        </div>
        {reviews && (
          <div className='reviews__container'>
            <h3 className='reviews__title'>Reviews</h3>
            <div className='reviews__grid'>
              {reviews.map((review) => (
                <Review key={review.id} review={review} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
