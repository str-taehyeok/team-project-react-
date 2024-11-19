import React from 'react';
import {Outlet} from "react-router-dom";

const MyInfoContainer = () => {
    return (
        <div>
            myInfo container
            <Outlet />
        </div>
    );
};

export default MyInfoContainer;