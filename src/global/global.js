import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'SpoqaHanSansNeo';
        font-style: normal;
        font-weight: 100;
        src: url(${process.env.PUBLIC_URL}/assets/font/SpoqaHanSansNeo-Thin.woff) format('woff');
    }    
    
    @font-face {
        font-family: 'SpoqaHanSansNeo';
        font-style: normal;
        font-weight: 300;
        src: url(${process.env.PUBLIC_URL}/assets/font/SpoqaHanSansNeo-Light.woff) format('woff');
    }    
    
    @font-face {
        font-family: 'SpoqaHanSansNeo';
        font-style: normal;
        font-weight: 400;
        src: url(${process.env.PUBLIC_URL}/assets/font/SpoqaHanSansNeo-Regular.woff) format('woff');
    }    
    
    @font-face {
        font-family: 'SpoqaHanSansNeo';
        font-style: normal;
        font-weight: 500;
        src: url(${process.env.PUBLIC_URL}/assets/font/SpoqaHanSansNeo-Medium.woff) format('woff');
    }    
    
    @font-face {
        font-family: 'SpoqaHanSansNeo';
        font-style: normal;
        font-weight: 700;
        src: url(${process.env.PUBLIC_URL}/assets/font/SpoqaHanSansNeo-Bold.woff) format('woff');
    }

    ${reset}

    * {
        font-family: 'SpoqaHanSansNeo' !important;
        font-weight: 500;
        text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1);
        letter-spacing: -0.4px;
        box-sizing: border-box;
        line-height: 1.3;
    }
    
    a {
        text-decoration: none;
        color : #131313;
    }
`

export default GlobalStyle;