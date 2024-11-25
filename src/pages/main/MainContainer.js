import React from 'react';
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import S from './style';

const Main = () => {
  return (
    <>
      <Header />
      
      <S.Container>
        <S.Slider>
          <S.Slides>
            <S.Slide>
              <img src={`${process.env.PUBLIC_URL}/assets/images/layout/banner1.png`} alt="메인배너1" />
            </S.Slide>
          </S.Slides>
        </S.Slider>

        {/* 핫한 상품 이미지 */}
        <S.HotProduct>
          <h2>지금 제일 인기 있는 상품이에요.</h2>
          <S.HotImages>
            <S.HotSlide>
              {[ 
                { src: "dentalgum1.png", coupon: "강아지 인기" },
                { src: "shampoo3.png", coupon: "고양이 특가" },
                { src: "feed.png", coupon: "세일 특가" }
              ].map((item, index) => (
                <S.ImageAndCart key={index}>
                  <S.HotImage>
                    <Link to={"/"}>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/layout/${item.src}`} alt={`상품-${index + 1}`} />
                    </Link>
                    <S.Coupon>{item.coupon}</S.Coupon>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/layout/heart_icon.png`} alt="하트" />
                  </S.HotImage>
                  <S.Cart>
                    <Link to={"/"}>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/layout/shopping_cart_icon.png`} alt="장바구니아이콘" />
                    <p>담기</p>
                    </Link>
                  </S.Cart>
                </S.ImageAndCart>
              ))}
            </S.HotSlide>
          </S.HotImages>
        </S.HotProduct>

        <S.TestWrap style={{ position: 'relative' }}>
          <img src={`${process.env.PUBLIC_URL}/assets/images/layout/main-test-image.png`} alt="테스트 배너" />
          <S.TestButton>
          <a href="">
            <img src={`${process.env.PUBLIC_URL}/assets/images/layout/testbutton.png`} alt="테스트 버튼" />
          </a>
          </S.TestButton>
        </S.TestWrap>


        {/* 커뮤니티 */}
        <S.RecommendSection>
            <S.CommunityPlusMore>
                <S.TitleWrapper>
                <h2>이런 게시물은 어때요?</h2>
                <Link to="/community">+ 더보기</Link>
                </S.TitleWrapper>
            </S.CommunityPlusMore>

          {/* 게시물 내용 */}
          <S.RecommendContainer>
            <S.LargePost>
              <S.PostImage>
                <img src={`${process.env.PUBLIC_URL}/assets/images/layout/community1.png`} alt="메인포스트" />
              </S.PostImage>
                <S.PostHeartIcon>
                  <img src={`${process.env.PUBLIC_URL}/assets/images/layout/heart_icon.png`} alt="하트" />
                </S.PostHeartIcon>
            </S.LargePost>

            <S.SmallWrap>
              <S.SmallPost>
                {
                [ 
                  { src: "community2.png", userId: "지나 안지나" },
                  { src: "community3.png", userId: "철을 밀면 민철" },
                  { src: "community4.png", userId: "재금이 다음 재은" },
                  { src: "community5.png", userId: "작은 연 날리기 소연" },
                  { src: "community6.png", userId: "연을 세우면 세연" },
                  { src: "community7.png", userId: "찹쌀징어" }
                ].map((item, index) => (
                  <S.Post key={index}>
                    <S.SmallPostImage src={`${process.env.PUBLIC_URL}assets/images/layout/${item.src}`} alt={`게시물-${index + 1}`} />
                    <S.ProfileInfo>
                      <Link to={"/"}>
                      <img src={`${process.env.PUBLIC_URL}/assets/images/layout/profile.png`} alt="프로필" />
                      <span className="UserId">{item.userId}</span>
                      </Link>
                    </S.ProfileInfo>
                    <S.HeartIcon src={`${process.env.PUBLIC_URL}/assets/images/layout/heart_icon.png`} alt="하트" />
                  </S.Post>
                ))}
              </S.SmallPost>
            </S.SmallWrap>
          </S.RecommendContainer>

        </S.RecommendSection>

        {/* 서브 배너바 */}
        <S.SubBanner>
          <Link to={"/"}>
            <img src={`${process.env.PUBLIC_URL}/assets/images/layout/main-sub-image.png`} alt="서브 배너" />
          </Link>
        </S.SubBanner>

        {/* 상품 나열 */}
        <S.ProductContainer>
          <S.ProductHeader>
            <h2>POWPOW의 추천상품이에요!</h2>
            <Link to={"/product"}><strong>+ 더보기</strong></Link>
          </S.ProductHeader>

          <S.ProductsWrap>
          <S.Products>
            {[
              { name: "피시포독 그레인프리 참치+스피니치 + 캐롯 85g", price: "55% 9,900원", image: "product1.png" },
              { name: "디팡 강아지 사료 500g", price: "10% 8,500원", image: "product2.png" },
              { name: "피시포독 그레인프리 참치+스피니치 + 캐롯 85g", price: "10% 9,900원", image: "product3.png" },
              { name: "디팡 강아지 사료 500g", price: "10% 8,500원", image: "product4.png" },
              { name: "피시포독 그레인프리 참치+스피니치 + 캐롯 85g", price: "50% 9,900원", image: "product5.png" },
              { name: "디팡 강아지 사료 500g", price: "55% 8,500원", image: "product6.png" },
              { name: "피시포독 그레인프리 참치+스피니치 + 캐롯 85g", price: "35% 9,900원", image: "product1.png" },
              { name: "디팡 강아지 사료 500g", price: "55% 8,500원", image: "product2.png" },
              { name: "피시포독 그레인프리 참치+스피니치 + 캐롯 85g", price: "10% 9,900원", image: "product3.png" },
              { name: "디팡 강아지 사료 500g", price: "35% 8,500원", image: "product4.png" },
              { name: "피시포독 그레인프리 참치+스피니치 + 캐롯 85g", price: "20% 9,900원", image: "product5.png" },
              { name: "디팡 강아지 사료 500g", price: "35% 8,500원", image: "product6.png" }
            ].map((product, index) => {
              const [discount, price] = product.price.split(' ');

              return (
                <S.ProductCard key={index}>
                  <img src={`${process.env.PUBLIC_URL}/assets/images/layout/${product.image}`} alt={product.name} />
                  <S.ProductHeartICon src={`${process.env.PUBLIC_URL}/assets/images/layout/heart_icon.png`} alt="하트" />
                  <S.CardTextWrap>
                    <S.ProductName>{product.name}</S.ProductName>
                    <S.DiscountText>   
                      
                      {discount && (
                        <b><span style={{ color: '#C83F3F', fontWeight: 'bold', marginRight: '10px' }}>{discount}</span></b>
                      )}
                        <b><span>{price}</span></b>
                      
                    </S.DiscountText>
                  </S.CardTextWrap>
                  <S.CardCart>
                    <Link to={"/"}>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/layout/shopping_cart_icon.png`} alt="장바구니아이콘" />
                    <p>담기</p>
                    </Link>
                  </S.CardCart>
                </S.ProductCard>
              );
            })}
          </S.Products>
        </S.ProductsWrap>

        </S.ProductContainer>
      </S.Container>
      <Footer />
    </>
  );
}

export default Main;
