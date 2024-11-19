import React from 'react';
import {Outlet} from "react-router-dom";

const SellerInfoContainer = () => {
    return (
        <div>
            sellerInfo container
            <Outlet />
        </div>
    );
};

export default SellerInfoContainer;