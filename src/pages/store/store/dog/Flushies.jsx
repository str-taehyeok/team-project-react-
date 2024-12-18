import React, {useContext, useEffect, useState} from 'react';
import S from "./style";
import FlushieColor from './flushies/FlushieColor';
import FlushieBest from './flushies/FlushieBest';
import FlushieSpecial from './flushies/FlushieSpecial';
import FlushieRecommend from './flushies/FlushieRecommend';
import { Link } from "react-router-dom";
import HeartBtn from '../../../community/community/HeartBtn';
import { ProductContext } from '../../../../context/productContext';


const Flushies = () => {

    const { productState } = useContext(ProductContext);
    const { products } = productState;
    const dogProduts = products.filter((pr) => pr.productAnimal === "dog");
    console.log(dogProduts)

    const bestProducts = dogProduts.length > 0 ? dogProduts.map(({
        productName, productPrice, productFileName, productDiscount
    }, i) => (
        <S.BestProduct key={i}>
            <HeartBtn/>
            <Link to={"/product/:id"}>
                <img src={`${process.env.PUBLIC_URL}/assets/images/products/${productFileName}`} alt={"상품" + (i + 1)}/>
                <span>{productName}</span>
            </Link>
            <S.NormalPrice>
                <p style={{color: "#C83F3F", fontWeight: "bold"}}>{productDiscount}%</p>
                <p style={{fontWeight: 700}}>{productPrice}&nbsp;원</p>
            </S.NormalPrice>
            <button>담기</button>
        </S.BestProduct>
    )) : [];

    const specialProducts = products.length > 0 ? products.map(({productName, productPrice, productImage1, productDiscount}, i) => (
        <S.SpecialProduct key={i} className={i === 0 ? 'first-product' : 'rest'}>
            <HeartBtn />
            <Link to={"/product/:id"}>
                <img src={`${process.env.PUBLIC_URL}/assets/images/store/${productImage1}`} alt={"상품" + (i + 1)}/>
                <span className={i === 0 ? 'first-product-name' : 'rest'}>{productName}</span>
            </Link>
            <S.Price>
                <p style={{color: "#C83F3F", fontWeight: "bold", marginRight: "10px"}} className={i === 0 ? 'first-product-discount' : 'rest'}>{productDiscount}%</p>
                <p className={i === 0 ? 'first-product-price' : 'rest'}>{productPrice}&nbsp;원</p>
            </S.Price>
            <button>담기</button>
        </S.SpecialProduct>
    )) : [];

    const recommendProducts = products.length > 0 ? products.map(({productName, productPrice, productImage1, productDiscount}, i) => (
        <S.Product key={i} >
            <HeartBtn />
            <Link to={"/product/:id"}>
                <img src={`${process.env.PUBLIC_URL}/assets/images/store/${productImage1}`} alt={"상품" + (i + 1)} />
                <span>{productName}</span>
            </Link>
            <S.RecommendedPrice>
                <p style={{color: "#C83F3F", fontWeight: "bold"}}>{productDiscount}%</p>
                <p style={{fontWeight: 700}}>{productPrice}&nbsp;원</p>
            </S.RecommendedPrice>
            <button>담기</button>
        </S.Product>
    )) : [];

    return (
        <div>
            <S.Content>
                {/* 컬러 추천 상품 */}
                <FlushieColor productList={products} />

                {/* 베스트상품 */}
                <FlushieBest bestProducts={bestProducts} />
                
                {/* 스페셜 상품 */}
                <FlushieSpecial specialProducts={specialProducts}/>

                {/* 강아지 추천 상품 */}
                <FlushieRecommend recommendProducts={recommendProducts} />

            </S.Content>
        </div>
    );
};

export default Flushies;
