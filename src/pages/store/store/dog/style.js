import styled from "styled-components";
import { flexRowCenter, flexColumnCenter, h4Medium, h8Medium, h1Bold, yellow200 } from '../../../../global/common'

const S = {}

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
        left: 600px;
        transform: translateX(-50%);
        
        & span{
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
            font-weight: normal;
            font-size: 20px;
            line-height: 28px;
            padding-bottom: 5px;
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
        //width: 100%;
    `;

    S.Banner = styled.img`
            width: 1920px;
    `;

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


    S.DropdownContainer = styled.div`
        position: relative;
        display: inline-block;
        
        & button{
            padding: 10px 15px;
            background: white;
            border: 1px solid #ddd;
            border-radius: 4px;
            cursor: pointer;
        }
    `;


    S.DropdownContent = styled.div`
        position: absolute;
        top: 100%;
        left: 0;
        background: white;
        min-width: 160px;
        border: 1px solid #ddd;
        border-radius: 4px;
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
    // S.ProductContainer = styled.div`
    //     margin-top: 50px;
    //     justify-content: space-between;
    // `;

    S.ProductWrap = styled.div`
            grid-template-columns: repeat(4, 1fr);
            display: grid;
            justify-content: space-between;
            gap: 24px;
    `;

    // S.ProductWrap2 = styled.div`
    //     display: flex;
    //     flex-direction: row;
    //     justify-content: space-between;
    //     gap: 24px;
    //     margin-top: 39px;
    // `;

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
                border-color: #D9D9D9;
            }
            
            & img{
                width: 342px;
                height: 341px;
                border-radius: 10px;
            }
    `;

    S.ColorProducts = styled.div`
            margin: 0 auto;
            ${flexRowCenter};
    `;

    S.Box = styled.div`
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
            margin-right: 700px;
            font-weight: bold;
        `;

    S.BestProducts = styled.div`
            margin-top: 180px;
            width: 1440px;
        `;

    S.BestProduct = styled.div`
            margin-top: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            overflow: auto;
            
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
                border-color: #D9D9D9;
            }
        `;

    S.BestProductWrap = styled.div`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 55px;
        `;

    S.RecommendedProduct = styled.div`
            margin-top: 150px;
        `;
    S.Title = styled.span`
            ${h1Bold};
            margin-bottom: 50px;
        `;

    S.RecommendedWrap = styled.div`
            grid-template-columns: repeat(4, 1fr);
            display: grid;
            justify-content: space-between;
            gap: 24px;
            margin-top: 50px;
        `;
    //
    // S.SpecialProduct = styled.div`
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     flex-direction: column;
    //     width: 244px;
    //     height: 369px;
    //     margin-top:50px;
    //
    //     & img{
    //         width: 244px;
    //         height: 244px;
    //         border-radius: 10px;
    //     }
    //
    //     & :first-child {
    //
    //     }
    //
    //
    //     & button{
    //         width: 244px;
    //         height: 31px;
    //         border-radius: 5px;
    //         margin-top: 6px;
    //         background-color: #fff;
    //         border-color: #D9D9D9;
    //     }
    //     & span{
    //         display: flex;
    //         width: 244px;
    //         margin-top: 10px;
    //         overflow: hidden;
    //         text-overflow: ellipsis;
    //         display: -webkit-box;
    //         -webkit-line-clamp: 2;
    //         -webkit-box-orient: vertical;
    //     }
    // `;
    // S.SpecialProducts = styled.div`
    //     display: flex;
    //     flex-direction: row;
    //     width: 1440px;
    //     overflow: hidden;
    //     gap: 50px;
    // `;
    // S.SpecialWrap = styled.div`
    //     margin-top: 150px;
    //     grid-template-columns: repeat(4, 1fr);
    // `;


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
            line-height: 1.2;
        }
        
        & span:nth-of-type(2) {
            font-weight: 700;
            margin-top: 4px;
        }
    `;

    S.SpecialProducts = styled.div`
        display: grid;
        grid-template-columns: 538px repeat(3, 1fr);
        gap: 50px;
        width: 100%;
        min-width: 1440px;
        max-height: 760px;
        overflow: hidden;
        margin: 0 auto;
        margin-top: 50px;
        
        & > div:first-child {
            width: 538px; 
            height: 760px; 
            margin-right: 72px;
            grid-row: span 2;
    
            & img {
                height: 537px;
                margin-bottom: 30px;
            }
    
            & button {
                height: 70px;
                margin-top: 32px;
            }
    
            & span {
                ${h4Medium};
            }
        }
    `;

    S.SpecialWrap = styled.div`
        margin-top: 150px;
    `;

export default S;