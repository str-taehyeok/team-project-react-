import styled from "styled-components";
import { flexRowCenter, flexColumnCenter } from '../../../global/common'

const S = {}


    S.Frame = styled.form`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-bottom: 100px;
    `;

    S.MenuWrap = styled.div`
        display: flex;
        align-items: center;
        width: 1440px;
        margin: 28px 0;
        gap: 72px;
        padding-left: 28px;
        position: relative;
        
        & span{
            font-weight: bold;
            font-size: 20px;
            margin-top: 4px;
        }
        
        & img{
            cursor: pointer;
        }
    `;


export default S;