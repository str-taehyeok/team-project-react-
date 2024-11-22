import React from 'react';
import {Outlet} from "react-router-dom";
import Banner from './Banner';
import S from './style';

const CommunityContainer = () => {
    return (
        <div>
            <S.BannerWrapper>
                <Banner />
            </S.BannerWrapper>
            <Outlet />
        </div>
    );
};

export default CommunityContainer;