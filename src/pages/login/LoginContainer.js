import React from 'react';
import { Link, Outlet } from "react-router-dom";
import S from './style';

const LoginContainer = () => {
    return (
        <S.root>
            <S.LoginMain>
                <S.LogoBox>
                    <Link to={"/"}>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/layout/logo.png`} alt="로고" />
                    </Link>
                </S.LogoBox>
                <S.Tap>
                    <S.MemberBtn><Link to={"/login"}>회원</Link></S.MemberBtn>
                    <S.SellerBtn><Link to={"/login/seller"}>판매자</Link></S.SellerBtn>
                </S.Tap>
                <div>
                    <Outlet />
                </div>
            </S.LoginMain>
        </S.root>
    );
};

export default LoginContainer;