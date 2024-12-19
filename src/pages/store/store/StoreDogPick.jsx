import React, {useContext} from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import HeartBtn from '../../community/community/HeartBtn';
import {ProductContext} from "../../../context/productContext";

// const products = [
//   {
//     productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
//     productPrice : 129_000,
//     productImage : "/assets/images/store/custom-1.png",
//     productDiscount : 35,
//     productReviewStart : 5,
//   },
//   {
//     productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
//     productPrice : 129_000,
//     productImage : "/assets/images/store/custom-2.png",
//     productDiscount : 35,
//     productReviewStart : 5,
//   },
//   {
//     productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
//     productPrice : 129_000,
//     productImage : "/assets/images/store/custom-3.png",
//     productDiscount : 35,
//     productReviewStart : 5,
//   },
//   {
//     productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
//     productPrice : 129_000,
//     productImage : "/assets/images/store/custom-4.png",
//     productDiscount : 35,
//     productReviewStart : 5,
//   },
//   {
//     productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
//     productPrice : 129_000,
//     productImage : "/assets/images/store/custom-1.png",
//     productDiscount : 35,
//     productReviewStart : 5,
//   },
//   {
//     productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
//     productPrice : 129_000,
//     productImage : "/assets/images/store/custom-2.png",
//     productDiscount : 35,
//     productReviewStart : 5,
//   },
//   {
//     productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
//     productPrice : 129_000,
//     productImage : "/assets/images/store/custom-3.png",
//     productDiscount : 35,
//     productReviewStart : 5,
//   },
//   {
//     productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
//     productPrice : 129_000,
//     productImage : "/assets/images/store/custom-4.png",
//     productDiscount : 35,
//     productReviewStart : 5,
//   },
// ]



const StoreDogPick = () => {

  // 상품git
  const { productState, productAction } = useContext(ProductContext);
  const { products } = productState;
  const { setProducts } = productState;


  const productList = products.slice(0, 8).map(({
  id, productName, productFilePath, productFileName, productPrice, productDiscount, productReviewStar
  }, index) => (
    <S.DogPickProduct key={index}>
        <HeartBtn />
      <Link to={`read/${index}`}>
        <img src={`${process.env.PUBLIC_URL}/assets/images/products/${productFileName}`} alt={productName} />
        <S.DogPickProductInfo>
          <p>{productName}</p>
          <p>{productPrice}</p>
          <span>{productDiscount}%</span><span> </span><span>82,586</span><br></br>
          <span>★{productReviewStar}(8)</span><span> </span><span>♥5,069</span>
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