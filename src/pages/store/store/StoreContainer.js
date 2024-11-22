import React from 'react';
import {Outlet} from "react-router-dom";

const StoreContainer = () => {
    return (
        <div>
            <div>배너</div>
            <Outlet />
        </div>
    );
};

export default StoreContainer;