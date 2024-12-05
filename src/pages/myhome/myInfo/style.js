import styled from "styled-components";
import {
    h1Bold,h7Bold,h8Regular,gray500,h7Regular,h2Bold,h6Regular,blue100,h9Regular
} from '../../../global/common'
import theme from "../../../global/theme";

// import theme from "../../global/theme";

const S = {}


S.MyHomeContainer = styled.div`
        display: flex;
        width: 100vwh;
        margin-bottom: 409px;
    `;

S.CouponBgWrap = styled.div`
        position: fixed;
        width: 100dvw;
        height : 100dvh;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 999;
        left: 0;
        top: 0;
    `;

S.CouponPopupContainer = styled.div`
        display: flex;
        position: fixed;
        top : 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        flex-direction: column;
        border: solid black 1px;
        width: 656px;
        height: 685px;
        z-index: 1000;
        background-color: #fff;
    `;

S.CouponP1 = styled.div`
        ${h7Bold};
        margin-top: 26px;
        margin-left: 100px;
    `;

S.CouponP2 = styled.div`
        ${h7Regular};
        margin-bottom: 27px;
        margin-left: 100px;
    `;

S.CloseIcon = styled.div`
        display: flex;
        justify-content: flex-end;
        margin-top: 12px;
        margin-bottom: 13px;
        margin-right: 27px;
    `

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
            background-color: ${theme.PALETTE.main["300"]};
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
        background-color: black;
        color: white;
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
            list-style: none;

            & li {
              display: flex;
              font-size: 16px;
              font-weight: 400;
                
                & a {
                    color: red;
                }
                & a.linkActive{
                    color: yellow;
                }
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
        width: 89px;
        height: 42px;
        justify-content: center;
        align-items: center;
        ${h7Regular};
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
            border: solid 1px #8888;
            width: 96px;
            height: 32px;
            ${h8Regular};
            background-color: white;
        }
    `;

S.MemberInputBoxContainer = styled.div`
        display: flex;
        width: 438px;
        align-items: center;
        flex-direction: column;
    `;

S.MemberInputBoxWrap = styled.div`
        display: flex;
        flex-direction: column;
    `;

S.h7 = styled.div`
        ${h7Bold};
        width: 108px;
        display: flex;
        align-items: center;
    `;

S.h7Address = styled.div`
        display: flex;
        ${h7Bold};
        width: 108px;
    `;

S.h8 = styled.div` 
        ${h8Regular};
        color: #828282;
        display: flex;
        align-items: center;
        padding: 4px 26px;
        border: solid 1px #fff;
    `;

S.MemberInputBox = styled.div`
        display: flex;
        gap : 44px;
        margin: 0 0 30px 0;

        & input {
            width: 285px;
            padding: 4px 26px;
            border: 1px solid #acaca8;
            border-radius: 20px;
            ${h8Regular};
            color: #828282;
            
        }
    `;

S.MemberInputAddress = styled.div`
        display: flex;
        flex-direction: column;
        gap: 15px;

        & input {
            display: flex;
            border: 1px solid ${gray500};
            border-radius: 20px;
            ${h8Regular};
        }
    `;

S.MemeberUnsubscribe = styled.a`
        display: flex;
        width: 336px;
    `;

S.PasswordUpdateInput = styled.div`
        display: flex;
        flex-direction: column;
        gap : 5px;
    
        &  p {
            font-size: 14px;
            font-weight: normal;
            margin: 0 0 0 0;
        }
    
        &  input {
            width: 464px;
            height: 54px;
            border-radius: 20px;
            padding: 19px 26px 19px 26px;
            font-size: 12px;
            box-sizing: border-box;
            border: 1px solid #828282;
            color: #828282;
            outline: none;
        }
    `;

S.PasswordUpdateForm = styled.form`
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 464px;
        margin-top: 104px;
    `;

S.PasswordUpdateButton = styled.button`
        width: 464px;
        height: 54px;
        border-radius: 20px;
        box-sizing: border-box;
        border: none;
        /* 엘로우200 */
        background-color: #FFC303;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
    `;

S.PasswordUpdateText = styled.div`
        display: flex;
    `;

S.PasswordUpdateTextStar = styled.div`
        color: #C83F3F;
    `;

S.ZipCode = styled.div`
        display: flex;
        position: relative;
        align-items: center;
        
        & p {
            position: absolute;
            right: 14px;
            color: #C83F3F;
            cursor:pointer;
            ${h9Regular};
            
        }
    `;

S.MemberCertification = styled.div`
        display: flex;
        position: relative;
        align-items: center;

        & p {
            position: absolute;
            right: 14px;
            color: #C83F3F;
            cursor:pointer;
            ${h9Regular};
        }
    `;

export default S;