import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import HeartBtn from './HeartBtn';

const products = [
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    productImage : "/assets/images/store/custom-1.png",
    productDiscount : 35,
    productReviewStart : 5,
  },
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    productImage : "/assets/images/store/custom-2.png",
    productDiscount : 35,
    productReviewStart : 5,
  },
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    productImage : "/assets/images/store/custom-3.png",
    productDiscount : 35,
    productReviewStart : 5,
  },
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    productImage : "/assets/images/store/custom-4.png",
    productDiscount : 35,
    productReviewStart : 5,
  },
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    productImage : "/assets/images/store/custom-1.png",
    productDiscount : 35,
    productReviewStart : 5,
  },
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    productImage : "/assets/images/store/custom-2.png",
    productDiscount : 35,
    productReviewStart : 5,
  },
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    productImage : "/assets/images/store/custom-3.png",
    productDiscount : 35,
    productReviewStart : 5,
  },
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    productImage : "/assets/images/store/custom-4.png",
    productDiscount : 35,
    productReviewStart : 5,
  },
]


const StoreDogPick = () => {
  const productList = products.map((product, i) => (
    <S.DogPickProduct key={i}>
        <HeartBtn />
      <Link to={`read/${i}`}>
        <img src={`${process.env.PUBLIC_URL}${product.productImage}`} alt={"상품" + (i + 1)} />
        <S.DogPickProductInfo>
          <p>{product.productName}</p>
          <p>{product.productPrice}</p>
          <span>{product.productDiscount}%</span><span> </span><span>82,586</span><br></br>
          <span>★{product.productReviewStart}(8)</span><span> </span><span>♥5,069</span>
        </S.DogPickProductInfo>
      </Link>
     </S.DogPickProduct>
  ))

  return (
    <S.DogPickWrap>
     {productList}
    </S.DogPickWrap>
  );
};

export default StoreDogPick;