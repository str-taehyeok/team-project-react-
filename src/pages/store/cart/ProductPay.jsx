import React, {useEffect, useState} from 'react';
import S from './style';
import {useNavigate, useParams} from "react-router-dom";

const ProductPay = ({product}) => {

   // const { productPrice } = product;


    // const productPays = (
    //     <S.CartPay>
    //         <S.AllDeliveryBox>
    //             <S.AllDeliveryFee>
    //                 <p>총 배송비</p>
    //                 <p>{product.deliveryFee}</p>
    //             </S.AllDeliveryFee>
    //             <S.PurchasePrice>
    //                 <p>결제금액</p>
    //                 <p>{product.productPrice}</p>
    //             </S.PurchasePrice>
    //             <S.DiscountPrice>
    //                 <p>할인</p>
    //                 <p>{product.productDiscountPrice}</p>
    //             </S.DiscountPrice>
    //             <S.AllPurchaseFee>
    //                 <p>총 주문금액</p>
    //                 <p>{product.deliveryFee}</p>
    //             </S.AllPurchaseFee>
    //         </S.AllDeliveryBox>
    //     </S.CartPay>
    // );


    return (
        <div>
            {/*{productPays}*/}
        </div>
    );
};

export default ProductPay;