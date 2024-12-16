// import React, { useEffect, useState } from 'react';
// import S from './style';

const SellerOrderList = () => {
//     const [orders, setOrders] = useState([]);
//     const [checkedOrders, setCheckedOrders] = useState({});
//     const [isAllChecked, setIsAllChecked] = useState(false);
//
//     // 팝업 상태 관리
//     const [selectedOrder, setSelectedOrder] = useState(null);
//     const [showPopup, setShowPopup] = useState(false);
//
//     useEffect(() => {
//         const orders = async () => {
//             try {
//                 const response = await fetch('http://localhost:10000/orders/orders');
//                 const fetchedOrders = await response.json();
//                 setOrders(fetchedOrders);
//
//                 const checkedState = fetchedOrders.reduce((check, order) => {
//                     check[order.id] = false;
//                     return check;
//                 }, {});
//                 setCheckedOrders(checkedState);
//             } catch (error) {
//                 console.error('Error fetching orders:', error);
//             }
//         };
//
//         orders();
//     }, []);
//
//
//     const fetchedOrders = fetch().json();
//     console.log('Fetched Orders:', fetchedOrders);
//
//     const handleOrderCheck = (orderId) => {
//         setCheckedOrders(prev => ({
//             ...prev,
//             [orderId]: !prev[orderId]
//         }));
//
//         const allChecked = Object.values({
//             ...checkedOrders,
//             [orderId]: !checkedOrders[orderId]
//         }).every(checked => checked);
//         setIsAllChecked(allChecked);
//     };
//
//     const handleSelectAll = () => {
//         const newCheckedState = orders.reduce((check, order) => {
//             check[order.id] = !isAllChecked;
//             return check;
//         }, {});
//
//         setCheckedOrders(newCheckedState);
//         setIsAllChecked(!isAllChecked);
//     };
//
//     const handleCancelOrders = () => {
//         const orderIdsToCancel = Object.entries(checkedOrders)
//             .filter(([_, isChecked]) => isChecked)
//             .map(([orderId]) => orderId);
//
//         if (orderIdsToCancel.length === 0) {
//             alert('취소할 주문을 선택해주세요.');
//         }
//     };
// // 팝업 열기
//     const handleShowDetails = (order) => {
//         setSelectedOrder(order);
//         setShowPopup(true);
//     };
//
//     // 팝업 닫기
//     const handleClosePopup = () => {
//         setShowPopup(false);
//         setSelectedOrder(null);
//     };
//
//     return (
//         <S.Container>
//             <S.Title>주문 관리</S.Title>
//
//             <S.SearchSection>
//                 <S.SearchInput placeholder="주문번호를 입력하세요" />
//                 <S.SearchInput placeholder="주문자 이름을 입력하세요" />
//                 <S.Select>
//                     <option value="주문취소">선택주문취소</option>
//                     <option value="전체취소">전체주문취소</option>
//                 </S.Select>
//                 <S.SearchButtons>
//                     <S.Button>검색</S.Button>
//                     <S.Button>초기화</S.Button>
//                 </S.SearchButtons>
//             </S.SearchSection>
//
//             <S.OrderTable>
//                 <thead>
//                 <tr>
//                     <th>
//                         <S.Checkbox
//                             type="checkbox"
//                             checked={isAllChecked}
//                             onChange={handleSelectAll}
//                         />
//                     </th>
//                     <th>No</th>
//                     <th>상품명</th>
//                     <th>판매가</th>
//                     <th>개수</th>
//                     <th>총가격</th>
//                     <th>상태</th>
//                     <th>등록일</th>
//                     <th>관리</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {(orders || []).map((order, index) => (
//                     <tr key={order.id}>
//                         <td>
//                             <S.Checkbox
//                                 type="checkbox"
//                                 checked={checkedOrders[order.id] || false}
//                                 onChange={() => handleOrderCheck(order.id)}
//                             />
//                         </td>
//                         <td>{index + 1}</td>
//                         <td>{order.productName}</td>
//                         <td>{order.productPrice.toLocaleString()}원</td>
//                         <td>{order.productCount}</td>
//                         <td>{order.totalPrice.toLocaleString()}원</td>
//                         <td>{order.deliveryStatus}</td>
//                         <td>{new Date(order.orderDate).toLocaleDateString()}</td>
//                         <td>
//                             <S.Button onClick={() => handleShowDetails(order)}>상세</S.Button>
//                         </td>
//                     </tr>
//                 ))}
//                 </tbody>
//             </S.OrderTable>
//
//             <S.CancelButton onClick={handleCancelOrders}>
//                 선택 주문 취소
//             </S.CancelButton>
//
//             {/* 팝업 구현 */}
//             {showPopup && selectedOrder && (
//                 <S.PopupOverlay>
//                     <S.Popup>
//                         <S.PopupHeader>
//                             <h2>주문 상세</h2>
//                             <S.CloseButton onClick={handleClosePopup}>닫기</S.CloseButton>
//                         </S.PopupHeader>
//                         <S.PopupContent>
//                             <div><strong>주문번호:</strong> {selectedOrder.id}</div>
//                             <div><strong>상품명:</strong> {selectedOrder.productName}</div>
//                             <div><strong>수량:</strong> {selectedOrder.productCount}</div>
//                             <div><strong>총가격:</strong> {selectedOrder.totalPrice.toLocaleString()}원</div>
//                             <div><strong>상태:</strong> {selectedOrder.deliveryStatus}</div>
//                             <div><strong>등록일:</strong> {new Date(selectedOrder.orderDate).toLocaleDateString()}</div>
//                         </S.PopupContent>
//                     </S.Popup>
//                 </S.PopupOverlay>
//             )}
//         </S.Container>
//     );
};

export default SellerOrderList;