import React from 'react';
import {Outlet} from "react-router-dom";

const BannerContainer = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default BannerContainer;