import styled from "styled-components";
import {
    h1Bold,h5Bold
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

    S.MemberInputBoxContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    S.MemberInputBoxWrap = styled.div`
        display: flex;
        flex-direction: column;
        
        & h5{
            ${h5Bold};
        }
        & h6{
            font-weight: 400;
            font-size: 14px;
        }
    `;

    S.MemberInputBoxName = styled.div`
        display: flex;
    ;`
    S.MemberInputBoxNickname = styled.div`
        display: flex;
    ;`
    S.MemberInputBoxEmail = styled.div`
        display: flex;
    ;`
    S.MemberInputBoxPhone = styled.div`
        display: flex;
    ;`
    S.MemberInputBoxAddress = styled.div`
        display: flex;
    ;`
    S.MemberInputAddress = styled.div`
        display: flex;
    ;`







export default S;
