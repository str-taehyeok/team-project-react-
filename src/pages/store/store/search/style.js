import styled from "styled-components";
import {h7Bold, h7Medium, h7Regular} from "../../../../global/common";

const S = {}

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
        & > img {
            
            border-radius: 20px;          
        }
`;

S.CustomProductInfo = styled.div`
  margin-top: 21px;

  ${h7Medium};
  & span:nth-child(9){
    color: #565555;
  }
`;


S.ProductName = styled.div`
    ${h7Regular};
`;


S.ProductRealPrice = styled.div`
    ${h7Regular};
    color: #565555;
    text-decoration: line-through;

`;
S.ProductDiscount = styled.div`
    ${h7Bold};
    color: #D20000;
    margin-right: 4px;

`;

S.ProductPrice = styled.div`
    ${h7Bold};
    

`;


S.ProductDiscountWrap = styled.div`
    width: 200px;
    height: 20px;
    display: flex;
    flex-wrap: wrap;
`;

S.CustomProductMessage = styled.p`
  width: 100%;
  text-align: center;
`;

export default S;