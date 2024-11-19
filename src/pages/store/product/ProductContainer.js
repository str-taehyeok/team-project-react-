import React from 'react';
import {Outlet} from "react-router-dom";

const ProductContainer = () => {
    return (
        <div>
            product container
            <Outlet />
        </div>
    );
};

export default ProductContainer;