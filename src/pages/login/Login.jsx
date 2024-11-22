import React, { useState, useRef } from 'react';
import S from "./style";
import { Link } from 'react-router-dom'


const Login = () => {
    const [memberType, setMemberType] = useState("buyer");

    // const handleMouseOver = () => {
    //     setIsHover(true);
    // }
    // const handleMouseOut = () => {
    //     setIsHover(false);
    // }

    // const handleMemberClick = () => {
    //     setActiveBtn("member");
    // };

    // const handleSellerClick = () => {
    //     setActiveBtn("seller");
    // };

    return (
        <S.LoginMain>
            <S.logoBox>
                <Link to={"/"}><img src={`${process.env.PUBLIC_URL}/assets/images/layout/logo.png`} alt="로고" /></Link>
            </S.logoBox>
            <button type="button" onClick={() => { setMemberType("buyer") }}>회원</button>
            <button type="button" onClick={() => { setMemberType("seller") }}>판매자</button>
            <button type="button" onClick={() => { setMemberType("admin") }}>관리자</button>
            {memberType === "buyer" ? (
                <>
                    "회원"
                </>
            ) : (
                <>
                    "판매자"
                </>
            )}
        </S.LoginMain>
    );
};

export default Login;