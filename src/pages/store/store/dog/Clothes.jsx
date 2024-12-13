import React, {useEffect} from 'react';
import S from "./style";
import ClothesColor from './clothes/ClothesColor';
import ClothesBest from './clothes/ClothesBest';
import ClothesSpecial from './clothes/ClothesSpecial';
import ClothesRecommend from './clothes/ClothesRecommend';
import { Link } from "react-router-dom";
import HeartBtn from "../HeartBtn";


// fetch 를 통해서 products 를 모두 가져와야한다.
useEffect(() => {
//     fetch products
    const getProducts = async () => {
        const response = await fetch("http://localhost:10000/product/write")
        const products = await response.json()
        return products;
    }
    getProducts().then(console.log).catch(console.error)
}, []);
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


const Clothes = () => {

    const bestProducts = products.map(({productName, productPrice, productImage1}, i) => (
        <S.BestProduct key={i} >
            <HeartBtn />
            <Link to={"/product"}>
            <img src={productImage1} alt={"상품" + (i + 1)} />
            <span>{productName}</span>
            </Link>
            <span style={{ fontWeight: 700 }}>{productPrice}&nbsp;원</span>
            <button>담기</button>
        </S.BestProduct>
    ))

    const specialProducts = productList.map(({productName, productPrice, productImage1}, i) => (
        <S.SpecialProduct key={i}>
            <HeartBtn />
            <Link to={"/product"}>
            <img src={productImage1} alt={"상품" + (i + 1)}/>
            <span>{productName}</span>
            </Link>
            <span style={{ fontWeight: 700 }}>{productPrice}&nbsp;원</span>
            <button>담기</button>
        </S.SpecialProduct >
    ))

    const recommendProducts = productList.map(({productName, productPrice, productImage1}, i) => (
        <S.Product key={i} >
            <HeartBtn />
            <Link to={"/product"}>
            <img src={productImage1} alt={"상품" + (i + 1)} />
            <span>{productName}</span>
            </Link>
            <span style={{ fontWeight: 700 }}>{productPrice}&nbsp;원</span>
            <button>담기</button>
        </S.Product>
    ))

    return (
        <div>
            <S.Content>
                {/* 컬러 추천 상품 */}
                <ClothesColor productList={productList} />

                {/* 베스트상품 */}
                <ClothesBest bestProducts={bestProducts} />

                {/* 스페셜 상품 */}
                <ClothesSpecial specialProducts={specialProducts}/>

                {/* 강아지 추천 상품 */}
                <ClothesRecommend recommendProducts={recommendProducts} />

            </S.Content>
        </div>
    );
};

export default Clothes;