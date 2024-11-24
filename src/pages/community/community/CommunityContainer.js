import React from 'react';
// import {Outlet} from "react-router-dom";
import Banner from './Banner';
import Slide from './Slide';
import Footer from '../../layout/Footer';
import S from './style';

const CommunityContainer = () => {
    return (
        <div>
            <S.BannerWrapper>
                    <p className='text1'>소중한 나의 반려동물과의 추억을 <br/>기록할 수 있어요!</p>
                    <p className='text2'>펫스널 컬러 별 포포 친구들 게시물 구경하러 와요</p>
                <Banner />
            </S.BannerWrapper>

            <S.Title>
                <div className='title-box'>
                    <p className='text3'>게시물 작성하기</p>
                    <p className='text4'>지금 나만의 반려동물 일기를 작성해보세요!</p>
                    <a href="http://naver.com"><p className='text5'>전체보기</p></a>

                    <div className='addPost'>
                    <a href="http://naver.com"><div className='click'>
                         <img className='plus' src="/assets/images/community/plus.svg" alt="플러스아이콘" />
                         <p className='text6'>내 게시물 추가하기</p>
                     </div></a>
                    </div>
                </div>
                
                <Slide />

                <p className='text7'>COLOR’S PICK!</p>
                <div className='orangeBox'>

                </div>
            </S.Title>



                    
            <Footer />
            {/* <Outlet /> */}
        </div>
    );
};

export default CommunityContainer;