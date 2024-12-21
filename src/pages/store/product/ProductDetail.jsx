import React, {useContext, useEffect, useState} from 'react';
import S from './style';
import {ProductContext} from "../../../context/productContext";
import {useParams} from "react-router-dom";

const ProductDetail = () => {

    const { productState } = useContext(ProductContext);
    const { products } = productState;
    const { id } = useParams();


    const foundProduct = products?.find((pr) => String((pr).id) === String(id));



    return (
        <div>
            <S.ProductDetail>
                <div>
                    <p>{foundProduct.productDetail}</p>
                </div>
            </S.ProductDetail>
        </div>
    );
};

export default ProductDetail;