import styled from "styled-components";

const S = {}

S.LogoWrap = styled.div`
width : 236px;
height : 60px;

& img {
    width : 100%
}
`

S.SellerMain = styled.div`
  width: 464px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
`

S.Input = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

S.TextBox = styled.div`
  display: flex;
  flex-direction: row;
`

S.Red = styled.p`
 color: #C83F3F;
`

S.InputButton = styled.input`
  background-color: #ffffff;
  width: 464px;
  height: 60px;
  border: 0.5px solid #828282;
  font-size: 14px;
  color: #828282;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 19px 26px;
  outline:none;
`

S.AuthButton = styled.button`
  position: absolute; 
  right: 14px; 
  top: 31px;
  transform: translateY(-50%);
  background-color: #ffffff;
  padding: 8px 15px; 
  color: #C83F3F;
  border: none; 
  cursor: pointer; 
  font-size: 14px;
  line-height: 22px;
  font-weight: bold;
`

S.InputContainer = styled.div`
  position: relative; 
  width: 464px;
`

S.Mark = styled.div`
  width:22px;
  height: 22px;
  flex-shrink: 0;
  background-image: url("../../images/member/eye-off.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  position: absolute;
  right: 29px;
  top: 31px;
  transform: translateY(-50%);
`

S.Line = styled.div`
  width: 464px;
  border: solid 1px #CECECE;
  margin: 15px 0px;
`

S.TextBox1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 463px;
  justify-content: left;
  align-items: left;
`

S.AgreeAll = styled.div`
  width: 390px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`

S.Line2 = styled.div`
  width: 389px;
  border: solid 1px #E9E9E9;
  margin: 9px 0px 12px 0px;
`
S.Agree = styled.div`
  width: 370px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`
S.TextBox2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 209px;
`
S.Agree1 = styled.div`
  width: 14px;
  height: 14px;
`
S.AgreeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 463px;
  height: 180px;
  border-radius: 20px;
  border: solid 1px #CECECE;
  flex-shrink: 0;
`

S.LoginButton = styled.div`
  width: 464px;
  height: 55px;
  background-color: #FFC303;
  font-size: 16px;
  font-weight: bold;
  border-style: none;
  border-radius: 20px;
  box-sizing: border-box;
  cursor: pointer;
  margin-top: 30px;
`

S.Agree2 = styled.div`
  width: 370px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

S.AllAgree = styled.div`
  width: 16px;
  height: 16px;
`
// 일반회원 추가 

S.InputButton1 = styled.input`
  background-color: #ffffff;
  width: 464px;
  height: 60px;
  border: 0.5px solid #828282;
  font-size: 14px;
  color: #828282;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 19px 26px;
  outline:none;
  margin-top: 9px;
`

export default S;