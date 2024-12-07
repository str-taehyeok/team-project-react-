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

    S.NoticeList = styled.section`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 1440px;
        margin: 0 auto;
    `;

    S.Line = styled.div`
        border-bottom: 1px solid #888888;
        width: 1440px;
    `

    // S.Table = styled.table`
    //     width: 100%;
    //     border-collapse: separate;
    //     border-spacing: 0;
    //     display: flex;
    //     align-items: center;
    //     flex-direction: column;
    //     align-content: center;
    //
    //
    //     & thead tr {
    //         border-bottom: 1px solid #828282;
    //         display: flex;
    //         align-items: center;
    //     }
    //
    //     & tr {
    //         display: flex;
    //         justify-content: space-between;
    //         align-items: center;
    //         width: 100%;
    //     }
    //
    //     & td:nth-child(1) {
    //         flex: 1;
    //         text-align: center;
    //         padding-left: 44px;
    //         white-space: nowrap;
    //         overflow: hidden;
    //         text-overflow: ellipsis;
    //         ${h6Regular};
    //         width: 100px;
    //         flex-shrink: 0;
    //         display: flex;
    //         align-items: center;
    //     }
    //
    //     & td:nth-child(2) {
    //         flex: 1;
    //         text-align: center;
    //         white-space: nowrap;
    //         overflow: hidden;
    //         text-overflow: ellipsis;
    //         ${h6Regular};
    //         width: 366px;
    //         flex-shrink: 0;
    //         display: flex;
    //         align-items: center;
    //     }
    //
    //     & td:nth-child(3) {
    //         flex: 1;
    //         text-align: center;
    //         padding: 15px 0;
    //         white-space: nowrap;
    //         overflow: hidden;
    //         text-overflow: ellipsis;
    //         max-width: 500px;
    //         display: -webkit-box;
    //         -webkit-line-clamp: 1;
    //         -webkit-box-orient: vertical;
    //         ${h6Regular};
    //         width: 512px;
    //         flex-shrink: 0;
    //         //display: flex;
    //         align-items: center;
    //     }
    //     & td:nth-child(4) {
    //         flex: 1;
    //         text-align: center;
    //         padding: 15px 0;
    //         white-space: nowrap;
    //         overflow: hidden;
    //         text-overflow: ellipsis;
    //         ${h6Regular};
    //         width: 244px;
    //         flex-shrink: 0;
    //         display: flex;
    //         align-items: center;
    //     }
    //     & td:nth-child(5) {
    //         flex: 1;
    //         text-align: center;
    //         padding: 15px 0;
    //         white-space: nowrap;
    //         overflow: hidden;
    //         text-overflow: ellipsis;
    //         ${h6Regular};
    //         width: 98px;
    //         flex-shrink: 0;
    //         display: flex;
    //         align-items: center;
    //     }
    //     & td:nth-child(6) {
    //         flex: 1;
    //         text-align: center;
    //         padding: 15px 0;
    //         white-space: nowrap;
    //         overflow: hidden;
    //         text-overflow: ellipsis;
    //         ${h6Regular};
    //         width: 122px;
    //         flex-shrink: 0;
    //         display: flex;
    //         align-items: center;
    //     }
    //
    //     & th:nth-child(1) {
    //         flex: 1;
    //         text-align: center;
    //         padding-left: 44px;
    //         white-space: nowrap;
    //         overflow: hidden;
    //         text-overflow: ellipsis;
    //         ${h6Bold};
    //         width: 98px;
    //         flex-shrink: 0;
    //         display: flex;
    //         align-items: center;
    //     }
    //     & th:nth-child(2) {
    //         flex: 1;
    //         text-align: center;
    //         padding: 15px 0;
    //         white-space: nowrap;
    //         overflow: hidden;
    //         text-overflow: ellipsis;
    //         ${h6Bold};
    //         width: 366px;
    //         flex-shrink: 0;
    //         display: flex;
    //         align-items: center;
    //     }
    //
    //     & th:nth-child(3) {
    //         flex: 1;
    //         text-align: center;
    //         padding: 15px 0;
    //         white-space: nowrap;
    //         overflow: hidden;
    //         text-overflow: ellipsis;
    //         ${h6Bold};
    //         width: 512px;
    //         flex-shrink: 0;
    //         display: flex;
    //         align-items: center;
    //     }
    //     & th:nth-child(4) {
    //         flex: 1;
    //         text-align: center;
    //         padding: 15px 0;
    //         white-space: nowrap;
    //         overflow: hidden;
    //         text-overflow: ellipsis;
    //         ${h6Bold};
    //         width: 244px;
    //         flex-shrink: 0;
    //         display: flex;
    //         align-items: center;
    //     }
    //     & th:nth-child(5) {
    //         flex: 1;
    //         text-align: center;
    //         padding: 15px 0;
    //         white-space: nowrap;
    //         overflow: hidden;
    //         text-overflow: ellipsis;
    //         ${h6Bold};
    //         width: 98px;
    //         flex-shrink: 0;
    //         display: flex;
    //         align-items: center;
    //     }
    //     & th:nth-child(6) {
    //         flex: 1;
    //         text-align: center;
    //         padding-right: 44px;
    //         white-space: nowrap;
    //         overflow: hidden;
    //         text-overflow: ellipsis;
    //         ${h6Bold};
    //         width: 122px;
    //         flex-shrink: 0;
    //         display: flex;
    //         align-items: center;
    //     }

S.Table = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-content: center;

    & thead tr, & tbody tr {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    & th:nth-child(1), & td:nth-child(1) {
        width: 98px;
        padding-left: 44px;
        justify-content: center;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 500px;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    & th:nth-child(2), & td:nth-child(2) {
        width: 366px;
        //padding-left: 100px;
        text-align: center;
        padding: 15px 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 500px;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    & th:nth-child(3), & td:nth-child(3) {
        width: 400px;
        text-align: center;
                 padding: 15px 0;
                 white-space: nowrap;
                 overflow: hidden;
                 text-overflow: ellipsis;
                 max-width: 500px;
                 display: -webkit-box;
                 -webkit-line-clamp: 1;
                 -webkit-box-orient: vertical;
    }

    & th:nth-child(4), & td:nth-child(4) {
        width: 200px;
        padding-left: 20px;
        //padding: 15px 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 500px;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    & th:nth-child(5), & td:nth-child(5) {
        width: 98px;
        padding: 15px 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 500px;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    & th:nth-child(6), & td:nth-child(6) {
        width: 122px;
        padding-right: 10px;
        //padding: 15px 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 500px;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    & th, & td {
        display: flex;
        align-items: center;
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        ${h6Regular};
        flex-shrink: 0;
    }

    & th {
        ${h6Bold};
    }

    & thead tr {
        border-bottom: 1px solid #828282;
    }
`;
        
        
        
    
        // & th:nth-child(1) {
        //     //font-weight: bold;
        //     //color: #333;
        //     //flex: 1;
        //     //text-align: center;
        //     //padding: 15px 10px;
        //     //white-space: nowrap;
        //     //overflow: hidden;
        //     //text-overflow: ellipsis;
        //     ${h6Bold};
        // }







export default S;