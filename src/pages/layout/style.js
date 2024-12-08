import styled from "styled-components";
import {
    flexCenterRowSpaceBetween, flexRowCenter, flexColumnCenter, h7Medium, h8Medium
} from '../../global/common'
import theme from "../../global/theme";

const S = {}

    S.LayoutWrapper = styled.div`
        max-width: 1920px;
        margin : 0 auto;
    `;
    S.Main = styled.main`
        // 헤더 카테고리 영역 확보
        margin-top : 65px;
        flex: 1;    
    `;

    S.Footer = styled.footer`
        width: 100%;
        height : 322px;   
        background-color: #F8F9FA;
        color: black;
        opacity: 0.5;
        ${flexRowCenter};
        font-size: ${theme.FONT_SIZE.h10};
    `;


//     Header CSS
    S.HeaderWrap = styled.div`
        width: 100dvw;
        height : 60px;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1000;
        background-color: white;
        transition: all 0.4s ease-in;
        overflow: hidden;

        &.active {
            height : 240px;
            background-color : #f8f9fa;
        }
    `
    S.Header = styled.div`
        width : 1440px;
        margin : 0 auto;
        ${flexCenterRowSpaceBetween};
    `
    
    S.LogoWrap = styled.div`
        width : 133px;
        height : 34px;
        
        & img {
            width : 100%
        }
    `

    S.MenuWrap = styled.div`
        & > div {
            ${flexRowCenter};
        }
        
        & li {
            width : 150px;
            height : 60px;
            ${flexRowCenter};
            align-items: center;
        }

        & a:hover {
            color : #ffc303
        }
    `

    S.MainMenu = styled.ul`
        position: relative;
        
        ${flexRowCenter};
        
        & li a{
            ${h7Medium};
        }
    `

    S.SubMenuWrap = styled.div`
        position: absolute;
        top : 60px;
        opacity: 0;
        transition: all 0.2s ease-in;

        &.active {
            opacity: 1;
        }
    `

    S.SubMenu = styled.ul`
        ${flexColumnCenter};
        & li a {
            color: gray;
            font-weight: 300;
            ${h8Medium};
        }
    `

    S.IconWrap = styled.div`

        ${flexRowCenter};
        gap : 26px;
        & img {
            width : 20px;
            height : 20px;
        }
    `

    S.SearchWrap = styled.div`
        position: relative;
        display: flex;
        align-items: center;
        border-bottom: solid 1px #000;
        height: 30px;
        width: 180px;

        & .icon{
            position: absolute;
            right: -1px
        }

        & input{
            border: none;
            background: none;
        }

        & input:focus{
            outline: none;
            background: none;
        }
    `


// Footer css
    S.FooterContainer = styled.div`
    width: 1440px;
`

    S.FooterLogo = styled.div`
    margin: 17px 0 17px 0;
    img {
    width: 113px;
    height: 35px;
  }
`

    S.FooterContent = styled.div`
    margin: 0 auto;
    margin-bottom: 17px;
`

   S.FooterInfo = styled.div`
   display: flex;
   flex-direction: column;
   gap: 17px;
   margin-bottom: 17px;
`

   S.FooterDisclaimer = styled.div`
   margin-bottom: 17px;
`

export default S;