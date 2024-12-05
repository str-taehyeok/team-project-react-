import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';

const ToCommunityBtn = () => {
  return (
  <S.CommunityBtnWrap>
    <Link to={`/community`}>
      <S.CommunityBtn className='button' type='button'>
        <div>
          바로가기
          <img src={`${process.env.PUBLIC_URL}/assets/images/store/icon-go.png`} alt="화살표" />
        </div>
      </S.CommunityBtn>
    </Link>
  </S.CommunityBtnWrap>

  );
};

export default ToCommunityBtn;