import React from 'react';
import S from './style';

const ProductDetail = () => {

    const [chosenProduct] = [
        {
            id : 1,
            productCategory : "헬스케어",
            productName : "강아지 전용 치약 + 칫솔 기획 세트 (트레이 / 칫솔핸들러 포함)",
            productPrice : 11_900,
            productDetail : "해당 상품에 대한 상세정보들입니다",
            productImage1 : "/assets/images/store/dental-dog.png",
            productImage2 : "/assets/images/store/dental-dog.png",
            productImage3 : "/assets/images/store/dental-dog.png",
            productImage4 : "/assets/images/store/dental-dog.png",
            productColor : "Orange",
            productSize : "M",
            productStock : 100,
            productDate : "2023-01-03",
            reviewStar : 4.5,
            productCode : "11111111",
            couponDiscountRate : "50%",
            deliveryFee : 3000,
            deliveryFeeKind : "무료",
            deliveryHow : "일반택배배송",
            deliveryPayWhen : "선결제",
            deliveryCompany : "우체국 택배"
        }
    ];


    return (
        <div>
            <S.ProductDetail>
                <div>
                    <p>{chosenProduct.productDetail}</p>
                </div>
            </S.ProductDetail>
        </div>
    );
};

export default ProductDetail;