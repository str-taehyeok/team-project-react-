import React from 'react';
import S from './style';

const PayBtn = () => {
  return (
    <S.Link to={"/store"}>
      결제하기
    </S.Link>
  );
};

export default PayBtn;