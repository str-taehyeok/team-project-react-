import React from 'react';
import S from "../style";

const HealthCareRecommend = ({recommendProducts}) => {
  return (
      <>
          <S.RecommendedProduct>
          <S.Title>강아지 추천 상품</S.Title>
        <S.RecommendedWrap>
            {recommendProducts}
        </S.RecommendedWrap>
          </S.RecommendedProduct>
      </>
  );
};

export default HealthCareRecommend;