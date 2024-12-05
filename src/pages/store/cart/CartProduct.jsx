import React from 'react';
import S from "./style";
import { Link } from 'react-router-dom';
import RecommendProduct from './RecommendProduct';
import PurchaseProduct from './PurchaseProduct';

const products = [
  {
    src : "/assets/images/cart/cart-product.png",
    productName : "오쥬 바이 로우즈 독 치킨가슴살&호박 파우치 강아지 간식 69g (유통기한 2025-02225까지)",
    productStock : 1,
    productPrice : 4_500,
    productDiscountPrice : 4_050,
    productCoupon : 0,
    reviewStar: "⭐⭐⭐⭐⭐",
    reviewCount: 25
  },
  {
    src : "/assets/images/cart/cart-product-2.png",
    productName : "오쥬 바이 로우즈 독 치킨가슴살&호박 파우치 강아지 간식 69g (유통기한 2025-02225까지)",
    productStock : 1,
    productPrice : 4_500,
    productDiscountPrice : 4_050,
    productCoupon : 0,
    reviewStar: "⭐⭐⭐⭐⭐",
    reviewCount: 25
  },
  {
    src : "/assets/images/cart/cart-product-3.png",
    productName : "오쥬 바이 로우즈 독 치킨가슴살&호박 파우치 강아지 간식 69g (유통기한 2025-02225까지)",
    productStock : 1,
    productPrice : 4_500,
    productDiscountPrice : 4_050,
    productCoupon : 0,
    reviewStar: "⭐⭐⭐⭐⭐",
    reviewCount: 25
  },
  {
    src : "/assets/images/cart/cart-product-4.png",
    productName : "오쥬 바이 로우즈 독 치킨가슴살&호박 파우치 강아지 간식 69g (유통기한 2025-02225까지)",
    productStock : 1,
    productPrice : 4_500,
    productDiscountPrice : 4_050,
    productCoupon : 0,
    reviewStar: "⭐⭐⭐⭐⭐",
    reviewCount: 25
  },
  {
    src : "/assets/images/cart/cart-product-5.png",
    productName : "오쥬 바이 로우즈 독 치킨가슴살&호박 파우치 강아지 간식 69g (유통기한 2025-02225까지)",
    productStock : 1,
    productPrice : 4_500,
    productDiscountPrice : 4_050,
    productCoupon : 0,
    reviewStar: "⭐⭐⭐⭐⭐",
    reviewCount: 25
  }
]

const CartProduct = () => {

  const productList = products.map((product, i) => (
    <S.CartProduct key={i}>
      <img src={product.src} alt={"상품" + (i + 1)} />
      <S.CartProductInfo>
        <p>{product.productName}</p>
        <p>{product.productStock}</p>
    
          <p>{product.productPrice} 원</p>
          <p>{product.productDiscountPrice} 원</p>
    
        <p>{product.productCoupon}</p>
      </S.CartProductInfo>
    </S.CartProduct>
      
  ))

  const recommendProductList = products.map((product, i) => (
    <S.RecommendProduct key={i}>
      <img src={product.src} alt={"상품" + (i + 1)} />
      <S.RecommendInfo>
        <p>{product.productName}</p>
          <span>{product.productPrice} 원</span>
          <S.RecommendStar>
            <p>{product.reviewStar}</p> <p>({product.reviewCount})</p>
          </S.RecommendStar>
      </S.RecommendInfo>
    </S.RecommendProduct>
      
  ))

  console.log(recommendProductList)


  return (
 
      <S.CartWrap>
        {/* 구매예정 상품 */}
        <PurchaseProduct productList ={productList} />
        {/* 장바구니 추천 상품 */}
        <RecommendProduct recommendList = {recommendProductList}/>
        
      </S.CartWrap>
      

  );
};

export default CartProduct;