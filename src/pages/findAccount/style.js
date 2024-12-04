import styled from "styled-components";
import { flexRowCenter, flexColumnCenter, h7Bold, h4Bold, h8Bold } from "../../global/common";
import theme from "../../global/theme";

const S = {};

S.MainContent = styled.div`
  // 스타일 정의
`;

S.LogoWrap = styled.div`
  width: 236px;
  height: 60px;

  & img {
    width: 100%;
  }
`;

S.LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 464px;
  margin-bottom: 40px;
`;

S.Text = styled.p`
  margin-top: 55px;
`;

S.FindMain = styled.div`
  display: flex;
  ${flexColumnCenter};
  margin: 235px auto;
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

/////////////////////////////FindId

S.InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
`;

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
  padding-right: 50px; 
`;

S.AuthButton = styled.button`
  font-size: 14px;
  font-weight: bold;
  color: #ff0000;
  cursor: pointer;
  position: absolute;
  right: 26px; 
  top: 60%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  
  &:hover {
    background-color: transparent;
  }

  &:active {
    background-color: transparent;
  }
`;


///////////////////////////////////////인증버튼 (위)


S.AuthNumberContainer = styled.div`
  position: relative;
  width: 464px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


S.TapGroup = styled.div`
  display: flex;
  gap: 24px;
`;

S.Tab = styled.button`
  width: 220px;
  height: 44px;
  border-radius: 20px;
  border: solid 1px #828282;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => (props.$isActive ? "#ffffff" : "#828282")};
  background-color: ${(props) => (props.$isActive ? "#828282" : "#ffffff")};
  cursor: pointer;
`;

S.InputContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

S.InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

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
`;

S.FindCompleteWrapper = styled.div`
  width: 80vw;
  display: flex;
`;

S.Label = styled.label`
  font-weight: 500;
`;

S.Hr = styled.hr`
  width: 80vw;
  border-bottom: 1px solid #828282;
`;

S.CompleteButton = styled.button`
  background-color: #ffc303;
  border: none;
  width: 100px;
  border-radius: 20px;
`;

/////////////////////////////FindIdComplete

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
`;

S.BoldText = styled.p`
  ${h4Bold}
`

S.Text1 = styled.p`
  font-size: ${theme.FONT_SIZE.h8};
  margin-top: 14px;
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

S.GoToLoginButton = styled.button`
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
`

S.Message = styled.p`
  font-size: 14px;  
  color: #828282; 
  text-align: left;
  line-height: 1; 
  margin-bottom: 10px; 
  margin-right: 35px;
`;


export default S;
