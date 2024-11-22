import React from 'react';

const StoreDog = () => {
    return (
        <div>
            <h1>header</h1>
            <div id="content">
                <img src="/assets/images/dog-banner.png" alt="dog banner" />
                <div className="categories-wrap">
                    <div className="category"><a href="#"><img src="/assets/images/flushies-dog.png" alt="" /></a><span>장난감</span></div>
                    <div className="category"><a href="#"><img src="/assets/images/treats-dog.png" alt="" /></a><span>간식/사료</span></div>
                    <div className="category"><a href="#"><img src="/assets/images/clothes-dog.png" alt="" /></a><span>펫웨어</span></div>
                    <div className="category"><a href="#"><img src="/assets/images/healthcare-dog.png" alt="" /></a><span>헬스케어</span></div>
                </div>
                <div className="color-products">
                    <div className="box">
                        <span className="box-title">강아지 컬러 추천 상품</span>
                        <button type="button">색상</button>
                        <button type="button">가격</button>
                        <button type="button">사이즈</button>
                        <button type="button">정렬</button>
                    </div>
                </div>
                <div className="product-container">
                    <div className="product-wrap">
                        <div className="product">
                            <img className="like" src="/assets/default-heart.png" alt="좋아요" />
                            <img src="/assets/images/dental-dog.png" alt="상품1" />
                            <span>피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개</span>
                            <span style={{ fontWeight: 700 }}>9,900원</span>
                            <button>담기</button>
                        </div>
                        <div className="product">
                            <img src="/assets/images/dental-dog.png" alt="상품1" />
                            <span>피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개</span>
                            <span style={{ fontWeight: 700 }}>9,900원</span>
                            <button>담기</button>
                        </div>
                        <div className="product">
                            <img src="/assets/images/dental-dog.png" alt="상품1" />
                            <span>피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개</span>
                            <span style={{ fontWeight: 700 }}>9,900원</span>
                            <button>담기</button>
                        </div>
                        <div className="product">
                            <img src="/assets/images/dental-dog.png" alt="상품1" />
                            <span>피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개</span>
                            <span style={{ fontWeight: 700 }}>9,900원</span>
                            <button>담기</button>
                        </div>
                    </div>
                    <div className="product-wrap2">
                        <div className="product">
                            <img src="/assets/images/dental-dog.png" alt="상품1" />
                            <span>피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개</span>
                            <span style={{ fontWeight: 700 }}>9,900원</span>
                            <button>담기</button>
                        </div>
                        <div className="product">
                            <img src="/assets/images/dental-dog.png" alt="상품1" />
                            <span>피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개</span>
                            <span style={{ fontWeight: 700 }}>9,900원</span>
                            <button>담기</button>
                        </div>
                        <div className="product">
                            <img src="/assets/images/dental-dog.png" alt="상품1" />
                            <span>피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개</span>
                            <span>9,900원</span>
                            <button>담기</button>
                        </div>
                        <div className="product">
                            <img src="/assets/images/dental-dog.png" alt="상품1" />
                            <span>피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개</span>
                            <span style={{ fontWeight: 700 }}>9,900원</span>
                            <button>담기</button>
                        </div>
                    </div>
                </div>
                <div className="best-products">
                    <div className="box">
                        <span className="box-title">강아지 BEST 상품</span>
                    </div>
                    <div className="product-container">
                        <div className="best-product-wrap">
                            <div className="best-product">
                                <img src="/assets/images/dental-dog.png" alt="상품1" />
                                <span>피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개</span>
                                <span style={{ fontWeight: 700 }}>9,900원</span>
                                <button>담기</button>
                            </div>
                            <div className="best-product">
                                <img src="/assets/images/dental-dog.png" alt="상품1" />
                                <span>피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개</span>
                                <span style={{ fontWeight: 700 }}>9,900원</span>
                                <button>담기</button>
                            </div>
                            <div className="best-product">
                                <img src="/assets/images/dental-dog.png" alt="상품1" />
                                <span>피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개</span>
                                <span style={{ fontWeight: 700 }}>9,900원</span>
                                <button>담기</button>
                            </div>
                            <div className="best-product">
                                <img src="/assets/images/dental-dog.png" alt="상품1" />
                                <span>피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개</span>
                                <span style={{ fontWeight: 700 }}>9,900원</span>
                                <button>담기</button>
                            </div>
                            <div className="best-product">
                                <img src="/assets/images/dental-dog.png" alt="상품1" />
                                <span>피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개</span>
                                <span style={{ fontWeight: 700 }}>9,900원</span>
                                <button>담기</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="special-price">
                    <div className="box">
                        <span className="box-title">강아지 특가 상품</span>
                    </div>
                    <div className="special-price-container">
                        <div className="special-price-main">
                            <img src="/assets/images/dental-dog.png" alt="상품1" />
                            <span>피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개</span>
                            <span style={{ fontWeight: 700 }}>
                                <p style={{ color: "#C83F3F" }}>55%&nbsp;</p>9,900원
                            </span>
                            <button>담기</button>
                        </div>
                        <div className="special-price-product-wrap">
                            <div className="special-price-product">
                                <img src="/assets/images/dental-dog.png" alt="상품1" />
                                <span>피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개</span>
                                <span style={{ fontWeight: 700 }}>9,900원</span>
                                <button>담기</button>
                            </div>
                            <div className="special-price-product">
                                <img src="/assets/images/dental-dog.png" alt="상품1" />
                                <span>피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개</span>
                                <span style={{ fontWeight: 700 }}>9,900원</span>
                                <button>담기</button>
                            </div>
                        </div>
                        <div className="special-price-product-wrap">
                            <div className="special-price-product">
                                <img src="/assets/images/dental-dog.png" alt="상품1" />
                                <span>피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개</span>
                                <span style={{ fontWeight: 700 }}>9,900원</span>
                                <button>담기</button>
                            </div>
                            <div className="special-price-product">
                                <img src="/assets/images/dental-dog.png" alt="상품1" />
                                <span>피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개</span>
                                <span style={{ fontWeight: 700 }}>9,900원</span>
                                <button>담기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreDog;
