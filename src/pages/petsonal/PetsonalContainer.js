import React from 'react';
import {Outlet} from "react-router-dom";

const PetsonalContainer = () => {
    return (
        <div>
            petsonal container
            <Outlet />
        </div>
    );
};

export default PetsonalContainer;