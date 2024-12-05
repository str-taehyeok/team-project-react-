import React from 'react';
import {Link, Outlet} from "react-router-dom";


// 더미데이터 확인용

const productList = [
    {
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


const products = productList.map(({productName, productPrice, productImage1}, i) => (
    // <S.BestProduct key={i} >
    //     <Link to={"/product"}>
    //         <img src={src} alt={"상품" + (i + 1)} />
    //         <span>{productName}</span>
    //     </Link>
    //     <span style={{ fontWeight: 700 }}>{productPrice}<br/>원</span>
    //     <button>담기</button>
    // </S.BestProduct>
<div key={i} >
        <Link to={"/product"}>
            <img src={productImage1} alt={"상품" + (i + 1)} />
            <span>{productName}</span>
        </Link>
        <span style={{ fontWeight: 700 }}>{productPrice}<br/>원</span>
        <button>담기</button>
    </div>
))

const ProductContainer = () => {
    return (
        <div>
            product container
            <h1>{products}</h1>
            {/*<div className="body-container">*/}
            {/*    <form action="../order/order-buyerlist.order">*/}
            {/*        <div className="body-wrap">*/}
            {/*            <div className="product-info-left">*/}
            {/*                <img id=main-img src="/powpow/assets/images/product/${product.productImage}"/>*/}
            {/*                <div className="sub-img-wrap">*/}
            {/*                    <img src="/powpow/assets/images/product/${product.productSubImage1}"/>*/}
            {/*                    <img src="/powpow/assets/images/product/${product.productSubImage2}"/>*/}
            {/*                    <img src="/powpow/assets/images/product/${product.productSubImage3}"/>*/}
            {/*                </div>*/}
            {/*                <div className="info-seller">*/}
            {/*                    <p className="h6">상품코드 : 51563545 | 원산지 : 상품설명 참조</p>*/}
            {/*                    <button>포포></button>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="product-info-right">*/}
            {/*                <p id="star">☆☆☆☆☆ | 301 + ></p>*/}
            {/*                <div className="icons-wrap">*/}
            {/*                    <img src="./images/heart2.png"/>*/}
            {/*                    <img src="./images/share.png"/>*/}
            {/*                </div>*/}
            {/*                <p className="product-name h2">오쥬 바이 로우즈 독 치킨가슴살&amp;호박 파우치 강아지 간식,69g (유통기한*/}
            {/*                    2025-02-25까지)</p>*/}
            {/*                <p className="coupon h3">쿠폰 적용가</p>*/}
            {/*                <div className="product-price-wrap">*/}
            {/*                    <p className="percent h2">10%</p> <p className="real-price h2">4,050원</p> <p*/}
            {/*                    className="price h4 gray500">4500원</p>*/}
            {/*                </div>*/}
            {/*                <div className="price-check">*/}
            {/*                    <div className="tag-wrap">*/}
            {/*                        <p className="tag1 h5">배송정보</p>*/}
            {/*                        <p className="tag2 h5">결제혜택</p>*/}
            {/*                        <p className="tag3 h5">카드혜택</p>*/}
            {/*                    </div>*/}
            {/*                    <div className="info-wrap">*/}
            {/*                        <div className="delivery-info">*/}
            {/*                            <p>cj대한통운</p>*/}
            {/*                            <p>2500원 (30,000원 이상 무료)</p>*/}
            {/*                            <p>10/01(화) 도착예정</p>*/}
            {/*                        </div>*/}
            {/*                        <div className="sector"></div>*/}
            {/*                        <div className="info-middle h6">*/}
            {/*                            <p>토스페이 3만원 이상 결제 시 최대 2만원 즉시할인</p>*/}
            {/*                            <p>네이버페이 2,000원 포인트 적립</p>*/}
            {/*                        </div>*/}
            {/*                        <p>무이자 할부 안내</p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="product-box">*/}
            {/*                    <p className="h4">오쥬 바이 로우즈 독 치킨가슴살&amp;호박 파우치 강아지 간식,69g (유통기한 2025-02-25까지)</p>*/}
            {/*                    <div className="box-bottom">*/}
            {/*                        <div className="quantity-control">*/}
            {/*                            <span><button type="button" className="btn-minus">-</button></span>*/}
            {/*                            <input type="hidden" value="${product.id}" name="productId"/>*/}
            {/*                            <input id="result1" value="1" name="quantity" className="quantity-input"/>*/}
            {/*                            <span><button type="button" className="btn-plus">+</button></span>*/}
            {/*                        </div>*/}
            {/*                        <p className="h6 gray500">남은 수량:32개</p> <p className="h4">4,050원</p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="button-container h5">*/}
            {/*                    <button type="button" className="check-button">장바구니</button>*/}
            {/*                    <button className="payment-button">바로구매</button>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*    </form>*/}
            {/*    <p className="together h4">함께보면 좋은 상품</p>*/}
            {/*    <div className="button-wrap">*/}
            {/*        <p>1/2</p>*/}
            {/*        <button>&lt;</button>*/}
            {/*        <button> &gt;</button>*/}
            {/*    </div>*/}
            {/*    <div className="product-wrap">*/}
            {/*        <div className="product">*/}
            {/*            <div className="product-image-wrap">*/}
            {/*                <img src="./images/not-found.png"/>*/}
            {/*                <div className="hover-box">*/}
            {/*                    <div className=hover-box-new>*/}
            {/*                        <a className="hover-new" href="#">*/}
            {/*                            <img src="./images/new.png"/>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                    <div className=hover-box-cart>*/}
            {/*                        <a className="hover-cart" href="#">*/}
            {/*                            <img src="./images/cart.png"/>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                    <div className=hover-box-heart>*/}
            {/*                        <a className="hover-heart" href="#">*/}
            {/*                            <img src="./images/heart.png"/>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="product-info">*/}
            {/*                <p id="product-name">아카나 독 레시피, 2kg</p>*/}
            {/*                <p id="product-price">25,200원</p>*/}
            {/*                <div className="product-star">*/}
            {/*                    <p id="product-star">★★★★★</p><p id="product-star-count">(25)</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="product">*/}
            {/*            <div className="product-image-wrap">*/}
            {/*                <img src="./images/not-found.png"/>*/}
            {/*                <div className="hover-box">*/}
            {/*                    <div className=hover-box-new>*/}
            {/*                        <a className="hover-new" href="#">*/}
            {/*                            <img src="./images/new.png"/>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                    <div className=hover-box-cart>*/}
            {/*                        <a className="hover-cart" href="#">*/}
            {/*                            <img src="./images/cart.png"/>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                    <div className=hover-box-heart>*/}
            {/*                        <a className="hover-heart" href="#">*/}
            {/*                            <img src="./images/heart.png"/>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="product-info">*/}
            {/*                <p id="product-name">아카나 독 레시피, 2kg</p>*/}
            {/*                <p id="product-price">25,200원</p>*/}
            {/*                <div className="product-star">*/}
            {/*                    <p id="product-star">★★★★★</p><p id="product-star-count">(25)</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="product">*/}
            {/*            <div className="product-image-wrap">*/}
            {/*                <img src="./images/not-found.png"/>*/}
            {/*                <div className="hover-box">*/}
            {/*                    <div className=hover-box-new>*/}
            {/*                        <a className="hover-new" href="#">*/}
            {/*                            <img src="./images/new.png"/>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                    <div className=hover-box-cart>*/}
            {/*                        <a className="hover-cart" href="#">*/}
            {/*                            <img src="./images/cart.png"/>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                    <div className=hover-box-heart>*/}
            {/*                        <a className="hover-heart" href="#">*/}
            {/*                            <img src="./images/heart.png"/>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="product-info">*/}
            {/*                <p id="product-name">아카나 독 레시피, 2kg</p>*/}
            {/*                <p id="product-price">25,200원</p>*/}
            {/*                <div className="product-star">*/}
            {/*                    <p id="product-star">★★★★★</p><p id="product-star-count">(25)</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="product">*/}
            {/*            <div className="product-image-wrap">*/}
            {/*                <img src="./images/not-found.png"/>*/}
            {/*                <div className="hover-box">*/}
            {/*                    <div className=hover-box-new>*/}
            {/*                        <a className="hover-new" href="#">*/}
            {/*                            <img src="./images/new.png"/>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                    <div className=hover-box-cart>*/}
            {/*                        <a className="hover-cart" href="#">*/}
            {/*                            <img src="./images/cart.png"/>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                    <div className=hover-box-heart>*/}
            {/*                        <a className="hover-heart" href="#">*/}
            {/*                            <img src="./images/heart.png"/>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="product-info">*/}
            {/*                <p id="product-name">아카나 독 레시피, 2kg</p>*/}
            {/*                <p id="product-price">25,200원</p>*/}
            {/*                <div className="product-star">*/}
            {/*                    <p id="product-star">★★★★★</p><p id="product-star-count">(25)</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            <Outlet />
        </div>
    );
};

export default ProductContainer;