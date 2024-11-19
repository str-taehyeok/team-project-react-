
import React from 'react';
import {Outlet} from "react-router-dom";
import S from "./style";
import SellerHeader from './SellerHeader';

const AdminLayout = () => {
    return (
        <S.LayoutWrapper>
            <SellerHeader />
            <S.Main>
                <Outlet />
            </S.Main>
        </S.LayoutWrapper>
    );
};

export default AdminLayout;


