import styled from "styled-components";
import { Link } from 'react-router-dom';

const S = {}
S.WriteBox = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

S.Title = styled.div`
  font-size: 40px;
  line-height: 54px;
  font-weight: bold;
  width: 1437px;
  margin-top: 46px;
  padding: 0px 0px 0px 123px;
`

S.SearchInput = styled.div`
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
    margin-top: 30px;
  }
`
S.Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 35px;
  margin-bottom: 180px;

  & button.search {
      width: 90px;
      height: 30px;
      border-radius: 20px;
      background-color: #ffffff;
      border:1px solid #131313;
      color: #131313;
      font-size: 14px;
      line-height: 22px;
      cursor: pointer;
    }
    & button.reset {
      width: 90px;
      height: 30px;
      border-radius: 20px;
      background-color: #ffffff;
      border:1px solid #131313;
      color: #131313;
      font-size: 14px;
      line-height: 22px;
      cursor: pointer;
    }
    & button.add {
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

`
S.BannerList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1440px;
  margin: 0 auto;
`

S.Table = styled.table`
  width: 100%;
  

    & tr.number {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 108px;
    }
    & tr.start {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 191px;
    }
    & tr.end {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 191px;
    }
    & tr.name {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
    }
    & tr.look {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 459px;
    }
    & tr.button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 191px;
    }


    & td.number {
        width: 108px;
        text-align: center;
        padding: 15px 10px;
        font-size: 16px;
        line-height: 24px;
    }
    & td.start {
        width: 191px;
        text-align: center;
        padding: 15px 10px;
        font-size: 16px;
        line-height: 24px;
    }
    & td.end {
        width: 191px;
        text-align: center;
        padding: 15px 10px;
        font-size: 16px;
        line-height: 24px;
    }
    & td.name {
        width: 300px;
        text-align: center;
        padding: 15px 10px;
        font-size: 16px;
        line-height: 24px;
    }
    & td.look {
      width: 459px;
      padding: 5px 10px;
      height: 56px;

    }
    & td.button {
        width: 191px;
        text-align: center;
        padding: 15px 10px;
        font-size: 16px;
        line-height: 24px;
        
    }

    & th {
        font-weight: bold;
        color: #333;
        flex: 1;
        text-align: center;
        padding: 15px 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 20px;
        line-height: 30px;
        font-weight: bold;
        border-bottom: 1px solid #828282;
    }
`;

S.Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  
  & button.delete {
      width: 46px;
      height: 24px;
      border-radius: 20px;
      background-color: #ffffff;
      border:1px solid #131313;
      color: #131313;
      font-size: 10px;
      line-height: 16px;
      cursor: pointer;
    }
 `
S.LinkButton = styled(Link)`
      width: 46px;
      height: 24px;
      border-radius: 20px;
      background-color: #888888;
      border:none;
      color: #ffffff;
      font-size: 10px;
      line-height: 24px;
      cursor: pointer;
      align-items: center;
      justify-content: center;
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
S.TextInputBox = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  margin-top: 100px;
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
  }
`
S.TitleText = styled.div  `
    font-size: 20px;
    line-height: 30px;
    font-weight: bold;
    width: 100px;
    text-align: left;
    margin-right: 50px;
`
S.LinkInputBox = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
`
S.LinkInput = styled.div  `
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
  }
`
S.LinkText = styled.div  `
    font-size: 20px;
    line-height: 30px;
    font-weight: bold;
    width: 100px;
    text-align: left;
    margin-right: 50px;
`

S.ImgInputBox = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
`
S.ImgInput = styled.div  `
  & input {
    border-radius: 20px;
    border-style: none;
    border: solid 1px #828282;
    width: 763px;
    height: 55px;
    padding: 15px 26px;
    font-size: 14px;
    line-height:22px;
    color:#828282;
    outline:none;
    text-align: center;
  }
`
S.ImgText = styled.div  `
    font-size: 20px;
    line-height: 30px;
    font-weight: bold;
    width: 100px;
    text-align: left;
    margin-right: 50px;
`

S.DateBox = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
`
S.DatButton = styled.div  `
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
  }
`
S.DateText = styled.div  `
    font-size: 20px;
    line-height: 30px;
    font-weight: bold;
    width: 100px;
    text-align: left;
    margin-right: 50px;
`

S.UseBox = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
`
S.UseButton = styled.div  `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  & input {
    border-style: none;
    border: solid 1px #828282;
    width: 20px;
    height: 20px;
    padding: 19px 26px;
    font-size: 14px;
    line-height: 22px;
    color:#828282;
    outline:none;
  }


`
S.Radio = styled.div`
    display: flex;
    flex-direction: row;
    
    width: 763px;
     & input.date1 {
      border-radius: 20px;
      border-style: none;
      border: solid 1px #828282;
      width: 180px;
      height: 55px;
      padding: 19px 26px;
      font-size: 16px;
      line-height: 24px;
      color:#828282;
      outline:none;
      margin-left: 270px;
     }
     & input.date {
      border-radius: 20px;
      border-style: none;
      border: solid 1px #828282;
      width: 180px;
      height: 55px;
      padding: 19px 26px;
      font-size: 16px;
      line-height: 24px;
      color:#828282;
      outline:none;
     }
    & span { 
      text-align: center;
      line-height: 55px;
      font-size: 40px;
      margin-left: 21px;
      margin-right: 21px;
    }
    & input.no {
      margin-left: 270px;
    }


`
S.UseText = styled.div  `
    font-size: 20px;
    line-height: 30px;
    font-weight: bold;
    width: 100px;
    text-align: left;
    margin-right: 50px;
`

export default S;