import styled from "styled-components";

const S = {}

S.Title = styled.div`
  font-size: 40px;
  line-height: 54px;
  font-weight: bold;
  width: 1437px;
  margin-top: 46px;
  padding: 0px 0px 0px 123px;
`

S.TitleText = styled.div  `
    font-size: 20px;
    line-height: 30px;
    font-weight: bold;
`
S.ContentText = styled.div  `
    font-size: 20px;
    line-height: 30px;
    font-weight: bold;
    margin-top: 36px;
`

S.TextInput = styled.div  `
  & input {
    border-radius: 20px;
    border-style: none;
    border: solid 1px #828282;
    width: 763px;
    height: 55px;
    padding: 19px 26px;
    font-size: 14px;
    line-height: 22px;
    color:#828282;
    outline:none;
    margin-left: 50px;
  }
`
S.ContentInput = styled.div  `
  & textarea {
    border-radius: 20px;
    border-style: none;
    border: solid 1px #828282;
    width: 763px;
    height: 575px;
    padding: 19px 26px;
    font-size: 14px;
    line-height: 22px;
    color:#828282;
    outline:none;
    margin-left: 50px;
    resize: none;
  }
`


S.TextInputBox = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  margin-top: 100px;
`
S.InputBox = styled.div`
  display:flex;
  flex-direction: row;
  margin-top: 20px;
`

S.ButtonBox = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 100px;
    & button.done {
      width: 90px;
      height: 30px;
      border-radius: 20px;
      background-color: #113F8A;
      border:none;
      color: #ffffff;
      font-size: 14px;
      line-height: 22px;
      cursor: pointer;
    }
    & button.cancel {
      width: 90px;
      height: 30px;
      border-radius: 20px;
      background-color: #FFC303;
      border:none;
      color: #ffffff;
      font-size: 14px;
      line-height: 22px;
      cursor: pointer;
    }
    
`

S.WriteBox = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export default S;