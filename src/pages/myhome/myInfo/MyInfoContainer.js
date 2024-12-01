import React from 'react';
import {Outlet} from "react-router-dom";
import Footer from "../../layout/Footer";
import S from "./style";
import { Link } from 'react-router-dom';

const MyInfoContainer = () => {
    return (
        <div>
            <S.MyHomeLeft>
                <p>나의 정보</p>
                <ul>
                    <li><Link to={"/myhome"}>프로필</Link></li>
                    <li>|</li>
                    <li><Link to={"/myhome/likes"}>좋아요</Link></li>
                    <li>|</li>
                    <li><Link to={"/myhome/notification"}>알림설정</Link></li>
                    <li>|</li>
                    <li><Link to={"/myhome/password-update"}>비밀번호 변경</Link></li>
                </ul>
            </S.MyHomeLeft>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default MyInfoContainer;