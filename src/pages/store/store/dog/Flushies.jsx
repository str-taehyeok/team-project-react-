import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../../../context/productContext';
import HeartBtn from '../../../community/community/HeartBtn';
import S from './style';
import {Grid, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import {Swiper, SwiperSlide} from "swiper/react";

const Flushies = () => {
    const { productState } = useContext(ProductContext);
    const { products } = productState;

    // 장난감만
    const [filteredProducts, setFilteredProducts] = useState([]);
 
    useEffect(() => {
        if (products && products.length > 0) {
            const filtered = products.filter((product) => product.productCategory === "장난감");
            setFilteredProducts(filtered);
        }
    }, [products]); 

    const AllProducts = filteredProducts.map(({
        id, productName, productFileName, productPrice, productRealPrice, productDiscount
    }) => (
        <S.ProductWrap key={id}>
            <SwiperSlide key={id}>
                <S.imageWrap>
                    <HeartBtn className="heart" id={id} type={"product"} />
                    <img className='thumb' src={`${process.env.PUBLIC_URL}/assets/images/products/${productFileName}`} alt="" />
                </S.imageWrap>
                <div className='title-wrap'>
                    <S.ProductTitle>{productName}</S.ProductTitle>
                    <S.ProductPriceWrap>
                        { productDiscount === 0 ? (
                            <span>{productPrice}</span>
                        ) : (
                            <>
                                <span className='discount'>{productDiscount}%</span>
                                {/* <span>{productRealPrice}</span> */}
                                <span>{productPrice.toLocaleString('ko-KR')} 원</span>
                            </>
                        ) }
                    </S.ProductPriceWrap>
                </div>
                <S.ButtonWrap >
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/images/layout/shopping_cart_icon.png`}
                        alt="장바구니아이콘"
                    />
                    <p>담기</p>
                </S.ButtonWrap>
            </SwiperSlide>
        </S.ProductWrap>
    ))

    const bestProducts = filteredProducts.sort((a, b) => a.reviewStar - b.reviewStar).map(({
        id, productName, productFileName, productPrice, productRealPrice, productDiscount
    }) => (
        <S.ProductWrap key={id}>
            <SwiperSlide key={id}>
                <S.imageWrap>
                    <HeartBtn className="heart" id={id} type={"product"} />
                    <img className='thumb' src={`${process.env.PUBLIC_URL}/assets/images/products/${productFileName}`} alt="" />
                </S.imageWrap>
                <div className='title-wrap'>
                    <S.ProductTitle>{productName}</S.ProductTitle>
                    <S.ProductPriceWrap>
                        { productDiscount === 0 ? (
                            <span>{productPrice}</span>
                        ) : (
                            <>
                                <span className='discount'>{productDiscount}%</span>
                                {/* <span>{productRealPrice}</span> */}
                                <span>{productPrice.toLocaleString('ko-KR')} 원</span>
                            </>
                        ) }
                    </S.ProductPriceWrap>
                </div>
                <S.ButtonWrap >
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/images/layout/shopping_cart_icon.png`}
                        alt="장바구니아이콘"
                    />
                    <p>담기</p>
                </S.ButtonWrap>
            </SwiperSlide>
        </S.ProductWrap>
    ))

    return (
        <>
          <S.ProductWraper>
            <Swiper
                slidesPerView={4}
                grid={{ rows: 2 }}
                spaceBetween={30}
                pagination={{ clickable: true }}
                modules={[Grid, Pagination]}
                className="mySwiper"
            >
                    {AllProducts}
                </Swiper>
            </S.ProductWraper>
            <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    modules={[Grid, Pagination]}
                    className="mySwiper"
                >
                {bestProducts}
            </Swiper>
        </>
    );
};

export default Flushies;
