import React from 'react';
import Footer from '../../layout/Footer';
import S from './style';

const NoCart = () => {
  return (
    <S.NoCartWrap>
      <S.NoCart>
        <S.NoCartTitle><p>장바구니</p></S.NoCartTitle>
        <S.NoCartInfo>
          <img src={`${process.env.PUBLIC_URL}/assets/images/store/nocart.png`} alt="노카트 이미지" />
          <p>장바구니에 담긴 상품은 최대 30일간 보관됩니다.</p>
          <p>더 오래 보관하고 싶은 상품은 찜 리스트에 담아주세요.</p>
        </S.NoCartInfo>
      </S.NoCart>
      <Footer />
    </S.NoCartWrap>
  );
};

export default NoCart;