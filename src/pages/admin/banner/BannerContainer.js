import React from 'react';
import {Outlet} from "react-router-dom";

const BannerContainer = () => {
    return (
        <div>
            banner container
            <Outlet />
        </div>
    );
};

export default BannerContainer;