import styled from "styled-components";
import {
    h1Bold,
    flexColumnCenter,
    h11Regular,
    h8Medium,
    h9Medium,
    h5Bold, h11Medium
} from "../../../global/common";



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
        ${h5Bold}
    }
`;

S.ListWrap = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    
    & p{
        width: 125px;
        flex-shrink: 0;
    }
    
    & input{
        width: 100%;
        height: 40px;
        border-radius: 20px;
        border: solid 1px #888;
        //padding: 20px;
        padding: 0 17px 0 17px;
    }
    
    & select{
        width: 100%;
        height: 40px;
        //padding: 17px;
        padding-left: 17px;
        ${h9Medium};
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
        padding: 20px;
    }

`;


S.Division = styled.span`
    ${h9Medium};
    width: 100px;
    margin-right: 15px;
`;

S.Ratio = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 5px;
    align-items: center;
    
    
    & input{
        width: 20px;
        height: 20px;
        margin-right: 5px;
        justify-content: center;
    }
    
    & span{
        flex: 1;
        ${h9Medium};
        margin-right: 50px;
    }
`;

S.RatioWrap = styled.div`
    display: flex;
`;

S.H7 = styled.div`
    ${h9Medium}
`;



// shipping 배송

S.ShippingWrap = styled.div`
    margin-top: 60px;
`;

S.Shipping = styled.div`
    width: 100%;
    & select{
        width: 100%;
        height: 40px;
        //padding: 17px;
        padding-left: 17px;
        ${h9Medium};
        border-radius: 20px;
        border: solid 1px #888;
    }

    & input::placeholder{
        text-align: right;
        padding: 17px;
    }
`;

S.Explain = styled.div`
    margin-bottom: 10px;
    & span{
        display: block;
        color: #828282;
        font-weight: lighter;
        ${h11Medium};
        margin-left: 100px;
    }
`;



// 이미지 image

S.ImageWrap = styled.div`
    margin-top: 60px;
`;

S.imageContent = styled.div`
    display: flex;
    max-width: 1440px;
    //position: relative;
    //justify-content: space-between;
    
    & input{
        display: none;
        cursor: pointer;
    }
    
    & label{
        //position: absolute;
        //top: 50%;
        //left: 50%;
        //transform: translate(-50%, -50%);
        //background-color: rgba(255, 255, 255, 0.7);
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }
    
`;


S.MainImage = styled.div`
    display: flex;
    width: 220px;
    height: 220px;
    background-color: #d9d9d9;
    border-radius: 20px;
    //position: relative;
    
    & label{
        //width: 220px;
        //height: 220px;
    }
    
    & img{
        margin: 0 auto;
        //position: absolute;
        //left: 95px;
        //top: 95px;
        object-fit: contain;
        border-radius: 20px;
    }
`;

S.Main = styled.div`
    width: 270px;

    & span{
        width: 200px;
    }
    
    & input{
        width: 200px;
    }
`;

S.ImageInfo = styled.div`
    ${h5Bold};
    margin-bottom: 30px;
`;

S.SubImage = styled.div`
    display: block;
    width: 148px;
    height: 148px;
    background-color: #d9d9d9;
    border-radius: 20px;
    position: relative;
    
    & img{
        //position: absolute;
        //left: 60px;
        //top: 60px;
        width: 148px;
        height: 148px;
        margin: 0 auto;
        object-fit: contain;
        border-radius: 20px;
    }
`;


S.SubWrap = styled.div`
    width: 464px;
    display: flex;
    justify-content: space-between;
`;


S.Subs = styled.div`
    width: 160px;
    & label{
        width: 100px;
    }
`;


S.ButtonWrap = styled.div` 
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    margin-top: 100px;
    gap: 10px;
    margin-bottom: 156px;
    
    & button:nth-child(1){
        width: 90px;
        height: 30px;
        border: none;
        color: white;
        cursor: pointer;
        border-radius: 20px;
        background-color: #113F8A;
        ${h8Medium};
    }
    
    & button:nth-child(2){
        width: 90px;
        height: 30px;
        border: none;
        color: white;
        cursor: pointer;
        border-radius: 20px;
        background-color: #828282;
        ${h8Medium};
    }
`;




export default S;