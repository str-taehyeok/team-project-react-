import styled from "styled-components";
import { Link } from 'react-router-dom';
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
S.NoticeList = styled.section`
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
        width: 110px;
    }
    & tr.title {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 780px;
    }
    & tr.content {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
    }
    & tr.date {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
    }
    & tr.button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
    }


    & td.number {
        width: 110px;
        text-align: center;
        padding: 15px 10px;
        font-size: 16px;
        line-height: 24px;
    }
    & td.title {
        width: 780px;
        text-align: left;
        padding: 15px 10px;
        font-size: 16px;
        line-height: 24px;
    }
    & td.content {
        width: 200px;
        text-align: center;
        padding: 15px 10px;
        font-size: 16px;
        line-height: 24px;
    }
    & td.date {
        width: 200px;
        text-align: center;
        padding: 15px 10px;
        font-size: 16px;
        line-height: 24px;
    }
    & td.button {
        width: 150px;
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

S.ListButton = styled.div`
 display: flex;
 flex-direction: row;
 width: 1200px;
 justify-content: right;
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
  & button.update {
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
S.Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
 
 & button.listButton {
     font-size: 16px;
     line-height: 24px;
     color: #ffffff;
     border: none;
     background-color: #113F8A;
     border-radius: 20px;
     width: 180px;
     height: 42px;
     cursor: pointer;
     margin-top: 30px;
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

S.TitleBox = styled.div`
 padding: 25px 30px 0px 30px;
 border-top: 3px solid #131313;
 width: 1200px;
 margin: 5px auto;
`

S.ListTitle = styled.div`
 width: 100%;
 margin-bottom: 8px;
 font-size: 24px;
 line-height: 36px;
 text-align: left;
 font-weight: bold;
`

S.Count = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #828282;
  font-weight: bold;
  text-align: left;
  margin-right: 9px;
    & span {
      color: #131313;
    }
`
S.Span = styled.div`
  display: flex;
  flex-direction: row;

`
S.WriteBox = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

S.NoticeBox = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
S.Date = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #828282;
  font-weight: bold;
  text-align: left;
   margin-right: 9px;
   & span {
      color: #131313;
    }
`
S.Content = styled.div`
    width: 1200px;
    margin: 20px auto;
   padding: 30px 30px;
   border-bottom: 1px solid #D9D9D9;
   border-top: 1px solid #D9D9D9;
`
export default S;