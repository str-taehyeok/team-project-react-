import React, {useContext} from 'react';
import S from './style';
import Footer from '../../../layout/Footer';
import {ProductContext} from "../../../../context/productContext";
import {Link} from "react-router-dom";
import HeartBtn from "../../../community/community/HeartBtn";


const Result = () => {
    const { productState } = useContext(ProductContext);
    const { products } = productState;

    //상품 반복문
    const productList = products.length !== 0 ? products.map(({id, productName, productFilePath, productFileName, productPrice, productRealPrice, productDiscount, productDate}, index) => (
        <div key={index}>
            <S.Heart>
                <HeartBtn id = {index} type={"product"}/>
            </S.Heart>
            <Link to={`read/${index}`}>
                <S.CustomImage>
                    <img className='thumb' src={`${process.env.PUBLIC_URL}/assets/images/products/${productFileName}`}
                         alt={"상품" + (index + 1)}/>
                </S.CustomImage>
                <S.CustomProductInfo>
                    <div>{productDate}</div>
                    <S.ProductName>{productName}</S.ProductName>
                    <S.ProductRealPrice>{productRealPrice}</S.ProductRealPrice>
                    <S.ProductDiscountWrap>
                        <S.ProductDiscount>{productDiscount}% </S.ProductDiscount>
                        <S.ProductPrice>{productPrice}</S.ProductPrice>
                    </S.ProductDiscountWrap>
                </S.CustomProductInfo>
            </Link>
        </div>
    )) : <S.CustomProductMessage>검색된 상품이 없습니다.</S.CustomProductMessage>

    return (
        <div>
            <div>
                {productList}
            </div>
            <Footer />
        </div>
    );
};

export default Result;