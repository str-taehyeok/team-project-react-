import React from 'react';
import {Outlet} from "react-router-dom";
import S from "./style";
import Footer from '../../layout/Footer';

const MyPetContainer = () => {
    return (
        <div>
            <S.Petanimal as="h1">반려동물</S.Petanimal>
            <Outlet />
            <Footer />
        </div>
    );
};

export default MyPetContainer;