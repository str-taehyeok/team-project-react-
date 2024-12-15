import React, {useEffect, useState} from 'react';
import S from "./style";
import ClothesColor from './clothes/ClothesColor';
import ClothesBest from './clothes/ClothesBest';
import ClothesSpecial from './clothes/ClothesSpecial';
import ClothesRecommend from './clothes/ClothesRecommend';
import { Link } from "react-router-dom";
import HeartBtn from "../HeartBtn";

const Clothes = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // 동물 타입을 URL에 포함시켜 fetch
                // const response = await fetch("http://localhost:10000/products/products/");
                // 또는 쿼리 파라미터 사용:
                const response = await fetch("http://localhost:10000/products/products?productAnimal=dog");

                if (!response.ok) {
                    throw new Error('상품을 불러오는 데 실패했습니다.');
                }

                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // 로딩 상태 처리
    if (loading) {
        return <div>상품을 불러오는 중입니다...</div>;
    }

    // 에러 상태 처리
    if (error) {
        return <div>오류: {error}</div>;
    }

    const bestProducts = products.length > 0 ? products.map(({productName, productPrice, productImage1, productDiscount}, i) => (
        <S.BestProduct key={i}>
            <HeartBtn/>
            <Link to={"/product"}>
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
            <Link to={"/product"}>
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
            <Link to={"/product"}>
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
                <ClothesColor productList={products} />

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