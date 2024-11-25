import React from 'react';
import {Outlet} from "react-router-dom";

const StoreContainer = () => {
    return (
        <div>
            <div></div>
            <Outlet />
        </div>
    );
};

export default StoreContainer;