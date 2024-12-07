import React, { useEffect, useState } from 'react';
import S from "./style";
import { Link } from 'react-router-dom';

const products = [
  {
    productImage : "/assets/images/cart/cart-product.png",
    productName : "오쥬 바이 로우즈 독 치킨가슴살&호박 파우치 강아지 간식 69g (유통기한 2025-02225까지)",
    productStock : 1,
    productPrice : 4_500,
    productDiscountPrice : 4_050,
    productCoupon : 0,
    reviewStar: "⭐⭐⭐⭐⭐",
    reviewCount: 25,
    productCount: 1
  },
  {
    productImage : "/assets/images/cart/cart-product-2.png",
    productName : "오쥬 바이 로우즈 독 치킨가슴살&호박 파우치 강아지 간식 69g (유통기한 2025-02225까지)",
    productStock : 1,
    productPrice : 4_500,
    productDiscountPrice : 4_050,
    productCoupon : 0,
    reviewStar: "⭐⭐⭐⭐⭐",
    reviewCount: 25,
    productCount: 13
  },
  {
    productImage : "/assets/images/cart/cart-product-3.png",
    productName : "오쥬 바이 로우즈 독 치킨가슴살&호박 파우치 강아지 간식 69g (유통기한 2025-02225까지)",
    productStock : 1,
    productPrice : 4_500,
    productDiscountPrice : 4_050,
    productCoupon : 0,
    reviewStar: "⭐⭐⭐⭐⭐",
    reviewCount: 25,
    productCount: 17
  },
  {
    productImage : "/assets/images/cart/cart-product-4.png",
    productName : "오쥬 바이 로우즈 독 치킨가슴살&호박 파우치 강아지 간식 69g (유통기한 2025-02225까지)",
    productStock : 1,
    productPrice : 4_500,
    productDiscountPrice : 4_050,
    productCoupon : 0,
    reviewStar: "⭐⭐⭐⭐⭐",
    reviewCount: 25,
    productCount: 11
  },
  {
    productImage : "/assets/images/cart/cart-product-5.png",
    productName : "오쥬 바이 로우즈 독 치킨가슴살&호박 파우치 강아지 간식 69g (유통기한 2025-02225까지)",
    productStock : 1,
    productPrice : 4_500,
    productDiscountPrice : 4_050,
    productCoupon : 0,
    reviewStar: "⭐⭐⭐⭐⭐",
    reviewCount: 25,
    productCount: 5
  }
]

const CartProduct = () => {

   // 체크박스 로직

   const [checkedAll, setCheckedAll] = useState(false);
   const [checked, setChecked] = useState(new Array(3).fill(false));

   const onChangeCheckedAll = (e) => {
       if (e.target.checked) {
           setCheckedAll(!checkedAll)
           setChecked(new Array(checked.length).fill(true))
       } else {
           setCheckedAll(!checkedAll)
           setChecked(new Array(checked.length).fill(false))
       }
   }

   const onChangeChecked = (e) => {
       // current index
       let value = e.target.value;
       let check = e.target.checked;
       setChecked(checked.map((c, i) => { return i == value ? !c : c }))
   }


  //  const [products, setProducts] = useState((products))
   const productList = products.map((product, i) => (
    <div key={i}>
      <img className='thumb' src={`${process.env.PUBLIC_URL}${product.productImage}`} alt={"상품" + (i + 1)} />
      <div>{product.productName}</div>


    </div>

   ))

  return (
 
      <S.CartWrap>
       {productList}
      </S.CartWrap>
      

  );
};

export default CartProduct;