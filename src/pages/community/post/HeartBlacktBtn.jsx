import React, { useState } from 'react';

const HeartBlackBtn = () => {

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
          src={`${process.env.PUBLIC_URL}/assets/images/community/fullHeart.png`} alt="하트버튼 눌림" 
        />
      ) : (
        <img 
          className="like-icon"
          onClick={onClickToChangeHeartCheck}
          src={`${process.env.PUBLIC_URL}/assets/images/community/heart.png`} alt="하트버튼" 
        />
      )}
    </>
  );
};

export default HeartBlackBtn;