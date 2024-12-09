import styled from "styled-components";
import {
  flexRowCenter,
  flexColumnCenter,
  h7Bold,
  h8Bold,
  h6Bold,
  h8Regular,
} from "../../global/common";
import theme from "../../global/theme";

const S = {};

S.LogoWrap = styled.div`
  width: 236px;
  height: 60px;

  & img {
    width: 100%;
    height: 100%;
  }
`;

S.LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 464px;
  padding-bottom: 40px;
`;

S.Text = styled.p`
  ${h6Bold}
`;

S.JoinMain = styled.div`
  width: 464px;
  ${flexColumnCenter};
  margin: 100px auto;

  & .logo-margin {
    margin-bottom: 55px;
  }
`;

S.RadioBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  padding-bottom: 30px;
  gap: 30px;

  & input {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    border: 1px solid #d9d9d9;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    margin: 0;
  }

  & input :checked {
    background-color: #113f8a;
    border: 3px solid #fff;
    box-shadow: 0 0 0 1px #113f8a;
  }

  & label {
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: center;
    gap: 13px;
  }
`;
S.NextButton = styled.button`
  width: 142px;
  height: 32px;
  background-color: #ffc303;
  ${h8Bold};
  border-style: none;
  border-radius: 20px;
  box-sizing: border-box;
  cursor: pointer;
  margin-top: 30px;
  ${flexRowCenter};
`;

S.SellerMain = styled.div`
  width: 464px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
`;

S.Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

S.InputText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

    & .inputTextGap {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
`;

S.TextBox = styled.div`
  display: flex;
  align-items: center;
`;

S.Red = styled.p`
  color: #131313;
`;

S.InputButton = styled.input`
  background-color: #ffffff;
  width: 464px;
  height: 60px;
  border: 0.5px solid #828282;
  font-size: ${theme.FONT_SIZE.h8};
  color: #828282;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 19px 26px;
  outline: none;
  ${flexRowCenter};
    &::-webkit-inner-spin-button{
      -webkit-appearance: none;
      margin: 0;
    }
`;

S.AuthNumberContainer = styled.div`
  margin-top: 10px;
`;

S.P = styled.p`
  color: red;
  font-size: 12px;
  font-style: italic;
  margin-top: 5px;
  margin-left: 2px;
`;

S.AuthButton = styled.button`
  position: absolute;
  right: 14px;
  top: 31px;
  transform: translateY(-50%);
  background-color: transparent;
  padding: 8px 15px;
  color: #c83f3f;
  border: none;
  cursor: pointer;
  ${h8Bold};
  ${flexRowCenter};
`;

S.InputContainer = styled.div`
  position: relative;
  width: 464px;
`;

S.Mark = styled.div`
  width: 22px;
  height: 22px;
  background-image: url(${process.env.PUBLIC_URL}/assets/images/join/eye-off.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  position: absolute;
  right: 29px;
  top: 31px;
  transform: translateY(-50%);
`;

S.Line = styled.div`
  width: 464px;
  border: solid 1px #cecece;
  margin: 15px 0px;
`;

S.TextBox1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 463px;
  justify-content: left;
  align-items: left;
`;

S.AgreeAll = styled.div`
  width: 390px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;

S.Line2 = styled.div`
  width: 389px;
  border: solid 1px #e9e9e9;
  margin: 9px 0px 12px 0px;
`;
S.Agree = styled.div`
  width: 370px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
    
  & .option-agree{
      display: flex;
      align-items: center;
    }
`;
  
S.TextBox2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 350px;
  justify-content: space-between;

`;
S.Agree1 = styled.input`
  width: 14px;
  height: 14px;
`;
S.AgreeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 463px;
  height: 180px;
  border-radius: 20px;
  border: solid 1px #cecece;
  flex-shrink: 0;
`;

S.LoginButton = styled.button`
  width: 464px;
  height: 55px;
  background-color: #ffc303;
  ${h7Bold};
  border-style: none;
  border-radius: 20px;
  box-sizing: border-box;
  cursor: pointer;
  margin-top: 30px;
  ${flexRowCenter};
`;

S.Agree2 = styled.div`
  width: 370px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

S.AllAgree = styled.input`
  width: 16px;
  height: 16px;
`;
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
  outline: none;
  margin-top: 9px;
  ${flexRowCenter};
`;
S.PhoneMain = styled.div`
  width: 464px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px auto;

  & .logo-margin {
    margin-bottom: 55px;
  }
`;

S.CompletionMain = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 80vh;

`;


S.Box = styled.div`
  width: 1280px;
  height: 340px;
  border-top: solid 1px #828282;
  border-bottom: solid 1px #828282;
  box-sizing: border-box;
  padding: 79px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

    &img {
      margin-bottom: 7px;
    }
`;

S.Text1 = styled.p`
  ${h8Regular};
`;

S.Text2 = styled.p`
  font-size: ${theme.FONT_SIZE.h9};
`;

S.Text3 = styled.p`
  font-size: ${theme.FONT_SIZE.h10};
`;

S.Text4 = styled.p`
  font-size: ${theme.FONT_SIZE.h11};
  color: #acaca8;
`;

export default S;
