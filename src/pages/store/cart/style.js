import styled from "styled-components";
import { gray200, h1Bold, h2Bold, h4Medium, h6Medium, h7Bold, h7Medium, h8Medium, h9Medium, h8Regular, h10Regular } from "../../../global/common";

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


S.CartTitle = styled.div`
  margin-top: 190px;
  margin-bottom: 167px;

  & p {
    
    ${h2Bold}

  }
`
S.CartProduct = styled.div`
  width: 978px;
  height: 136px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  & img {
    width: 132px;
    height: 132px;
  }

`

S.CartProductInfo = styled.div`
  width: 814px;
  height: 61px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  & p:nth-child(1) {
    ${h8Medium}
    width: 254px;
    height: 61px;
    display: flex;
    overflow: hidden;
    margin-right: 55px;
  }

  & p:nth-child(2) {
    ${h9Medium}
    width: 80px;
    background-color: #D9D9D9;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    margin-right: 113px;
  }

  & p:nth-child(3) {
    ${h6Medium}
    width: 74px;
    
  }
  
  & p:nth-child(4) {
    ${h8Medium}
    width: 62px;
    color: #828282;
    text-decoration: line-through;
    height: 18px;

  }


  & p:nth-child(5) {
    width: 145px;
    height: 17px;
    box-sizing: border-box;
    border: solid 0.5px #828282;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${h9Medium}

  }


`

S.CartProductBox = styled.div`
  width: 1175px;
  height: 372px;
  box-sizing: border-box;
  border: solid 1px #828282;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;

  & button {
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;

}
`
S.CartProductRadio = styled.div`
  width: 1054px;
  height: 37px;
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  ${h7Bold}

  & hr {
    width:11124px;
    color:#828282;
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


S.RecommendStar = styled.div `
  width: 100px;
  height: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;

  & p {
    color: #828282;
  }

`
 



export default S;