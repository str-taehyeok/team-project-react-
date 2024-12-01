import styled from "styled-components";
import { flexRowCenter,flexColumnCenter, h7Bold } from "../../global/common";
import theme from "../../global/theme";

const S = {};

/////////////////////////////FindType

S.LogoWrap = styled.div`
  width: 236px;
  height: 60px;

  & img {
    width: 100%;
  }
`;

S.Text = styled.p`
  margin-top: 55px;
`;

S.FindMain = styled.div`
  width: 464px;
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


S.Tap = styled.button`
  display: flex;
  flex-direction: row;
`;

S.IdBtn = styled.button`
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

`;

S.PasswordBtn = styled.button`
  width: 220px;
  height: 44px;
  border-radius: 20px;
  border: solid 1px #828282;
  font-size: 16px;
  font-weight: bold;
  color: #828282;
  background-color:#ffffff;
  cursor: pointer;
`;


S.Input = styled.button`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 40px;
`;

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
  outline: none;
`;


export default S;
