// default img if sever fail

const handleErrorImg = (e) => {
  e.target.src =
    'https://dummyimage.com/400x600/e6e6e6/e6e6e6.jpg&text=Not+Img';
};

export default handleErrorImg;
