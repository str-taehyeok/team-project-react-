import styled from "styled-components";
import theme from "../../../global/theme";
import { flexRowCenter, flexColumnCenter, h7Bold, h4Bold, h8Bold } from "../../../global/common";

const S = {}

  S.UpdateBox = styled.div`
    width: 1440px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
        & input.none {
          caret-color: transparent;
        }
    
  `

  S.Title = styled.div`
    font-size: 40px;
    line-height: 54px;
    font-weight: bold;
    margin-right: 600px;
  `
  S.ListButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    margin: 0 auto;
    margin-top: 60px;
    align-items: center;
   
    & button.delete {
      width: 90px;
      height: 30px;
      color: #ffffff;
      background-color: #113F8A;
      border-radius: 20px;
      font-size: 14px;
      line-height: 22px;
      margin-left: 5px;
      border: none;
      cursor: pointer;
      
    }
    & button.update {
      width: 90px;
      height: 30px;
      border-radius: 20px;
      background-color: #ffffff;
      border:1px solid #828282;
      color: #828282;
      font-size: 14px;
      line-height: 22px;
      cursor: pointer;
    }
  `
  S.NameText = styled.div`
    width: 145px;
    font-size: 20px;
    line-height: 30px;
  `
  S.NameInput = styled.div`
    & input {
      border-radius: 20px;
      border-style: none;
      border: solid 1px #828282;
      width: 464px;
      height: 55px;
      padding: 19px 26px;
      font-size: 14px;
      line-height: 22px;
      color:#828282;
      outline:none;
      margin-left: 27px;
    }
    & p {
      width: 464px;
      height: 55px;
      font-size: 16px;
      line-height: 55px;
      color:#000000;
      margin-left: 53px;
    }
  `
  S.NameInputBox = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    margin-top: 100px;
  `

  S.IdText = styled.div  `
      width: 145px;
      font-size: 20px;
      line-height: 30px;
  `
  S.IdInput = styled.div`
      & input {
        border-radius: 20px;
        border-style: none;
        border: solid 1px #828282;
        width: 464px;
        height: 55px;
        padding: 19px 26px;
        font-size: 14px;
        line-height: 22px;
        color:#828282;
        outline:none;
        margin-left: 27px;
      }
  
    & p {
      width: 464px;
      height: 55px;
      font-size: 16px;
      line-height: 55px;
      color:#000000;
      margin-left: 53px;
    }
  `
  S.IdInputBox = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    & p.email {
      width: 464px;
      height: 55px;
      font-size: 16px;
      line-height: 55px;
      color:#000000;
      margin-left: 27px;
    }
    
  `


  S.PayText = styled.div  `
        width: 145px;
        font-size: 20px;
        line-height: 30px;
    `
  S.BankInput = styled.div`
        & input {
          border-radius: 20px;
          border-style: none;
          border: solid 1px #828282;
          width: 464px;
          height: 55px;
          padding: 19px 26px;
          font-size: 14px;
          line-height: 22px;
          color:#828282;
          outline:none;
          margin-left: 27px;
        }
    & select {
      border-radius: 20px;
      border-style: none;
      border: solid 1px #828282;
      width: 464px;
      height: 55px;
      padding: 15px 26px;
      font-size: 14px;
      line-height: 22px;
      color:#828282;
      outline:none;
      margin-left: 27px;
      cursor: pointer;
    }
    & p {
      width: 464px;
      height: 55px;
      font-size: 16px;
      line-height: 55px;
      color:#000000;
      margin-left: 53px;
    }

    `
  S.BankAccInput = styled.div`
        & input {
          border-radius: 20px;
          border-style: none;
          border: solid 1px #828282;
          width: 464px;
          height: 55px;
          padding: 19px 26px;
          font-size: 14px;
          line-height: 22px;
          color:#828282;
          outline:none;
          margin-left: 172px;
          margin-top: 20px;
        }
    & p {
      width: 464px;
      height: 55px;
      font-size: 16px;
      line-height: 55px;
      color:#000000;
      margin-left: 200px;
    }
  `
  S.PayInputBox = styled.div`
      display:flex;
      flex-direction: row;
      align-items: center;
      margin-top: 20px;
    `

  S.PhoneText = styled.div  `
        width: 145px;
        font-size: 20px;
        line-height: 30px;
    `
  S.PhoneInput = styled.div`
        & input {
          border-radius: 20px;
          border-style: none;
          border: solid 1px #828282;
          width: 464px;
          height: 55px;
          padding: 19px 26px;
          font-size: 14px;
          line-height: 22px;
          color:#828282;
          outline:none;
          margin-left: 27px;
        }
    & p {
      width: 464px;
      height: 55px;
      line-height: 55px;
      font-size: 16px;
      color:#000000;
      margin-left: 53px;
    }
    `
  S.PhoneInputBox = styled.div`
      display:flex;
      flex-direction: row;
      align-items: center;
      margin-top: 20px;
    `


S.PwText = styled.div  `
        width: 145px;
        font-size: 20px;
        line-height: 30px;
    `
S.PwInput = styled.div`
        & input {
          border-radius: 20px;
          border-style: none;
          border: solid 1px #828282;
          width: 464px;
          height: 55px;
          padding: 19px 26px;
          font-size: 14px;
          line-height: 22px;
          color:#828282;
          outline:none;
          margin-left: 27px;
        }
  & p {
    width: 464px;
    height: 55px;
    font-size: 16px;
    line-height: 55px;
    color:#000000;
    margin-left: 53px;
  }
    `
S.PwInputBox = styled.div`
      display:flex;
      flex-direction: row;
      align-items: center;
      margin-top: 20px;
  & div.update-button {
    width: 464px;
    margin-left: 27px;
    height: 55px;
  }
  & button.update {
    width: 90px;
    height: 30px;
    color: #ffffff;
    background-color: #113F8A;
    border-radius: 20px;
    cursor: pointer;
    margin-top:14px;
    border: none;
  }
    `


  S.BussinessText = styled.div  `
          width: 145px;
          font-size: 20px;
          line-height: 30px;
      `
  S.BussinessInput = styled.div`
          & input {
            border-radius: 20px;
            border-style: none;
            border: solid 1px #828282;
            width: 464px;
            height: 55px;
            padding: 19px 26px;
            font-size: 14px;
            line-height: 22px;
            color:#828282;
            outline:none;
            margin-left: 27px;
          }
    & p {
      width: 464px;
      height: 55px;
      font-size: 16px;
      line-height: 55px;
      color:#000000;
      margin-left: 53px;
    }
    & p.number {
      width: 464px;
      height: 55px;
      font-size: 16px;
      line-height: 55px;
      color:#000000;
      margin-left: 27px;
    }
      `
  S.BussinessInputBox = styled.div`
        display:flex;
        flex-direction: row;
        align-items: center;
        margin-top: 20px;
  `
  S.Delete = styled.div`
    display:flex;
    flex-direction: row;
    margin-top: 20px;
    align-items: center;
    
      & div.delete-button {
        width: 464px;
        margin-left: 53px;
        height: 55px;
      }
      & button.delete {
        width: 90px;
        height: 30px;
        color: #ffffff;
        background-color: #113F8A;
        border-radius: 20px;
        cursor: pointer;
        margin-top:14px;
        border: none;
      }
  `

S.Update = styled.div`
    display:flex;
    flex-direction: row;
    margin-top: 20px;
    align-items: center;
    
      & div.update-button {
        width: 464px;
        margin-left: 53px;
        height: 55px;
      }
  & p {
    width: 464px;
    height: 55px;
    font-size: 16px;
    line-height: 55px;
    color:#000000;
    margin-left: 53px;
  }
  `
S.PwChangeBox = styled.div`

`
// x아이콘


S.CardPop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  
  & p {
    font-size: 16px;
    line-height: 24px;
    margin-top: 20px;
  }
  & input {
      border-radius: 20px;
      border: solid 1px #828282;
      width: 464px;
      height: 55px;
      padding: 19px 26px;
      font-size: 14px;
      line-height: 22px;
      color: #828282;
      outline: none;
  }
  & button.change {
    width: 100px;
    height: 40px;
    color: #ffffff;
    font-size: 14px;
    background-color: #828282;
    border-radius: 20px;
    cursor: pointer;
    margin-top:35px;
    border: none;
  }
`
S.PhoneContainer = styled.div`
  width: 635px;
  position: relative;

  & button.check {
    border: none;
    background-color: white;
    cursor: pointer;
    color: #113F8A;
    font-size: 12px;
    font-weight: bold;
    position: absolute; 
    right: 26px; 
    top: 19px;
  }

`


// 비번
S.CardPopUpBtn = styled.div`
    width: 600px;
    height: 450px;
    border: 1px solid #828282;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    background-color: #ffffff;
    
  
    & button.x {
        margin-left: 550px;
        background-color: #ffffff;
        border: none;
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 20px;
        margin-bottom: 10px;
    }
`



S.NextButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #828282;
  ${h7Bold};
  color: #ffffff;
  border-style: none;
  border-radius: 20px;
  box-sizing: border-box;
  cursor: pointer;
  margin-top: 20px;
  ${flexRowCenter};
`;



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
  color: #113F8A;
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


S.AuthNumberContainer = styled.div`
  position: relative;
  width: 464px;
  display: flex;
  align-items: center;
  justify-content: center;
`;




// noinspection CssInvalidPropertyValue
S.InputContainer = styled.div`
  width: 550px;
  height: 700px;
  border: 1px solid #828282;
  border-radius: 20px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  margin-bottom: 5px;
`;



S.Label = styled.label`
  font-weight: 500;
`;



S.NewPasswordMessage = styled.div`
  font-size: 12px;  
  color:#828282;
  text-align: left;
  line-height: 1.5; 
  margin-bottom: 10px; 
  margin-right: 50px;
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
  top: 50px;
  transform: translateY(-50%);
`;

S.P = styled.p`
  color: red;
  font-size: 12px;
  font-style: italic;
  margin-top: 5px;
`;



export default S;