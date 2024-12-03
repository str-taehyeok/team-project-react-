import React, { useState } from 'react';

const HeartBtn = () => {

  const [isHeartClick, setIsHeartClick] = useState(false/*db에 들어간 초기값*/);

  const onClickToChangeHeartCheck = () => {
    // insert쿼리
    setIsHeartClick(!isHeartClick)
  }

  return (
    <>
      {isHeartClick ? (
        <img 
          className="like-icon"
          onClick={onClickToChangeHeartCheck}
          src={`${process.env.PUBLIC_URL}/assets/images/store/heart-click.png`} alt="하트버튼 눌림" 
        />
      ) : (
        <img 
          className="like-icon"
          onClick={onClickToChangeHeartCheck}
          src={`${process.env.PUBLIC_URL}/assets/images/store/heart-not-click.png`} alt="하트버튼" 
        />
      )}
    </>
  );
};

export default HeartBtn;