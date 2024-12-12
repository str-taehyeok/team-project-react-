import React from 'react';
import S from "./style";


// const products = productList.map(({productName, productPrice, src}, i) => (
//     <div key={i} >
//         <Link to={"/product"}>
//             <img src={src} alt={"상품" + (i + 1)} />
//             <span>{productName}</span>
//         </Link>
//         <span style={{ fontWeight: 700 }}>{productPrice}<br/>원</span>
//         <button>담기</button>
//     </div>
// ))

const ProductDelivery = () => {
    return (
                <S.Btn3>
                        <p className="h6">배송지역</p>
                        <ul>
                            <li>전국</li>
                            <li>일부 도서, 산간 지역은 배송불가하거나 배송기간이 길어질 수 있으며, 추가 배송비가 발생할 수 있습니다.</li>
                        </ul>
                        <p className="h6">배송비</p>
                        <ul>
                            <li>자세한 배송비는 상단 제품부분에서 확인 하여 주시기 바랍니다.</li>
                        </ul>
                        <p className="h6">업체(제휴) 배송 제품</p>
                        <ul>
                            <li>업체배송 제품의 배송비는 업체별 배송정책에 따라 달라질 수 있습니다. 상품 개별 페이지에 배송비를 확인해 주시기 바랍니다.</li>
                            <li>※ 각각의 주문 건에 대해 수령지가 일치할 경우 합포장 되어 배송될 수 있으며, 이로 인한 배송료 환불은 불가 합니다.</li>
                            <li>※ 주문건에 대한 별도 포장을 원하시는 경우, 수령인명 (혹은 주소지)를 약간 다르게 표기하셔야 합니다.</li>
                        </ul>
                        <p className="h6">배송기간</p>
                        <ul>
                            <li>통상 입금 확인일 기준으로 2일~3일소요됩니다. (주말제외)</li>
                        </ul>
                        <p className="h6">배송방식</p>
                        <ul>
                            <li>POWPOW에서는 신선한 상품 유통을 위하여 상온, 냉장, 개별배송, 부분합배송, 합배송 등의 다양한 배송방식을 채택하고 있습니다.</li>
                        </ul>
                </S.Btn3>
    );
};

export default ProductDelivery;