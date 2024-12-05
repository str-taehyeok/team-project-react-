import styled from "styled-components";
import {
  flexRowCenter,
  h4Bold,
  h8Bold,
  h9Regular,
} from "../../global/common";
import theme from "../../global/theme";

const S = {}

// 탈퇴 안내
S.Frame = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`

S.UnsubscribeContainer = styled.div`
  width: 952px;
  display: flex;
  flex-direction: column;
  margin: 200px 0 150px 0;
`

S.TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 22px;

    &p {
      font-size: 16px;
    }
`

S.P1 = styled.p`
  ${h4Bold}
`

S.P2 = styled.p`
  font-size: ${theme.FONT_SIZE.h7};
`

S.ListBox = styled.div`
  width: 952px;
  height: 212px;
  border: solid 1px #828282;
  border-radius: 20px;
  margin-bottom: 100px;
  ${h9Regular};
  color: ${theme.PALETTE.gray[500]};

`
S.InBoxWrap = styled.div`
  padding: 20px 0 20px 26px;
  display: flex;
  flex-direction: column;
  gap: 23px;

  
`
S.Ol = styled.ol`
  list-style: decimal !important;
  
`
S.Li = styled.li`
margin-left: 12px; 
`

S.Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`

S.GoBackButton = styled.button`
  width: 90px;
  height: 35px;
  color: white;
  border: none;
  background-color: #113F8A;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  `

S.GoUnscribeButton = styled.button`
  width: 90px;
  height: 35px;
  color: #131313;
  border: solid 1px #828282;
  background-color: white;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  `


// 탈퇴 완료
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

S.Text = styled.p`
  ${h4Bold}
`;

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


export default S;