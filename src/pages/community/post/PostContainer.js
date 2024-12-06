import React from 'react';
import {NavLink, Outlet, useLocation} from "react-router-dom";
import S from './style';
import Footer from '../../layout/Footer';

const PostContainer = () => {
    const path = useLocation().pathname;

    console.log(path);

    return (
        <>
            <S.LayoutBox>
                <S.LayoutButton>
                    {
                        path !== "/post/read" && "/post/list" ? (
                        <div className='button'>
                            <NavLink to={"orange"}><button className='orange'></button></NavLink>
                            <NavLink to={"gold"}><button className='gold'></button></NavLink>
                            <NavLink to={"gradation"}><button className='gradation'></button></NavLink>
                            <NavLink to={"light-purple"}><button className='lightPurple'></button></NavLink>
                            <NavLink to={"sky-blue"}><button className='skyBlue'></button></NavLink>
                            <NavLink to={"sage-green"}><button className='dageGreen'></button></NavLink>
                            <NavLink to={"ice-blue"}><button className='iceBlue'></button></NavLink>
                            <NavLink to={"dusty-silver"}><button className='dustySilver'></button></NavLink>
                            <NavLink to={"all"}> <button className='all'>All</button></NavLink>
                        </div>
                        ) : (
                            <></>
                        )
                    }
                    <Outlet />
                </S.LayoutButton>
            </S.LayoutBox>
            <Footer />
        </>
    );
};

export default PostContainer;