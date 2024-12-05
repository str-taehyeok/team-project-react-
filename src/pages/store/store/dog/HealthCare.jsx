import React from 'react';
import S from "./style";
import HealthCareColor from './healthCare/HealthCareColor';
import HealthCareBest from './healthCare/HealthCareBest';
import HealthCareSpecial from './healthCare/HealthCareSpecial';
import HealthCareRecommend from './healthCare/HealthCareRecommend';
import { Link } from "react-router-dom";


// 더미데이터 확인용
const productList = [
    {
        id : 1,
        productCategory : "사료",
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 11_900,
        productImage1 : "/assets/images/store/dental-dog.png",
        productColor : "Orange",
        productSize : "M",
        reviewStar : 4.5,
        soldCount : 100,
        productDate : "2023-01-03"

    },
    {
        id : 2,
        productCategory : "사료",
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 5_900,
        productImage1 : "/assets/images/store/product2.png",
        productColor : "Gold",
        productSize : "S",
        reviewStar : 3,
        soldCount : 200,
        productDate : "2023-05-03"
    },
    {
        id : 3,
        productCategory : "사료",
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 6_500,
        productImage1 : "/assets/images/store/product3.png",
        productColor : "Gradation",
        productSize : "M",
        reviewStar : 2,
        soldCount : 300,
        productDate : "2023-07-03"
    },
    {
        id : 4,
        productCategory : "사료",
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 4_000,
        productImage1 : "/assets/images/store/product4.png",
        productColor : "Dark Purple",
        productSize : "L",
        reviewStar : 5,
        soldCount : 50,
        productDate : "2023-03-03"
    },
    {
        id : 5,
        productCategory : "사료",
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 12_900,
        productImage1 : "/assets/images/store/product5.png",
        productColor : "Light Purple",
        productSize : "L",
        reviewStar : 2,
        soldCount : 600,
        productDate : "2023-07-03"
    },
    {
        id : 6,
        productCategory : "사료",
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 14_000,
        productImage1 : "/assets/images/store/product6.png",
        productColor : "Gold",
        productSize : "S",
        reviewStar : 1,
        soldCount : 100,
        productDate : "2023-01-03"
    },
    {
        id : 7,
        productCategory : "사료",
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 7_900,
        productImage1 : "/assets/images/store/dental-dog.png",
        productColor : "Orange",
        productSize : "M",
        reviewStar : 4.5,
        soldCount : 130,
        productDate : "2023-01-07"
    },
    {
        id : 8,
        productCategory : "사료",
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 8_000,
        productImage1 : "/assets/images/store/product2.png",
        productColor : "Gradation",
        productSize : "L",
        reviewStar : 4,
        soldCount : 170,
        productDate : "2023-09-03"
    },
]


const HealthCare = () => {

    const bestProducts = productList.map(({productName, productPrice, productImage1}, i) => (
        <S.BestProduct key={i} >
            <Link to={"/product"}>
            <img src={productImage1} alt={"상품" + (i + 1)} />
            <span>{productName}</span>
            </Link>
            <span style={{ fontWeight: 700 }}>{productPrice}<br/>원</span>
            <button>담기</button>
        </S.BestProduct>
    ))

    const specialProducts = productList.map(({productName, productPrice, productImage1}, i) => (
        <S.SpecialProduct key={i}>
            <Link to={"/product"}>
            <img src={productImage1} alt={"상품" + (i + 1)}/>
            <span>{productName}</span>
            </Link>
            <span style={{ fontWeight: 700 }}>{productPrice}<br/>원</span>
            <button>담기</button>
        </S.SpecialProduct >
    ))

    const recommendProducts = productList.map(({productName, productPrice, productImage1}, i) => (
        <S.Product key={i} >
            <Link to={"/product"}>
            <img src={productImage1} alt={"상품" + (i + 1)} />
            <span>{productName}</span>
            </Link>
            <span style={{ fontWeight: 700 }}>{productPrice}<br/>원</span>
            <button>담기</button>
        </S.Product>
    ))

    return (
        <div>
            <S.Content>
                {/* 컬러 추천 상품 */}
                <HealthCareColor productList={productList} />

                {/* 베스트상품 */}
                <HealthCareBest bestProducts={bestProducts} />

                {/* 스페셜 상품 */}
                <HealthCareSpecial specialProducts={specialProducts}/>

                {/* 강아지 추천 상품 */}
                <HealthCareRecommend recommendProducts={recommendProducts} />

            </S.Content>
        </div>
    );
};

export default HealthCare;