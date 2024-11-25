import React from "react";
import S from "./style";

const PetsonalResult = () => {
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
                    <span>시크</span>
                    <span>귀염</span>
                  </S.ResultCategory>
                  <S.PercentageWrap>
                    <span>0</span>
                    <div className="Percent"></div>
                    <span>100</span>
                  </S.PercentageWrap>
                </S.AllRate>
                <S.AllRate>
                  <S.ResultCategory>
                    <span>시크</span>
                    <span>귀염</span>
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
            <S.ProductsWrap>
              <S.Matching>맞춤 추천 상품</S.Matching>
              <S.Products>
                <S.ProductCard>
                  <S.CardImage
                    src="./images/image.png"
                    alt="상품이미지"
                  />
                  <S.CardHeartIcon
                    src="assets/images/test/white-heart-icon.png"
                    alt="하트"
                  />
                  <S.CardTextWrap>
                    <S.ProductName>
                      피시포독 그레인프리 참치+스피니치 + 캐롯 85g
                    </S.ProductName>
                    <b>9,900원</b>
                  </S.CardTextWrap>
                  <S.CardCart>
                    <img src="assets/images/test/cart.png" alt="장바구니" />
                    <p>담기</p>
                  </S.CardCart>
                </S.ProductCard>
                <div className="ProductCard">
                  <img
                    className="CardImage"
                    src="assets/images/test/9.png"
                    alt="상품이미지"
                  />
                  <img
                    className="CardHeartIcon"
                    src="assets/images/test/white-heart-icon.png"
                    alt="하트"
                  />
                  <div className="CardTextWrap">
                    <p>피시포독 그레인프리 참치+스피니치 + 캐롯 85g</p>
                    <b>9,900원</b>
                  </div>
                  <div className="CardCart">
                    <img src="assets/images/test/cart.png" alt="장바구니" />
                    <p>담기</p>
                  </div>
                </div>
                <div className="ProductCard">
                  <img
                    className="CardImage"
                    src="assets/images/test/8.png"
                    alt="상품이미지"
                  />
                  <img
                    className="CardHeartIcon"
                    src="assets/images/test/white-heart-icon.png"
                    alt="하트"
                  />
                  <div className="CardTextWrap">
                    <p>피시포독 그레인프리 참치+스피니치 + 캐롯 85g</p>
                    <b>9,900원</b>
                  </div>
                  <div className="CardCart">
                    <img src="assets/images/test/cart.png" alt="장바구니" />
                    <p>담기</p>
                  </div>
                </div>
                <div className="ProductCard">
                  <img
                    className="CardImage"
                    src="assets/images/test/7.png"
                    alt="상품이미지"
                  />
                  <img
                    className="CardHeartIcon"
                    src="assets/images/test/white-heart-icon.png"
                    alt="하트"
                  />
                  <div className="CardTextWrap">
                    <p>피시포독 그레인프리 참치+스피니치 + 캐롯 85g</p>
                    <b>9,900원</b>
                  </div>
                  <div className="CardCart">
                    <img src="assets/images/test/cart.png" alt="장바구니" />
                    <p>담기</p>
                  </div>
                </div>
              </S.Products>
            </S.ProductsWrap>

            <div className="ProductsWrap">
              <div className="Products">
                <div className="ProductCard">
                  <img
                    className="CardImage"
                    src="assets/images/test/5.png"
                    alt="상품이미지"
                  />
                  <img
                    className="CardHeartIcon"
                    src="assets/images/test/white-heart-icon.png"
                    alt="하트"
                  />
                  <div className="CardTextWrap">
                    <p>피시포독 그레인프리 참치+스피니치 + 캐롯 85g</p>
                    <b>9,900원</b>
                  </div>
                  <div className="CardCart">
                    <img src="assets/images/test/cart.png" alt="장바구니" />
                    <p>담기</p>
                  </div>
                </div>
                <div className="ProductCard">
                  <img
                    className="CardImage"
                    src="assets/images/test/4.png"
                    alt="상품이미지"
                  />
                  <img
                    className="CardHeartIcon"
                    src="assets/images/test/white-heart-icon.png"
                    alt="하트"
                  />
                  <div className="CardTextWrap">
                    <p>피시포독 그레인프리 참치+스피니치 + 캐롯 85g</p>
                    <b>9,900원</b>
                  </div>
                  <div className="CardCart">
                    <img src="assets/images/test/cart.png" alt="장바구니" />
                    <p>담기</p>
                  </div>
                </div>
                <div className="ProductCard">
                  <img
                    className="CardImage"
                    src="assets/images/test/3.png"
                    alt="상품이미지"
                  />
                  <img
                    className="CardHeartIcon"
                    src="assets/images/test/white-heart-icon.png"
                    alt="하트"
                  />
                  <div className="CardTextWrap">
                    <p>피시포독 그레인프리 참치+스피니치 + 캐롯 85g</p>
                    <b>9,900원</b>
                  </div>
                  <div className="CardCart">
                    <img src="assets/images/test/cart.png" alt="장바구니" />
                    <p>담기</p>
                  </div>
                </div>
                <div className="ProductCard">
                  <img
                    className="CardImage"
                    src="assets/images/test/2.png"
                    alt="상품이미지"
                  />
                  <img
                    className="CardHeartIcon"
                    src="assets/images/test/white-heart-icon.png"
                    alt="하트"
                  />
                  <div className="CardTextWrap">
                    <p>피시포독 그레인프리 참치+스피니치 + 캐롯 85g</p>
                    <b>9,900원</b>
                  </div>
                  <div className="CardCart">
                    <img src="assets/images/test/cart.png" alt="장바구니" />
                    <p>담기</p>
                  </div>
                </div>
              </div>
            </div>
          </S.ProductContainer>
        </S.ResultContainer>
      </S.Frame>
    </div>
  );
};

export default PetsonalResult;
