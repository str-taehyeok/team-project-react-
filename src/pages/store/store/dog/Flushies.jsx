import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../../../context/productContext';
import HeartBtn from '../../../community/community/HeartBtn';
import S from './style';
import {Grid, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import {Swiper, SwiperSlide} from "swiper/react";
import theme from '../../../../global/theme';

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


    // 카테고리
    // 해당 모달창을 나오게 하기
    const [isActive, setIsActive] = useState(10);
    const onClickToActive = (i) => {
        if(i === isActive) {
        setIsActive(10)
        }else{
        setIsActive(i)
        }
    }

    // 커스텀 모달 부분 데이터
    const sortInfo = [
        { 
        title : "색상",
        sortOrder : ["Orange", "LightGold", "Gradation", "LightPurple", "DeepPurple"],
        sub : [
            `${theme.PALETTE.petsonal["orange"]}`,
            `${theme.PALETTE.petsonal["lightGold"]}`,
            `${theme.PALETTE.petsonal["gradation"]}`,
            `${theme.PALETTE.petsonal["lightPurple"]}`,
            `${theme.PALETTE.petsonal["deepPurple"]}`
        ]
        },
        {
        title : "가격",
        sortOrder : ["ASC", "DESC"],
        sub : ["낮은 가격순", "높은 가격순"]
        },
        {
        title : "사이즈",
        sortOrder : ["S", "M", "L"],
        sub : ["S", "M", "L"]
        },
        {
        title : "정렬",
        sortOrder : ["LATEST", "START", "COUNT"],
        sub : ["최신 등록순", "별점순", "판매순"]
        }
    ]

    // 정렬 그룹 만들기
    const [ productSort, setProductSort ] = useState({ color : 10, price : 10, size : 10, sort : 10 });
    const [ sortedProduct, setSortedProduct ] = useState(products);

    // 초기화 함수
    const onClickToReset = () => {
    }

    // 정렬함수
    const onChangeToSort = (e, index) => {
        console.log(index)
    }



    // 상품 
    const AllProducts = filteredProducts.slice(4, 32).map(({
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

    const bestProducts = filteredProducts.sort((a, b) => a.reviewStar - b.reviewStar).slice(36, 50).map(({
        id, productName, productFileName, productPrice, productRealPrice, productDiscount
    }) => (
        <S.ProductWrap key={id}>
            <SwiperSlide key={id}>
                <S.imageWrap className='small'>
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


    const SpecialBigProduct= filteredProducts.slice(40, 41).map(({
        id, productName, productFileName, productPrice, productRealPrice, productDiscount
    }) => (
        <S.ProductWrap key={id} className='item big'>
            <S.imageWrap className='image-wrap'>
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
        </S.ProductWrap>
    ))

    const SpecialProducts = filteredProducts.slice(42, 48).map(({
        id, productName, productFileName, productPrice, productRealPrice, productDiscount
    }) => (
        <S.ProductWrap key={id} className='item'>
            <S.imageWrap className='image-wrap'>
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
        </S.ProductWrap>
    ))

    const recommendProducts = filteredProducts.slice(50, 58).map(({
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
            <S.MainTextWrap>
                <S.MainTitle>강아지 컬러 추천 상품</S.MainTitle>
                <S.SortButtonWrapper>
                {
                    sortInfo.map((sortInfo, index) => (
                    <div key={index}>
                        <S.SortButtonWrap  onClick={() => onClickToActive(index)}>
                        <p>{sortInfo.title}</p><img src={`${process.env.PUBLIC_URL}/assets/images/store/down-arrow.svg`} alt='아래 아이콘'/>
                        </S.SortButtonWrap>
                        <S.SortModal className={isActive === index ? "active" : ""}>
                        {sortInfo.sub.map((subTitle, i) => (
                            <div key={i}>
                            <input 
                                value={i} type='checkbox' name={"sort" + index} 
                                checked={ 
                                    index === 0 ? productSort["color"] === i : 
                                    index === 1 ? productSort["price"] === i : 
                                        index === 2 ? productSort["size"] === i : 
                                        productSort["sort"] === i 
                                }
                                onChange={(e) => { onChangeToSort(e, sortInfo.sortOrder[i]) }}
                            />
                            { index === 0 ? <S.ColorCircle subtitle={subTitle}></S.ColorCircle> : <p>{subTitle}</p>}
                            </div>
                        ))}
                        </S.SortModal>
                    </div>
                    ))
                }
                <S.SortButtonWrap onClick={onClickToReset}>
                        <p>초기화</p>
                    </S.SortButtonWrap>
                </S.SortButtonWrapper>
            </S.MainTextWrap>
            
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

            <S.MainTextWrap>
                <S.MainTitle>강아지 BEST 상품</S.MainTitle>
            </S.MainTextWrap>
            <S.BestProductWraper>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {bestProducts}
                </Swiper>
            </S.BestProductWraper>

            <S.MainTextWrap>
                <S.MainTitle>강아지 특가 상품</S.MainTitle>
            </S.MainTextWrap>
            <S.SpecialLayout>
                {SpecialBigProduct}
                <S.SpecialProductWraper>
                    {SpecialProducts}
                </S.SpecialProductWraper>
            </S.SpecialLayout>

            <S.MainTextWrap>
                <S.MainTitle>강아지 컬러 추천 상품</S.MainTitle>
            </S.MainTextWrap>
            <S.ProductWraper>
                {recommendProducts}
            </S.ProductWraper>
        </>
    );
};

export default Flushies;
