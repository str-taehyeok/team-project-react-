import React from 'react';
import {Outlet} from "react-router-dom";

const StoreContainer = () => {
    return (
        <div>
            store container
            <Outlet />
        </div>
    );
};

export default StoreContainer;