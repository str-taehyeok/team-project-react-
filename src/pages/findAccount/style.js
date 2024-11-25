import styled from "styled-components";

const S = {};

//////////////////////////////////// FindType
S.FindMain = styled.div`
  width: 464px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
`;

S.LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 464px;
  padding-bottom: 40px;

  & img {
    width: 236px;
    height: 60px;
    box-sizing: border-box;
  }
`;

S.Text = styled.p`
  font-size: 20px;
  text-align: center;
`;

S.Text1 = styled.p`
  font-size: 14px;
`;

S.RaidoBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  padding-bottom: 30px;
  gap: 30px;
`;

S.RadioInput = styled.input.attrs({
  type: 'radio', // 기본적으로 input 요소에 type="radio" 속성 추가 (gpt)
})`
  flex-shrink: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid #D9D9D9;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  margin: 0;

  &:checked {
    background-color: #113F8A;
    border: 3px solid #fff;
    box-shadow: 0 0 0 1px #113F8A;
  }
`;

S.Label = styled.label`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 13px;
`;

S.NextButton = styled.button`
  width: 464px;
  height: 55px;
  background-color: #FFC303;
  font-size: 16px;
  font-weight: bold;
  border-style: none;
  border-radius: 20px;
  box-sizing: border-box;
  cursor: pointer;
`;


//////////////////////////////////// FindId
S.CompletionMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
`;

S.LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`;

S.Box = styled.div`
  text-align: center;
  width: 400px;
`;

S.Text = styled.p`
  font-size: 20px;
  color: #333;
`;

S.Text1 = styled.p`
  font-size: 16px;
  color: #666;
  margin-top: 10px;
`;

S.NextButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #FFC303;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 20px;
`;


//////////////////////////////////// CompletionMain
S.CompletionMain = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 80vh;
`;

S.LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 464px;
  padding-bottom: 40px;
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
`;

S.CheckImage = styled.img`
  width: 45px;
  height: 45px;
  padding-bottom: 7px;
`;

S.Text = styled.p`
  font-size: 28px;
  line-height: 40px;
  font-weight: bold;
`;

S.Text1 = styled.p`
  font-size: 14px;
  line-height: 22px;
  padding-top: 14px;
  padding-bottom: 26px;
`;

S.NextButton = styled.button`
  width: 142px;
  height: 32px;
  background-color: #ffc303;
  font-size: 14px;
  line-height: 22px;
  font-weight: bold;
  border-style: none;
  border-radius: 20px;
  box-sizing: border-box;
  cursor: pointer;
`;

S.LogoImage = styled.img`
  width: 236px;
  height: 60px;
  box-sizing: border-box;
`;


export default S;
