import styled from "styled-components";
import { h1Bold, h7Bold, h7Medium, h6Bold, h6Medium, flexRowCenter } from "../../../global/common";
import { Link } from "react-router-dom";
import theme from "../../../global/theme";

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

S.CustomProductWrap = styled.div`
  display: flex;
  column-gap: 26px;
  row-gap: 40px;
  width: 1440px;
  flex-wrap: wrap;
  margin: 0 0 227px 0;
`

S.CustomProduct = styled.div`
  width: 340px;
  position: relative;
  .like-icon{
    position: absolute;
    right: 20px;
    top: 20px;
    z-index: 999;
  }

  .thumb {
    width: 100%;
  }
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

S.CustomProductMessage = styled.p`
  width: 100%;
  text-align: center;
`


// 버튼 정렬 스타일

S.SortButtonWrapper = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-between;
  margin: 176px 0 60px auto;
  
  & > div {
    position: relative;
  }
`

S.SortButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 96px;
  height: 42px;
  border-radius: 20px;
  border: solid 1px ${theme.PALETTE.gray500};

  img { 
    position: absolute; 
    top: 50%;
    right: 6px;
    transform: translate(0, -50%);
    width: 12px;
  }
`

S.SortModal = styled.div`
  position: absolute;
  display: none;
  flex-direction: column;
  left: 0;
  min-width: 114px;
  top: 50px;
  z-index: 1000;
  gap: 12px;
  border: solid 1px #d9d9d9;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  p {
    white-space: nowrap;
  }

  div {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  &.active {
    display: flex;
  }
  
  & input {
    border : none;
  }
`

S.ColorCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${({subtitle}) => subtitle};
`






S.GoShopping = styled.div`
  margin-top: 298px;
  width: 1440px;
  height: 600px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  & img {
    width: 491px;
    height: 597px;
  }


`

S.GoShoppingTitle = styled.div`
margin-top: 72px;
  width: 514px;
  height: 454px;
  display: block;
  margin-left: 110px;
  position: relative;
  
  & p:nth-child(1) {
    ${h1Bold}
    height: 54px;
  }

  & :nth-child(2) {
    ${h1Bold}
    height: 54px;

  }

  & :nth-child(3) {
    ${h6Medium}
    line-height: 54px;
  }

`


S.Link = styled(Link)`
  width: 238px;
  height: 66px;
  background-color: #D9D9D9;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 220px;

  ${h7Bold}
  

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
  position: relative;

  .like-icon{
    position: absolute;
    right: 20px;
    top: 20px;
    z-index: 999;
  }

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


S.StoreToCommunityBanner = styled.div`
  width: 1440px;
  height: 600px;
  position: relative;

`

S.CommunityBtnWrap = styled.div`
  width: 184px;
  height: 54px;
`

S.CommunityBtn = styled.div`
  width: 182px;
  height: 52px;
  background-color: #FFFFFF;
  box-sizing: border-box;
  border: solid 1px #131313;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 44px;
  bottom: 330px;


  & div {
    width: 102px;
    height: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  & :nth-child(1) {
    ${h6Bold}
    height: 27px;
    margin-right: 4px;

    & img {
      height: 24px;
      width: 24px;
    }
  }

 

`

S.GoShopping2 = styled.div`
  margin-top: 212px;
  width: 1440px;
  height: 600px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  & img:nth-child(2){
    margin-left: 58px;
  }

`
S.GoShoppingTitle2 = styled.div`
  margin-top: 72px;
  width: 514px;
  height: 454px;
  display: block;
  margin-right: 300px;
  margin-left: 76px;

  
  & :nth-child(1) {
    ${h1Bold}
    height: 54px;
  }

  & :nth-child(2) {
    ${h1Bold}
    height: 54px;

  }

  & :nth-child(3) {
    ${h6Medium}
    line-height: 54px;
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
  position: relative;

  .like-icon{
    position: absolute;
    right: 20px;
    top: 20px;
    z-index: 999;
  }

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

// 드롭다운!

S.ColorProductWrap = styled.div`
      margin: 0 auto;
      ${flexRowCenter};
`

S.Block = styled.div`
          display: flex;
            & button{
                font-size: 14px;
                border-radius: 20px;
                width: 96px;
                height: 42px;
                background-color: #fff;
                border-color: #888888;
                margin-bottom: 50px;
            }

`
S.BlockTitle = styled.span`
            font-size: 40px;
            margin-right: 578px;
            font-weight: bold;
        `;

S.DropdownWrapper = styled.div`
    position: relative;
    display: inline-block;
`;

S.Arrow = styled.img`
        width: 10px;
        height: 10px;
    `

    S.DropdownContent = styled.div`
        position: absolute;
        top: 50px;
        left: 10px;
        background: white;
        min-width: 120%;
        border: 1px solid #D9D9D9;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        display: ${props => props.isOpen ? 'block' : 'none'};
        z-index: 1000;
    `;

S.DropdownItem = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        cursor: pointer;
        background-color: ${props => props.isSelected ? '#f0f0f0' : 'white'};
        border-radius: 10px;
        
        &:hover {
            background-color: #f5f5f5;
            border-radius: 10px;
        }
    
        input {
            margin-right: 10px;
        }
        
        & img{
            width: 30px;
            height: 30px;
        }
    `;

S.ProductWrap = styled.div`
            grid-template-columns: repeat(4, 1fr);
            display: grid;
            justify-content: space-between;
            gap: 24px;
    `;




export default S;
