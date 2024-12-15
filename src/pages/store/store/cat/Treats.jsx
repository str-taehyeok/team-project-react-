import React, {useEffect, useState} from 'react';
import S from "./style";
import TreatsColor from './treats/TreatsColor';
import TreatsBest from './treats/TreatsBest';
import TreatsSpecial from './treats/TreatsSpecial';
import TreatsRecommend from './treats/TreatsRecommend';
import { Link } from "react-router-dom";
import HeartBtn from "../HeartBtn";


const Treats = () => {

    const [products, setProducts] = useState([]);

    // fetch 를 통해서 products 를 모두 가져와야한다.
    useEffect(() => {
//     fetch products
        const getProducts = async () => {
            const response = await fetch("http://localhost:10000/products/products")
            const products = await response.json()
            return products
        }
        getProducts().then(setProducts).catch(console.error)
    }, []);

    const bestProducts = products.length > 0 ? products.map(({productName, productPrice, productImage1, productDiscount}, i) => (
        <S.BestProduct key={i}>
            <HeartBtn/>
            <Link to={"/product/:id"}>
                <img src={`${process.env.PUBLIC_URL}/assets/images/store/${productImage1}`} alt={"상품" + (i + 1)}/>
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
                <TreatsColor productList={products} />

                {/* 베스트상품 */}
                <TreatsBest bestProducts={bestProducts} />

                {/* 스페셜 상품 */}
                <TreatsSpecial specialProducts={specialProducts}/>

                {/* 강아지 추천 상품 */}
                <TreatsRecommend recommendProducts={recommendProducts} />

            </S.Content>
        </div>
    );
};

export default Treats;