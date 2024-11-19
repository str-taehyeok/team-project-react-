import React from 'react';
import {Outlet} from "react-router-dom";

const UnsubscribeContainer = () => {
    return (
        <div>
            unsubscribe container
            <Outlet />
        </div>
    );
};

export default UnsubscribeContainer;