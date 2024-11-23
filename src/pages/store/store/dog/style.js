import styled from "styled-components";
import { flexRowCenter, flexColumnCenter, h8Medium } from '../../../../global/common'

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
        display: flex;
        flex-direction: row;
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
            border-color: #D9D9D9;
        }
        
        & img{
            width: 342px;
            height: 341px;
            border-radius: 20px;
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
            margin-bottom: 26px;
            background-color: #fff;
            border-color: #888888;

        }
    `;

    S.BoxTitle = styled.span`
        font-size: 40px;
        margin-right: 676px;
        font-weight: bold;
    `;

export default S;