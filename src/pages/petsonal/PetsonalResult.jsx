import React, { useContext, useEffect, useState } from "react";
import S from "./style";
import { Link, useNavigate } from "react-router-dom";
import { PetsonalContext } from "../../context/petsonalContext";

const PetsonalResult = () => {

  const { state, result } = useContext(PetsonalContext)
  const [ scoreResult, setScoreResult ] = useState({ petColor : "", petsonalChic : 0, petsonalCute : 0, petsonalCalm : 0, petsonalActive : 0, petsonalLazy : 0, petsonalDiligent : 0, petsonalCoward : 0, petsonalBrave : 0 })
  const [ colorResult, setColorResult ] = useState({ imageSrc : "", message : [], boxColor : ""});
  const { imageSrc, message, boxColor } = colorResult;
  const navigate = useNavigate();
  
  console.log("state.petColor", state.petColor)
  useEffect(() => {
    if(localStorage.getItem("colorResult") !== null){
      // 있을 때 다시 검사한사람인지, 처음 검사한사람인지
      if(state.petColor){
        // 기존에 로컬스토리지를 삭제
        localStorage.clear()
        localStorage.setItem("colorResult", JSON.stringify(result[state.petColor]))
        localStorage.setItem("scoreResult", JSON.stringify(state))
        setColorResult(JSON.parse(localStorage.getItem("colorResult")))
        setScoreResult(JSON.parse(localStorage.getItem("scoreResult")))
      }else {
        setColorResult(JSON.parse(localStorage.getItem("colorResult")))
        setScoreResult(JSON.parse(localStorage.getItem("scoreResult")))
      }
    } else {
      // 없으면 검사했는지 안넣은사람인지 진짜 검사 안한사람
      if(state.petColor !== ""){
        // 검사 했는데 안넣은 사람
        localStorage.setItem("colorResult", JSON.stringify(result[state.petColor]))
        localStorage.setItem("scoreResult", JSON.stringify(state))
      }else{
        // 진짜 검사 안한사람
        navigate("/petsonal/test")
      }
    }
  }, [])

  return (
    <div>
      <S.Frame>
        <S.ResultContainer>
          <S.ColorWrap>
            <img src={`${process.env.PUBLIC_URL}${imageSrc}`} alt="오렌지" />
          </S.ColorWrap>

          <S.OrangeResult>
            {message.map((m, i) => (
              <p key={i}>{m}</p>
            ))}
          </S.OrangeResult>

          <S.ResultBox color={boxColor} >
            <S.PetProfile>
              <S.PetImage
                src={`${process.env.PUBLIC_URL}/assets/images/petsonal/dog-img.png`}
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
                    <S.Percent>
                      <S.CuteAndChicGage style={{ width: `${scoreResult.petsonalCute}%` }}></S.CuteAndChicGage>
                    </S.Percent>
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
                    <S.Percent>
                      <S.CalmAndActive style={{ width: `${scoreResult.petsonalActive}%` }}></S.CalmAndActive>
                    </S.Percent>
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
                    <S.Percent>
                      <S.LazyAndDilight style={{ width: `${scoreResult.petsonalDiligent}%` }}></S.LazyAndDilight>
                    </S.Percent>
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
                    <S.Percent>
                      <S.CowardAndBrave style={{ width: `${scoreResult.petsonalBrave}%` }}></S.CowardAndBrave>
                    </S.Percent>
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
