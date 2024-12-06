import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import S from "./style";

const SellerHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [currentTitle, setCurrentTitle] = useState("상품 관리");

    const menuItems = [
        {
            title: [
                {name: "상품 관리", path: "/seller"}
            ],
            submenu: [
                { name: "상품조회", path: "/seller" },
                { name: "상품 등록", path: "/seller/product-write" }
            ]
        },
        {
            title: [
                    {name: "주문 관리", path: "/seller/seller-order"}
            ],
            submenu: [
                { name: "주문조회", path: "/seller/seller-order" }
            ]
        },
        {
            title: [
                {name: "정산 관리", path: "/seller/seller-adjustment"}
            ],
            submenu: [
                { name: "정산내역조회", path: "/seller/seller-adjustment" }
            ]
        },
        {
            title: [
                {name: "판매자 관리", path: "/seller/seller-info"}
            ],
            submenu: [
                { name: "판매자정보 관리", path: "/seller/seller-info" },
                { name: "사업자정보 관리", path: "/seller/seller-info/business-update" }
            ]
        },
        {
            title: [
                {name: "매출 관리", path: "/seller/seller-revenue"}
            ],
            submenu: [
                { name: "매출 조회", path: "/seller/seller-revenue" }
            ]
        }
    ];

    const handleMenuItemClick = (title) => {
        setCurrentTitle(title);
    };

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
        setActiveSubmenu(null);
    };

    const handleMenuItemHover = (index) => {
        if (isMenuOpen) {
            setActiveSubmenu(index);
        }
    };

    const handleMenuLeave = () => {
        setActiveSubmenu(null);
    };

    const handleFrameLeave = () => {
        setTimeout(() => {
            setIsMenuOpen(false);
            setActiveSubmenu(null);
        }, 300);
    };

    const handleLogout = () => {
        window.location.href = '/login';
    };

    return (
        <S.Header>
            <S.MenuWrap>
                <img src={process.env.PUBLIC_URL + "/assets/images/seller/menu.svg"} alt="메뉴" onClick={handleMenuClick}/>
                <span>{currentTitle}</span>
                <S.EntireMenu>
                <S.MenuFrame style={{ display: isMenuOpen ? 'flex' : 'none' }}  onMouseLeave={handleFrameLeave}>
                    <S.MenuHeader>
                        <S.Welcome>seller님 환영합니다!</S.Welcome>
                        <button type="button" className="logout" onClick={handleLogout}>
                            로그아웃
                        </button>
                    </S.MenuHeader>
                    <S.MenuForm>
                        <ul>
                            {menuItems.map((item, index) => (
                                <li key={index.title} onMouseEnter={() => handleMenuItemHover(index)} onMouseLeave={handleMenuLeave}>
                                    {/*<p onClick={() => handleMenuItemClick(item.title)}>{item.title}</p>*/}
                                    <Link to={item.title[0].path} onClick={() => handleMenuItemClick(item.title[0].name)}>
                                        <p>{item.title[0].name}</p>
                                    </Link>
                                    <div style={{height: activeSubmenu === index ? `${item.submenu.length * 30}px` : '0'}}>
                                        {item.submenu.map((subItem, subIndex) => (
                                            <Link key={subIndex} to={subItem.path} style={{color: 'white'}} onClick={() => handleMenuItemClick(item.title[0].name)}>
                                                <span>{subItem.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </S.MenuForm>
                </S.MenuFrame>
                </S.EntireMenu>
            </S.MenuWrap>
        </S.Header>
    );
};

export default SellerHeader;