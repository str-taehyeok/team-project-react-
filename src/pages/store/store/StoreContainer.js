import React from 'react';
import {Outlet} from "react-router-dom";
import S from './style';
import Footer from '../../layout/Footer';

const StoreContainer = () => {

    return (
        <div>
            <S.StoreMainWrap>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/store/banner.png`} alt='배너' />
                </div>
            </S.StoreMainWrap>
            <Outlet />
            <Footer />
        </div>
    );
};

export default StoreContainer;