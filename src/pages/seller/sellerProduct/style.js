import styled from "styled-components";
import { h1Bold, flexColumnCenter, h11Regular } from "../../../global/common";



const S = {}

    S.Content = styled.div`
        ${flexColumnCenter}
    `;


    S.NoticeSearch = styled.section`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 1440px;
    `;

    S.Search = styled.div`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
        
        & input{
            width: 708px;
            height: 60px;
            border-radius: 20px;
            padding: 17px;
        }
    `;

    S.Buttons = styled.div`
        display: flex;
        margin: 35px 0 80px 0;
        gap: 10px;
    `;

    S.SearchButton = styled.button`
        width: 90px;
        height: 30px;
        border: solid 1px #888888;
        border-radius: 20px;
        color: #888888;
        cursor: pointer;
        background-color: #fff;
    `;

    S.ResetButton = styled.button`
        width: 90px;
        height: 30px;
        border: solid 1px #888888;
        border-radius: 20px;
        color: #888888;
        cursor: pointer;
        background-color: #fff;
    `;

    S.NewButton = styled.button`
        width: 90px;
        height: 30px;
        border: none;
        border-radius: 20px;
        color: white;
        cursor: pointer;
        background-color: #113f8a;
        left: 1082px;
        top: 134px;
    `;

    S.Title = styled.div`
        margin: 43px 0 80px 0;
        display: flex;
        justify-content: space-between;
        width: 1191px;
        
        & span{
            ${h1Bold};
        }
    `;

    S.Line = styled.div`
        border-bottom: solid 0.1px #828282;
    `;


    S.Table = styled.table`
        width: 1440px;
        text-align: center;
        
        & tr{
            display: flex;
            justify-content: space-between;
            align-items: center;
        },

        & td{
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 20px 0;
        align-items: center;
        },
        
        & th{
            width: 100%;
            justify-content: center;
            padding-bottom: 28px;
            
        }
    `;

    // 상품이름...나오게하는 스타일
        S.Name = styled.p`
        max-width: 200px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow:inherit;
        text-overflow: ellipsis;
    `;


    S.Image = styled.div`
        border: none;
        width: 98px;
        height: 98px;
        border-radius: 20px;
        background-color: #828282;
        display: inline-flex;
        
        & img{
            width: 100%;
            height: 100%;
        }
    `;

    S.EditButton = styled.button`
        background-color: #888888;
        border: solid 0.1px #888888;
        color: #fff;
        border-radius: 50px;
        padding: 5px 15px;
        ${h11Regular};
        
        & a{
            color: #fff;
        }
    `;

    S.DeleteButton = styled.button`
        border: solid 0.1px #131313;
        color: #131313;
        background-color: #fff;
        border-radius: 50px;
        padding: 5px 15px;
        ${h11Regular};
        cursor: pointer;
    `;

    S.ManageButtons = styled.div`
        display: flex;
        flex-direction: row;
        gap: 10px;
        cursor: pointer;
    `;


S.Popup = styled.div`
    display: ${props => props.isVisible ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid 0.1px #888888;
    border-radius: 20px;
    width: 430px;
    height: 150px;
    gap: 50px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    animation: lift-popup 0.1s;
    z-index: 100;
    
    
    & p{
        margin-top: 30px;
    }
`;

S.PopupBackground = styled.div`
    display: ${props => props.isVisible ? 'block' : 'none'};
    z-index: 99;
    position: fixed;
    left: 0;
    top: 0;
    width: 100dvw;
    height: 100dvh;
    background-color: rgba(0, 0, 0, 0.5);
`;


    S.CheckButton = styled.div`
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
    `;

    S.CancelButton = styled.button`
        background-color: #888888;
        color: white;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        width: 49px;
        height: 30px;
        ${h11Regular};
    `;



    // const fadeIn = keyframes`
    //   0% {
    //     opacity: 0;
    //   }
    //   100% {
    //     opacity: 1;
    //   }
    // `;
    //

    // S.PopupContainer = styled.div`
    //   animation: ${fadeIn} 0.3s ease-in-out;
    // `;




export default S;