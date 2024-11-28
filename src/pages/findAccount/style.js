import styled from "styled-components";
import {
  flexRowCenter,
  flexColumnCenter,
  h7Bold,
  h8Bold,
} from "../../global/common";
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

export default S;
