import React from 'react';
import {Outlet} from "react-router-dom";

const AnnouncementContainer = () => {
    return (
        <div>
            announcement container
            <Outlet />
        </div>
    );
};

export default AnnouncementContainer;