import React from 'react';
import {Outlet} from "react-router-dom";

const MemberContainer = () => {
    return (
        <div>
            admin member Container
            <Outlet />
        </div>
    );
};

export default MemberContainer;