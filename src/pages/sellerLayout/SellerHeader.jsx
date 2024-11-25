import React, {useState} from 'react';
import S from "./style";
import { Link } from 'react-router-dom';


const SellerHeader = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [activeSubmenu, setActiveSubmenu] = useState(null);
const [currentMenu, setCurrentMenu] = useState("상품 관리");

const menuItems = [
    {
        menu: "상품 관리",
        submenu: [
            { name: "상품조회", path: "/seller" },
            { name: "상품 등록", path: "/seller/seller-write" }
        ]
    },
    {
        menu: "주문 관리",
        submenu: [
            { name: "주문조회", path: "/seller/seller-order-list" }
        ]
    },
    {
        menu: "정산 관리",
        submenu: [
            { name: "정산내역조회", path: "/seller/settlement" }
        ]
    },
    {
        menu: "판매자 관리",
        submenu: [
            { name: "판매자정보 관리", path: "/seller/info" },
            { name: "사업자정보 관리", path: "/seller/business-info" }
        ]
    },
    {
        menu: "매출 관리",
        submenu: [
            { name: "매출 조회", path: "/seller/revenue-list" }
        ]
    }
];

const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveSubmenu(null);
};

const handleMenuItemHover = (index) => {
    if (isMenuOpen) {
        setActiveSubmenu(index);
    }
};

const handleMenuItemClick = (menu) => {
    setCurrentMenu(menu);
};

const handleMenuLeave = () => {
    setActiveSubmenu(null);
};

const handleFrameLeave = () => {
    setIsMenuOpen(false);
    setActiveSubmenu(null);
};

const handleLogout = () => {
    // Handle logout logic here
    window.location.href = '/seller-logout';
};

    return (
        <S.Header>
            <S.MenuWrap>
                <img src={process.env.PUBLIC_URL + "/assets/images/seller/menu.svg"} alt="메뉴"  onClick={handleMenuClick}/>
                <span>{currentMenu}</span>
                <S.MenuFrame style={{ display: isMenuOpen ? 'flex' : 'none' }} onMouseLeave={handleFrameLeave}>
                        <S.MenuHeader>
                            <S.Welcome>seller님 환영합니다!</S.Welcome>
                            <button className="logout" onClick={handleLogout}>로그아웃</button>
                        </S.MenuHeader>
                        <S.MenuForm>
                            <ul>
                                {menuItems.map((item, index) => (
                                    <li key={index} onMouseEnter={() => handleMenuItemHover(index)} onMouseLeave={handleMenuLeave}>
                                        <p>{item.menu}</p>
                                        <div>
                                            {item.submenu.map((subItem, subIndex) => (
                                                <Link key={subIndex} to={subItem.path}>
                                                    <p>{subItem.name}</p>
                                                </Link>
                                            ))}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </S.MenuForm>
                </S.MenuFrame>
            </S.MenuWrap>
        </S.Header>
    );
};

export default SellerHeader;