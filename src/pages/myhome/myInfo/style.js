import styled from "styled-components";
import {
    h1Bold
} from '../../../global/common'
// import theme from "../../global/theme";

const S = {}


    S.MyHomeContainer = styled.div`
            display: flex;
            width: 100vwh;
    `;

    S.MyHomeWrap = styled.div`
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 auto;
            width: 1096px;
    `;

    S.MyHomeLeft = styled.div`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
            gap: 15px;
            
            & p {
                font-weight: 700;
                font-size: 40px;
            //    h1Bold
                ${h1Bold};
            }    
        
            & ul {
                display: flex;
                gap: 10px;
                list-style:none;
    
                & li {
                  display: flex;
                  font-size: 16px;
                  font-weight: 400;
                }
            }
    `;

    S.UpdateButtonWrap = styled.div`
            display: flex;
            width: 100%;
            justify-content: flex-end;
            margin-bottom: 54px;
    
            & button {
                display: flex;
                border-radius: 50px;
                border:solid 1px #888888;
                box-sizing: border-box;
                background-color: white;
                width: 118px;
                height: 42px;
                justify-content: center;
                align-items: center;
                
                & > p {
                    font-size: 16px;
                    font-weight: 400;
                }
            }
    `;

    S.ProfileBoxWrap = styled.div`
            display: flex;
    `;

    S.ProfileBox = styled.div`
            display: flex;
            flex-direction: column;
            border: solid #888888 1px;
            box-sizing: border-box;
            width: 270px;
            height: 430px;
            align-items: center;
            margin-right: 48px;
            border-radius: 20px;
            box-shadow: 2px 16px 19px 0px rgba(0,0,0, 9%);
    
            & > img {
                display: flex;
                width: 120px;
                height: 120px;
                border-radius: 60px;
                border: solid black 1px;
                margin-top: 82px;
                margin-bottom: 25px;
            }
                
            &  > p {
              display: flex;
              margin-bottom: 38px;
              font-size: 20px;
              font-weight: 700;
            }
    
            & > div {
              display: flex;
              width: 268px;
              height: 1px;
              background-color: #888888;
              margin-bottom: 28px;
            }
    `;

    S.ProfileBoxCouponWrap = styled.div`
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;
      
            & > img {
              display: flex;
            }
            
            & > p {
              font-size: 12px;
              font-weight: 400;
            }
    `;

    S.MemberInputBoxContainer = styled.div`
            display: flex;
            justify-content: center;
            align-items: center;
    `;

    S.MemberInputBoxWrap = styled.div`
            display: flex;
    `;

    S.MemberInputTagWrap = styled.div`
            display: flex;
            flex-direction: column;
            gap: 30px;
            margin-right: 44px;
    
            & > p {
              font-size: 16px;
              font-weight: 700;
            }
    `;

    S.MemberInputWrap = styled.div`
          display: flex;
          flex-direction: column;
          gap: 24px;
    
          & input {
              border-radius: 20px;
              padding:4px 0px 4px 26px;
              border: solid 1px #888888;
              box-sizing: border-box;
          }    
    `;



export default S;
