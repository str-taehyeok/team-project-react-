import React from 'react';
import S from "./style"
import {Outlet, useLocation} from "react-router-dom";


const SellerProductContainer = () => {
    const location = useLocation();

    const pageTitle = () => {
        switch (location.pathname) {
            case '/seller/product':
                return '상품조회';
            case '/seller/product-write':
                return '신규 상품등록';
            case '/seller/product-update':
                return '상품수정';
            default:
                return '상품조회';
        }
    };

    return (
        <div>
            <S.Content>
                <S.Title >
                    <span>{pageTitle()}</span>
                </S.Title >
            <Outlet/>
            </S.Content>
        </div>
    );
};

export default SellerProductContainer;