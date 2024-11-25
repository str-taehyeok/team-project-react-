import React from 'react';
import S from "./style";
import { Link } from 'react-router-dom'

// 더미데이터
const products = [
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    productImage : "custom1.png",
    productDiscount : 35,
    productReviewStart : 5,
  },
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    productImage : "custom1.png",
    productDiscount : 35,
    productReviewStart : 5,
  },
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    productImage : "custom1.png",
    productDiscount : 35,
    productReviewStart : 5,
  },
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    productImage : "custom1.png",
    productDiscount : 35,
    productReviewStart : 5,
  },
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    productImage : "custom1.png",
    productDiscount : 35,
    productReviewStart : 5,
  },
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    productImage : "custom1.png",
    productDiscount : 35,
    productReviewStart : 5,
  },
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    productImage : "custom1.png",
    productDiscount : 35,
    productReviewStart : 5,
  },
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    productImage : "custom1.png",
    productDiscount : 35,
    productReviewStart : 5,
  },
]


const StoreCustom = () => {

  const productList = products.map((product, i) => (
    <S.CustomProduct key={i}>
        <Link to={""}><img src={`${process.env.PUBLIC_URL}/assets/images/store/custom1.png`} alt="" /></Link>
      <S.CustomProductInfo>
        <p>{product.productName}</p>
        <p>{product.productPrice}</p>
        <span>{product.productDiscount}%</span><span> </span><span>82,586</span><br></br>
        <span>★{product.productReviewStart}(8)</span><span> </span><span>♥5,069</span>
      </S.CustomProductInfo>
     </S.CustomProduct>
  ))

  return (
    <S.CustomWrap>
     {productList}
    </S.CustomWrap>
  );
};

export default StoreCustom;