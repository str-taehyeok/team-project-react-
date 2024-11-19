import styled from "styled-components";

const S = {}

    S.LayoutWrapper = styled.div`
        display: flex;
        flex-direction: column;
        width: 100dvw;
        height : 100dvh;
        padding: 94px 0 0 0;
    `

    S.Header = styled.header`
        width: 100dvw;
        height : 94px;
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

    S.Footer = styled.footer`
        width: 100dvw;
        height : 322px;
        border : solid 1px #000;
    `

export default S;