import React, {useState} from 'react';
import {Link} from "react-router-dom";
import S from "./style"
import { StarRating } from '../../../context/starContext';
import HeartBtn from '../store/HeartBtn';
import {Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import ProductDetail from "./ProductDetail";
import ProductReview from "./ProductReview";
import ProductRefundPolicy from "./ProductRefundPolicy";
import ProductDelivery from "./ProductDelivery";


// 더미데이터 확인용

const ProductContainer = () => {
const [chosenProduct] = [
    {
        id : 1,
        productCategory : "헬스케어",
        productName : "강아지 전용 치약 + 칫솔 기획 세트 (트레이 / 칫솔핸들러 포함)",
        productPrice : 11_900,
        productImage1 : "/assets/images/store/dental-dog.png",
        productImage2 : "/assets/images/store/dental-dog.png",
        productImage3 : "/assets/images/store/dental-dog.png",
        productImage4 : "/assets/images/store/dental-dog.png",
        productColor : "Orange",
        productSize : "M",
        productStock : 100,
        productDate : "2023-01-03",
        reviewStar : 4.5,
        productCode : "11111111",
        couponDiscountRate : "50%",
        deliveryFee : 3000,
        deliveryFeeKind : "무료",
        deliveryHow : "일반택배배송",
        deliveryPayWhen : "선결제",
        deliveryCompany : "우체국 택배"
    }
];

const productList = [
    {
        id : 2,
        productCategory : "헬스케어",
        productName : "덴탈케어 분말형",
        productPrice : 5_900,
        productImage1 : "/assets/images/store/product2.png",
        productImage2 : "/assets/images/store/product2.png",
        productImage3 : "/assets/images/store/product2.png",
        productImage4 : "/assets/images/store/product2.png",
        productColor : "Gold",
        productSize : "S",
        productStock : 200,
        productDate : "2023-05-03",
        reviewStar : 4.5,
        productCode : "11111111"
    },
    {
        id : 3,
        productCategory : "사료",
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 6_500,
        productImage1 : "/assets/images/store/product3.png",
        productImage2 : "/assets/images/store/product3.png",
        productImage3 : "/assets/images/store/product3.png",
        productImage4 : "/assets/images/store/product3.png",
        productColor : "Gradation",
        productSize : "M",
        productStock: 300,
        productDate : "2023-07-03",
        reviewStar : 4.5,
        productCode : "11111111"
    },
    {
        id : 4,
        productCategory : "간식",
        productName : "동결건조 치킨) 어린 견종을 위한 건강 간식 85g ,1통",
        productPrice : 4_000,
        productImage1 : "/assets/images/store/product4.png",
        productImage2 : "/assets/images/store/product4.png",
        productImage3 : "/assets/images/store/product4.png",
        productImage4 : "/assets/images/store/product4.png",
        productColor : "Dark Purple",
        productSize : "L",
        productStock : 50,
        productDate : "2023-03-03",
        reviewStar : 4.5,
        productCode : "11111111"
    },
    {
        id : 5,
        productCategory : "간식",
        productName : "저염 황태채",
        productPrice : 12_900,
        productImage1 : "/assets/images/store/product5.png",
        productImage2 : "/assets/images/store/product5.png",
        productImage3 : "/assets/images/store/product5.png",
        productImage4 : "/assets/images/store/product5.png",
        productColor : "Light Purple",
        productSize : "L",
        productStock : 600,
        productDate : "2023-07-03",
        reviewStar : 4.5,
        productCode : "11111111"
    },
    {
        id : 6,
        productCategory : "헬스케어",
        productName : "미네랄 분무기형 소독제품 (리필 2팩 포함)",
        productPrice : 14_000,
        productImage1 : "/assets/images/store/product6.png",
        productImage2 : "/assets/images/store/product6.png",
        productImage3 : "/assets/images/store/product6.png",
        productImage4 : "/assets/images/store/product6.png",
        productColor : "Gold",
        productSize : "S",
        productStock : 100,
        productDate : "2023-01-03",
        reviewStar : 4.5,
        productCode : "11111111"
    },
    {
        id : 7,
        productCategory : "사료",
        productName : "스피루리나 구강 건강 도움 (메디몰) 고체형 100g",
        productPrice : 7_900,
        productImage1 : "/assets/images/store/dental-dog.png",
        productImage2 : "/assets/images/store/dental-dog.png",
        productImage3 : "/assets/images/store/dental-dog.png",
        productImage4 : "/assets/images/store/dental-dog.png",
        productColor : "Orange",
        productSize : "M",
        productStock : 130,
        productDate : "2023-01-07",
        reviewStar : 4.5,
        productCode : "11111111"
    },
    {
        id : 8,
        productCategory : "사료",
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 8_000,
        productImage1 : "/assets/images/store/product2.png",
        productImage2 : "/assets/images/store/product2.png",
        productImage3 : "/assets/images/store/product2.png",
        productImage4 : "/assets/images/store/product2.png",
        productColor : "Gradation",
        productSize : "L",
        productStock : 170,
        productDate : "2023-09-03",
        reviewStar : 4.5,
        productCode : "11111111"
    },
];

    const discountRate = parseInt(chosenProduct.couponDiscountRate) / 100; // "10%" → 0.1
    const discountedPrice = chosenProduct.productPrice * (1 - discountRate);



        // 일단 1개 담아놓ㄱ;
        const [count, setCount] = useState(1);

        // 개수 -하기
        const handleMinus = () => {
            setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
        };

        // 개수 +하기
        const handlePlus = () => {
            setCount((prevCount) => prevCount + 1);
        };



    const products = productList.map(({ id, productName, productPrice, productImage1 }, i) => (
        <S.Product key={i}>
                <S.ProductImageWrap>
                    <HeartBtn/>
            <Link to={`/product/${id}`}>
                    <img src={productImage1} alt={"상품" + (i + 1)} />
            </Link>
                </S.ProductImageWrap>
                <S.ProductInfo>
                    <Link to={`/product/${id}`}>
                    <S.ProductCalled>{productName}</S.ProductCalled>
                    </Link>
                    <S.ProductPrice>{productPrice} 원</S.ProductPrice>
                </S.ProductInfo>
            <button>담기</button>
        </S.Product>
    ));

    const [activeTab, setActiveTab] = useState('info');

    const renderTabContent = () => {
        switch(activeTab) {
            case 'info':
                return <ProductDetail />;
            case 'review':
                return <ProductReview />;
            case 'delivery':
                return <ProductDelivery />;
            case 'change':
                return <ProductRefundPolicy />;
            default:
                return <ProductRefundPolicy />;
        }
    };

    return (
        <div>
            <div className="body-container">
                <S.BodyWrap>
                    <S.ProductInfoLeft>
                        <S.MainImg src={chosenProduct.productImage1 || ''} alt="Main Product Image"/>
                        <S.SubImgWrap>
                            <img src={chosenProduct.productImage2} alt="Sub1"/>
                            <img src={chosenProduct.productImage3} alt="Sub2"/>
                            <img src={chosenProduct.productImage4} alt="Sub3"/>
                        </S.SubImgWrap>
                        <S.InfoSeller>
                            <p>상품코드 : {chosenProduct.productCode} | 원산지 : 상품설명 참조</p>
                        </S.InfoSeller>
                    </S.ProductInfoLeft>

                    <S.ProductInfoRight>
                        <S.star>
                            <StarRating rating={chosenProduct.reviewStar} size={24}/>
                            <span>| 리뷰 301 개</span>
                        </S.star>

                        <S.IconsWrap>
                            <HeartBtn/>
                        </S.IconsWrap>

                        <S.ProductName>{chosenProduct.productName}</S.ProductName>

                        <S.Coupon>쿠폰 적용가</S.Coupon>

                        <S.ProductPriceWrap>
                            <S.Percent>{chosenProduct.couponDiscountRate}</S.Percent>
                            <S.RealPrice>{Math.floor(discountedPrice)} 원</S.RealPrice>
                            <S.Price>{chosenProduct.productPrice} 원</S.Price>
                        </S.ProductPriceWrap>
                        <S.PriceCheck>
                            <S.TagWrap>
                                <p>배송정보</p>
                            </S.TagWrap>
                            <S.InfoWrap>
                                <S.DeliveryInfo>
                                    <p>{chosenProduct.deliveryCompany}</p>
                                    <p>배송비 : {chosenProduct.deliveryFee}원</p>
                                    <p>10/01(화) 도착예정</p>
                                </S.DeliveryInfo>
                            </S.InfoWrap>
                        </S.PriceCheck>
                        <S.ProductBox>
                            <S.ProductName>{chosenProduct.productName}</S.ProductName>
                            <S.Box>
                                <S.Select>
                                    <S.BtnMinus type="button" onClick={handleMinus}>-</S.BtnMinus>
                                    <input value={count} name="countProduct"/>
                                    <S.BtnPlus type="button" onClick={handlePlus}>+</S.BtnPlus>
                                </ S.Select>
                                <S.Stock>재고 현황 : {chosenProduct.productStock}개</S.Stock>
                                <S.PriceIs>{chosenProduct.productPrice} 원</S.PriceIs>
                            </S.Box >
                        </S.ProductBox>

                        <S.ButtonContainer>
                            <Link to="/product/cart"><S.CheckButton type="button">장바구니</S.CheckButton></Link>
                            <Link to="/pay"><S.PaymentButton>바로구매</S.PaymentButton></Link>
                        </S.ButtonContainer>
                    </S.ProductInfoRight>
                </S.BodyWrap>
                    <S.Together>함께보면 좋은 상품</S.Together>
                    <S.ProductWrap>
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={24}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                            style={{
                                paddingBottom: '30px',
                                '--swiper-pagination-bottom': '0px',
                                '--swiper-pagination-color': '#131313',
                                '--swiper-pagination-bullet-inactive-color': '#888888'
                            }}>
                            {products.map((product, i) => (
                                <SwiperSlide  key={i}>
                                    <S.SwiperDirection>
                                    {product}
                                    </S.SwiperDirection>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </S.ProductWrap>
            </div>
            <S.Container3>
                <S.InfoWrap>
                    <S.TabWrap>
                        <button className={`info-btn ${activeTab === 'info' ? 'active' : ''}`} onClick={() => setActiveTab('info')}>상품정보</button>
                        <button className={`review-btn ${activeTab === 'review' ? 'active' : ''}`} onClick={() => setActiveTab('review')}>상품평</button>
                        <button className={`delivery-btn ${activeTab === 'delivery' ? 'active' : ''}`} onClick={() => setActiveTab('delivery')}>주문/배송안내</button>
                        <button className={`refund-btn ${activeTab === 'refund' ? 'active' : ''}`} onClick={() => setActiveTab('refund')}>교환/반품안내</button>
                    </S.TabWrap>
                    {renderTabContent()}
                </S.InfoWrap>
            </S.Container3>
        </div>
    );
};

export default ProductContainer;