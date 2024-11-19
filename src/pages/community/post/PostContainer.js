import React from 'react';
import {Outlet} from "react-router-dom";

const PostContainer = () => {
    return (
        <div>
            post container
            <Outlet />
        </div>
    );
};

export default PostContainer;