import React from 'react';
import S from './style'

const SellerProductList = () => {
    return (
        <div>
            <S.NoticeSearch>
                <S.Table>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>이미지</th>
                        <th>상품명</th>
                        <th>판매가</th>
                        <th>분류</th>
                        <th>상태</th>
                        <th>재고</th>
                        <th>등록일</th>
                        <th>관리</th>
                    </tr>
                    </thead>
                    <tbody>

            {/*        <c:forEach var="product" items="${products}" varStatus="status">*/}
            {/*            <tr>*/}
            {/*                <td>${status.index + 1}</td>*/}
            {/*                <!-- 행 번호 출력 -->*/}
            {/*                <td>*/}
            {/*                    <div className="image">*/}
            {/*                        <img src="../assets/images/product/${product.productImage}"*/}
            {/*                             alt="이미지"/>*/}
            {/*                    </div>*/}
            {/*                </td>*/}
            {/*                <td>*/}
            {/*                    <c:out value="${product.productName}"/>*/}
            {/*                </td>*/}
            {/*                <td>*/}
            {/*                    <c:out value="${product.productPrice}원"/>*/}
            {/*                </td>*/}
            {/*                <td>*/}
            {/*                    <c:out value="${product.productType}"/>*/}
            {/*                </td>*/}
            {/*                <td className="product-status" data-stock="${product.productStock}"></td>*/}
            {/*                <td>*/}
            {/*                    <c:out value="${product.productStock}"/>*/}
            {/*                </td>*/}
            {/*                <td>*/}
            {/*                    <c:out value="${product.productDate}"/>*/}
            {/*                </td>*/}
            {/*                <td>*/}
            {/*                    <div className="change-buttons">*/}
            {/*                        <button type="button" className="edit-btn"*/}
            {/*                                onClick="location.href='seller-update.seller?id=${product.id}'">수정*/}
            {/*                        </button>*/}
            {/*                        <button type="button" className="delete-btn"*/}
            {/*                                data-productid="${product.id}">삭제*/}
            {/*                        </button>*/}
            {/*                    </div>*/}
            {/*                </td>*/}
            {/*            </tr>*/}
            {/*        </c:forEach>*/}

                    </tbody>
                </S.Table>
            </S.NoticeSearch>

            {/*<div className="pop-up">*/}
            {/*    <p>삭제하시겠습니까?</p>*/}
            {/*    <div className="check-buttons">*/}
            {/*        <button type="button" className="delete-btn confirm-btn">확인</button>*/}
            {/*        <button className="cancel-btn">취소</button>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="popup-bg"></div>*/}
        </div>
    );
};

export default SellerProductList;