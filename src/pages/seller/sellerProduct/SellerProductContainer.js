import React from 'react';
import S from "./style"
import {Outlet, useLocation} from "react-router-dom";




const SellerProductContainer = () => {
    const location = useLocation();

// 경로에 따라 동적으로 제목 변경
    const pageTitle = () => {
        switch (location.pathname) {
            case '/seller/product':
                return '상품조회';
            case '/seller/product/register':
                return '신규 상품등록';
            case '/seller/product/modify':
                return '상품수정';
            default:
                return '상품조회';
        }
    };



    return (
        <div>
            <S.Content>
                <S.Title >
                    <span>{pageTitle}</span>
                </S.Title >
            </S.Content>
            <Outlet/>
        </div>
    );
};

export default SellerProductContainer;