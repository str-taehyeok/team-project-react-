import React, { useState } from 'react';
import S from "./style";
import ProductCount from './ProductCount';
import Coupon from './Coupon';
import CartBtn from './CartBtn';
import {Link} from "react-router-dom";
import CartProducts from "./CartProducts";


const CartProduct = ({product}) => {
    const [, setCheckedAll] = useState(false);
    const [checked, setChecked] = useState(new Array(product.length).fill(false));

    const onChangeCheckedAll = (e) => {
        setCheckedAll(e.target.checked);
        setChecked(new Array(product.length).fill(e.target.checked));
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

    const productList = product.map((product, i) => (
        <S.CartProductBox key={i}>
            <input
                type="checkbox"
                onChange={onChangeChecked}
                value={i}
                checked={checked[i]}
            />
            <CartProducts/>
        </S.CartProductBox>
    ));

    const productPay = (
        <S.CartPay>
            <S.AllDeliveryBox>
                <S.AllDeliveryFee>
                    <p>총 배송비</p>
                    <p>{product.deliveryFee}</p>
                </S.AllDeliveryFee>
                <S.PurchasePrice>
                    <p>결제금액</p>
                    <p>{product.productPrice}</p>
                </S.PurchasePrice>
                <S.DiscountPrice>
                    <p>할인</p>
                    <p>{product.productDiscountPrice}</p>
                </S.DiscountPrice>
                <S.AllPurchaseFee>
                    <p>총 주문금액</p>
                    <p>{product.deliveryFee}</p>
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
