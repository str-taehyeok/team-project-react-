import React, { useEffect, useState } from 'react';
import S from './style';

const SellerOrderList = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [ orders,  setOrders ] = useState([])


    useEffect(() => {
        const getOrders = async () => {
            try {
                const response = await fetch("http://localhost:10000/orders/orders");
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
    }, [ orders, setOrders]);

    // const handleOrderCheck = (orderId) => {
    //     setCheckedOrders(prev => ({
    //         ...prev,
    //         [orderId]: !prev[orderId]
    //     }));
    //
    //     const allChecked = Object.values({
    //         ...checkedOrders,
    //         [orderId]: !checkedOrders[orderId]
    //     }).every(checked => checked);
    //     setIsAllChecked(allChecked);
    // };
    // //
    // const handleSelectAll = () => {
    //     const newCheckedState = orders.reduce((check, order) => {
    //         check[order.id] = !isAllChecked;
    //         return check;
    //     }, {});
    //
    //     setCheckedOrders(newCheckedState);
    //     setIsAllChecked(!isAllChecked);
    // };
    //
    // const handleCancelOrders = () => {
    //     const orderIdsToCancel = Object.entries(checkedOrders)
    //         .filter(([_, isChecked]) => isChecked)
    //         .map(([orderId]) => orderId);
    //
    //     if (orderIdsToCancel.length === 0) {
    //         alert('취소할 주문을 선택해주세요.');
    //         return;
    //     }
    //
    //     console.log('주문 취소할 ID들:', orderIdsToCancel);
    // };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
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
                                <input type="checkbox"/>
                                <S.MenuIcon onClick={toggleDropdown}
                                     src={process.env.PUBLIC_URL + "/assets/images/seller/down-arrow.svg"}/>
                                <S.DropdownContent id="dropdownMenu">
                                    <p>선택 주문 취소</p>
                                    <p>전체 주문 취소</p>
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
                        <div className="line"></div>
                        <tbody>
                        <tr>
                            <td><input type="checkbox"/></td>
                            <td>Order12345</td>
                            <td>Product Name</td>
                            <td>$100</td>
                            <td>7099</td>
                            <td>709900</td>
                            <td>배송준비중중</td>
                            <td>2024-12-12</td>
                            <td>
                                <S.DetailsButton>상세</S.DetailsButton>
                            </td>
                        </tr>
                        </tbody>
                    </S.Table>
                </S.NoticeList>

                <S.FormFrame>
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
                                {/*<span>${orderList.orderNumber}</span>*/}
                            </div>
                        </div>
                        <div className="info-input">
                            <span>이름</span>
                            <div className="info">
                                {/*<span>${orderList.memberNickname}</span>*/}
                            </div>
                        </div>
                        <div className="info-input">
                            <span>이메일</span>
                            <div className="info">
                                {/*<span>${orderList.memberEmail}</span>*/}
                            </div>
                        </div>
                        <div className="info-input">
                            <span>전화번호</span>
                            <div className="info">
                                {/*<span>${orderList.memberPhone}</span>*/}
                            </div>
                        </div>
                        <div className="info-input">
                            <span>지역</span>
                            <div className="info">
                                {/*<span>${orderList.memberAddress}</span>*/}
                            </div>
                        </div>
                    </div>
                </S.FormFrame>
                <S.PopupBackground></S.PopupBackground>
            </S.Container>
    );
};

            export default SellerOrderList;