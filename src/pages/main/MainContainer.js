import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import S from "./style";
import SwiperCore from "swiper/core";
import HeartBtn from "../community/community/HeartBtn";
SwiperCore.use([Pagination]);

const Main = () => {

  const bannerCount = [1, 2, 3];
  const bannerLength = bannerCount.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const onChangeIndex = (index) => { setActiveIndex(index + 1) } 
  const [products, setProducts] = useState([]);

  // fetch products
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("http://localhost:10000/products/products")
      const products = await response.json()
      return products
    }

    getProducts().then(setProducts).catch(console.error)

  }, [])

  return (
    <>
      <Header />
        <S.SwiperContainer>
          <Swiper 
            onSlideChange={(e) => onChangeIndex(e.realIndex) }
            className="mySwiper1"
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{ dynamicBullets: true }}
          >
            {[1, 2, 3].map((num, i) => (
              <SwiperSlide key={i}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/layout/banner${num}.png`}
                  alt={`메인배너$${num}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <S.SwiperPager>
            <p>{`${activeIndex} / ${bannerLength}`}</p>
          </S.SwiperPager>
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
                { products.map(({
                  id, productName, productImage1, productPrice, productDiscount
                }, index) => {
                  const isDiscount = productDiscount !== 0;
                  return (
                    <S.ProductCard key={index}>
                      <Link to="/store">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/layout/${productImage1}`}
                          alt={productName}
                        />
                      </Link>
                      <S.Heart>
                          <HeartBtn id={id} type={"product"} />
                      </S.Heart>
                      <S.CardTextWrap>
                        <S.ProductName>{productName}</S.ProductName>
                        <S.DiscountText>
                          {isDiscount && (
                            <b>
                              <span
                                style={{
                                  color: "#C83F3F",
                                  fontWeight: "bold",
                                  marginRight: "10px",
                                }}
                              >
                                {productDiscount}
                              </span>
                            </b>
                          )}
                          {productPrice}
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
