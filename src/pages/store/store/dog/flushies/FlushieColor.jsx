import React, { useState } from 'react';
import S from "../style";

const FlushieColor = ({productList}) => {

  console.log(productList)

  const [filterdProducts, setFilterdProducts] = useState(productList)

  const colorProducts = filterdProducts.map(({productName, productPrice, src}, i) => (
        <S.Product key={i}>
            <img src={src} alt={"상품" + (i + 1)} />
            <span>{productName}</span>
            <span style={{ fontWeight: 700 }}>{productPrice}</span>
            <button>담기</button>
        </S.Product>
  ))

  return (
    <>

      <S.ColorProducts>
          < S.Box>
              <S.BoxTitle>강아지 컬러 추천 상품</S.BoxTitle>
              <button type="button">색상</button>
              <button type="button">가격</button>
              <button type="button">사이즈</button>
              <button type="button">정렬</button>
          </S.Box>
      </S.ColorProducts>

      {/*<div>카테 고리별 필터 </div>*/}
      {/*<S.ProductContainer>*/}
          <S.ProductWrap>
              {colorProducts}
          </S.ProductWrap>
          <S.ProductWrap>
              {colorProducts}
          </S.ProductWrap>
      {/*</S.ProductContainer>*/}
    </>
    );
};

export default FlushieColor;