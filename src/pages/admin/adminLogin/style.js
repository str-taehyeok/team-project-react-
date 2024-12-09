import styled from "styled-components";

const S = {};
// Logo Box
S.LogoBox = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center;
  width: 464px;
  margin-bottom: 40px;

  & img {
    width: 236px;
    height: 60px;
    box-sizing: border-box;
    
  }
`

S.Admin = styled.div`
  width:464px;
  height: 50px;
  background-color: #888888;
  border-radius: 50px;
  margin-bottom: 20px;
  & P {
    color: #ffffff;
    font-size:14px;
    line-height: 50px;
    font-weight: bold;
    text-align: center;
  }

`

// Input 

S.InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
S.Text = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  margin-left: 2px;
  font-weight: bold;
`;

S.LoginBox = styled.div`
display: flex;
flex-direction: column;
margin : 0 auto;
width: 464px;
align-items: center;
justify-content: center;
margin-top: 220px;
`









export default S;
