import styled from "styled-components";

import {
    h1Bold
} from '../../../global/common'
const S = {}


S.ShoppingListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 1196px;
    border: solid green 1px;
    margin: 0 auto;
    
    & > p {
        ${h1Bold};
        margin-bottom: 146px;
        margin-top: 50px;
    }
`

S.ProfileContainer = styled.div`
    display: flex;
    width: 1124px;
    border: 1px solid red;
    margin : 0 auto;
`

S.ProfileBox = styled.div`
    display: flex;
    gap : 28px;
    flex-direction: column;
    border: solid #888888 1px;
    box-sizing: border-box;
    width: 270px;
    height: 430px;
    align-items: center;
    margin-right: 48px;
    border-radius: 20px;
    box-shadow: 2px 16px 19px 0px rgba(0,0,0, 9%);
`;

S.ProfileImage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: solid 1px #888;

    & > img {
        display: flex;
        width: 120px;
        height: 120px;
        border-radius: 60px;
        margin-top: 82px;
        margin-bottom: 25px;
    }
    & > p {
    display: flex;
    margin-bottom: 38px;
    font-size: 20px;
    font-weight: 700;
    }
`;

S.ProfileBoxCouponWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    & > img {
      display: flex;
      cursor: pointer;  
    }
    & > p {
      font-size: 12px;
      font-weight: 400;
    }
`;

S.ShoppingRight = styled.div`
    display: flex;
    border: solid 1px darkblue;
    flex-direction: column;
    align-items: center;
`

S.InputGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 31px;
    
    & input[type="date"] {
         width: 300px;
         height: 60px;
         padding: 17px;
         border-radius: 20px;
         border: 1px solid #ccc;
    }
    
    & span {
        font-size: 20px;
    }
    
    & > button {
        background-color: #113F8A;
        color: white;
        width: 68px;
        height: 30px;
        border-radius: 20px;
        margin-left: 24px;
    }
`

S.OrderBox = styled.div`
    border: solid 1px rebeccapurple;;
    width: 800px;
    height: 339px;
    border-radius: 20px;
`

S.OrderList = styled.div`
    width: 693px;
    height: 100px;
    display: flex;
`

S.OrderImg = styled.div`
    width: 100px;
    height: 100px;
    border: solid black 1px;
`

S.OrderTextWrap = styled.div`
    
`

S.OrderTextName = styled.p`

`

S.OrderTextPrice = styled.p`

`

S.OrderTextCount = styled.p`

`





export default S;