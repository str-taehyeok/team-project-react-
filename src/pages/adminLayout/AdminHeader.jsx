import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import S from "./style";
import {setUser, setUserStatus} from "../../modules/user";
import {useDispatch} from "react-redux";

const AdminHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [currentTitle, setCurrentTitle] = useState("공지사항");
    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.removeItem("jwtToken");
        dispatch(setUser({}));
        dispatch(setUserStatus(false));
        window.location.href = "http://localhost:10000/logout";
    };

    const menuItems = [
        {
            title: [
                {name: "공지사항", path: "/admin"}
            ],
            submenu: [
                { name: "공지사항 조회", path: "/admin" },
                { name: "공지사항 신규등록", path: "/admin/write" }
            ]
        },
        {
            title: [
                {name: "배너 관리", path: "/admin/banner"}
            ],
            submenu: [
                { name: "배너 조회", path: "/admin/banner" },
                { name: "배너 신규등록", path: "/admin/banner/banner-write" }
            ]
        },
        {
            title: [
                {name: "회원 관리", path: "/admin/member"}
            ],
            submenu: [
                { name: "일반회원 정보조회", path: "/admin/member" },
                { name: "판매자회원 정보조회", path: "/admin/member/seller-list" }
            ]
        },
        {
            title: [
                {name: "쿠폰 관리", path: "/admin/coupon"}
            ],
            submenu: [
                { name: "쿠폰 조회", path: "/admin/coupon" },
                { name: "쿠폰 신규등록", path: "/admin/coupon/coupon-write" }
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


    const menus = menuItems.map((item, index) => (
        <li key={index} onMouseEnter={() => handleMenuItemHover(index)} onMouseLeave={handleMenuLeave}>
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
    ));

    return (
        <S.Header>
            <S.MenuWrap>
                <img src={process.env.PUBLIC_URL + "/assets/images/seller/menu.svg"} alt="메뉴" onClick={handleMenuClick}/>
                <span>{currentTitle}</span>
                <S.EntireMenu>
                    <S.MenuFrame style={{ display: isMenuOpen ? 'flex' : 'none' }}  onMouseLeave={handleFrameLeave}>
                        <S.MenuHeader>
                            <S.Welcome>admin님 환영합니다!</S.Welcome>
                            <Link to="/admin-login" onClick={handleLogout}>로그아웃</Link>
                        </S.MenuHeader>
                        <S.MenuForm>
                            <ul>
                                {menus}
                            </ul>
                        </S.MenuForm>
                    </S.MenuFrame>
                </S.EntireMenu>
            </S.MenuWrap>
        </S.Header>
    );
};

export default AdminHeader;