import styled from "styled-components";
import { h4Bold, gray200, h1Bold, h2Bold, h4Medium, h6Medium, h7Bold, h7Medium, h8Medium, h9Medium, h8Regular, h10Regular, h9Regular } from "../../../global/common";

const S = {}

S.NoCartWrap = styled.div`
  width: 1920px;
  margin: 0 auto;
  
`
S.NoCart = styled.div`
  width: 1440px;
  margin: 0 auto;
  display: block;
  padding: 0 0 668px 0;

`

S.CartWrap = styled.div`
  width: 1920px;
  margin: 0 auto;
`

S.Cart = styled.div`
  width: 1440px;
  margin: 0 auto;
`


S.NoCartTitle = styled.div`
  margin-top: 157px;
  margin-bottom: 167px;

  & p {
    
    ${h2Bold}

  }
`

S.NoCartInfo = styled.div`
  width: 434px;
  height: 220px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  
  & div {
    ${h7Medium}
    width: 370px;
    display: flex;
    flex-direction: column;
    margin-top: 28px;
    justify-content: center;
    align-items: center;
  }


`
// 장바구니 있는 버전

S.CartTitle = styled.div`
  margin-top: 190px;
  margin-bottom: 50px;
    
  ${h4Bold}

 
`

S.CartAllCheck = styled.div`
  width: 1175px;
  height: 85px;
  border: solid 1px #828282;
  border-radius: 12px;
  display: flex;
  align-items: center;

  & > input {
    width: 28px;
    height: 28px;
    accent-color: #113F8A;
    margin-left: 39px;
    margin-right: 154px;
  }

`

S.CartAllNames = styled.div`
  width: 854px;
  height: 22px;
  display: flex;

  ${h7Bold}

  & p {
    display: flex;
    justify-content: center;
  }

  & p:nth-child(1) {
    width: 213px;
    height: 22px;
  }
  & p:nth-child(2) {
    width: 304px;
    height: 22px;
  }
  & p:nth-child(3) {
    width: 133px;
    height: 22px;
  }
  & p:nth-child(4) {
    width: 198px;
    height: 22px;
  }

`
// 개별 제품 체크박스 디자인

S.CartProductBox = styled.div`
  width: 1175px;
  height: 286px;
  box-sizing: border-box;
  border: solid 1px #828282;
  border-radius: 12px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  margin-top: 22px;

  & > input {
    width: 28px;
    height: 28px;
    accent-color: #113F8A;
    margin-top: 32px;
    margin-left: 32px;
    margin-right: 1096px;
    display: block;
  }


`
S.CartProductInfo = styled.div`
  width: 1006px;
  height: 135px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 20px;

  & > img {
    width: 136px;
    height: 136px;
  }

`

S.ProductName = styled.div`
      width: 262px;
      height: 50px;
      display: flex;
      overflow: hidden;
      ${h8Regular}
      margin-left: 34px;

`
S.productCount = styled.div`
  cursor: pointer;
  margin-left: 30px;
  width: 80px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 12px;
  background-color: #888888;
  ${h8Regular}

`

S.productPrice = styled.div`
  width: 138px;
  height: 24px;
  display: flex;
  align-items: baseline;
  margin-left: 118px;

  & p:nth-child(1) {
    ${h6Medium}
  }

  & p:nth-child(2) {
    ${h8Medium}
    margin-left: 4px;
    color: #828282;
    text-decoration: line-through;
  }

`

// 추천 프로덕트 디자인

S.RecommendProduct = styled.div`
  
  & img {
    width: 220px;
    height: 220px;
  }

`

S.RecommendInfo = styled.div`

  width: 220px;

  & > p {
    width: 220px;
    height: 40px;
    display: flex;
    overflow: hidden;
  }
  
  & span:nth-child(1) {
    ${h8Regular}
    display: flex;
    overflow: hidden;
  }

  & span:nth-child(2) {
    ${h7Bold}
  }

  & p {
    ${h10Regular}
  } 


`


S.RecommendStar = styled.div`
  width: 100px;
  height: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;

  & p {
    color: #828282;
  }

`

S.CouponBtnWrap = styled.div`
  position: relative;

`

S.CouponBtn = styled.div`
  width: 150px;
  height: 18px;
  box-sizing: border-box;
  border: solid 1px #828282;
  border-radius: 12px;
  display: flex;
  flex-wrap: wrap;
  color: #828282;
  margin-left: 32px;
  align-items: center;
  justify-content: space-around;
  ${h9Regular}
  cursor: pointer;
 
`
S.CouponWrap = styled.div`
  position: absolute;
  margin-top: 6px;
  right: 0px;
  border: solid 1px #828282;
  width: 150px;
  height: 80px;
  display: none;

  &.active {
    display: flex;
    ${h9Regular}
    align-items: center;
    flex-direction: column;
  }

`



export default S;