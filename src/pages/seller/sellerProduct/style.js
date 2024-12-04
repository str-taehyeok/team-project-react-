import styled from "styled-components";
import { h1Bold } from "../../../global/common";

const S = {}

    S.NoticeSearch = styled.section`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 1440px;
    `

    S.Title = styled.div`
        margin: 43px 0 80px 0;
        display: flex;
        justify-content: space-between;
        width: 1191px;
        
        & span{
            ${h1Bold}
        }
    `

    S.Table = styled.table`
        width: 1440px;
        text-align: center;
        
        & tr{
            display: flex;
            justify-content: space-between;
        },

        & td{
            width: 100%;
            justify-content: center;
            padding: 20px 0;
        },
        
        & th{
            width: 100%;
            border-bottom: solid 0.1px #828282;
            justify-content: center;
            padding-bottom: 28px;
        },
        
        & th:nth-child(1){
            width: 122px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
        },
    
        & th:nth-child(2){
            width: 122px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
        },
    
        & th:nth-child(3){
            width: 244px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
        },
    
        & th:nth-child(4){
            width: 244px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
        },
    
        & th:nth-child(5){
            width: 122px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
        },
    
        & th:nth-child(6){
            width: 122px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
        },
    
        & th:nth-child(7){
            width: 122px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
        },
    
        & th:nth-child(8){
            width: 244px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
        },
    
        & th:nth-child(9){
            width: 98px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
        },
    
        & td:nth-child(1){
            width: 122px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
        },
    
        & td:nth-child(2){
            width: 122px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
        },
    
        & td:nth-child(3){
            width: 244px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
        },
    
        & td:nth-child(4){
            width: 244px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
        },
    
        & td:nth-child(5){
            width: 122px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
        },
    
        & td:nth-child(6){
            width: 122px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
        },
    
        & td:nth-child(7){
            width: 122px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
        },
    
        & td:nth-child(8){
            width: 244px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
        },
    
        & td:nth-child(9){
            width: 98px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
        },
        
        & img{
        
        }
        
    `


export default S;