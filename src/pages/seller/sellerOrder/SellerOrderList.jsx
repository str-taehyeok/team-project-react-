import React, { useEffect, useState } from 'react';
import S from './style';

const SellerOrderList = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [checkedOrders, setCheckedOrders] = useState({});
    const [isAllChecked, setIsAllChecked] = useState(false);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                // 여기서 실제 백엔드 API 엔드포인트로 수정 필요
                const response = await fetch('http://localhost:10000/orders');

                if (!response.ok) {
                    throw new Error('주문 데이터를 불러오는데 실패했습니다.');
                }

                const data = await response.json();
                setOrders(data);

                // 초기 체크박스 상태 설정
                const initialCheckedState = data.reduce((acc, order) => {
                    acc[order.id] = false;
                    return acc;
                }, {});

                setCheckedOrders(initialCheckedState);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    const handleOrderCheck = (orderId) => {
        setCheckedOrders(prev => ({
            ...prev,
            [orderId]: !prev[orderId]
        }));

        const allChecked = Object.values({
            ...checkedOrders,
            [orderId]: !checkedOrders[orderId]
        }).every(checked => checked);
        setIsAllChecked(allChecked);
    };

    const handleSelectAll = () => {
        const newCheckedState = orders.reduce((check, order) => {
            check[order.id] = !isAllChecked;
            return check;
        }, {});

        setCheckedOrders(newCheckedState);
        setIsAllChecked(!isAllChecked);
    };

    const handleCancelOrders = () => {
        const orderIdsToCancel = Object.entries(checkedOrders)
            .filter(([_, isChecked]) => isChecked)
            .map(([orderId]) => orderId);

        if (orderIdsToCancel.length === 0) {
            alert('취소할 주문을 선택해주세요.');
            return;
        }

        // 여기에 주문 취소 API 호출 로직 추가
        console.log('주문 취소할 ID들:', orderIdsToCancel);
    };

    if (loading) return <div>로딩 중...</div>;
    if (error) return <div>오류: {error}</div>;

    return (
        <S.Container>
            <div className="title">
                <h1 className="h1">주문조회</h1>
            </div>

            <section className="notice-search">
                <div className="search-bar">
                    <input type="text" className="search" placeholder="주문번호를 입력하세요"/>
                    <input type="text" className="search" placeholder="주문자 이름을 입력하세요"/>
                </div>
                <div className="buttons">
                    <button className="search-btn">검색</button>
                    <button className="reset-btn">초기화</button>
                </div>
            </section>

            <section className="notice-list">
                <table>
                    <thead>
                    <tr>
                        <th>
                            <input
                                type="checkbox"
                                checked={isAllChecked}
                                onChange={handleSelectAll}
                            />
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
                            <td>
                                <input
                                    type="checkbox"
                                    checked={checkedOrders[order.id] || false}
                                    onChange={() => handleOrderCheck(order.id)}
                                />
                            </td>
                            <td>{index + 1}</td>
                            <td>{order.productName}</td>
                            <td>{order.productPrice.toLocaleString()}원</td>
                            <td>{order.productCount}</td>
                            <td>{order.totalPrice.toLocaleString()}원</td>
                            <td>{order.deliveryStatus}</td>
                            <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                            <td>
                                <button className="details-button">상세</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>

            <button
                className="cancel-selected-orders"
                onClick={handleCancelOrders}
            >
                선택 주문 취소
            </button>
        </S.Container>
    );
};

export default SellerOrderList;