import styled from "styled-components";
import { h4Bold, h2Bold, h6Medium, h7Bold, h7Medium, h8Regular, h10Regular, h9Regular, h8Bold } from "../../../global/common";

const S = {}

S.Decrease = styled.div`
  width: 6px;
  height: 20px;
`

S.Increase = styled.div`
  width: 6px;
  height: 20px;
`

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
    width: 370px;
    display: flex;
    flex-direction: column;
    margin-top: 28px;
    justify-content: center;
    align-items: center;
    ${h7Medium}
  }


`
// 장바구니 있는 버전

S.CartTitle = styled.div`
  margin-top: 190px;
  margin-bottom: 50px;
    margin-left: 132.5px;
    width: 1175px;
  ${h4Bold}

 
`

S.CartAllCheck = styled.div`
  width: 1175px;
  height: 85px;
  border: solid 1px #828282;
  border-radius: 12px;
  display: flex;
  align-items: center;
    margin: 0 auto;

  & > input {
    width: 28px;
    height: 28px;
    accent-color: #113F8A;
    margin-left: 39px;
    margin-right: 185px;
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
    width: 244px;
    height: 22px;
  }
  & p:nth-child(2) {
    width: 220px;
    height: 22px;
  }
  & p:nth-child(3) {
    width: 242px;
    height: 22px;
  }
  & p:nth-child(4) {
    width: 120px;
    height: 22px;
  }

`
// 개별 제품 체크박스 디자인

S.CartProductBox = styled.div`
  width: 1175px;
    margin: 0 auto;
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
      overflow: hidden;
      margin-left: 34px;
      text-overflow: ellipsis;
      ${h8Regular}
      

`
S.productCount = styled.div`
  cursor: pointer;
  margin-left: 53px;
  width: 80px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 20px;
  border: solid 1px #828282;
  background-color: #FFFFFF;
  ${h8Regular}

`

S.productPrice = styled.div`
  width: 150px;
  height: 24px;
  display: flex;
  align-items: baseline;
  margin-left: 118px;

  & p:nth-child(1) {
    ${h6Medium}
  }

  & p:nth-child(2) {
    margin-left: 4px;
    color: #828282;
    text-decoration: line-through;
    ${h6Medium}
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
    display: flex;
    overflow: hidden;
    ${h8Regular}
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
    & select {
        width: 140px;
        height: 30px;
        box-sizing: border-box;
        border: solid 1px #828282;
        border-radius: 20px;
        display: flex;
        flex-wrap: wrap;
        color: #828282;
        margin-left: 32px;
        align-items: center;
        justify-content: space-around;
        cursor: pointer;
        padding: 5px 5px;
        ${h9Regular}
    }


  //& img {
  //  width: 8px;
  //  height: 6px;
  //  
  //}
 
`
S.CouponWrap = styled.div`
  position: absolute;
  padding: 10px 10px 0 16px;
  margin-top: 6px;
  border: solid 1px #828282;
  width: 140px;
  height: 100px;
  background: white;
        /* min-width: 120%; */
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  display: none;

  &.active {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    ${h9Regular}
  }

  &.active::-webkit-scrollbar {
    width: 6px;  /* 스크롤바의 너비 */
}

    &.active::-webkit-scrollbar-thumb {
    height: 10%; /* 스크롤바의 길이 */
    background: #888888; /* 스크롤바의 색상 */
    border-radius: 10px;
    }
    

  
`


// 카트 결제
S.CartPayWrap = styled.div`
  width: 1175px;
  height: 480px;
  display: block;
  margin: 0 auto;  
`

S.CartPayTitle = styled.div`
  //width: 1175px;
  height: 34px;
  margin-top: 86px;
  margin-bottom: 50px;
  ${h4Bold}

`

S.CartPay = styled.div`
  width: 1175px;
  height: 294px;
  border-radius: 12px;
  box-sizing: border-box;
  border: solid 1px #828282;
  display: flex;
  align-items: center;
  justify-content: center;


`
S.AllDeliveryBox = styled.div`
  width: 920px;
  height: 222px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`
S.AllDeliveryFee = styled.div`
    width: 920px;
    height: 50px;
    align-items: first baseline;
    justify-content: space-between;
    color: #888888;
    ${h7Bold}
`

S.PurchasePrice= styled.div`
    width: 920px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    color: #888888;
    border-top: solid 1px #888888;
    border-bottom: solid 1px #888888;
    ${h7Bold}

`

S.DiscountPrice = styled.div`
  width: 920px;
  height: 60px;
  box-sizing: border-box;
  color: #888888;
  display: flex;
  align-items: center;
  border-bottom: solid 1px #888888;
  ${h7Bold}

`

S.AllPurchaseFee = styled.div`
  width: 920px;
  height: 50px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  ${h7Bold}
`

// cartBtn

S.Link = styled.div`
  width: 1175px;
  display: flex;
  justify-content: right;
  margin-top: 33px;
  ${h8Bold}
  `
S.All = styled.div`
      width: 177px;
      height: 36px;
      border-radius: 20px;
      background-color: #113F8A;
      color: #FFFFFF;
      text-align: center;
      line-height: 36px;
  `


S.CouponList = styled.div`

  & > p {
    
    margin-bottom: 10px;

  } 
`
S.CartBox = styled.div`
width: 1440px;
//    display: flex;
//flex-direction: column;
//justify-content: center;
//    align-items: center;
`
export default S;