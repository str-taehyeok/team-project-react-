import styled from "styled-components";
import {
  flexRowCenter
} from '../../global/common'
const S = {}

S.root = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

// logo CSS
  S.LoginMain = styled.div`
    align-items: center; 
    justify-content: center;
    width: 464px;
    padding-bottom: 40px;
  `

S.LogoBox = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center;
  width: 464px;
  padding-bottom: 40px;
  
  & img{
    width: 236px;
    height: 60px;
    box-sizing: border-box;
  }
  `
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
    display: flex;
    justify-content: center;
    align-items: center;
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
    display: flex;
    justify-content: center;
    align-items: center;
    &:focus{
      background-color:#828282;
      color: #ffffff;
    }
  `
  S.Tap = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;

  `
   S.Input = styled.input`
    background-color: #ffffff;
    width: 464px;
    height: 60px;
    border: 0.5px solid #828282;
    font-size: 14px;
    color: #828282;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 19px 26px;
    outline: none;
   `

export default S;