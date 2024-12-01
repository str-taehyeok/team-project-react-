import styled from "styled-components";
import {
    h1Bold,h7Bold,h8Regular,gray500,blue300,h7Regular,h2Bold,h6Regular,blue100
} from '../../../global/common'

// import theme from "../../global/theme";

const S = {}


    S.MyHomeContainer = styled.div`
        display: flex;
        width: 100vwh;
        margin-bottom: 409px;
    `;

    S.CouponBgWrap = styled.div`
        position: fixed;
        width: 100%;
        background-color: black;
        z-index: 999;
    `;

    S.CouponPopupContainer = styled.div`
        display: flex;
        position: fixed;
        top : 50%;
        left: 50%;
        flex-direction: column;
        border: solid black 1px;
        width: 656px;
        height: 685px;
        z-index: 1000;
        
        & > a {
            display: flex;
            justify-content: flex-end;
            margin-top: 12px;
            margin-bottom: 13px;
            margin-right: 27px;
        }
        
    `;

    S.h7b = styled.div`
        ${h7Bold};
        margin-top: 26px;
        margin-left: 100px;
    `;

    S.h7 = styled.div`
        ${h7Regular};
        margin-bottom: 27px;
        margin-left: 100px;
    `;


    S.CouponPopupInputWrap = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 28px;
        
        & input {
            width: 360px;
            height: 50px;
            border-radius: 20px;
        }
        
        & > button {
            width: 74px;
            height: 32px;
            border-radius: 20px;
            background-color: ${blue300};
            color: white;
        }
    `;

    S.CouponPopupBoxWrap = styled.div`
        display: flex;
        flex-direction: column;
        gap: 7px;
        width: 420px;
        height: 130px;
        border: solid black 1px;
        border-radius: 20px;
        justify-content: center;
        align-items: center;
        margin-left: 100px;
        background-color: ${blue100};
    `;

    S.h2b = styled.div`
        ${h2Bold};
    `;

    S.h6 = styled.div`
        ${h6Regular};
    `;

    S.MyHomeWrap = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        width: 1096px;
    `;

    S.MyHomeLeft = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        gap: 15px;
        padding-top: 50px;
        margin-left: 172px;
            
            & p {
                font-weight: 700;
                font-size: 40px;
                ${h1Bold}
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
            border: solid black 1px;
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
        }
        
        & > p {
          font-size: 12px;
          font-weight: 400;
        }
    `;

    S.ProfileBoxImageWrap = styled.div`
        display: flex;
        
        & button {
            border-radius: 20px;
            border: solid 1px ${gray500};
        }
    `;



    S.MemberInputBoxContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    S.MemberInputBoxWrap = styled.div`
        display: flex;
        flex-direction: column;
        gap: 30px;
        
    `;
    S.h7 = styled.div`
        ${h7Bold};
    `
    S.h8 = styled.div` 
        ${h8Regular};
        ${gray500};
    `;

    S.MemberInputBoxName = styled.div`
        display: flex;
        gap : 150px;
        
        & input {
            border: 1px solid ${gray500};
            border-radius: 20px;
            ${h8Regular};
        }
    ;`
    S.MemberInputBoxNickname = styled.div`
        display: flex;
        gap : 136px;

        & input {
            border: 1px solid ${gray500};
            border-radius: 20px;
            ${h8Regular};
        }
    ;`
    S.MemberInputBoxEmail = styled.div`
        display: flex;
        gap : 82px;

        & input {
            border: 1px solid ${gray500};
            border-radius: 20px;
            ${h8Regular};
        }
    ;`
    S.MemberInputBoxPhone = styled.div`
        display: flex;
        gap : 108px;

        & input {
            border: 1px solid ${gray500};
            border-radius: 20px;
            ${h8Regular};
        }
    ;`
    S.MemberInputBoxAddress = styled.div`
        display: flex;
        gap : 150px;

        & input {
            border: 1px solid ${gray500};
            border-radius: 20px;
            ${h8Regular};
        }
    ;`
    S.MemberInputAddress = styled.div`
        display: flex;
        flex-direction: column;
        gap: 30px;

        & input {
            border: 1px solid ${gray500};
            border-radius: 20px;
            ${h8Regular};
        }
    ;`







export default S;
