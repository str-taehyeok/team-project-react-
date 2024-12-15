import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import S from "./style";
import { StarRating } from '../../../context/starContext';
import HeartBtn from '../store/HeartBtn';
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import ProductDetail from "./ProductDetail";
import ProductReview from "./ProductReview";
import ProductRefundPolicy from "./ProductRefundPolicy";
import ProductDelivery from "./ProductDelivery";

const ProductContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [productList, setProductList] = useState([]);
        const [delivery, setDelivery] = useState({});
    // const navigate = useNavigate();

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`http://localhost:10000/products/product`);
            const data = await response.json();
            console.log(data)
            setProduct(data);
        };


            const getDelivery = async () => {
                const response = await fetch(`http://localhost:10000/deliveries/seller-product/${id}`);
                const data = await response.json();
                console.log(data)

                setDelivery(data);
            };


        // 함께보면 좋은 상품 목록
        const getProductList = async () => {
            const response = await fetch('http://localhost:10000/products/products');
            const data = await response.json();
            console.log(data)

            setProductList(data);
        };

        getProduct();
        getProductList();
        getDelivery();
    }, [id]);


    const [count, setCount] = useState(1);

    // 개수 - 하기
    const handleMinus = () => {
        setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
    };

    // 개수 + 하기
    const handlePlus = () => {
        setCount((prevCount) => prevCount + 1);
    };

    // 다른 제품들을 보여주는 부분
    const products = productList.map(({ id, productName, productPrice, productImage1 }, i) => (
        <S.Product key={i}>
            <S.ProductImageWrap>
                <HeartBtn />
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
        switch (activeTab) {
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
                        <S.MainImg src={product.productImage1 || ''} alt="Main Product Image" />
                        <S.SubImgWrap>
                            <img src={product.productImage2} alt="Sub1" />
                            <img src={product.productImage3} alt="Sub2" />
                            <img src={product.productImage4} alt="Sub3" />
                        </S.SubImgWrap>
                        <S.InfoSeller>
                            <p>상품코드 : {product.productCode} | 원산지 : 상품설명 참조</p>
                        </S.InfoSeller>
                    </S.ProductInfoLeft>

                    <S.ProductInfoRight>
                        <S.star>
                            <StarRating rating={product.reviewStar} size={24} />
                            <span>| 리뷰 301 개</span>
                        </S.star>

                        <S.IconsWrap>
                            <HeartBtn />
                        </S.IconsWrap>

                        <S.ProductName>{product.productName}</S.ProductName>

                        <S.Coupon>할인가</S.Coupon>

                        <S.ProductPriceWrap>
                            <S.Percent>{product.productDiscount}</S.Percent>
                            <S.RealPrice>{product.productPrice} 원</S.RealPrice>
                            <S.Price>{product.productRealPrice} 원</S.Price>
                        </S.ProductPriceWrap>
                        <S.PriceCheck>
                            <S.TagWrap>
                                <p>배송정보</p>
                            </S.TagWrap>
                            <S.InfoWrap>
                                <S.DeliveryInfo>
                                    <p>{delivery.deliveryCompany}</p>
                                    <p>배송비 : {delivery.deliveryFee}원</p>
                                    <p>10/01(화) 도착예정</p>
                                </S.DeliveryInfo>
                            </S.InfoWrap>
                        </S.PriceCheck>
                        <S.ProductBox>
                            <S.ProductName>{product.productName}</S.ProductName>
                            <S.Box>
                                <S.Select>
                                    <S.BtnMinus type="button" onClick={handleMinus}>-</S.BtnMinus>
                                    <input value={count} name="countProduct" />
                                    <S.BtnPlus type="button" onClick={handlePlus}>+</S.BtnPlus>
                                </S.Select>
                                <S.Stock>재고 현황 : {product.productStock}개</S.Stock>
                                <S.PriceIs>{product.productPrice} 원</S.PriceIs>
                            </S.Box>
                        </S.ProductBox>

                        <S.ButtonContainer>
                            <Link to="/cart"><S.CheckButton type="button">장바구니</S.CheckButton></Link>
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
                            <SwiperSlide key={i}>
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
