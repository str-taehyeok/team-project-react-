import styled from "styled-components";
import theme from "../../../global/theme";
import { h10Bold, h11Bold, h1Bold, h7Bold, h7Medium, red, h6Bold, gray400, gray100 } from "../../../global/common";
import StoreCustom from "./StoreCustom";

const S = {}

S.StoreMainWrap = styled.div`
  width: 1920px;
  margin: 0 auto;

`
S.StoreMain = styled.div`
  width: 1440px;
  margin: 0 auto;
`


S.StoreCustomTitle = styled.div`
  width: 1440px;
  height: 54px;
  margin: 0 auto;
  margin-top: 86px;

  & p {
    ${h1Bold};
  }
`
S.CustomWrap = styled.div`
  width: 1440px;
  height: 1310px;
  margin: 0 auto;
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 232px;

`

S.CustomProduct = styled.div`
  width: 342px;
  height: 558px;

`
S.CustomProductInfo = styled.div`
  margin-top: 21px;

  ${h7Medium};

  & p:nth-child(2) {
    color: #565555;
    text-decoration: line-through;
  }

  & span:nth-child(3) {
    ${h7Bold};
    color: #c83f3f;
  }

  & span:nth-child(5) {
    ${h7Bold};
  }

  & span:nth-child(7){
    color: #565555;
  }

  & span:nth-child(9){
    color: #565555;
  }

`

S.GoShopping = styled.div`
  margin-top: 298px;
  position: relative;

  & img:nth-child(2){
    margin-left: 13px;
  }

`
S.DogPickWrap = styled.div`
  width: 1440px;
  height: 1310px;
  margin: 0 auto;
  margin-top: 21px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 232px;

`

S.DogPickTitle = styled.div`
  margin-top: 238px;

  & p {

    ${h6Bold};

  }

`

S.DogPickProduct = styled.div`
  width: 342px;
  height: 558px;

`
S.DogPickProductInfo = styled.div`
  margin-top: 21px;

  ${h7Medium};

  & p:nth-child(2) {
    color: #565555;
    text-decoration: line-through;
  }

  & span:nth-child(3) {
    ${h7Bold};
    color: #c83f3f;
  }

  & span:nth-child(5) {
    ${h7Bold};
  }

  & span:nth-child(7){
    color: #565555;
  }

  & span:nth-child(9){
    color: #565555;
  }

`
S.btn = styled.div`
  width: 244px;
  height: 72px;
  background-color: #D9D9D9;
  box-sizing: border-box;
  border: solid 3px #404347;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 624px;
  bottom: 114px;
  

  & :nth-child(1) {
    ${h7Bold}
  }

`


S.GoShopping2 = styled.div`
  margin-top: 212px;
  position: relative;

  & img:nth-child(2){
    margin-left: 58px;
  }

`

S.CatPickWrap = styled.div`
  width: 1440px;
  height: 1310px;
  margin: 0 auto;
  margin-top: 21px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 232px;

`

S.CatPickTitle = styled.div`
  margin-top: 282px;

  & p {

    ${h6Bold};

  }

`

S.CatPickProduct = styled.div`
  width: 342px;
  height: 558px;

`
S.CatPickProductInfo = styled.div`
  margin-top: 21px;

  ${h7Medium};

  & p:nth-child(2) {
    color: #565555;
    text-decoration: line-through;
  }

  & span:nth-child(3) {
    ${h7Bold};
    color: #c83f3f;
  }

  & span:nth-child(5) {
    ${h7Bold};
  }

  & span:nth-child(7){
    color: #565555;
  }

  & span:nth-child(9){
    color: #565555;
  }

`




export default S;