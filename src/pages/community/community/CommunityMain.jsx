import React from 'react';
import ReactDOM from "react-dom";
import Banner from "./Banner.jsx";
import Footer from "../../layout/Footer.jsx";
import S from './style.js';
import Slide from './Slide.jsx';
import { Link } from 'react-router-dom';
// import Banner from './Banner.jsx';



const CommunityMain = () => {
    return (
        <div>
            <S.BannerWrapper>
                    <p className='text1'>소중한 나의 반려동물과의 추억을 <br/>기록할 수 있어요!</p>
                    <p className='text2'>펫스널 컬러 별 포포 친구들 게시물 구경하러 와요</p>
                <Banner />
            </S.BannerWrapper>

            <S.Title>
                <div className='title-box'>
                    <div className='text-box1'>
                        <div>
                            <p className='text3'>게시물 작성하기</p>
                            <p className='text4'>지금 나만의 반려동물 일기를 작성해보세요!</p>
                        </div>
                        <Link to={"../post/my-post-list"}><p className='text5'>전체보기</p></Link>
                    </div>

                    <div className='addPostBox'>
                        <div className='addPost'>
                        <Link to={"../post/write"}><div className='click'>
                             <img className='plus' src="/assets/images/community/plus.svg" alt="플러스아이콘" />
                             <p className='text6'>내 게시물 추가하기</p>
                         </div></Link>
                        </div>
                        <Link to={"../post/my-post"}><div className='myPost'>
                            <img src="/assets/images/community/myPost1.svg" alt="나의 게시물1" />
                        </div></Link>
                        <Link to={"../post/my-post"}><div className='myPost'>
                            <img src="/assets/images/community/myPost2.svg" alt="나의 게시물2" />
                        </div></Link>
                        <Link to={"../post/my-post"}><div className='myPost'>
                            <img src="/assets/images/community/myPost3.svg" alt="나의 게시물3" />
                        </div></Link>
                        <Link to={"../post/my-post"}><div className='myPost'>
                            <img src="/assets/images/community/myPost1.svg" alt="나의 게시물1" />
                        </div></Link>
                        <Link to={"../post/my-post"}><div className='myPost'>
                            <img src="/assets/images/community/myPost1.svg" alt="나의 게시물1" />
                        </div></Link>
                    </div>
                </div>
                
                <Slide />

                <p className='text7'>COLOR’S PICK!</p>
                <div className='colorBox'>
                    <div className='orangeBox'>
                        <p className='text8'>ORANGE</p>
                        <Link to={"../post"}><p className='text9'>전체보기</p></Link>
                    </div>
                    <div className='goldBox'>
                      <p className='text8'>GOLD</p>
                      <Link to={"../post"}><p className='text9'>전체보기</p></Link>
                    </div>
                    <div className='gradationBox'>
                      <p className='text8'>GRADATION</p>
                      <Link to={"../post"}><p className='text9'>전체보기</p></Link>
                    </div>
                    <div className='lightPurple'>
                        <p className='text8'>LIGHT PURPLE</p>
                        <Link to={"../post"}><p className='text9'>전체보기</p></Link>
                    </div>
                    <div className='deepPurple'>
                     <p className='text8'>DEEP PURPLE</p>
                     <Link to={"../post"}><p className='text9'>전체보기</p></Link>
                    </div>
                </div>
            </S.Title>    
            <Footer />
        </div>
        

    );
};

export default CommunityMain;





