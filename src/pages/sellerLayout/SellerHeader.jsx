import React from 'react';
import S from "./style";

const SellerHeader = () => {
    return (
        <S.Header>
            판매자 헤더
            <S.MenuWrap>
                <img className="menu-icon" src={process.env.PUBLIC_URL + "/assets/images/seller/menu.png"}
                     alt="메뉴"/><span>매출관리</span>
                {/*<div id="menu-frame">*/}
                {/*        <div className="menu-header">*/}
                {/*            <div className="welcome">seller님 환영합니다!</div>*/}
                {/*            <button className="logout" onClick="location.href='seller-logout.seller'">로그아웃</button>*/}
                {/*        </div>*/}
                {/*        <div className="menu-form">*/}
                {/*            <ul>*/}
                {/*                <li>*/}
                {/*                    <p>상품 관리</p>*/}
                {/*                    <div>*/}
                {/*                        <a href="../seller/seller-list.seller" style="color: white;"><p>상품조회</p></a>*/}
                {/*                        <a href="../seller/seller-write.seller" style="color: white;"><p>상품 등록</p></a>*/}
                {/*                    </div>*/}
                {/*                </li>*/}
                {/*                <li>*/}
                {/*                    <p>주문 관리</p>*/}
                {/*                    <div>*/}
                {/*                        <a href="../seller/seller-order-list.seller" style="color: white;"><p>주문조회</p></a>*/}
                {/*                    </div>*/}
                {/*                </li>*/}
                {/*                <li>*/}
                {/*                    <p>정산 관리</p>*/}
                {/*                    <div>*/}
                {/*                        <a href="#" style="color: white;"><p>정산내역조회</p></a>*/}
                {/*                    </div>*/}
                {/*                </li>*/}
                {/*                <li>*/}
                {/*                    <p>판매자 관리</p>*/}
                {/*                    <div>*/}
                {/*                        <a href="#" style="color: white;"><p>판매자정보 관리</p></a>*/}
                {/*                        <a href="#" style="color: white;"><p>사업자정보 관리</p></a>*/}
                {/*                    </div>*/}
                {/*                </li>*/}
                {/*                <li>*/}
                {/*                    <p>매출 관리</p>*/}
                {/*                    <div>*/}
                {/*                        <a href="../seller/seller-revenue-list.jsp" style="color: white;"><p>매출 조회</p></a>*/}
                {/*                    </div>*/}
                {/*                </li>*/}
                {/*            </ul>*/}
                {/*        </div>*/}
                {/*    </div>*/}
            </S.MenuWrap>
        </S.Header>
    );
};

export default SellerHeader;