import React, { useState } from 'react';
import S from './style.js';

const FollowBtn = () => {

  const [isFollowClick, setisFollowClick] = useState(false/*db에 들어간 초기값*/);

  const onClickToChangeFollowClick = () => {
    // insert쿼리
    setisFollowClick(!isFollowClick)
  }

  return (
    <>
      {isFollowClick ? (
        <S.FollowBtn className='follow-box' onClick={onClickToChangeFollowClick}>
            <button>
              <p>팔로우</p>
            </button>   
        </S.FollowBtn>     

      ) : (
        <S.FollowingBtn className='following-box' onClick={onClickToChangeFollowClick}>
            <button>
                <p>팔로잉</p>
            </button>
        </S.FollowingBtn>
      )}
    </>
  );
};

export default FollowBtn;