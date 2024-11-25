import styled from "styled-components";

const S = {}

    S.LayoutWrapper = styled.div`
        display: flex;
        flex-direction: column;
        width: 100dvw;
        height : 100dvh;
        padding: 118px 0 0 0;
    `

    S.Header = styled.header`
        width: 100dvw;
        height : 118px;
        border : solid 1px #000;
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        background-color: white;
    `

    S.Main = styled.main`
        flex: 1;    
    `;


    // header
    
    
    S.MenuWrap = styled.div`
            display: flex;
            align-items: center;
            width: 1440px;
            margin: 28px 0;
            gap: 72px;
            padding-left: 28px;
            position: relative;
            
            & span{
                font-weight: bold;
                font-size: 20px;
                margin-top: 4px;
            }
            
            & img{
                cursor: pointer;
            }
        `;


export default S;