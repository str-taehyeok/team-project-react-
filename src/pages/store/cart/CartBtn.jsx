import React from 'react';
import S from './style';

const CartBtn = () => {
  return (
    <S.Link to={"/pay"}>
      전체 상품 주문
    </S.Link>
  );  
};

export default CartBtn;