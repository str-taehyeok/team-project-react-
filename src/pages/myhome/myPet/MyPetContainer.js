import React from 'react';
import {Outlet} from "react-router-dom";
import S from "./style";

const MyPetContainer = () => {
    return (
        <div>
            <S.Petanimal as="h1">반려동물</S.Petanimal>
            <Outlet />
        </div>
    );
};

export default MyPetContainer;