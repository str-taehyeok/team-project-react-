import React from 'react';
import S from './style';

const PetsonalResult = () => {
  return (
    <div>
      <div id="Frame">
        <div id="ResultContainer">
          <div className="ColorWrap">
            <img src="./images/orange-result.png" alt="오렌지" />
            <p className="ColorText">Orange</p>
          </div>
        </div>
        <ul className="OrangeResult">
          <li>신이 많고 재밌는 성격이에요.</li>
          <li>자유분방하고, 자신감이 넘치며 주변 사람들을 웃게 만들어요.</li>
          <li>에너지가 넘치고, 정이 많아 사람들과 쉽게 어울려요.</li>
          <li>혼자 있는 것보다는 다른 사람들이랑 함께 있으면서 사랑을 베푸는 것을 더 좋아해요.</li>
        </ul>

        <div className="ResultBox">
          <div className="PetProfile">
            <img className="PetImage" src="./images/dog.png" alt="강아지사진" />
            <p>반려동물 이름</p>
          </div>
          <div className="RateWrap">
            <p className="ResultName">똥꼬발랄 사랑둥이</p>
            <div className="PercentageContainer">
              <div className="AllRate">
                <div className="ResultCategory">
                  <span>시크</span>
                  <span>귀염</span>
                </div>
                <div className="PercentageWrap">
                  <span>0</span>
                  <div className="Percent"></div>
                  <span>100</span>
                </div>
              </div>
              <div className="AllRate">
                <div className="ResultCategory">
                  <span>시크</span>
                  <span>귀염</span>
                </div>
                <div className="PercentageWrap">
                  <span>0</span>
                  <div className="Percent"></div>
                  <span>100</span>
                </div>
              </div>
              <div className="AllRate">
                <div className="ResultCategory">
                  <span>시크</span>
                  <span>귀염</span>
                </div>
                <div className="PercentageWrap">
                  <span>0</span>
                  <div className="Percent"></div>
                  <span>100</span>
                </div>
              </div>
              <div className="AllRate">
                <div className="ResultCategory">
                  <span>시크</span>
                  <span>귀염</span>
                </div>
                <div className="PercentageWrap">
                  <span>0</span>
                  <div className="Percent"></div>
                  <span>100</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="ProductContainer">
          <div className="ProductsWrap">
            <p className="Matching">맞춤 추천 상품</p>
            <div className="Products">
              <div className="ProductCard">
                <img className="CardImage" src="./images/image.png" alt="상품이미지" />
                <img className="CardHeartIcon" src="assets/images/test/white-heart-icon.png" alt="하트" />
                <div className="CardTextWrap">
                  <p className="ProductName">피시포독 그레인프리 참치+스피니치 + 캐롯 85g</p>
                  <b>9,900원</b>
                </div>
                <div className="CardCart">
                  <img src="assets/images/test/cart.png" alt="장바구니" />
                  <p>담기</p>
                </div>
              </div>
              <div className="ProductCard">
                <img className="CardImage" src="assets/images/test/9.png" alt="상품이미지" />
                <img className="CardHeartIcon" src="assets/images/test/white-heart-icon.png" alt="하트" />
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
                <img className="CardImage" src="assets/images/test/8.png" alt="상품이미지" />
                <img className="CardHeartIcon" src="assets/images/test/white-heart-icon.png" alt="하트" />
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
                <img className="CardImage" src="assets/images/test/7.png" alt="상품이미지" />
                <img className="CardHeartIcon" src="assets/images/test/white-heart-icon.png" alt="하트" />
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

          <div className="ProductsWrap">
            <div className="Products">
              <div className="ProductCard">
                <img className="CardImage" src="assets/images/test/5.png" alt="상품이미지" />
                <img className="CardHeartIcon" src="assets/images/test/white-heart-icon.png" alt="하트" />
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
                <img className="CardImage" src="assets/images/test/4.png" alt="상품이미지" />
                <img className="CardHeartIcon" src="assets/images/test/white-heart-icon.png" alt="하트" />
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
                <img className="CardImage" src="assets/images/test/3.png" alt="상품이미지" />
                <img className="CardHeartIcon" src="assets/images/test/white-heart-icon.png" alt="하트" />
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
                <img className="CardImage" src="assets/images/test/2.png" alt="상품이미지" />
                <img className="CardHeartIcon" src="assets/images/test/white-heart-icon.png" alt="하트" />
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
        </div>
      </div>
    </div>
  );
};

export default PetsonalResult;
