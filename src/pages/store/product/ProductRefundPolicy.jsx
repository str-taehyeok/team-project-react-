import React from 'react';
import S from "./style";

const ProductRefundPolicy = () => {
    return (
        <div>
                <S.Btn4>
                    <S.Btn4Info>
                        <p>교환/반품이 가능한 경우</p>
                        <ul>
                            <li>제품 수령일 기준 30일 이내 (단, 구매자 단순변심 반품일 경우 수령 후 7일 이내) 반품이 가능합니다.</li>
                            <li>제품 수령 후 제품이 주문 내용과 다른 경우, 제품이 고객님께 인도될 당시 상품이 멸실 또는 훼손된 경우, 구매자 단순 변심(단, 냉장/냉동식품
                                제외)의 경우 교환/반품이 가능합니다.
                            </li>
                            <li>전자상거래 등에서의 소비자보호에 관한 법률에 규정되어 있는 소비자 청약철회 가능범위에 해당되는 경우 교환/반품이 가능합니다.</li>
                            <li>통신판매업자가 방문 판매 등에 관한 법률에서 규정하고 잇는 광고에 표시하여야 할 사항을 표시하지 아니한 경우 교환/반품이 가능합니다.</li>
                        </ul>
                    </S.Btn4Info>
                </S.Btn4>
        </div>
    );
};

export default ProductRefundPolicy;