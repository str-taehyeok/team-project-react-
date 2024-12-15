import React from 'react';
import S from "../style";

const HealthCareSpecial = ({specialProducts}) => {
  return (
      <>
        <S.SpecialWrap>
            <S.Title>고양이 특가 상품</S.Title>
            <S.SpecialProducts>
            {specialProducts}
            </S.SpecialProducts>
        </S.SpecialWrap>
      </>
  );
};

export default HealthCareSpecial;