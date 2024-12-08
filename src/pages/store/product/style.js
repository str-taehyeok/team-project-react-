import styled from "styled-components";
import {h4Medium, h5Bold, h5Medium, h6Medium, h7Bold, h7Medium, h9Medium, h8Regular, h6Bold} from "../../../global/common";

const S = {}


    S.BodyWrap = styled.div`
        display: flex;
        /* flex-direction: column; */
        width: 1440px;
        margin: 0 auto;
        gap:56px;
        margin-bottom: 55px;
        justify-content: center;
        margin-top: 175px;
    `;

    S.ProductInfoLeft = styled.div`
        display: flex;
        flex-direction: column;
        width: 464px;
        height: 500px;
    `;

    S.MainImg = styled.img`
        display: flex;
        width: 464px;
        height: 464px;
        justify-content: center;
        align-items: center;
        padding-bottom: 25px;
    `;

    S.SubImgWrap = styled.div`
        width: 464px;
        display: flex;
        gap : 31px;
        justify-content: center;
        padding-bottom: 50px;
        
        & img{
            display: flex;
            width: 98px;
            height: 98px;
            border-radius: 20px;
        }
    `;


S.InfoSeller = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;

    & p{
        display: flex;
        ${h8Regular}
    }

    & button{
        display: flex;
        border-radius: 20px;
        background-color: white;
        border: 1px solid #828282;
    }
`;

    // 하트 heart
    S.ProductInfoRight = styled.div`
        display: flex;
        flex-direction: column;
        width: 620px;
        position: relative;

        .like-icon {
            width: 30px;
            height: 30px;
            position: absolute;
            top: 0;
            left: 590px;
            background-color: #ffc303;
        }
    `;

    S.star = styled.div`
        display: flex;
        margin-top: 5px;
    `;

    S.IconsWrap = styled.div`
        display: flex;
        justify-content: right;
        margin-bottom: 23px;
        
    `;


    S.ProductName = styled.span`
        display: flex;
        width: 100%;
        height: 72px;
        font-weight: 500;
        margin-bottom: 64px;
        ${h4Medium}
    `;

    S.Coupon = styled.p`
        ${h5Medium}
    `;

    S.ProductPriceWrap = styled.div`
        display: flex;
        width: 100%;
        margin-bottom: 50px;
        align-items: end;
    `;

    S.Percent = styled.p`
        color: #C83F3F;
        padding-right: 32px;
        ${h4Medium}
    `;

    S.RealPrice = styled.p`
        padding-right: 17px;
        ${h4Medium}
    `;

    S.Price = styled.p`
        text-decoration:line-through;
        ${h6Medium};
        color: #888888;
    `;

    S.PriceCheck = styled.div`
        display: flex;
        position: relative;
        margin-bottom: 50px;
    `;

    S.TagWrap = styled.div`
        display: flex;
        flex-direction: column;
        font-weight: 500;
        margin-right: 42px;
        width: 60px;
        height: 20px;
        ${h7Bold}
        
        & P{
            display: flex;
            flex-direction: column;
            margin-bottom: 126px;
            width: 59px;
        }
    `;


    S.InfoWrap = styled.div`
        display: flex;
        flex-direction: column;
    `;

    S.DeliveryInfo = styled.div`
        display: flex;
        flex-direction: column;
        gap : 16px;
        margin-bottom: 10px;
        height: 50px;
    `;

    S.ProductBox = styled.div`
        display: flex;
        flex-direction: column;
        border: solid #CCCBC6 1px;
        border-radius: 20px;
        box-sizing: border-box;
        width: 620px;
        height: 228px;
        justify-content: center;
        align-items: center;
        padding: 42px 60px 42px 60px;
        margin-bottom: 20px;
        
        & p{
            ${h6Medium}
        }
    `;


    S.Box = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        position: relative;
        

        & button {
            color: #828282;
            border: none;
            background-color: #ffffff;
            font-size: 20px;
            line-height: 30px;
            text-align: center;
            cursor: pointer;
            position: absolute;
            border-radius: 50px;
        }

        & input {
            width: 145px;
            height: 40px;
            border-radius: 50px;
            text-align: center;
            color: #828282;
            border: 1px solid #828282;
            font-size: 16px;
        }
    `;

    S.Select = styled.div`
        justify-content: center;
        margin-right: 90px;
    `;

    S.Stock = styled.span`
        ${h9Medium};
        color: #828282;
        margin-right: 80px;
        margin-top: 5px;
    `;

    S.PriceIs = styled.span`
        ${h5Bold};
    `;

    S.BtnMinus = styled.button `
        left: 17px;
        top: 4px;
    `;

    S.BtnPlus = styled.button`
        right: 360px;
        top: 4px;
    `;


    S.ButtonContainer = styled.div`
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: right;
        font-weight: bold;
        ${h7Medium}
    `;

    S.CheckButton = styled.button`
        background-color: #FFFFFF;
        color: #888888;
        border: solid 1px;
        border-radius: 20px;
        cursor: pointer;
        width: 220px;
        height: 44px;
        ${h7Medium}
    `;

    S.PaymentButton = styled.button`
        background-color: #113F8A;
        border-radius: 20px;
        color: #fff;
        border: none;
        cursor: pointer;
        width: 220px;
        height: 44px;
        ${h7Medium}
    `;


    S.Together = styled.span`
        display: flex;
        margin: 0 auto;
        width: 1130px;
        margin-bottom: 30px;
        ${h6Bold}
    `;

    S.ProductWrap = styled.div`
        width: 1130px;
        gap: 12px;
        margin: 0 auto;
        margin-bottom: 87px;
    `;

    // }
    // .product-wrap .sort {
    //     display: flex;
    //     flex-direction: column;
    //     margin-left: 8px;
    //     gap:12px;
    // }
    //
    S.Product = styled.div`
        display: flex;
        flex-direction: column;
        max-width: 100%;
        
        & button{
            border: 1px solid #d9d9d9;
            border-radius: 5px;
            height: 36px;
            background-color: #fff;
        }
    `;

    S.SwiperDirection = styled.div`
        display: flex;
        flex-direction: row;
    `;

    // 하트
    S.ProductImageWrap = styled.div`
        //position: relative;
        border-radius: 20px;
        position: relative;

        .like-icon {
            width: 30px;
            height: 30px;
            position: absolute;
            top: 7px;
            left: 210px;
        }
        
        & img{
        width: 250px;
        height: 250px;
        }
    `;

    S.ProductInfo = styled.div`
        display: flex;
        flex-direction: column;
        gap: 9px;
    `;

    S.ProductCalled = styled.span`
        ${h8Regular};
        width: 250px;
        margin-top: 10px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    `;
    S.ProductPrice = styled.span`
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 5px;
    `;
// }
//
// .product .product-info .product-star {
//     display: flex;
//     font-size: 11px;
// }
// .product .product-info #product-star {
//     color: #FFC303;
// }
// .product .product-info #product-star-count {
//     font-size: 11px;
// }
//
// .product .product-info .delivery-info {
//     display: flex;
//     gap : 6px;
// }
//
// .product .product-info .delivery-info #product-start {
//     font-size: 14px;
//     color: #113F8A;
// }
// .product .product-info .delivery-info #product-limit {
//     font-size: 12px;
// }
// .product .product-info .delivery-info #product-free {
//     font-size: 12px;
// }
//
/* 리뷰창 */
S.Container3 = styled.div`
    display: flex;
    width: 935px;
    height: 887px;
    border: solid 1px #D9D9D9;
    margin: 0 auto;
    margin-bottom: 70px;
`;
//
// .review-wrap {
//     display: flex;
//     flex-direction: column;
//     width: 100%;
//     /* display: none; */
// }
//
// .container3 .reveiw-title {
//     display: flex;
//     margin-bottom: 30px;
//     gap:39px;
// }
//
// .container3 .review-wrap .sector {
//     display: flex;
//     width: 935px;
//     height: 1px;
//     background-color: black;
// }
//
// .container3 > div {
//     flex: 1;
// }
//
// .container3 .nav{
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }
//
// .container3 .images-wrap {
//     display: none;
// }
//
S.InfoWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
`;



S.TabWrap = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
    margin-bottom: 36px;
`;


//
// .container3 .tab-wrap > a {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex: 1;
//     border-bottom: solid 1px #D9D9D9;
// }
//
// .product-detail {
//     display: flex;
// }
//
// .product-detail .user-info-wrap {
//     display: flex;
//     flex-direction: column;
//     gap:26px;
//     margin-right: 24px;
//     width: 216px;
//     height: 216px;
//     justify-content: center;
//     align-items: center;
// }
//
// .product-detail .product-review {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     /* align-items: center; */
//     text-align: left;
// }
//
// .product-detail .product-review .p1 {
//     display: flex;
//     flex-shrink: 0;
//     justify-content: left;
// }
//
// .product-detail .product-review .p2 {
//     display: flex;
//     flex-shrink: 0;
//     justify-content: right;
//     margin-bottom: 12px;
// }
//
// .product-detail .product-review .p3 {
//     display: flex;
//     flex-shrink: 0;
//     justify-content: left;
// }
//
//
// .product-detail .user-info-wrap .user-info {
//     display: flex;
//     gap: 10px;
// }
//
// .product-detail .user-info-wrap img{
//     display: flex;
//     width: 70px;
//     height: 70px;
// }
//
// /* 배송 */
// .info-wrap .btn3 {
//     display: flex;
//     flex-direction: column;
//     width: 100%;
//     height: 46%;
//     /* border: solid black 1px; */
//     gap: 20px;
//     padding: 15px;
//     display: none;
// }
//
// .btn3 .h6{
//     font-size: 25px;
// }
//
// .info-wrap .btn3 .btn3-info p{
//     margin-bottom: 18px;
// }
//
// .info-wrap .btn3 .btn3-info ul li{
//     font-size: 15px;
//     color: #ACACA8;
//     list-style-type: circle;
//     list-style-position:inside;
// }
//
// /* 교환/반품 */
// .info-wrap .btn4 {
//     display: flex;
//     flex-direction: column;
//     width: 100%;
//     height: 46%;
//     /* border: solid black 1px; */
//     gap: 15px;
//     padding: 15px;
//     display: none;
// }
//
// .info-wrap .btn4 .h6 {
//     font-size: 18px;
// }
//
// .info-wrap .btn4 .btn4-info p{
//     margin-bottom: 15px;
// }
//
// .info-wrap .btn4 .btn4-info ul li{
//     font-size: 15px;
//     color: #ACACA8;
//     list-style-type: circle;
//     list-style-position:inside;
// }
//
//
//
// .banner-bottom {
//     display: flex;
//     flex-direction: column;
//     margin: 0 auto;
//     justify-content: center;
//     width: 935px;
// }
//
// .container {
//     width: 80%;
//     height: 80%;
//     margin: 0 auto;
//     background-color: white;
//     border-radius: 8px;
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//     padding: 20px;
//     display: none;
// }
//
// .product-info2 {
//     width: 100%;
//     border-collapse: collapse;
// }
//
// .product-info2 th, .product-info2 td {
//     border: 1px solid #ddd;
//     padding: 10px;
//     text-align: left;
// }
//
// .product-info2 th {
//     background-color: #f2f2f2;
//     font-size: 18px;
// }
//
// .product-info2 td {
//     font-size: 16px;
// }
//
// .product-info2 tr:nth-child(even) {
//     background-color: #f9f9f9;
// }
//
// .quantity-control {
//     display: flex;
//     border-radius: 20px;
//     align-items: center;
//     background-color: #888888;
//     width: 118px;
//     height: 35px;
//     border: solid 1px #333;
//     justify-content: space-between;
// }
// .quantity-control button{
//     width: 30px;
//     height: 30px;
//     border: none;
//     background: none;
//     inline-size: auto;
//     font-size: 25px;
//     color: #FFFFFF
// }
//
// .quantity-input {
//     text-align: center;
//     width: 50px;
//     margin: 0 5px;
//     padding: 5px;
//     border: none;
//     background: none;
//     border-radius: 20px;
//     color: #FFFFFF;
// }


export default S;