import styled from "styled-components";
import { flexCenterRowSpaceBetween, h7Medium, h6Bold } from '../../global/common'

const S = {}

    S.LayoutWrapper = styled.div`
        display: flex;
        flex-direction: column;
        width: 100dvw;
        height : 100dvh;
    `;
    S.Header = styled.header`
        border-bottom: solid 2px #828282;
        background-color: #fff;
        width : 1440px;
        margin : 0 auto;
        ${flexCenterRowSpaceBetween};
    `;

    S.Main = styled.main`
        flex: 1;    
    `;


// header


    S.MenuWrap = styled.div`
        display: flex;
        align-items: center;
        //width: 1440px;
        margin: 27px 0;
        gap: 72px;
        padding-left: 28px;
        position: relative;
        
        & span{
            font-weight: bold;
            font-size: 20px;
            margin-top: 4px;
            margin-left: 10px;
        }
        
        & img{
            cursor: pointer;
            width: 50px;
            height: 50px;
            margin-top: 5px;
        }
    `;

    S.MenuFrame = styled.div`
        display: none;
        flex-direction: column;
        align-items: start;
        animation: lift-detail 0.1s;
        position: absolute;
        top: 85px;
        left: 0px;
        z-index: 1000; // z-index 추가
        background-color: #fff;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // 그림자 효과 추가 (선택사항)
    
    `;

    S.EntireMenu = styled.div`
        background-color: #fff;
    `;


    S.MenuHeader = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 16px;
        padding-top: 18px;
        min-width: 241px;
        background-color: #fff;
        
        & button{
            fontSize: 10px;
            color: #ffc303;
            background-color: white;
            border: none;
            marginLeft: auto;
            fontWeight: bold;
            cursor: pointer;
            marginRight: 24px;
        }
    `;

    S.Welcome = styled.div`
        font-size: 16px;
        text-align: left;
        vertical-align: bottom;
        background-color: #fff;
    `;


// S.Logout = styled.button`
//     font-size: 10px;
//     color: #ffc303;
//     background-color: white;
//     border: none;
//     margin-left: auto;
//     font-weight: bold;
//     cursor: pointer;
//     margin-right: 24px;
//     vertical-align: bottom;
// `;

    S.MenuForm = styled.div`
        & ul{
            list-style: none;
            padding: 0;
            width: 200px;
        }
        
        & li{
            width: 200px;
            background-color : white;
        }
        
        & p{
            width: 243px;
            height: 61px;
            background: #828282;
            color: white;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            cursor: pointer;
            padding-left: 24px;
            margin: 5px 0;
            ${h6Bold};
        }
        
        & span{
            display: flex;
            align-items: center;
            background-color: #fff;
            color: #131313;
            ${h7Medium};
            //padding: 5px 0 ;
        }
        
        & div{
            height: 0;
            overflow: hidden;
            transition: height 0.3s ease;
            padding-left: 15px;
            background-color: #fff;
        }
        
        }
    `;




export default S;