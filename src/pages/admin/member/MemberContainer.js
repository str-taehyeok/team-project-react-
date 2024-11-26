import React from 'react';
import S from "./style";
import {Form, Link, Outlet} from "react-router-dom";
import Footer from "../../layout/Footer";

const MemberContainer = () => {
    return (
        <div>
            admin member Container
                <Outlet/>
        </div>
);
};

export default MemberContainer;