import React from 'react';
import S from './style';
import StoreCustom from '../store/StoreCustom';
import CartProduct from './CartProduct';

const Cart = () => {
    return (
        <S.CartWrap>
            <S.Cart>
                <S.CartTitle>
                    <p>장바구니</p>
                </S.CartTitle>

                <S.CartProductBox>
                    <S.CartProductRadio>
                        <button type='button'>
                            <img src={`${process.env.PUBLIC_URL}/assets/images/store/mingcute_checkbox-fill.png`} alt="카트이미지"></img>
                        </button>
                        <p>상품정보</p>
                        <p>상품수량</p>
                        <p>판매가격</p>
                        <p>적용할 쿠폰</p>
                        <hr />
                    </S.CartProductRadio>
                        <button type='button'>
                            <img src={`${process.env.PUBLIC_URL}/assets/images/store/mingcute_checkbox-fill.png`} alt="카트이미지"></img>
                        </button>
                        <CartProduct />
                </S.CartProductBox>
          

            </S.Cart>
        </S.CartWrap>
    );
};

export default Cart;