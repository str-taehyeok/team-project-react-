import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import S from "./style";
import SwiperCore from "swiper/core";
import HeartBtn from "../store/store/HeartBtn";
SwiperCore.use([Pagination]);

const Main = () => {
  return (
    <>
      <Header />
        <S.SwiperContainer>
          <Swiper
            className="mySwiper1"
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{ dynamicBullets: true }}
          >
            <SwiperSlide>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/layout/banner1.jpg`}
                alt="메인배너1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/layout/banner2.jpg`}
                alt="메인배너2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/layout/banner3.jpg`}
                alt="메인배너3"
              />
            </SwiperSlide>
          </Swiper>
        </S.SwiperContainer>

        <S.SwiperContainer>
          <S.BannerTitle>
            <h2>지금 제일 인기 있는 상품이에요.</h2>
          </S.BannerTitle>
          <Swiper
            className="mySwiper2"
            slidesPerView={"auto"}
            spaceBetween={20}
          >
            {[
              { src: "dentalgum1.png", coupon: "강아지 인기" },
              { src: "shampoo3.png", coupon: "고양이 특가" },
              { src: "feed.png", coupon: "세일 특가" },
              { src: "dentalgum1.png", coupon: "강아지 인기" },
              { src: "shampoo3.png", coupon: "고양이 특가" },
              { src: "feed.png", coupon: "세일 특가" },
            ].map((item, i) => (
              <SwiperSlide key={i}>
                <S.ImageAndCart>
                  <S.HotImage>
                    <Link to="/store">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/layout/${item.src}`}
                        alt={`상품-${i + 1}`}
                      />
                    </Link>
                    <S.Coupon>{item.coupon}</S.Coupon>
                    <HeartBtn />
                  </S.HotImage>
                  <S.Cart>
                    <Link to="/cart">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/layout/shopping_cart_icon.png`}
                        alt="장바구니아이콘"
                      />
                      <p>담기</p>
                    </Link>
                  </S.Cart>
                </S.ImageAndCart>
              </SwiperSlide>
            ))}
          </Swiper>
        </S.SwiperContainer>

        <S.Container>
          <S.TestWrap style={{ position: "relative" }}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/layout/testbanner05.png`}
              alt="테스트 배너"
            />
            <S.TestButton>
              <Link to="/petsonal">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/layout/testbutton.png`}
                  alt="테스트 버튼"
                />
              </Link>
            </S.TestButton>
          </S.TestWrap>

          <S.RecommendSection>
            <S.CommunityPlusMore>
              <S.TitleWrapper>
                <h2>이런 게시물은 어때요?</h2>
                <Link to="/community">+ 더보기</Link>
              </S.TitleWrapper>
            </S.CommunityPlusMore>

            <S.RecommendContainer>
              <S.LargePost>
                <Link to="/community">
                  <S.MainProfileInfo>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/layout/profile.png`}
                      alt="프로필"
                    />
                    <span className="UserId">찹쌀오징어</span>
                  </S.MainProfileInfo>
                  <S.PostImage>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/layout/community1.png`}
                      alt="메인포스트"
                    />
                  </S.PostImage>
                </Link>
                <HeartBtn />
              </S.LargePost>

              <S.SmallWrap>
                <S.SmallPost>
                  {[
                    { src: "community2.png", userId: "지나 안지나" },
                    { src: "community3.png", userId: "철을 밀면 민철" },
                    { src: "community4.png", userId: "재금이 다음 재은" },
                    { src: "community5.png", userId: "작은 연 날리기 소연" },
                    { src: "community6.png", userId: "연을 세우면 세연" },
                    { src: "community7.png", userId: "찹쌀징어" },
                  ].map((item, index) => (
                    <S.Post key={index}>
                      <Link to="/community">
                        <S.SmallPostImage
                          src={`${process.env.PUBLIC_URL}/assets/images/layout/${item.src}`}
                          alt={`게시물-${index + 1}`}
                        />
                        <S.ProfileInfo>
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/images/layout/profile.png`}
                            alt="프로필"
                          />
                          <span className="UserId">{item.userId}</span>
                        </S.ProfileInfo>
                      </Link>
                      <HeartBtn />
                    </S.Post>
                  ))}
                </S.SmallPost>
              </S.SmallWrap>
            </S.RecommendContainer>
          </S.RecommendSection>

          <S.SubBanner>
            <Link to="/petsonal">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/layout/main-sub-image.png`}
                alt="서브 배너"
              />
            </Link>
          </S.SubBanner>

          <S.ProductContainer>
            <S.ProductHeader>
              <h2>POWPOW의 추천상품이에요!</h2>
              <Link to="/product">
                <strong>+ 더보기</strong>
              </Link>
            </S.ProductHeader>

            <S.ProductsWrap>
              <S.Products>
                {[
                  {
                    name: "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
                    price: "55% 9,900원",
                    image: "product1.png",
                  },
                  {
                    name: "디팡 강아지 사료 500g",
                    price: "10% 8,500원",
                    image: "product2.png",
                  },
                  {
                    name: "로얄캐닌 캣파우치 키튼 그레이비 85g 1박스(12개)",
                    price: "10% 9,900원",
                    image: "product3.png",
                  },
                  {
                    name: "힐스 강아지사료 어덜트 라이트 스몰 앤 미니 1.5kg",
                    price: "10% 8,500원",
                    image: "product4.png",
                  },
                  {
                    name: "로얄캐닌 마더앤베이비캣캔 트레이 100g x 6개 습식사료 주식캔 아기고양이",
                    price: "50% 9,900원",
                    image: "product5.png",
                  },
                  {
                    name: "잘먹잘싸 황금변 강아지사료 변냄새/피부/모질 2KG",
                    price: "55% 8,500원",
                    image: "product6.png",
                  },
                  {
                    name: "내추럴발란스 LI 브로스 코팅 야채 레시피 스몰브리드 2.4kg",
                    price: "35% 9,900원",
                    image: "product1.png",
                  },
                  {
                    name: "하림펫푸드 더리얼 그레인프리 오븐베이크드 소고기 시니어 1.6kg",
                    price: "55% 8,500원",
                    image: "product2.png",
                  },
                  {
                    name: "스텔라앤츄이스 로우 코티드 키블 스몰 브리드 케이지 프리 치킨 4.5kg",
                    price: "10% 9,900원",
                    image: "product3.png",
                  },
                  {
                    name: "펫생각 데일리케얼 네츄럴칼디오 큐브 화식 30개입 (치킨/비프)",
                    price: "35% 8,500원",
                    image: "product4.png",
                  },
                  {
                    name: "프레시지펫 반습식 수제 사료 오리 1KG+말랑 치즈버거 져키 소고기 100G 6팩",
                    price: "20% 9,900원",
                    image: "product5.png",
                  },
                  {
                    name: "스텔라앤츄이스 로우 코티드 키블 퍼피 케이지 프리 치킨 4.5kg",
                    price: "35% 8,500원",
                    image: "product6.png",
                  },
                ].map((product, index) => {
                  const [discount, price] = product.price.split(" ");

                  return (
                    <S.ProductCard key={index}>
                      <Link to="/store">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/layout/${product.image}`}
                          alt={product.name}
                        />
                      </Link>
                      <HeartBtn />
                      <S.CardTextWrap>
                        <S.ProductName>{product.name}</S.ProductName>
                        <S.DiscountText>
                          {discount && (
                            <b>
                              <span
                                style={{
                                  color: "#C83F3F",
                                  fontWeight: "bold",
                                  marginRight: "10px",
                                }}
                              >
                                {discount}
                              </span>
                            </b>
                          )}
                          {price}
                        </S.DiscountText>
                      </S.CardTextWrap>
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
};

export default Main;
