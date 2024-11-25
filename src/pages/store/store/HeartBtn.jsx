import React from 'react';
import S from './style';

const HeartBtn = () => {
  return (
    <S.HeartButton>
      <img src={`${process.env.PUBLIC_URL}/assets/images/store/heartnotclick.png`} alt="하트버튼" />
      <img src={`${process.env.PUBLIC_URL}/assets/images/store/heartclick.png`} alt="하트버튼 눌림" />
    </S.HeartButton>
  );
};

export default HeartBtn;