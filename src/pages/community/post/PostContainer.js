import React from 'react';
import {Link, NavLink, Outlet, useLocation, useParams, useSearchParams} from "react-router-dom";
import S from './style';
import Footer from '../../layout/Footer';

const PostContainer = () => {
    const path = useLocation().pathname;
    return (
        <>
            <S.LayoutBox>
                <S.LayoutButton>
                    {
                        path !== "/post/read" ? (
                            <div className='button'>
                            <NavLink to={"orange"}><button className='oringe'></button></NavLink>
                            <NavLink to={"gold"}><button className='gold'></button></NavLink>
                            <NavLink to={"gradation"}><button className='gradation'></button></NavLink>
                            <NavLink to={"light-purple"}><button className='lightPurple'></button></NavLink>
                            <NavLink to={"deep-purple"}><button className='deepPurple'></button></NavLink>
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