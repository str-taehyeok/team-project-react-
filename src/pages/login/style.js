import styled from "styled-components";

const S = {}

  //Login CSS
  S.MemberBtn = styled.div`
    width: 220px;
    height: 44px;
    border-radius: 20px;
    border: solid 1px #828282;
    margin-right: 24px;
    font-size: 16px;
    font-weight: bold;
    color: #828282;
    background-color:#ffffff;
    cursor: pointer;
    &:focus{
      background-color:#828282;
      color: #ffffff;
    }
  `
  S.SellerBtn = styled.div`
    width: 220px;
    height: 44px;
    border-radius: 20px;
    border: solid 1px #828282;
    font-size: 16px;
    font-weight: bold;
    color: #828282;
    background-color:#ffffff;
    cursor: pointer;
    &:focus{
      background-color:#828282;
      color: #ffffff;
    }
  `
  S.AdminBtn = styled.div`
    width: 220px;
    height: 44px;
    border-radius: 20px;
    border: solid 1px #828282;
    font-size: 16px;
    font-weight: bold;
    color: #828282;
    background-color:#ffffff;
    cursor: pointer;
    &:focus{
      background-color:#828282;
      color: #ffffff;
    }
  `

  S.LoginMain = styled.div`
    display: flex;
    align-items: center; 
    justify-content: center;
    width: 464px;
    padding-bottom: 40px;
  `
  S.HeaderWrap = styled.div``;

  S.LogoBox = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center;
  width: 464px;
  padding-bottom: 40px;

  &:img{
    width: 236px;
    height: 60px;
    box-sizing: border-box;
  }
  `

export default S;