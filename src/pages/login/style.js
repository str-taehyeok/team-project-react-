import styled from "styled-components";

const S = {};

// Root container
S.root = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

// Login Main Section
S.LoginMain = styled.div`
  width: 464px;
  padding-bottom: 40px;
  margin: 50px auto;
`;

// Logo Box
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

// Buttons
S.MemberBtn = styled.div`
  width: 220px;
  height: 44px;
  border-radius: 20px;
  border: solid 1px #828282;
  margin-right: 24px;
  font-size: 16px;
  font-weight: bold;
  background-color: ${({ isActive }) => (isActive ? "gray" : "#ffffff")};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  a{
    color: ${({ isActive }) => (isActive ? "#ffffff" : "#828282")};
  }
`;
  

S.SellerBtn = styled.div`
  width: 220px;
  height: 44px;
  border-radius: 20px;
  border: solid 1px #828282;
  font-size: 16px;
  font-weight: bold;
  color: #828282;
  background-color: ${({ isActive }) => (isActive ? "gray" : "#ffffff")};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  a{
    color: ${({ isActive }) => (isActive ? "#ffffff" : "#828282")};
  }
`;

// Input & Tap
S.Tap = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
`;

S.InputBox = styled.div`
  margin-bottom: 15px;
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

// Buttons
S.LoginButton = styled.button`
  width: 464px;
  height: 55px;
  background-color: #FFC303;
  font-size: 16px;
  font-weight: bold;
  border-style: none;
  border-radius: 20px;
  box-sizing: border-box;
  cursor: pointer;
  margin-top: 25px;
`;

// Texts
S.P = styled.p`
  color: red;
`;

S.IdSave = styled.p`
  font-size: 14px;
  color: #131313;
  margin: 0;
`;

// Checkboxes
S.SaveBox = styled.div`
  display: flex;
  align-items: center;
`;

S.SaveEmail = styled.input`
  appearance: none;
  display: block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-right: 10px;
  position: relative;
  background-color: #D9D9D9;
  box-sizing: border-box;
  transition: background-color 0.3s;
  cursor: pointer;

  &:checked {
    background-color: yellowgreen;
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ffffff;
  }
`;

// Other Boxes
S.Box4 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 464px;
  padding-top: 20px;
`;

S.Box3 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  width: 427px; 
`;

// Forgot Password
S.Forgot = styled.button`
  font-size: 14px;
  border: none;
  cursor: pointer;
  background-color: transparent; 
`;

S.TextBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; 
  justify-content: center;
  width: 464px;
  padding-top: 50px;
`
S.Text = styled.p`
  font-size: 14px;
  color: #828282;
  text-decoration: none;
  background-color: transparent;
`
S.TextDivider = styled.p`
  font-size: 14px;
  color: #828282;
  padding: 0px 5px;
`
S.JoinButton = styled.button`
  font-size: 14px;
  color: #828282;
  border: none;
  cursor: pointer;
  background-color: transparent;
`
S.Text2 = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: #828282;
  text-align: center;
  width: 464px;
  padding-top: 20px;
`
S.ApiLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 464px;
  padding-top: 20px;
  gap: 12px;
  margin-bottom: 113px;
`
S.BottonBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
S.BottonText = styled.p`
  font-size: 11px;
  color: #828282;
`
S.BottonText1 = styled.p`
  font-size: 8px;
  color: #828282;
  padding: 0px 18px;
`



export default S;
