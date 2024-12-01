import React from 'react';
import {Outlet} from "react-router-dom";
import Footer from "../../layout/Footer"
import S from "./style";

const MyInfoContainer = () => {
    return (
        <div>
            <S.MyHomeLeft>
                <p>나의 정보</p>
                <ul>
                    <li>프로필</li>
                    <li>|</li>
                    <li>좋아요</li>
                    <li>|</li>
                    <li>알림설정</li>
                    <li>|</li>
                    <li>비밀번호 변경</li>
                </ul>
            </S.MyHomeLeft>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default MyInfoContainer;