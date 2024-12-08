import styled from "styled-components";
import { h1Bold, h6Regular, h8Regular } from "../../../global/common";

const S = {}

S.SellerUpdateWrap = styled.div`
  width: 1920px;
  margin: 0 auto;
`
S.SellerUpdate = styled.div`
  width: 1440px;
  margin: 0 auto;
`

S.SellerTitleWrap = styled.div`
  width: 1062px; 
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 60px;

`


S.SellerTitle = styled.div`
  width: 267px;
  height: 50px;
  ${h1Bold}
`

S.SellterBtn = styled.div`
  width: 195px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
S.SellerBox = styled.div`
  width: 638px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 122px;
  margin-left: 268px;
`


S.SellerName = styled.div`
  width: 637px;
  height: 55px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  & > p {
    ${h6Regular}
  }

  & input {
    width: 464px;
    height: 55px;
    box-sizing: border-box;
    border-radius: 20px;
    border: solid 0.5px #828282;
    padding-left: 26px;
  }
 

`

S.SellerId = styled.div`
width: 637px;
height: 55px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center; 
margin-bottom: 20px;

& > p {
  ${h6Regular}
}

& input {
  width: 464px;
  height: 55px;
  box-sizing: border-box;
  border-radius: 20px;
  border: solid 0.5px #828282;
  padding-left: 26px;
}
`

S.SellerEmail = styled.div`
width: 637px;
height: 55px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center; 
margin-bottom: 20px;

& > p {
  ${h6Regular}
}

& input {
  width: 464px;
  height: 55px;
  box-sizing: border-box;
  border-radius: 20px;
  border: solid 0.5px #828282;
  padding-left: 26px;
}
`
S.SellerBank = styled.div`
width: 637px;
height: 55px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center; 
margin-bottom: 20px;

& > p {
  ${h6Regular}
}

& input {
  width: 464px;
  height: 55px;
  box-sizing: border-box;
  border-radius: 20px;
  border: solid 0.5px #828282;
  padding-left: 26px;
}
`

S.SellerAccount = styled.div`
width: 637px;
height: 55px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center; 
margin-bottom: 20px;

& input {
  width: 464px;
  height: 55px;
  box-sizing: border-box;
  border-radius: 20px;
  border: solid 0.5px #828282;
  padding-left: 26px;
  margin-left: 172px;
}
`
S.SellerPhone = styled.div`
width: 637px;
height: 55px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center; 
margin-bottom: 20px;

& > p {
  ${h6Regular}
}

& input {
  width: 464px;
  height: 55px;
  box-sizing: border-box;
  border-radius: 20px;
  border: solid 0.5px #828282;
  padding-left: 26px;
}
`

S.SellerPassword = styled.div`
    width: 637px;
    height: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center; 
    margin-bottom: 20px;

    & > p {
      ${h6Regular}
    }

`
// 사업자 정보 관리

S.BusinessUpdateWrap = styled.div`
  width: 1920px;
  margin: 0 auto;

`
S.BusinessUpdate = styled.div`
  width: 1440px;
  margin: 0 auto;
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 307px;

`
S.BusinessUpdateTitleWrap = styled.div`
  width: 1062px;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;


`

S.BusinessUpdateTitle = styled.div`
 ${h1Bold}
`

S.BusinessUpdateBtn = styled.div`
  width: 190px;
  height: 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

`

S.BusinessBox = styled.div`
    margin-top: 68px;
    width: 950px;
    height: 660px;
    box-sizing: border-box;
    border: solid 0.5px #828282;
    border-radius: 20px;
    padding: 53px 191px 53px 191px;

`


S.BusinessName = styled.div`
width: 637px;
height: 55px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;

& > p {
  ${h6Regular}
}

& input {
  width: 464px;
  height: 55px;
  box-sizing: border-box;
  border-radius: 20px;
  border: solid 0.5px #828282;
  padding-left: 26px;
}


`

S.BusinessMemberName = styled.div`
width: 637px;
height: 55px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;

& > p {
  ${h6Regular}
}

& input {
  width: 464px;
  height: 55px;
  box-sizing: border-box;
  border-radius: 20px;
  border: solid 0.5px #828282;
  padding-left: 26px;
}


`
S.InternetBusinessNumber = styled.div`
width: 637px;
height: 55px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;

& > p {
  ${h6Regular}
}

& input {
  width: 464px;
  height: 55px;
  box-sizing: border-box;
  border-radius: 20px;
  border: solid 0.5px #828282;
  padding-left: 26px;
}


`
S.BusinessCategory = styled.div`
width: 637px;
height: 55px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;

& > p {
  ${h6Regular}
}

& input {
  width: 464px;
  height: 55px;
  box-sizing: border-box;
  border-radius: 20px;
  border: solid 0.5px #828282;
  padding-left: 26px;
}


`
S.memberAdress= styled.div`
width: 637px;
height: 55px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;

& > p {
  ${h6Regular}
}

& input {
  width: 464px;
  height: 55px;
  box-sizing: border-box;
  border-radius: 20px;
  border: solid 0.5px #828282;
  padding-left: 26px;
}


`
S.memberAdress= styled.div`
width: 637px;
height: 55px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;

& > p {
  ${h6Regular}
}

& input {
  width: 464px;
  height: 55px;
  box-sizing: border-box;
  border-radius: 20px;
  border: solid 0.5px #828282;
  padding-left: 26px;
}


`
S.BusinessInfoBox = styled.div`
  width: 590px;
  height: 88px;
  ${h8Regular}

  & > Link {
    ${h8Regular}
    color: #113F8A;
  }
`

S.Phone = styled.div`
 margin-top: 20px;
  ${h8Regular}
  color: #AAAAAA;
`
export default S;