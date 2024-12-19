import React, {useEffect, useState} from 'react';
import S from "./style";
import Coupon from "./Coupon";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import ProductCount from "./ProductCount";
import CartProduct from "./CartProduct";

const CartProducts = ({ product, checked, onChangeChecked }) => {

    const { id, productName, productPrice, productRealPrice, productStock, couponTitle, productFileName } = product;

    const productList = product.map((product, i) => (
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
                    src={`${process.env.PUBLIC_URL}${productFileName}`}
                    alt={"상품" + (i + 1)}
                />
                <S.ProductName>{productName}</S.ProductName>
                <ProductCount key={i} product={product} />
                <S.productPrice>
                    <p>{productPrice} 원</p>
                    <p>{productRealPrice} 원</p>
                </S.productPrice>
                <Coupon />
            </S.CartProductInfo>
        </S.CartProductBox>
    ));

    return (
        <div>
            {productList}
        </div>
    );
};

export default CartProducts;