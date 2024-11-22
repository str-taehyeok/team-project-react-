import React from 'react';
import {Outlet} from "react-router-dom";
import Banner from './Banner';
import S from './style';

const CommunityContainer = () => {
    return (
        <div>
            <S.BannerWrapper>
                <p>소중한 나의 반려동물과의 추억을 <br/>기록할 수 있어요!</p>
                <p>펫스널 컬러 별 포포 친구들 게시물 구경하러 와요</p>
                <Banner />
            </S.BannerWrapper>
            <Outlet />
        </div>
    );
};

export default CommunityContainer;