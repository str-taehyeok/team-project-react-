import React from 'react';
import S from "../style";

const HealthCareSpecial = ({specialProducts}) => {
  return (
      <>
        <S.SpecialWrap>
            <S.Title>강아지 특가 상품</S.Title>
            <S.SpecialProducts>
            {specialProducts}
            </S.SpecialProducts>
        </S.SpecialWrap>
      </>
  );
};

export default HealthCareSpecial;