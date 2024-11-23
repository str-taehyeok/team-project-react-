import styled from "styled-components";
import { flexRowCenter, flexColumnCenter, h8Medium, h1Bold } from '../../../../global/common'

const S = {}

    S.Content = styled.div`
        margin-bottom: 100px;
        ${flexColumnCenter};
    `;

    S.Banner = styled.img`
        width: 1920px;
        height: 603px;
        margin-bottom: 139px;
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
        margin-right: 676px;
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

    S.SpecialProduct = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 244px;
        height: 369px;
        margin-top:50px;
        
        & img{
            width: 244px;
            height: 244px;
            border-radius: 10px;
        }

        &:first-child {
            grid-column: span 2;
            grid-row: span 2;
        }
        
        
        & button{
            width: 244px;
            height: 31px;
            border-radius: 5px;
            margin-top: 6px;
            background-color: #fff;
            border-color: #D9D9D9;
        }
        & span{
            display: flex;
            width: 244px;
            margin-top: 10px;
        }
    `
    S.SpecialProducts = styled.div`
        display: flex;
        flex-direction: row;
        width: 1440px;
        overflow: hidden;
        gap: 50px;
    `
    S.SpecialWrap = styled.div`
        margin-top: 150px;
        grid-template-columns: repeat(4, 1fr);
    `


export default S;