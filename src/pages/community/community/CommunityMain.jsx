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
                    <Link to={"../post"}><button className='button'>게시물 보러가기</button></Link>
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
                        <div className='post-container'>
                            <Link to={"../post/my-post"}><div className='myPost'>
                                <img src="/assets/images/community/myPost1.svg" alt="나의 게시물1" />
                            </div></Link>
                            <img className='heart' src="/assets/images/community/heart.svg" alt="빈하트" />
                        </div>

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
                        <Link to={"../post/orange"}><p className='text9'>전체보기</p></Link>

                        <div className="All">
                            <div className='post'>
                                <img className='AllPost' src="/assets/images/community/post10.svg" alt="게시물10" />
                                <div className='profile-box'>
                                    <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                    <p className='nick-name'>고기고기냠냠냠</p>
                                </div>
                            </div>
                            <div className='post'>
                                <img className='AllPost' src="/assets/images/community/post2.svg" alt="게시물2" />
                                <div className='profile-box'>
                                    <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                    <p className='nick-name'>지나 안지나</p>
                                </div>
                            </div>
                            <div className='post'>
                                <img className='AllPost' src="/assets/images/community/post7.svg" alt="게시물7" />
                                <div className='profile-box'>
                                    <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                    <p className='nick-name'>철을 밀면 민철</p>
                                </div>
                            </div>
                            <div className='post'>
                                <img className='AllPost' src="/assets/images/community/post4.svg" alt="게시물4" />
                                <div className='profile-box'>
                                    <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                    <p className='nick-name'>재금이 다음 재은</p>
                                </div>
                            </div>

                            <div className='post'>
                                <img className='AllPost' src="/assets/images/community/post5.svg" alt="게시물5" />
                                <div className='profile-box'>
                                    <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                    <p className='nick-name'>연을 세우면 세연</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='goldBox'>
                      <p className='text8'>GOLD</p>
                      <Link to={"../post/gold"}><p className='text9'>전체보기</p></Link>
                        <div className="All">
                            <div className='post'>
                                <img className='AllPost' src="/assets/images/community/post8.svg" alt="게시물8" />
                                <div className='profile-box'>
                                    <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                    <p className='nick-name'>고기고기냠냠냠</p>
                                </div>
                            </div>
                            <div className='post'>
                                <img className='AllPost' src="/assets/images/community/post2.svg" alt="게시물2" />
                                <div className='profile-box'>
                                    <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                    <p className='nick-name'>지나 안지나</p>
                                </div>
                            </div>
                            <div className='post'>
                                <img className='AllPost' src="/assets/images/community/post3.svg" alt="게시물3" />
                                <div className='profile-box'>
                                    <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                    <p className='nick-name'>철을 밀면 민철</p>
                                </div>
                            </div>
                            <div className='post'>
                                <img className='AllPost' src="/assets/images/community/post6.svg" alt="게시물6" />
                                <div className='profile-box'>
                                    <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                    <p className='nick-name'>재금이 다음 재은</p>
                                </div>
                            </div>

                            <div className='post'>
                                <img className='AllPost' src="/assets/images/community/post5.svg" alt="게시물5" />
                                <div className='profile-box'>
                                    <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                    <p className='nick-name'>연을 세우면 세연</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='gradationBox'>
                      <p className='text8'>GRADATION</p>
                      <Link to={"../post/gradation"}><p className='text9'>전체보기</p></Link>
                        <div className="All">
                            <div className='post'>
                                <img className='AllPost' src="/assets/images/community/post1.svg" alt="게시물1" />
                                <div className='profile-box'>
                                    <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                    <p className='nick-name'>고기고기냠냠냠</p>
                                </div>
                            </div>
                            <div className='post'>
                                <img className='AllPost' src="/assets/images/community/post8.svg" alt="게시물8" />
                                <div className='profile-box'>
                                    <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                    <p className='nick-name'>지나 안지나</p>
                                </div>
                            </div>
                            <div className='post'>
                                <img className='AllPost' src="/assets/images/community/post3.svg" alt="게시물3" />
                                <div className='profile-box'>
                                    <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                    <p className='nick-name'>철을 밀면 민철</p>
                                </div>
                            </div>
                            <div className='post'>
                                <img className='AllPost' src="/assets/images/community/post4.svg" alt="게시물4" />
                                <div className='profile-box'>
                                    <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                    <p className='nick-name'>재금이 다음 재은</p>
                                </div>
                            </div>

                            <div className='post'>
                                <img className='AllPost' src="/assets/images/community/post5.svg" alt="게시물5" />
                                <div className='profile-box'>
                                    <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                    <p className='nick-name'>연을 세우면 세연</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lightPurple'>
                        <p className='text8'>LIGHT PURPLE</p>
                        <Link to={"../post/light-purple"}><p className='text9'>전체보기</p></Link>
                            <div className="All">
                                <div className='post'>
                                    <img className='AllPost' src="/assets/images/community/post6.svg" alt="게시물6" />
                                    <div className='profile-box'>
                                        <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                        <p className='nick-name'>고기고기냠냠냠</p>
                                    </div>
                                </div>
                                <div className='post'>
                                    <img className='AllPost' src="/assets/images/community/post2.svg" alt="게시물2" />
                                    <div className='profile-box'>
                                        <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                        <p className='nick-name'>지나 안지나</p>
                                    </div>
                                </div>
                                <div className='post'>
                                    <img className='AllPost' src="/assets/images/community/post3.svg" alt="게시물3" />
                                    <div className='profile-box'>
                                        <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                        <p className='nick-name'>철을 밀면 민철</p>
                                    </div>
                                </div>
                                <div className='post'>
                                    <img className='AllPost' src="/assets/images/community/post7.svg" alt="게시물7" />
                                    <div className='profile-box'>
                                        <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                        <p className='nick-name'>재금이 다음 재은</p>
                                    </div>
                                </div>

                                <div className='post'>
                                    <img className='AllPost' src="/assets/images/community/post5.svg" alt="게시물5" />
                                    <div className='profile-box'>
                                        <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                        <p className='nick-name'>연을 세우면 세연</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className='deepPurple'>
                     <p className='text8'>DEEP PURPLE</p>
                     <Link to={"../post/deep-purple"}><p className='text9'>전체보기</p></Link>
                        <div className="All">
                            <div className='post'>
                                <img className='AllPost' src="/assets/images/community/post1.svg" alt="게시물1" />
                                <div className='profile-box'>
                                    <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                    <p className='nick-name'>고기고기냠냠냠</p>
                                </div>
                            </div>
                            <div className='post'>
                                <img className='AllPost' src="/assets/images/community/post7.svg" alt="게시물7" />
                                <div className='profile-box'>
                                    <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                    <p className='nick-name'>지나 안지나</p>
                                </div>
                            </div>
                            <div className='post'>
                                <img className='AllPost' src="/assets/images/community/post3.svg" alt="게시물3" />
                                <div className='profile-box'>
                                    <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                    <p className='nick-name'>철을 밀면 민철</p>
                                </div>
                            </div>
                            <div className='post'>
                                <img className='AllPost' src="/assets/images/community/post9.svg" alt="게시물9" />
                                <div className='profile-box'>
                                    <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                    <p className='nick-name'>재금이 다음 재은</p>
                                </div>
                            </div>

                            <div className='post'>
                                <img className='AllPost' src="/assets/images/community/post5.svg" alt="게시물5" />
                                <div className='profile-box'>
                                    <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                    <p className='nick-name'>연을 세우면 세연</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </S.Title>    
            <Footer />
        </div>
        

    );
};

export default CommunityMain;





