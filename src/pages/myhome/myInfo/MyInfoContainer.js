import React from 'react';
import {Outlet} from "react-router-dom";
import Footer from "../../layout/Footer"

const MyInfoContainer = () => {
    return (
        <div>
            myInfo container
            <Outlet />
            <Footer/>
        </div>
    );
};

export default MyInfoContainer;