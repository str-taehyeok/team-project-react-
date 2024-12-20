import React, {useContext, useEffect, useState} from 'react';
import S from './style';
import {ProductContext} from "../../../context/productContext";
import {useParams} from "react-router-dom";

const ProductDetail = () => {

    // const [chosenProduct] = [
    //     {
    //         id : 1,
    //         productCategory : "헬스케어",
    //         productName : "강아지 전용 치약 + 칫솔 기획 세트 (트레이 / 칫솔핸들러 포함)",
    //         productPrice : 11_900,
    //         productDetail : "해당 상품에 대한 상세정보들입니다",
    //         productImage1 : "/assets/images/store/dental-dog.png",
    //         productImage2 : "/assets/images/store/dental-dog.png",
    //         productImage3 : "/assets/images/store/dental-dog.png",
    //         productImage4 : "/assets/images/store/dental-dog.png",
    //         productColor : "Orange",
    //         productSize : "M",
    //         productStock : 100,
    //         productDate : "2023-01-03",
    //         reviewStar : 4.5,
    //         productCode : "11111111",
    //         couponDiscountRate : "50%",
    //         deliveryFee : 3000,
    //         deliveryFeeKind : "무료",
    //         deliveryHow : "일반택배배송",
    //         deliveryPayWhen : "선결제",
    //         deliveryCompany : "우체국 택배"
    //     }
    // ];

    const { productState } = useContext(ProductContext);
    const { products } = productState;
    const { id } = useParams();
    const [relatedProducts, setRelatedProducts] = useState([]);


    const foundProduct = products?.find(product => String(product.id) === String(id));

    // 연관 상품만
    useEffect(() => {
        if (products && products.length > 0 && foundProduct) {
            const filtered = products
                .filter(product =>
                    product.productCategory === foundProduct.productCategory &&
                    product.id !== foundProduct.id
                )
                .slice(0, 10);
            setRelatedProducts(filtered);
        }
    }, [products, foundProduct]);


    return (
        <div>
            <S.ProductDetail>
                <div>
                    <p>{relatedProducts.productDetail}</p>
                </div>
            </S.ProductDetail>
        </div>
    );
};

export default ProductDetail;