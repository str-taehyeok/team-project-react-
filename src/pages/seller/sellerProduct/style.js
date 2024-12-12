import styled from "styled-components";
import {h1Bold, flexColumnCenter, h11Regular, h5Regular, h8Bold} from "../../../global/common";



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
            border: 1px solid #ddd;
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



//     제품 등록

S.ProductInsert = styled.div`
    display: flex;
    flex-direction: column;
    width: 708px;
    margin: 0 auto;
    
    & p{
        margin: 0 0 30px 0;
        ${h5Regular}
    }
`;

S.ListWrap = styled.div`
    display: flex;
    align-items: center;
    
    & p{
        width: 125px;
        flex-shrink: 0;
    }
    
    & input{
        width: 100%;
        height: 40px;
        border-radius: 20px;
        border: solid 1px #888;
    }
    
    & select{
        width: 100%;
        height: 55px;
        padding: 17px;
        font-size: 14px;
        border-radius: 20px;
        border: solid 1px #888;
    }
    
    & input::placeholder{
        text-align: right;
        padding: 17px;
    }
    
    & textarea{
        resize:none;
        height: 150px;
        width: 100%;
        border-radius: 20px;
        padding: 20px;}
    }

`;


S.Division = styled.p`
    ${h8Bold};
`;

// #product-insert .radio-wrap{
//     display: flex;
// }
//
// #product-insert .radio-wrap .radio {
//     display: flex;
// }
//
// #product-insert .radio-wrap .radio > input {
//     flex: 1;
// }
//
// #product-insert .list-wrap{
//     margin : 0 0 20px 0;
// }
//
// #product-insert .list-wrap input {
//     padding: 20px;
// }
// }
//
//
// #product-insert hr {
//     margin: 60px 0;
//     border-top: 1px solid #d9d9d9;
// }
//
//
// #product-insert .info-wrap .list-wrap{
//     display: flex;
//     align-items: center;
// }
//

// #product-insert .info-wrap .list-wrap > select{
//     width: 100%;
//     height: 55px;
//     padding: 17px;
//     font-size: 14px;
//     border-radius: 20px;
//     border: solid 1px #888;
// }
// #product-insert .info-wrap .list-wrap .description {

// }
//
// .shipping p{
//     margin-top: 10px;
//     width: 400px;
// }
//
// /* shipping-wrap */
// #product-insert .shipping-wrap{
//
// }
//
// #product-insert .shipping-wrap .shipping{
//     width: 100%;
//
// }
//
// #product-insert .shipping-wrap .shipping select{
//     width: 100%;
//     height: 55px;
//     padding: 10px;
//     font-size: 14px;
//     border-radius: 20px;
//     border: solid 1px #888;
// }
//
// .explain {
//     margin-top: 5px;
//     color: #828282;
//     font-weight: lighter;
// }
// #product-insert .shipping-wrap .list-wrap{
//     display: flex;
//
// }
//
// #product-insert .shipping-wrap .list-wrap p{
//     width: 125px;
//     flex-shrink: 0;
// }
// #product-insert .shipping-wrap .list-wrap > input{
//     width: 100%;
//     height: 40px;
//     border-radius: 20px;
//     border: solid 1px #888;
// }
//
// #product-insert .shipping-wrap .list-wrap span{
//     display: flex;
//     width: 100px;
//     margin-left: 5px;
//     align-items: center;
// }
//
// /* image-wrap */
// #product-insert .image-wrap .image-content{
//     display: flex;
//     justify-content: space-between;
// }
//
// #product-insert .image-wrap .main-image {
//     display: block;
//     width: 220px;
//     height: 220px;
//     background-color: #d9d9d9;
//     border-radius: 20px;
//     margin-top: 5px;
// }
// .main-image div{
//     position: absolute;
// }
//
// .main-image img{
//     position: relative;
//     width: 100%;
//     height: 100%;
// }
// .sub-image div{
//     position: absolute;
// }
// .sub-image img{
//     position: relative;
//     width: 100%;
//     height: 100%;
// }
//
//
// .sub-image{
//     display: block;
//     width: 148px;
//     height: 148px;
//     background-color: #d9d9d9;
//     border-radius: 20px;
//     margin-top: 5px;
// }
//
// .sub-wrap{
//     width: 464px;
//     display: flex;
//     justify-content: space-between;
// }
//
// #product-insert .image-wrap .list-wrap{
//     display: flex;
//
// }
//
// #product-insert .image-wrap .list-wrap p{
//     width: 125px;
//     flex-shrink: 0;
// }
//
// #product-insert .image-wrap .list-wrap > input{
//     width: 100%;
//     height: 40px;
//     border-radius: 20px;
// }
//
// .button-wrap {
//     display: flex;
//     flex-direction: center;
//     margin: 0 auto;
//     margin-top: 100px;
//     gap: 10px;
// }
//
// .register-btn {
//     width: 90px;
//     height: 30px;
//     border: none;
//     color: white;
//     font-size: 14px;
//     cursor: pointer;
//     border-radius: 20px;
//     background-color: #113F8A;
// }
//
// .cancel-btn {
//     width: 90px;
//     height: 30px;
//     border: none;
//     color: white;
//     font-size: 14px;
//     cursor: pointer;
//     border-radius: 20px;
//     background-color: #FFC303;
// }
//
// .menu-icon{
//     cursor: pointer;
// }
//
// #menu-frame {
//     display: none;
//     flex-direction: column;
//     width: 1440px;
//     align-items: start;
//     margin: 20px 0;
//     animation: lift-detail 0.1s;
// }
//
// .menu-header{
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 0;
//     margin: 0;
//     max-width: 220px;
// }
//
// .welcome {
//     font-size: 14px;
//     position: relative;
//     bottom: 6px;
// }
//
// .logout {
//     font-size: 10px;
//     color: #ffc303;
//     background-color: white;
//     border: none;
//     margin-left: auto;
//     font-weight: bold;
//     cursor: pointer;
//     position: relative;
//     bottom: 6px;
// }
//
//
// ul {
//     list-style: none;
//     padding: 0;
//     width: 200px;
//     position: absolute;
//     z-index: 1000;
// }
//
// ul > li {
//     width: 200px;
// }
//
// ul > li > p {
//     width: 200px;
//     height: 40px;
//     background: #828282;
//     color: white;
//     display: flex;
//     align-items: center;
//     justify-content: flex-start;
//     cursor: pointer;
//     padding-left: 15px;
//     margin: 16px 0;
// }
//
// ul > li > div {
//     height: 0;
//     overflow: hidden;
//     transition: height 0.3s ease;
//     padding-left: 15px;
// }
//
// ul > li > div > p {
//     margin: 10px 0;
//     text-align: left;
//     padding-left: 10px;
//     cursor: pointer;
// }




export default S;