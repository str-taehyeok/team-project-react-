import React from 'react';
import {Outlet} from "react-router-dom";
import Footer from '../../layout/Footer';


const CommunityContainer = () => {
    return (
        <>     
            <Outlet />
            <></>
            <Footer />
        </>
    );
};

export default CommunityContainer;