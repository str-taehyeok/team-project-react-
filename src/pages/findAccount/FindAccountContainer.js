import React from 'react';
import {Outlet} from "react-router-dom";

const FindAccountContainer = () => {
    return (
        <div>
            아이디/비번찾기 컨테이너
            <Outlet />
        </div>
    );
};

export default FindAccountContainer;