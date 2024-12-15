import React, { useState } from 'react';
import S from "./style";
import ProductCount from './ProductCount';
import Coupon from './Coupon';
import CartBtn from './CartBtn';
import {Link} from "react-router-dom";

const products = [
    {
        productImage: "/assets/images/cart/cart-product.png",
        productName: "오쥬 바이 로우즈 독 치킨가슴살&호박 파우치 강아지 간식 69g (유통기한 2025-02225까지)",
        productStock: 1,
        productPrice: 4_500,
        productDiscountPrice: 4_050,
        productCoupon: 0,
        reviewStar: "⭐⭐⭐⭐⭐",
        reviewCount: 25,
        productCount: 1,
        deliveryFee: 0
    },
    {
        productImage: "/assets/images/cart/cart-product-2.png",
        productName: "오쥬 바이 로우즈 독 치킨가슴살&호박 파우치 강아지 간식 69g (유통기한 2025-02225까지)",
        productStock: 1,
        productPrice: 4_500,
        productDiscountPrice: 4_050,
        productCoupon: 0,
        reviewStar: "⭐⭐⭐⭐⭐",
        reviewCount: 25,
        productCount: 13,
        deliveryFee: 0
    },
    {
        productImage: "/assets/images/cart/cart-product-3.png",
        productName: "오쥬 바이 로우즈 독 치킨가슴살&호박 파우치 강아지 간식 69g (유통기한 2025-02225까지)",
        productStock: 1,
        productPrice: 4_500,
        productDiscountPrice: 4_050,
        productCoupon: 0,
        reviewStar: "⭐⭐⭐⭐⭐",
        reviewCount: 25,
        productCount: 17,
        deliveryFee: 0
    },
    {
        productImage: "/assets/images/cart/cart-product-4.png",
        productName: "오쥬 바이 로우즈 독 치킨가슴살&호박 파우치 강아지 간식 69g (유통기한 2025-02225까지)",
        productStock: 1,
        productPrice: 4_500,
        productDiscountPrice: 4_050,
        productCoupon: 0,
        reviewStar: "⭐⭐⭐⭐⭐",
        reviewCount: 25,
        productCount: 11,
        deliveryFee: 0
    },
    {
        productImage: "/assets/images/cart/cart-product-5.png",
        productName: "오쥬 바이 로우즈 독 치킨가슴살&호박 파우치 강아지 간식 69g (유통기한 2025-02225까지)",
        productStock: 1,
        productPrice: 4_500,
        productDiscountPrice: 4_050,
        productCoupon: 0,
        reviewStar: "⭐⭐⭐⭐⭐",
        reviewCount: 25,
        productCount: 5,
        deliveryFee: 0
    }
];

const CartProduct = () => {
    const [, setCheckedAll] = useState(false);
    const [checked, setChecked] = useState(new Array(products.length).fill(false));

    const onChangeCheckedAll = (e) => {
        setCheckedAll(e.target.checked);
        setChecked(new Array(products.length).fill(e.target.checked));
    };

    const onChangeChecked = (e) => {
        const value = e.target.value;
        const updatedChecked = checked.map((c, i) => i === parseInt(value) ? !c : c);
        setChecked(updatedChecked);

        if (updatedChecked.every((c) => c)) {
            setCheckedAll(true);
        } else {
            setCheckedAll(false);
        }
    };

    const productList = products.map((product, i) => (
        <S.CartProductBox key={i}>
            <input
                type="checkbox"
                onChange={onChangeChecked}
                value={i}
                checked={checked[i]}
            />
            <S.CartProductInfo>
                <img
                    className="thumb"
                    src={`${process.env.PUBLIC_URL}${product.productImage}`}
                    alt={"상품" + (i + 1)}
                />
                <S.ProductName>{product.productName}</S.ProductName>
                <ProductCount key={i} product={product} />
                <S.productPrice>
                    <p>{product.productDiscountPrice} 원</p>
                    <p>{product.productPrice} 원</p>
                </S.productPrice>
                <Coupon />
            </S.CartProductInfo>
        </S.CartProductBox>
    ));

    const productPay = (
        <S.CartPay>
            <S.AllDeliveryBox>
                <S.AllDeliveryFee>
                    <p>총 배송비</p>
                    <p>{products.deliveryFee}</p>
                </S.AllDeliveryFee>
                <S.PurchasePrice>
                    <p>결제금액</p>
                    <p>{products.productPrice}</p>
                </S.PurchasePrice>
                <S.DiscountPrice>
                    <p>할인</p>
                    <p>{products.productDiscountPrice}</p>
                </S.DiscountPrice>
                <S.AllPurchaseFee>
                    <p>총 주문금액</p>
                    <p>{products.deliveryFee}</p>
                </S.AllPurchaseFee>
            </S.AllDeliveryBox>
        </S.CartPay>
    );

    return (
        <S.CartBox>
            <form>
                <S.CartWrap>
                    <S.Cart>
                        <S.CartTitle>장바구니</S.CartTitle>
                        <S.CartAllCheck>
                            <input
                                type="checkbox"
                                onChange={onChangeCheckedAll}
                                value="all"
                                checked={checked.filter((c) => c).length === checked.length}
                            />
                            <S.CartAllNames>
                                <p>상품정보</p>
                                <p>상품수량</p>
                                <p>판매가격</p>
                                <p>적용할 쿠폰</p>
                            </S.CartAllNames>
                        </S.CartAllCheck>
                        {productList}
                        <S.CartPayWrap>
                            <S.CartPayTitle>결제정보</S.CartPayTitle>
                            {productPay}
                            <S.Link>
                                <Link to={`/pay`}>
                                    <S.All>
                                        구매하기
                                    </S.All>
                                </Link>
                            </S.Link>
                        </S.CartPayWrap>
                    </S.Cart>
                </S.CartWrap>

            </form>
            {/* <RecommendProduct /> */}
        </S.CartBox>
    );
};

export default CartProduct;
