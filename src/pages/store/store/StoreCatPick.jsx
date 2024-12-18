import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import HeartBtn from '../../community/community/HeartBtn';

const products = [
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    productImage : "custom-cat-1.png",
    productDiscount : 35,
    productReviewStart : 5,
  },
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    productImage : "custom-cat-2.png",
    productDiscount : 35,
    productReviewStart : 5,
  },
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    productImage : "custom-cat-3.png",
    productDiscount : 35,
    productReviewStart : 5,
  },
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    productImage : "custom-cat-4.png",
    productDiscount : 35,
    productReviewStart : 5,
  },
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    productImage : "custom-cat-1.png",
    productDiscount : 35,
    productReviewStart : 5,
  },
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    productImage : "custom-cat-2.png",
    productDiscount : 35,
    productReviewStart : 5,
  },
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    productImage : "custom-cat-3.png",
    productDiscount : 35,
    productReviewStart : 5,
  },
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    productImage : "custom-cat-4.png",
    productDiscount : 35,
    productReviewStart : 5,
  },
]

const StoreCatPick = () => {
  const productList = products.map((product, i) => (
    <S.CatPickProduct key={i}>
      <HeartBtn />
      <Link to={`read/${i}`}>
        <img src={`${process.env.PUBLIC_URL}/assets/images/store/custom-cat-1.png`} alt="" />
        <S.CatPickProductInfo>
          <p>{product.productName}</p>
          <p>{product.productPrice}</p>
          <span>{product.productDiscount}%</span><span> </span><span>82,586</span><br></br>
          <span>★{product.productReviewStart}(8)</span><span> </span><span>♥5,069</span>
        </S.CatPickProductInfo>
      </Link>
     </S.CatPickProduct>
  ))

  return (
    <S.CatPickWrap>
     {productList}
    </S.CatPickWrap>
  );
};

export default StoreCatPick;