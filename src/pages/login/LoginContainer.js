import React from 'react';
import {Outlet} from "react-router-dom";

const LoginContainer = () => {
    return (
        <div>
            로그인 디폴트값
            <Outlet />
        </div>
    );
};

export default LoginContainer;