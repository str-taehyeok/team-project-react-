
import React from 'react';
import {Outlet} from "react-router-dom";
import S from "./style";
import Header from "./Header";

const Layout = () => {
    return (
        <S.LayoutWrapper>
            <Header />
            <S.Main>
                <Outlet />
            </S.Main>
        </S.LayoutWrapper>
    );
};

export default Layout;


