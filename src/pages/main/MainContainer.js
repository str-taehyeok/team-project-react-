import React, { useState, useEffect } from 'react';
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import S from './style';

const Main = () => {
  const [currentSlide, setCurrentSlide] = useState(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 2000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div>
      <Header />
      
      <S.Container>
        <S.Slider>
          <S.Slides style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            <S.Slide>
              <img src={`${process.env.PUBLIC_URL}/assets/images/layout/banner1-final.png`} alt="메인배너1" />
            </S.Slide>
            <S.Slide>
              <img src={`${process.env.PUBLIC_URL}/assets/images/layout/banner2-final.png`} alt="메인배너2" />
            </S.Slide>
            <S.Slide>
              <img src={`${process.env.PUBLIC_URL}/assets/images/layout/banner3-final.png`} alt="메인배너3" />
            </S.Slide>
          </S.Slides>
          
          <S.Navigation>
            <span className="Dot" onClick={() => setCurrentSlide(0)}></span>
            <span className="Dot" onClick={() => setCurrentSlide(1)}></span>
            <span className="Dot" onClick={() => setCurrentSlide(2)}></span>
          </S.Navigation>
        </S.Slider>

        {/* 핫한 상품 이미지 */}
        <S.HotProduct>
          <h2>지금 제일 인기 있는 상품이에요.</h2>
          <S.HotImages>
            <S.Slides>
              {[ 
                { src: "dentalgum1.png", coupon: "강아지 인기" },
                { src: "shampoo3.png", coupon: "고양이 특가" }
              ].map((item, index) => (
                <S.ImageAndCart key={index}>
                  <S.HotImage>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/layout/${item.src}`} alt={`상품-${index + 1}`} />
                    <S.Coupon>{item.coupon}</S.Coupon>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/layout/heart_icon.png`} alt="하트" />
                  </S.HotImage>
                  <S.Cart>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/layout/shopping_cart_icon.png`} alt="장바구니아이콘" />
                    <p>담기</p>
                  </S.Cart>
                </S.ImageAndCart>
              ))}
            </S.Slides>
          </S.HotImages>
        </S.HotProduct>

        {/* 커뮤니티 */}
        <S.RecommendSection>
            <S.CommunityPlusMore>
                <S.TitleWrapper>
                <h2>이런 게시물은 어때요?</h2>
                <Link to="/product">+ 더보기</Link>
                </S.TitleWrapper>
            </S.CommunityPlusMore>

          {/* 게시물 내용 */}
          <S.RecommendContainer>
            <S.LargePost>
              <S.PostImage>
                <img src={`${process.env.PUBLIC_URL}/assets/images/community1.png`} alt="포스트" />
                <S.PostHeartIcon>
                  <img src={`${process.env.PUBLIC_URL}/assets/images/layout/heart_icon.png`} alt="하트" />
                </S.PostHeartIcon>
              </S.PostImage>
            </S.LargePost>

            <S.SmallWrap>
              <S.SmallPost>
                {[ 
                  { src: "community2.png", userId: "user_id_1" },
                  { src: "community3.png", userId: "user_id_2" },
                  { src: "community4.png", userId: "user_id_3" }
                ].map((item, index) => (
                  <S.Post key={index}>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/${item.src}`} alt={`게시물-${index + 1}`} />
                    <S.ProfileInfo>
                      <img src={`${process.env.PUBLIC_URL}/assets/images/profile.png`} alt="프로필" />
                      <span className="UserId">{item.userId}</span>
                    </S.ProfileInfo>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/layout/heart_icon.png`} alt="하트" />
                  </S.Post>
                ))}
              </S.SmallPost>
            </S.SmallWrap>
          </S.RecommendContainer>
        </S.RecommendSection>

        {/* 서브 배너바 */}
        <S.SubBanner>
          <img src={`${process.env.PUBLIC_URL}/assets/images/layout/main-sub-image.png`} alt="서브 배너" />
        </S.SubBanner>

        {/* 상품 나열 */}
        <S.ProductContainer>
          <h2>POWPOW의 추천상품이에요!</h2>
          <S.ProductsWrap>
            <Link to={""}><strong>+ 더보기</strong></Link>
            <S.Products>
              {[ 
                { name: "피시포독 그레인프리 참치+스피니치 + 캐롯 85g", price: "9,900원", image: "product1.png" },
                { name: "디팡 강아지 사료 500g", price: "8,500원", image: "product2.png" }
              ].map((product, index) => (
                <S.ProductCard key={index}>
                  <img src={`${process.env.PUBLIC_URL}/assets/images/layout/${product.image}`} alt={product.name} />
                  <img src={`${process.env.PUBLIC_URL}/assets/images/layout/heart_icon.png`} alt="하트" />
                  <S.CardTextWrap>
                    <p className="ProductName">{product.name}</p>
                    <b>{product.price}</b>
                  </S.CardTextWrap>
                  <S.CardCart>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/test/cart.png`} alt="장바구니" />
                    <p>담기</p>
                  </S.CardCart>
                </S.ProductCard>
              ))}
            </S.Products>
          </S.ProductsWrap>
        </S.ProductContainer>
      </S.Container>
      
      <Footer />
    </div>
  );
}

export default Main;
