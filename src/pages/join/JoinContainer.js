import React from 'react';
import {Outlet} from "react-router-dom";

const JoinContainer = () => {
    return (
        <div>
            조인 컨테이너
            <Outlet />
        </div>
    );
};

export default JoinContainer;