import React from 'react';
import S from "../style";

const FlushieRecommend = ({recommendProducts}) => {
  return (
      <>
          <S.RecommendedProduct>
          <S.Title>고양이 추천 상품</S.Title>
        <S.RecommendedWrap>
            {recommendProducts}
        </S.RecommendedWrap>
          </S.RecommendedProduct>
      </>
  );
};

export default FlushieRecommend;