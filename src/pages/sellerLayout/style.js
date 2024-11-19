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

export default S;