import styled from "styled-components";

const S = {}

    S.NoticeSearch = styled.section`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 1440px;
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
        
        
    `


export default S;