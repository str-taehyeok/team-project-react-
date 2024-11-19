import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'SpoqaHanSansNeo-Regular';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    ${reset}

    * {
        font-family: 'SpoqaHanSansNeo-Regular' !important;
        text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1);
        letter-spacing: -0.4px;
        box-sizing: border-box;
        line-height: 1.3;
    }
`

export default GlobalStyle;