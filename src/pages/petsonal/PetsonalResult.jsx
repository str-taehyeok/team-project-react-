import React, { useContext, useState } from "react";
import S from "./style";
import { Link } from "react-router-dom";
import { PetsonalContext } from "../../context/petsonalContext";

const PetsonalResult = () => {

  const { state, action } = useContext(PetsonalContext)
  

  return (
    <div>
      <S.Frame>
        <S.ResultContainer>
          <S.ColorWrap>
            <img src="./images/orange-result.png" alt="오렌지" />
            <S.ColorText>Orange</S.ColorText>
          </S.ColorWrap>

          <S.OrangeResult>
            <li>신이 많고 재밌는 성격이에요.</li>
            <li>자유분방하고, 자신감이 넘치며 주변 사람들을 웃게 만들어요.</li>
            <li>에너지가 넘치고, 정이 많아 사람들과 쉽게 어울려요.</li>
            <li>
              혼자 있는 것보다는 다른 사람들이랑 함께 있으면서 사랑을 베푸는
              것을 더 좋아해요.
            </li>
          </S.OrangeResult>

          <S.ResultBox>
            <S.PetProfile>
              <S.PetImage
                src="./images/dog.png"
                alt="강아지사진"
              />
              <p>반려동물 이름</p>
            </S.PetProfile>
            <S.RateWrap>
              <S.ResultName>똥꼬발랄 사랑둥이</S.ResultName>
              <S.PercentageContainer>
                <S.AllRate>
                  <S.ResultCategory>
                    <span>시크</span>
                    <span>귀염</span>
                  </S.ResultCategory>
                  <S.PercentageWrap>
                    <span>0</span>
                    <S.Percent></S.Percent>
                    <span>100</span>
                  </S.PercentageWrap>
                </S.AllRate>
                <S.AllRate>
                  <S.ResultCategory>
                    <span>차분</span>
                    <span>발랄</span>
                  </S.ResultCategory>
                  <S.PercentageWrap>
                    <span>0</span>
                    <S.Percent></S.Percent>
                    <span>100</span>
                  </S.PercentageWrap>
                </S.AllRate>
                <S.AllRate>
                  <S.ResultCategory>
                    <span>게으름</span>
                    <span>부지런함</span>
                  </S.ResultCategory>
                  <S.PercentageWrap>
                    <span>0</span>
                    <S.Percent></S.Percent>
                    <span>100</span>
                  </S.PercentageWrap>
                </S.AllRate>
                <S.AllRate>
                  <S.ResultCategory>
                    <span>겁쟁이</span>
                    <span>용감함</span>
                  </S.ResultCategory>
                  <S.PercentageWrap >
                    <span>0</span>
                    <S.Percent></S.Percent>
                    <span>100</span>
                  </S.PercentageWrap>
                </S.AllRate>
              </S.PercentageContainer>
            </S.RateWrap>
          </S.ResultBox>

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
              { name: "피시포독 그레인프리 참치+스피니치 + 캐롯 85g", price: "35% 9,900원", image: "product1.png" },
              { name: "디팡 강아지 사료 500g", price: "55% 8,500원", image: "product2.png" },
              { name: "피시포독 그레인프리 참치+스피니치 + 캐롯 85g", price: "10% 9,900원", image: "product3.png" },
              { name: "디팡 강아지 사료 500g", price: "35% 8,500원", image: "product4.png" }
            ].map((product, index) => {
              const [discount, price] = product.price.split(' ');

              return (
                <S.ProductCard key={index}>
                  <img className="productImage" src={`${process.env.PUBLIC_URL}/assets/images/layout/${product.image}`} alt={product.name} />
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

        </S.ResultContainer>
      </S.Frame>
    </div>
  );
};

export default PetsonalResult;
