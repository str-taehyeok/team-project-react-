import styled from "styled-components";
import {
    h4Bold,
    h6Medium,
    h7Bold,
    h7Medium,
    h7Regular,
    h8Bold,
    h8Medium, h8Regular,
    h9Regular
} from "../../../global/common";
import { Link } from "react-router-dom";

const S = {}

S.DeliveryWrap = styled.div`
  width: 1920px;
  margin: 0 auto;
`
S.Delivery = styled.div`
  width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`


// 배송 메모 컴포넌트 스타일

S.payMemoList = styled.div`

 & > p {
  ${h9Regular}
  padding-bottom: 10px;
 }

`


S.PayMemoWrap = styled.div`
  position: relative;
`

S.MemoBtn = styled.div`
  width: 545px;
  height: 55px;
  box-sizing: border-box;
  border: solid 1px #888888;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  color: #888888;
  align-items: center;
  padding: 13px 17px 13px 17px;
  justify-content: space-between;
  ${h9Regular}
  cursor: pointer;

  & > img {
    width: 20px;
    height: 20px;

  }
`

S.BtnWrap = styled.div`
  position: absolute;
  margin-top: 6px;
  padding: 10px 10px 0px 18px;
  border: solid 1px #828282;
  width: 545px;
  height: 100px;
  background: white;
        /* min-width: 120%; */
        border: 1px solid #D9D9D9;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  display: none;

  &.active {
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    overflow-y: scroll;
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
// 배송지

S.DeliveryPlaceWrap = styled.div`
  height: 350px;
  width: 848px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 252px;

`

S.DeliveryPlaceTitle = styled.div`
  ${h4Bold}
  width: 1440px;
  margin-bottom: 46px;
  display: block;
`

S.DeliveryInfoBox = styled.div`
  width: 746px;
  height: 242px;
  margin-left: 89px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  & > p {
    ${h7Regular}
  }

`

S.MemberName = styled.div`
  margin-bottom: 17px;
`
S.MemberPhone = styled.div`
  margin-left: 15px;
  width: 260px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

 
`
S.AnnonimusPhone = styled.div`
  width: 117px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`

S.Checkingbox = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;

  
`

S.MemberAddress = styled.div`
  width: 553px;
  height: 44px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  margin-top: 22px;
  margin-left: 15px;
  margin-bottom: 20px;
`

S.PayMemo = styled.div`
  margin-left: 15px;
`

S.NextTimeCheck = styled.div`
  margin-left: 15px;
  margin-top: 22px;
  display: flex;
  align-items: center;
  width: 160px;
  height: 20px;
  justify-content: space-between;
`

// 주문 - 오늘 출발

S.OrderBox = styled.div`
  width: 848px;
  height: 318px;
  display: flex;
  flex-direction: column;
  margin-top: 102px;
  
`

S.OrderTitle = styled.div`
  ${h4Bold}
  margin-bottom: 80px;
`

S.OrderDeliveryStart = styled.div`
  width: 746px;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  margin-left: 96px;
  
  
`

S.OrderDeliveryTitle = styled.div`

  width: 746px;
  height: 26px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

& > p:nth-child(1) {
    ${h7Medium}
    width: 85px;
  }

  & > p:nth-child(2) {
    ${h7Regular}
    color: #828282;
    margin-left: 12px;
    width: 576px;
  }

  & > p:nth-child(3) {
    ${h9Regular}
    color: #828282;


  }

`

S.DeliveryProductBox = styled.div`
  width: 746px;
  height: 158px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 28px;
  

  & img {
    width: 90px;
    height: 90px;
  }
`
S.DeliveryProductInfo = styled.div`
  width: 620px;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: 36px;

  & p:nth-child(1) {
    width: 365px;
    height: 44px;
    ${h7Regular}
    margin-bottom: 10px;
    display: block;

  }

`
S.ProductInfoPrice = styled.div`
  width: 170px;
  height: 25px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

& p:nth-child(1) {
  width: 75px;
  height: 20px;
  ${h6Medium}
}

& p:nth-child(2) {
  width: 65px; 
  height: 20px;
  color: #828282;
  ${h7Medium}
  text-decoration: line-through;
}
`


//쿠폰 스타일


S.CouponBtnWrap = styled.div`
  position: relative;

`

S.CouponList = styled.div`

  & > p {
    margin-bottom: 10px;
  }
`

S.CouponBtn = styled.div`
  width: 425px;
  height: 55px;
  box-sizing: border-box;
  border: solid 1px #828282;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  color: #828282;
  margin-left: 32px;
  align-items: center;
  justify-content: space-between;
  padding: 17px 13px 17px 13px;
  ${h9Regular}
  cursor: pointer;

  & img {
    width: 20px;
    height: 20px;

  }
 
`
S.CouponWrap = styled.div`
  position: absolute;
  margin-top: 6px;
  right: 10px;
  border: solid 1px #828282;
  width: 425px;
  height: 80px;
  overflow: hidden;
  background: white;
        /* min-width: 120%; */
        border: 1px solid #D9D9D9;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  padding: 10px 10px 0px 18px;
  display: none;

  &.active {
    display: flex;
    ${h9Regular}
    flex-direction: column;
    overflow-y: scroll;
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

S.PayCoupon = styled.div`
  width: 847px;
  height: 55px;
  margin-left: 280px;
`

// 결제 박스

S.PayBoxWrap = styled.div`
  width: 802px;
  height: 580px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 96px;


`

S.PayBoxTitle = styled.div`
  width: 802px;
  height: 35px;

  ${h4Bold}

`

S.PayBox = styled.div`
  width: 742px;
  height: 504px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: 54px;

`

S.PayAccountCategory = styled.div`
  width: 742px;
  height: 50px;
  border-bottom: 1px solid #828282;
  margin-top: 72px;

  & p {
    margin-left: 10px;
   ${h7Medium}
  }
`

S.PayAccountTitle = styled.div`
  width: 122px;
  height: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

S.PayCardTitle = styled.div`
  width: 122px;
  height: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 26px;

  & p {
    margin-left: 10px;
   ${h7Medium}
  }

`

S.PayCardCategory =styled.div`
  width: 742px;
  height: 242px;
  
`

S.PayNormalCategory = styled.div`
  width: 742px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: solid 1px #828282;
  border-bottom: solid 1px #828282;

  & p {
    width: 710px;
    ${h7Medium}

  }
`

S.PayNotice = styled.div`
  width: 244px;
  height: 36px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 15px;
  margin-left: 48px;

  & p {
    ${h9Regular}
  }
`

// 카트 버튼

S.Link = styled(Link)`
  margin-left: 1094px;
  width: 177px;
  height: 36px;
  border-radius: 12px;
  background-color: #113F8A;
  color: #FFFFFF;
  ${h8Bold}

`

// 카드 추가 팝업
S.CardInsertBox = styled.div`
    position: relative;
    width: 342px;
    height: 170px;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    border: solid 1px #828282;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    flex-direction: column;
    
    & > img {
        width: 20px;
        height: 20px;
    }
    
`
// 카드 팝업 입력칸

S.CardPopUpWrap = styled.div`
    position: absolute;
    width: 516px;
    height: 300px;
    display: flex;
    flex-direction: column;
    border: solid 1px #828282;
    box-sizing: border-box;
    border-radius: 20px;
    background-color: #FFFFFF;
    z-index: 1;
    justify-content: center;
    
    & form {
        width: 464px;
        height: 276px;
    }
    
`

S.CardInsertMent = styled.div`
    margin-top: 8px;
    ${h8Medium}
    
`
// 카드 회사명 입력칸

S.CardArea1 = styled.div`
    width: 464px;
    height: 40px;
    display: flex;
    margin-top: 18px;
    margin-left: 24px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`

S.CardCompany = styled.div`
    display: flex;
    width: 380px;
    height: 30px;
    align-items: center;
    
    & > div {
        ${h7Bold}
        margin-right: 8px;
        
    }
    
    & > input {
        width: 122px;
        height: 30px;
        box-sizing: border-box;
        border: solid 0.5px #ACACA8;
        border-radius: 20px;
        padding-left: 12px;
        
        ${h9Regular}
        
    }
    
    
`
S.cardNumber = styled.div`
    display: flex;
    width: 440px;
    height: 30px;
    margin-top: 42px;
    margin-left: 24px;

    & > div {
        ${h7Bold}
        margin-right: 8px;
    }

    & > input {
        width: 186px;
        height: 30px;
        box-sizing: border-box;
        border: solid 0.5px #ACACA8;
        border-radius: 20px;
        padding-left: 12px;

        ${h9Regular}

    }


`

S.cardSecurityCode = styled.div`
    display: flex;
    width: 120px;
    height: 30px;
    flex-wrap: wrap;
    flex-direction: column;
    margin-right: 130px;
    

    & > div {
        ${h7Bold}
        margin-right: 8px;
        margin-bottom: 4px;
    }

    & > input {
        width: 68px;
        height: 30px;
        box-sizing: border-box;
        border: solid 0.5px #ACACA8;
        border-radius: 20px;
        padding-left: 25px;

        ${h9Regular}

    }


`
S.cardExpirationDate = styled.div`
    display: flex;
    width: 120px;
    height: 30px;
    flex-wrap: wrap;
    flex-direction: column;

    & > div {
        ${h7Bold}
        margin-right: 8px;
        margin-bottom: 4px;
    }

    & > input {
        width: 68px;
        height: 30px;
        box-sizing: border-box;
        border: solid 0.5px #ACACA8;
        border-radius: 20px;
        padding-left: 15px;

        ${h9Regular}

    }

`

S.codeWrap = styled.div`
    width: 464px;
    height: 52px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 108px;
    margin-left: 24px;
    justify-content: space-between;
`

S.CardIcon1 = styled.div`
    width: 40px;
    height: 40px;

`

S.CardIcon2 = styled.div`
    width: 48px;
    height: 28px;
`

S.CardRegisterBtn = styled.div`
    cursor: pointer;
    width: 73px;
    margin-top: 20px;
    margin-left: 440px;
    height: 32px;
    display: flex;
    flex-wrap: wrap;
    border-radius: 20px;
    background-color: #113F8A;
    align-items: center;
    justify-content: center;
    ${h8Regular}
    
    & > button {
        background-color: transparent;
        border: 0;
        color : #FFFFFF;
        cursor: pointer;
    }
`
// 쿠폰 배경

S.CardBgWrap = styled.div`
    position: fixed;
    width: 100dvw;
    height : 100dvh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1999;
    left: 0;
    top: 0;

`
S.CardPopUpContainer = styled.div`
    display: flex;
    position: fixed;
    top : 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    border: solid black 1px;
    width: 656px;
    height: 685px;
    z-index: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;

`

S.CardPopUpBtn = styled.div`
    position: absolute;
    z-index: 2;
    margin-left: 613px;
    margin-bottom: 640px;
    
    & > img {
        cursor: pointer;
        width: 40px;
        height: 40px;
    }
`

export default S;