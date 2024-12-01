import React from 'react';
import S from "../style";

const FlushieBest = ({bestProducts}) => {
  return (
    <>
        <S.BestProducts>
            {/*<div className="box">*/}
              <S.Title>강아지 BEST 상품</S.Title>
                <S.BestProductWrap>
                    {bestProducts}
                </S.BestProductWrap>
          </S.BestProducts>
      </>
  );
};

export default FlushieBest;