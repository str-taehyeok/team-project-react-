import React from 'react';
import {Outlet} from "react-router-dom";
<<<<<<< Updated upstream
import S from './style';
import Footer from '../../layout/Footer';
=======
import StoreCat from './StoreCat';
>>>>>>> Stashed changes

const StoreContainer = () => {

    return (
        <div>
            <S.StoreMainWrap>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/store/banner.png`} alt='배너' />
                </div>
            </S.StoreMainWrap>
            <Outlet />
<<<<<<< Updated upstream
            <Footer />
=======
            <StoreCat/>
>>>>>>> Stashed changes
        </div>
    );
};

export default StoreContainer;