
import React from 'react';
import {Outlet} from "react-router-dom";
import S from "./style";
import Header from "./Header";

const AdminLayout = () => {
    return (
        <S.LayoutWrapper>
            <Header></Header>
            <S.Main>
                <Outlet />
            </S.Main>
        </S.LayoutWrapper>
    );
};

export default AdminLayout;


