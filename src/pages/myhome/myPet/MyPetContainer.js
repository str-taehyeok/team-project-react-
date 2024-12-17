import React, { useEffect } from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import S from "./style";
import Footer from '../../layout/Footer';
import { useSelector } from 'react-redux';

const MyPetContainer = () => {

    const { isLogin } = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if(!isLogin){
            alert("로그인 후 이용해 주세요.")
            navigate("/login")
        }
    }, [])

    return (
        <div>
            <S.Petanimal as="h1">반려동물</S.Petanimal>
            <Outlet />
            <Footer />
        </div>
    );
};

export default MyPetContainer;