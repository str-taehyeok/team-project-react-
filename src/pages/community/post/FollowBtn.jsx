import React, { useState } from 'react';

const FollowBtn = () => {

  const [isFollowClick, setisFollowClick] = useState(false/*db에 들어간 초기값*/);

  const onClickToChangeFollowClick = () => {
    // insert쿼리
    setIsFollowClick(!isFollowClick)
  }

  return (
    <>
      {isFollowClick ? (
        <div className='follow-box'>
          <button type='button' className='follow'>
            <p className='follow-text'>팔로우</p>
          </button>
        </div>      

      ) : (
        <div className='following-box' onClick={onClickToChangeFollowClick}>
          <button type='button' className='following'>
              <p className='following-text'>팔로잉</p>
          </button>
        </div>
      )}
    </>
  );
};

export default HeartBtn;