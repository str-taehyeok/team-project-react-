import React from 'react';
import {Outlet} from "react-router-dom";



const CommunityContainer = () => {
    return (
        <div>     
            <Outlet />
        </div>
    );
};

export default CommunityContainer;