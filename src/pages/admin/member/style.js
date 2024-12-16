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
            margin: 43px 0 40px 0;
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
            width: 1100px;
            //width: 1028px;
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
            width: 40px;
            font-weight: bold;
            line-height: 28px;
            font-size: 20px;
        }
    `

    S.SearchBar = styled.div`
        display: flex;
        align-items: center;
        gap: 15px;
        margin-left: 5%;
        
        
        & label{
            width: 49px;
            font-weight: bold;
            line-height: 28px;
            font-size: 20px;
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

    S.List = styled.section`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 1440px;
        margin: 0 auto;
        margin-bottom: 150px;
    `;

    S.Line = styled.div`
        border-bottom: 1px solid #888888;
        width: 1440px;
    `

    S.Table = styled.table`
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        align-content: center;
    
        & thead tr {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            ${h6Bold}
        }

        & tbody tr {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            ${h6Regular}
        }
        
        & tr > th,
        & tr > td {
            justify-content: center;
            padding: 20px 0;
            display: flex;
            align-items: center;
        }
        
        & tr > th {
            border-bottom: solid 0.1px #828282;
            padding-bottom: 28px;
            height: 90px;
        }
        
        & tr > th:nth-child(1),
        & tr > td:nth-child(1) {
            width: 120px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
        }
        
        & tr > th:nth-child(2),
        & tr > td:nth-child(2) {
            width: 366px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
        }
        
        & tr > th:nth-child(3) {
            width: 512px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
        }

        & tr > td:nth-child(3) {
            width: 512px;
            flex-shrink: 0;
            display: block;
            align-items: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 512px;
            text-align: center;
        }
        
        & tr > th:nth-child(4),
        & tr > td:nth-child(4) {
            width: 244px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
        }
    
        & tr > th:nth-child(5),
        & tr > td:nth-child(5) {
            width: 98px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            white-space: normal; 
            text-align: center;
            word-break: keep-all; 
            overflow: visible; 
        }
    
        & tr > th:nth-child(6),
        & tr > td:nth-child(6) {
            width: 100px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            white-space: normal; 
            text-align: center;
            word-break: keep-all; 
            overflow: visible;
        }
    
        & tr > th,
        & tr > td {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    `;


    S.SellerTable = styled.table`
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        align-content: center;
    
        & thead tr {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            ${h6Bold}
        }
    
        & tbody tr {
            display: flex;
            //justify-content: space-between;
            align-items: center;
            width: 1440px;
            ${h6Regular}
        }
        
        & tr > th,
        & tr > td {
            justify-content: center;
            padding: 20px 0;
            display: flex;
            align-items: center;
        }
        
        & tr > th {
            padding-bottom: 28px;
        }
        
        & tr > th:nth-child(1),
        & tr > td:nth-child(1) {
            width: 98px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            margin-top: 10px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 98px;
            text-align: center;
        }
        
        
        & tr > th:nth-child(2){
            width: 188px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 188px;
            text-align: center;
        }

        & tr > td:nth-child(2) {
            width: 188px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 188px;
            text-align: center;
            margin-left: 50px;
        }
        
        & tr > th:nth-child(3){
            width: 140px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 188px;
            text-align: center;
            
        }

        & tr > td:nth-child(3) {
            width: 188px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 188px;
            text-align: center;
            margin-left: 20px;
        }
    
        & tr > th:nth-child(4){
            width: 200px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 200px;
            text-align: center;
        }

        & tr > td:nth-child(4) {
            width: 200px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 200px;
            text-align: center;
            margin-left: 15px;
        }
    
        & tr > th:nth-child(5){
            width: 100px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 100px;
            text-align: center;
        }

        & tr > td:nth-child(5) {
            width: 100px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 100px;
            text-align: center;
            margin-left: 38px;
        }
        
        & tr > th:nth-child(6) {
            width: 220px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 220px;
            text-align: center;
        }
    
        & tr > td:nth-child(6){
            width: 146px;
            flex-shrink: 0;
            display: block;
            align-items: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 146px;
            text-align: center;
            margin-left: 82px;
        }
        
        & tr > th:nth-child(7) {
            width: 98px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            white-space: normal;
            text-align: center;
            word-break: keep-all;
            overflow: visible;
        }

        & tr > td:nth-child(7) {
            width: 98px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            white-space: normal;
            text-align: center;
            word-break: keep-all;
            overflow: visible;
            margin-left: 80px;
        }
        
        & tr > th:nth-child(8){
            width: 98px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            white-space: normal;
            text-align: center;
            word-break: keep-all;
            overflow: visible;
        }

        & tr > td:nth-child(8) {
            width: 98px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            white-space: normal;
            text-align: center;
            word-break: keep-all;
            overflow: visible;
            margin-left: 42px;
        }
    
        & tr > th,
        & tr > td {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    `;






export default S;