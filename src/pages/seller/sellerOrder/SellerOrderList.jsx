import React, {useEffect, useState} from 'react';
import S from "./style";
import { useParams} from "react-router-dom";

const SellerOrderList = () => {
    const {id} = useParams();
    const [order, setOrder] = useState({});
    // const navigate = useNavigate();

    useEffect(() => {
        const getOrder = async () => {
            const response = await fetch(`http://localhost:10000/orders/order/${id}`);
            if(!response.ok) return console.error(`데이터가 없습니다.`)
            const orders = await response.json();
            console.log(orders)
            return orders;
        }

        getOrder().then(setOrder).catch(console.error);

    }, [id]);


    return (
        <>
        <div>
            주문 관리
        </div>
        <S.Frame>
            <S.Title>
                <p>주문조회</p>
            </S.Title>
            <S.NoticeSearch>
                <S.SearchBar>
                    <input type="text" placeholder="주문번호를 입력하세요"/>
                    <input type="text" placeholder="주문자 이름을 입력하세요"/>
                    <select name="search">
                        {/*<option value="배송 전">배송 전</option>*/}
                        {/*<option value="배송 중">배송 중</option>*/}
                        {/*<option value="배송 후">배송완료</option>*/}
                        <option value="주문취소">선택주문취소</option>
                        <option value="주문취소">전체주문취소</option>
                    </select>
                </S.SearchBar>
                <div className="buttons">
                    <button className="search-btn">검색</button>
                    <button className="reset-btn">초기화</button>
                </div>
            </S.NoticeSearch>

            <section className="notice-list">
                <table>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>상품명</th>
                        <th>판매가</th>
                        <th>개수</th>
                        <th>총가격</th>
                        <th>상태</th>
                        <th>등록일</th>
                        <th>관리</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                {/*{order.productName}*/}
                            </td>
                            <td>
                                {/*{order.productPrice}*/}
                            </td>
                            <td>
                                {/*{order.productCount}*/}
                            </td>
                            <td>
                                {/*{order.totalPrice}*/}
                            </td>
                            <td>
                                {/*<c:out value="배송 전,배송 후,배송완료,주문취소"/>*/}
                            </td>
                            <td>
                                {/*{order.orderDate.substring(0, 16)}*/}
                            </td>
                            <td>
                                <button className="details-button">상세</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </section>

                <div className="form-frame">
                    <div className="detail-frame">
                        <div className="detail-container">
                            <h2 className="detail-title">주문 상세</h2>
                            <button className="close-btn">닫기</button>
                        </div>
                    </div>
                    <div className="inputs">
                        <div className="info-input">
                            <span>주문번호</span>
                            <div className="info">
                                <span>
                                    {/*<c:out value="${orderList.orderNumber}"/>*/}
                                </span>
                            </div>
                        </div>
                        <div className="info-input">
                            <span>이름</span>
                            <div className="info">
                                <span>
                                    {/*<c:out value="${orderList.memberNickname}"/>*/}
                                </span>
                            </div>
                        </div>
                        <div className="info-input">
                            <span>이메일</span>
                            <div className="info">
                                <span>
                                    {/*<c:out value="${orderList.memberEmail}"/>*/}
                                </span>
                            </div>
                        </div>
                        <div className="info-input">
                            <span>전화번호</span>
                            <div className="info">
                                <span>
                                    {/*<c:out value="${orderList.memberPhone}"/>*/}
                                </span>
                            </div>
                        </div>
                        <div className="info-input">
                            <span>지역</span>
                            <div className="info">
                                <span>
                                    {/*<c:out value="${orderList.memberAddress}"/>*/}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="popup-bg"></div>
        </S.Frame>
            </>
    );
};

export default SellerOrderList;