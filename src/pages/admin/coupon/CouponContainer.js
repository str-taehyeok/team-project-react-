import React from 'react';
import {Outlet} from "react-router-dom";

const CouponContainer = () => {
    return (
        <div>
            쿠폰 컨테이너
            <Outlet />
        </div>
    );
};

export default CouponContainer;