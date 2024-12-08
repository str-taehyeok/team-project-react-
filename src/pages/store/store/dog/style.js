import styled from "styled-components";
import { flexRowCenter, flexColumnCenter, h4Medium, h8Medium, h1Bold, yellow200, h8Regular } from '../../../../global/common'

const S = {}

    // 배너
    S.BannerContainer = styled.div`
      position: relative;
      width: 100%;
      height: 603px;
      margin-bottom: 139px;
    `;

    S.BannerComent = styled.div`
        position: absolute;
        font-size: 50px;
        font-weight: bold;
        line-height: 58px;
        top: 150px;
        left: 42%;
        transform: translateX(-50%);
        text-align: left;
        width: 1440px;
        
        & span {
            font-weight: normal;
            font-size: 20px;
            line-height: 28px;
        }
        
        & button{
            border-radius: 100px;
            width: 182px;
            height: 51px;
            margin-left: 50px;
            background-color: #FFE59A;
            border: 1px solid #131313;
            font-weight: normal;
            font-size: 20px;
            line-height: 28px;
            padding-bottom: 5px;
            cursor: pointer;
        }
    `;


    S.BannerButton = styled.img`
        width: 24px;
        height: 25px;
        padding-top: 10px;
        margin-left: 5px;
        cursor: pointer;
    `;

    S.Content = styled.div`
            margin-bottom: 100px;
            ${flexColumnCenter};
        width: 100%;
    `;

    S.Banner = styled.img`
            width: 1920px;
    `;


    // 카테고리들
    S.CategoriesWrap = styled.div`
            margin-bottom: 56px;
            gap: 47px;
            ${flexRowCenter};
    `;

    S.Category = styled.span`
            border-radius: 100px;
            ${flexColumnCenter};
            ${h8Medium};
            margin-top: 11px;
    `;

    // 드롭다운 필터링 버튼들

S.DropdownWrapper = styled.div`
    position: relative;
    display: inline-block;
`;

// S.DropdownContainer = styled.div`
//     display: flex;
//     gap: 10px;
// `;

    S.DropdownContainer = styled.div`
        display: flex;
        position: relative;
        
        & button{
            padding: 10px 15px;
            background: white;
            border: 1px solid #D9D9D9;
            border-radius: 10px;
            cursor: pointer;
            margin-left: 10px;
        }
    `;

    S.DropdownItem = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        cursor: pointer;
        background-color: ${props => props.isSelected ? '#f0f0f0' : 'white'};
        border-radius: 10px;
        
        &:hover {
            background-color: #f5f5f5;
            border-radius: 10px;
        }
    
        input {
            margin-right: 10px;
        }
        
        & img{
            width: 30px;
            height: 30px;
        }
    `;

    S.DropdownContent = styled.div`
        position: absolute;
        top: 50px;
        left: 10px;
        background: white;
        min-width: 120%;
        border: 1px solid #D9D9D9;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        display: ${props => props.isOpen ? 'block' : 'none'};
        z-index: 1000;
    `;


    S.Menu = styled.div`
        cursor: pointer;
        
        & :hover{
            background-color: ${yellow200};
        }
    `;

    S.ProductWrap = styled.div`
            grid-template-columns: repeat(4, 1fr);
            display: grid;
            justify-content: space-between;
            gap: 24px;
    `;


    S.Product = styled.div`
            width: 342px;
            height: 457px;
            ${flexColumnCenter};
            
            & span{
                display: flex;
                width: 342px;
                margin-top: 15px;
            }
            
            & button{
                width: 342px;
                height: 42px;
                margin-top: 14px;
                border-radius: 5px;
                background-color: #fff;
                border: 1px solid #D9D9D9;
            }
            
            & img{
                width: 342px;
                height: 341px;
                border-radius: 10px;
            }
        
    `;

    //
    // S.Cart = styled.img`
    //         width: 40px;
    //         height: 40px;
    //    
    // `;
    
    S.ColorProducts = styled.div`
            margin: 0 auto;
            ${flexRowCenter};
    `;


    // 컬러 제품들 타이틀부터 제품까지 묶임
    S.Box = styled.div`
        display: flex;
            
        & button{
            font-size: 14px;
            border-radius: 20px;
            width: 96px;
            height: 42px;
            background-color: #fff;
            border-color: #888888;
            margin-bottom: 50px;
        }
    `;

    S.BoxTitle = styled.span`
            font-size: 40px;
            margin-right: 665px;
            font-weight: bold;
        `;

    S.Arrow = styled.img`
        width: 10px;
        height: 10px;
    `

    // 베스트

    S.BestTitle = styled.span`
        ${h1Bold};
        margin-bottom: 50px;
        margin-top: 180px;
        width: 1440px;
    `;

    S.BestProducts = styled.div`
            max-width: 1440px;
            display: flex;
            flex-direction: row;
        `;

    S.BestProduct = styled.div`
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            flex-shrink: 0;

            & img{
                width: 244px;
                height: 250px;
                border-radius: 10px;
            }
            
            & span{
                display: flex;
                width: 244px;
                margin-top: 5px;
            }
            
            & button{
                width: 244px;
                height: 36px;
                margin-top: 9px;
                border-radius: 5px;
                background-color: #fff;
                border: 1px solid #D9D9D9;
            }
        `;

    S.BestProductWrap = styled.div`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 55px;
        `;


    // 추천
    S.RecommendedProduct = styled.div`
            margin-top: 150px;
        `;
    S.Title = styled.span`
            ${h1Bold};
            margin-bottom: 50px;
            margin-top: 180px;
        `;

    S.RecommendedWrap = styled.div`
            grid-template-columns: repeat(4, 1fr);
            display: grid;
            justify-content: space-between;
            gap: 24px;
            margin-top: 50px;
        `;

    // 특가
    S.SpecialProduct = styled.div`
        display: flex;
        flex-direction: column;
        width: 244px;
        
        & img {
            width: 100%;
            height: 244px;
            border-radius: 10px;
            object-fit: cover;
        }
        
        & button {
            width: 100%;
            height: 31px;
            border-radius: 5px;
            margin-top: 6px;
            background-color: #fff;
            border: 1px solid #D9D9D9;
        }
    
        & span {
            width: 100%;
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            ${h8Regular};
        }
        
        & span:nth-of-type(2) {
            font-weight: 700;
            margin-top: 5px;
        }
    `;

    S.SpecialProducts = styled.div`
        display: grid;
        grid-template-columns: 538px repeat(3, 1fr);
        gap: 50px;
        width: 100%;
        min-width: 1440px;
        max-height: 790px;
        overflow: hidden;
        margin: 0 auto;
        margin-top: 50px;
        
        & > div:first-child {
            width: 538px; 
            height: 790px; 
            margin-right: 72px;
            grid-row: span 2;
    
            & img {
                height: 537px;
                margin-bottom: 10px;
            }
    
            & button {
                height: 70px;
                margin-top: 25px;
            }
    
            & span {
                ${h4Medium};
                padding-bottom: 10px;
            }
        }
    `;

    S.SpecialWrap = styled.div`
        margin-top: 150px;
    `;

export default S;