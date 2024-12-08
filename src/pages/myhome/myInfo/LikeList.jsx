import React from 'react';

// 더미데이터

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
      productCount: 1,
      deliveryFee : 0
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
      productCount: 13,
      deliveryFee : 0
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
      productCount: 17,
      deliveryFee : 0
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
      productCount: 11,
      deliveryFee : 0
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
      productCount: 5,
      deliveryFee : 0
    }
  ]

const LikeList = () => {

const StoreList = products.map((product, i) => (
    <div key={i}>
        <img className='thumb' src={`${process.env.PUBLIC_URL}${product.productImage}`} alt={"상품" + (i + 1)} />
        <p>{product.productName}</p>
        <p>{product.productPrice}원</p>
    </div>
))




    return (
        <div>
            <div>
                <p>나의 정보</p>
            </div>
            <div>
                <p>스토어</p><p>더 많은 상품 보러가기&#62;</p>
            </div>
            {StoreList}
        </div>
    );
};

export default LikeList;