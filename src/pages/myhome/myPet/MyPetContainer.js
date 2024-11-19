import React from 'react';
import {Outlet} from "react-router-dom";

const MyPetContainer = () => {
    return (
        <div>
            myPet container
            <Outlet />
        </div>
    );
};

export default MyPetContainer;