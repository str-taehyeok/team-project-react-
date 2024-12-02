import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import S from './style';
import { HeartContext } from "../../../context/heartContext";

const HeartBtn = () => {

  const{ state, action } = useContext(HeartContext);

  useEffect(() => {
    if (!state.heart) {
      action.setHeart("noHeart");
    }
  }, [state.heart, action]);

  return (
    <S.HeartButton>
      <img src={`${process.env.PUBLIC_URL}/assets/images/store/heartnotclick.png`} alt="하트버튼" />
      <img src={`${process.env.PUBLIC_URL}/assets/images/store/heartclick.png`} alt="하트버튼 눌림" />
    </S.HeartButton>
  );
};

export default HeartBtn;