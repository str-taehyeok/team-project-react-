import React, { useEffect, useState } from 'react';
import S from './style';
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";

const SellerOrderList = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const {setValue} = useForm({mode: "onChange"});
    const { currentUser } = useSelector((state) => state.user);
    const [allCheck, setAllCheck] = useState(false);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const response = await fetch(`http://localhost:10000/orders/orders`);
                if (!response.ok) {
                    console.error("주문 데이터가 없습니다.");
                    return;
                }
                const data = await response.json();
                setOrders(data);
            } catch (error) {
                console.error(error);
                alert("주문 데이터를 가져오는 중 오류가 발생했습니다.");
            }
        };
        getOrders();
    }, []);

    const getDelete = async (orderId) => {
        try {
            const response = await fetch(`http://localhost:10000/orders/order/${orderId}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("삭제 실패");
            }
            setOrders(orders.filter(order => order.id !== orderId));
            alert("삭제되었습니다.");
        } catch (error) {
            console.error(error.message);
            alert("삭제 중 오류가 발생했습니다.")
        }
    };

    const handleAllAgree = (e) => {
        setAllCheck(e.target.checked);
        setValue("checks", []);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const openOrderDetails = (order) => {
        setSelectedOrder(order);
        setIsPopupOpen(true);
    };

    const closeOrderDetails = () => {
        setSelectedOrder(null);
        setIsPopupOpen(false);
    };

    return (
        <S.Container>
            <S.Title>
                <h1>주문조회</h1>
            </S.Title>
            <S.NoticeSearch>
                <S.SearchBar>
                    <S.Search type="text" placeholder="주문번호를 입력하세요"/>
                    <S.Search type="text" placeholder="주문자 이름을 입력하세요"/>
                </S.SearchBar>
                <S.SearchButtons>
                    <S.SearchButton>검색</S.SearchButton>
                    <S.ResetButton>초기화</S.ResetButton>
                </S.SearchButtons>
            </S.NoticeSearch>

            <S.NoticeList>
                <S.Table>
                    <thead>
                    <tr>
                        <th>
                            <input
                                type="checkbox"
                                value="all"
                                checked={allCheck}
                                onChange={handleAllAgree}/>
                            <S.MenuIcon onClick={toggleDropdown}
                                        src={process.env.PUBLIC_URL + "/assets/images/seller/down-arrow.svg"}/>
                            <S.DropdownContent id="dropdownMenu">
                                <p onClick={() => getDelete(currentUser.id)}>선택 주문 취소</p>
                                <p onClick={() => getDelete(currentUser.id)}>전체 주문 취소</p>
                            </S.DropdownContent>
                        </th>
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
                    {orders.map((order, index) => (
                        <tr key={order.id}>
                            <td><input type="checkbox"/></td>
                            <td>{index + 1}</td>
                            <td>{order.productName}</td>
                            <td>{order.productPrice?.toLocaleString()}원</td>
                            <td>{order.productCount}</td>
                            <td>{order.totalPrice?.toLocaleString()}원</td>
                            <td>{order.deliveryStatus}</td>
                            <td>{order.orderDate}</td>
                            <td>
                                <S.DetailsButton onClick={() => openOrderDetails(order)}>상세</S.DetailsButton>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </S.Table>
            </S.NoticeList>

            {isPopupOpen && selectedOrder && (
                <S.PopupOverlay>
                    <S.PopupContainer>
                        <S.FormFrame>
                            <div className="detail-frame">
                                <div className="detail-container">
                                    <h2 className="detail-title">주문 상세</h2>
                                    <button className="close-btn" onClick={closeOrderDetails}>닫기</button>
                                </div>
                            </div>
                            <div className="inputs">
                                <div className="info-input">
                                    <span>주문번호</span>
                                    <div className="info">
                                        <span>{selectedOrder.orderNumber}</span>
                                    </div>
                                </div>
                                <div className="info-input">
                                    <span>이름</span>
                                    <div className="info">
                                        <span>{selectedOrder.memberNickname}</span>
                                    </div>
                                </div>
                                <div className="info-input">
                                    <span>이메일</span>
                                    <div className="info">
                                        <span>{selectedOrder.memberEmail}</span>
                                    </div>
                                </div>
                                <div className="info-input">
                                    <span>전화번호</span>
                                    <div className="info">
                                        <span>{selectedOrder.memberPhone}</span>
                                    </div>
                                </div>
                                <div className="info-input">
                                    <span>지역</span>
                                    <div className="info">
                                        <span>{selectedOrder.memberAddress}</span>
                                    </div>
                                </div>
                            </div>
                        </S.FormFrame>
                    </S.PopupContainer>
                </S.PopupOverlay>
            )}
        </S.Container>
    );
};

export default SellerOrderList;