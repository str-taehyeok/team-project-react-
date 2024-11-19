import React from 'react';
import {Outlet} from "react-router-dom";

const SellerProductContainer = () => {
    return (
        <div>
            판매자 컨트롤러
            <Outlet />
        </div>
    );
};

export default SellerProductContainer;