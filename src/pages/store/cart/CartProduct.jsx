import React from 'react';
import S from "./style";
import { Link } from 'react-router-dom';

const products = [
  {
    productImage : "cartProduct.png",
    productName : "오쥬 바이 로우즈 독 치킨가슴살&호박 파우치 강아지 간식 69g (유통기한 2025-02225까지)",
    productStock : 1,
    productPrice : 4_500,
    productDiscountPrice : 4_050,
    productCoupon : 0,
  }
]

const CartProduct = () => {

  const productList = products.map((product, i) => (
    <S.CartProduct key={i}>
      <img src={`${process.env.PUBLIC_URL}/assets/images/store/cartProduct.png`} alt="카트이미지"></img>
      <S.CartProductInfo>
        <p>{product.productName}</p>
        <p>{product.productStock}</p>
      
          <p>{product.productPrice} 원</p>
          <p>{product.productDiscountPrice} 원</p>
    
        <p>{product.productCoupon}</p>
      </S.CartProductInfo>
    </S.CartProduct>
      
  ))

  return (
 
      <S.CartWrap>
        {productList}
      </S.CartWrap>
      

  );
};

export default CartProduct;