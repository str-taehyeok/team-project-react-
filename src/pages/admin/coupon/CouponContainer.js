import React from 'react';
import {Outlet} from "react-router-dom";

const CouponContainer = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default CouponContainer;