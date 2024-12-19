import styled from "styled-components";
import {h4Bold, h6Bold, h7Bold, h7Medium, h7Regular} from "../../../../global/common";

const S = {}

S.Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 100px 0;
    
    
    & span{
        display: flex;
        margin: 0 auto;
        ${h4Bold}
    }
    
    & input{
        width: 300px;
        height: 40px;
        border-radius: 20px;
        padding: 16px;
        margin: 50px auto;
        border: 1px solid #828282;
    }
`;

S.Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;

    button {
        margin: 0 5px;
        padding: 8px 12px;
        border: 1px solid #ddd;
        background: #fff;
        color: #333;
        font-size: 14px;
        cursor: pointer;
        border-radius: 4px;

        &:hover {
            background: #f0f0f0;
        }

        &:disabled {
            color: #ccc;
            cursor: not-allowed;
            background: #f9f9f9;
        }
    }
`;




S.ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    gap: 20px; 
    width: 80%; 
    margin: 100px auto 60px; 
`;

S.Products = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    padding: 15px;
    height: 100%;
`;

S.Heart = styled.div`
    position: absolute;
    top: 12px;
    right: 12px;
    width: 30px;
    height: 30px;

    & > img {
        width: 100%;
    }
`;

S.CustomImage = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    & > img {
        width: 100%;
        height: auto;
        border-radius: 10px;
    }
`;

S.CustomProductInfo = styled.div`
    margin-top: 15px;
    //text-align: center;

    ${h7Medium};
    & span:nth-child(9) {
        color: #565555;
    }
`;

S.ProductName = styled.div`
    ${h7Regular};
    margin-bottom: 10px;
`;

S.ProductRealPrice = styled.div`
    ${h6Bold};
    color: #565555;
    text-decoration: line-through;
`;

S.ProductDiscount = styled.div`
    ${h6Bold};
    color: #D20000;
    margin-right: 4px;
`;

S.ProductPrice = styled.div`
    ${h6Bold};
`;

S.ProductDiscountWrap = styled.div`
    display: flex;
    //justify-content: center;
    //align-items: center;
    margin-top: 10px;
`;

S.CustomProductMessage = styled.p`
    width: 100%;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #777;
`;


export default S;