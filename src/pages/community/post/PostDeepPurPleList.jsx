import React from 'react';
import S from './style.js';
import Footer from "../../layout/Footer.jsx";
import { Link } from 'react-router-dom';


const PostList = () => {
    return (
        <div>
            {/* <S.PostListAll>
                <div className='button'>
                    <button className='oringe'></button>
                    <button className='gold'></button>
                    <button className='gradation'></button>
                    <button className='lightPurple'></button>
                    <button className='deepPurple'></button>
                    <button className='all'>All</button>
                </div>
            </S.PostListAll> */}


              <Footer />
        </div>
    );
};

export default PostList;