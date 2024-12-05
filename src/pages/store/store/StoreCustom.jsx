import React from 'react';
import S from "./style";
import { Link } from 'react-router-dom'
import HeartBtn from './HeartBtn';
import DogPickColor from './customs/DogPickColor';


// 더미데이터
const products = [
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    src : "/assets/images/store/custom-1.png",
    productDiscount : 35,
    productReviewStart : 5
  },
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    src : "/assets/images/store/custom-2.png",
    productDiscount : 35,
    productReviewStart : 5
  },
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    src : "/assets/images/store/custom-3.png",
    productDiscount : 35,
    productReviewStart : 5
  },
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    src : "/assets/images/store/custom-4.png",
    productDiscount : 35,
    productReviewStart : 5
  },
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    src : "/assets/images/store/custom-1.png",
    productDiscount : 35,
    productReviewStart : 5
  },
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    src : "/assets/images/store/custom-2.png",
    productDiscount : 35,
    productReviewStart : 5
  },
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    src : "/assets/images/store/custom-3.png",
    productDiscount : 35,
    productReviewStart : 5
  },
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    src : "/assets/images/store/custom-4.png",
    productDiscount : 35,
    productReviewStart : 5
  },
]


const StoreCustom = () => {

  const productList = products.map((product, i) => (
    <S.CustomProduct key={i}>
      <HeartBtn />
      <Link to={`read/${i}`}>
        <img src={product.src} alt={"상품" + (i + 1)} />
        <S.CustomProductInfo>
          <p>{product.productName}</p>
          <p>{product.productPrice}</p>
          <span>{product.productDiscount}%</span><span> </span><span>82,500</span><br></br>
          <span>★{product.productReviewStart}(8)</span><span> </span><span>♥5,069</span>
        </S.CustomProductInfo>
      </Link>
     </S.CustomProduct>

  ))  
     

  return (
    <div>
      <S.CustomWrap>
        {/* 강아지 색상별 맞춤 추천 상품 */}
       <DogPickColor productList={productList} />
      </S.CustomWrap>
    </div>
  );
};


export default StoreCustom;