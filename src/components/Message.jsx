import React, { useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { emptyErrors } from '../store/user';

const Message = ({ msg }) => {
  const dispatch = useDispatch();

  // clean errors function
  const cleanErrors = () => {
    const msgContainer = document.getElementById('msg');
    msgContainer.style.display = 'none';
    dispatch(emptyErrors(''));
  };

  useEffect(() => {
    setTimeout(() => {
      cleanErrors();
    }, 3000);
  }, [msg]);

  return (
    <div className='errors' id='msg'>
      <p>{msg}</p>
      <span onClick={cleanErrors} role='button'>
        <IoMdClose size={25} />
      </span>
    </div>
  );
};

export default Message;
