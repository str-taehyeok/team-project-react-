import React from 'react';
import {Outlet} from "react-router-dom";
import { PetsonalProvider } from '../../context/petsonalContext';

const PetsonalContainer = () => {
    return (
        <div>
            <PetsonalProvider >
                <Outlet />
            </PetsonalProvider>
        </div>
    );
};

export default PetsonalContainer;