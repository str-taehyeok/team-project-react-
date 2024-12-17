import React, { useEffect, useState } from 'react';
import ClothesColor from '../store/store/dog/clothes/ClothesColor';
import S from "./style";
import Footer from '../layout/Footer';

const ProductResult = () => {

  const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
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

    return (
        <div>
            <S.Content>
                {/* 컬러 추천 상품 */}
                <ClothesColor productList={products} />

            </S.Content>
            <Footer />
        </div>
    );
};

export default ProductResult;