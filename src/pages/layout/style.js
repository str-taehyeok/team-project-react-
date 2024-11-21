import styled from "styled-components";
import {
    flexCenterRowSpaceBetween, flexRowCenter, flexColumnCenter, h7Medium
} from '../../global/common'

const S = {}

    S.LayoutWrapper = styled.div``;
    S.Main = styled.main`
        // 헤더 카테고리 영역 확보
        margin-top : 65px;
        flex: 1;    
    `;
    S.Footer = styled.footer`
        width: 100dvw;
        height : 322px;
        border : solid 1px #000;
    `

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
    `

    S.SubMenu = styled.ul`
        ${flexColumnCenter};
        & li a {
            font-weight: 300;
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

export default S;