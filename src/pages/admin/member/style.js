// import styled from "styled-components";
// import { flexRowCenter, flexColumnCenter } from '../../../global/common'

import styled from "styled-components";
import {flexColumnCenter, h1Bold,  h8Medium, h6Regular, h6Bold} from "../../../global/common";

const S = {}


    // S.Frame = styled.form`
    //     display: flex;
    //     flex-direction: column;
    //     align-items: center;
    //     justify-content: center;
    //     width: 100%;
    //     margin-bottom: 100px;
    // `;
    //
    // S.MenuWrap = styled.div`
    //     display: flex;
    //     align-items: center;
    //     width: 1440px;
    //     margin: 28px 0;
    //     gap: 72px;
    //     padding-left: 28px;
    //     position: relative;
    //
    //     & span{
    //         font-weight: bold;
    //         font-size: 20px;
    //         margin-top: 4px;
    //     }
    //
    //     & img{
    //         cursor: pointer;
    //     }
    // `;


    S.Content = styled.div`
        ${flexColumnCenter}
    `;

    S.Title = styled.div`
            margin: 43px 0 80px 0;
            display: flex;
            justify-content: space-between;
            width: 1191px;
            
            & span{
                ${h1Bold};
            }
    `;

    S.NoticeSearch = styled.div`
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 30px;
            width: 1028px;
            margin: 0 auto;
            border: none;
    `;

    S.SearchRow = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 20px;
        font-weight: bold;
    `;

    S.SearchPeriod = styled.div`
        display: flex;
        align-items: center;
        margin-left: 5%;
        gap: 35px;
        
        & input{
            width: 180px;
            height: 55px;
            border-radius: 20px;
            border: 1px solid #ddd;
            padding: 0 20px;
        }
        
        & label{
            ${h6Bold}
        }
    `

    S.SearchBar = styled.div`
        display: flex;
        align-items: center;
        gap: 15px;
        margin-left: 5%;
        
        
        & label{
            //width: 35px;
            ${h6Bold}
        };
        
        & input{
            width: 450px;
            height: 55px;
            border-radius: 20px;
            border: 1px solid #ddd;
            padding: 10px 20px;
            margin-left: 3%;
        };
    `;


    S.Notification = styled.div`
        display: flex;
        align-items: center;
        margin-right: 15%;
        gap: 15px;
        
        & label{
            margin-right: 8px;
            font-weight: bold;
        };
        
    `;

    S.Buttons = styled.div`
        display: flex;
        gap: 10px;
    `;

    S.SearchButton = styled.button`
        background-color: #113F8A;
        margin-top: 40px;
        margin-bottom: 100px;
        width: 90px;
        height: 30px;
        border: none;
        border-radius: 20px;
        gap: 10px;
        color: white;
        cursor: pointer;
        ${h8Medium}
    `;

    S.ResetButton = styled.button`
        background-color: #fff;
        margin-top: 40px;
        margin-bottom: 100px;
        width: 90px;
        height: 30px;
        border: solid 0.1px #888888;
        border-radius: 20px;
        gap: 10px;
        color: #131313;
        cursor: pointer;
        ${h8Medium}
    `;

    S.NoticeList = styled.section`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 1440px;
        margin: 0 auto;
    `

    S.Table = styled.table`
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        
    
        & thead tr {
            border-bottom: 1px solid #828282;
        }
    
        & tr {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }
    
        & td {
            flex: 1;
            text-align: center;
            padding: 15px 10px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            ${h6Regular}
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
            ${h6Bold}
        }
        
    `;






export default S;