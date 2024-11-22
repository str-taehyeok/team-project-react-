import React, { useState } from 'react';

const FlushieColor = ({projectList}) => {

  console.log(projectList)

  const [filterdProducts, setFilterdProducts] = useState(projectList)

  const colorProducts = filterdProducts.map(({productName, productPrice, src}, i) => (
    <div key={i}>
        <img src={src} alt={"상품" + (i + 1)} />
        <span>{productName}</span>
        <span style={{ fontWeight: 700 }}>{productPrice}</span>
        <button>담기</button>
    </div>
  ))

  return (
    <>

      <div className="color-products">
          <div className="box">
              <span className="box-title">강아지 컬러 추천 상품</span>
              <button type="button">색상</button>
              <button type="button">가격</button>
              <button type="button">사이즈</button>
              <button type="button">정렬</button>
          </div>
      </div>

      <div>카테 고리별 필터 </div>
      <div className="product-container">
          <div className="product-wrap">
              {colorProducts}
          </div>
      </div>
    </>
    );
};

export default FlushieColor;