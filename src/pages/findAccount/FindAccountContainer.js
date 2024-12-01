import React from 'react';
import {Outlet} from "react-router-dom";
import { FindProvider } from '../../context/findContext';

const FindAccountContainer = () => {
    return (
        <div>
            <FindProvider>
                <Outlet />
            </FindProvider>
        </div>
    );
};

export default FindAccountContainer;