import React from 'react';
import {Link, Outlet} from "react-router-dom";
import S from './style';

const LoginContainer = () => {
    return (
        <div>
            <S.LoginMain>
                <S.LogoBox>
                    <Link to={"/"}>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/layout/logo.png`} alt="로고" />
                    </Link>
                </S.LogoBox>
                <div>
                    <Link to={"/login"}>회원</Link>
                    <Link to={"/login/seller"}>판매자</Link>
                </div>
            </S.LoginMain>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default LoginContainer;