import React, { useEffect, useState } from 'react';
import Banner from "./Banner.jsx";
import S from './style.js';
import Slide from './Slide.jsx';
import { Link } from 'react-router-dom';
import HeartBtn from './HeartBtn.jsx';


const orangePostList = [
    {
        id : 1,
        postImage1 : "/assets/images/community/myPost1.png",
        memberNickname : "고기고기냠냠냠",
        memberImage : "/assets/images/community/default-profile.png "
    },
    {
        id : 2,
        postImage1 : "/assets/images/community/myPost2.png",
        memberNickname : "지나 안지나",
        memberImage : "/assets/images/community/default-profile.png "
    },
    {
        id : 3,
        postImage1 : "/assets/images/community/myPost3.png",
        memberNickname : "철을 밀면 민철",
        memberImage : "/assets/images/community/default-profile.png "
    },
    {
        id : 4,
        postImage1 : "/assets/images/community/myPost4.png",
        memberNickname : "재금이 다음 재은",
        memberImage : "/assets/images/community/default-profile.png "
    },
    {
        id : 5,
        postImage1 : "/assets/images/community/myPost5.png",
        memberNickname : "연을 세우면 세연",
        memberImage : "/assets/images/community/default-profile.png"
    }
]

const CommunityMain = () => {

    const [ popularCommunites , setPopularCommunites] = useState([]);

    useEffect(() => {

        const getPopularCommunites = async () => {
            const response = await fetch("http://localhost:10000/posts/postsPopular");
            const datas = await response.json()
            return datas;
        }

        getPopularCommunites().then(setPopularCommunites).catch(console.error)

    }, [])

    console.log("popularCommunites", popularCommunites)

    const myPosts = popularCommunites.slice(0, 4).map(({id, imageName1}) => (
        <S.MyPost key={id} >
            <S.Heart>
                 <HeartBtn id={id} type={"community"} />
            </S.Heart>
            <Link to={`/post/read?postId=${id}`}>
            <img src={`${process.env.PUBLIC_URL}/assets/images/community/${imageName1}`} />
            </Link>
        </S.MyPost>
    ))
    

    const orangePosts = orangePostList.map(({id, postImage1, memberImage, memberNickname}, i) => (
        <S.OrangePostBox key={i}>
            <S.OrangePost>
                <S.PostImage>
                    <S.Heart>
                        <HeartBtn id={id} type={"community"} />
                    </S.Heart>
                    <Link to={`/post/read?postId=${id}`}>
                        <img src={postImage1} alt={"게시글" + (i + 1)} />
                    </Link>
                </S.PostImage>
                <S.ProfileBox>
                    <S.Profile>
                        <Link to={`/post/list?postId=${id}`}>
                            <img src={memberImage} alt={"게시글 리스트" + (i + 1)} />
                        </Link>
                    </S.Profile>
                    <S.NickName>{memberNickname}</S.NickName>
                </S.ProfileBox>
            </S.OrangePost>
        </S.OrangePostBox>
    ))  



    return (
        <div>
            {/* 커뮤니티 메인 배너 */}
            <S.BannerWrapper>
                    <p className='text1'>소중한 나의 반려동물과의 추억을 <br/>기록할 수 있어요!</p>
                    <p className='text2'>펫스널 컬러 별 포포 친구들 게시물 구경하러 와요</p>
                    <Link to={"/post/all"}>
                        <button>게시물 보러가기</button>
                    </Link>

                {/* 게시물 스와이퍼 */}
                <Banner />
            </S.BannerWrapper>

            <S.Title>
                {/* 나의 게시글 전체 박스 */}
                <S.MyPostBox>
                
                {/* 커뮤니티 나의 게시글 타이틀 */}
                    <S.MyTitle>
                        <div>
                            <p className='text3'>게시물 작성하기</p>
                            <p className='text4'>지금 나만의 반려동물 일기를 작성해보세요!</p>
                        </div>
                        <Link to={`/post/list?postId=${1}`}>
                            <p className='text5'>전체보기</p>
                        </Link>
                    </S.MyTitle>

                {/* 커뮤니티 게시글 작성 */}
                    <S.MyCommunityPost>
                        <S.AddPost>
                            <Link to={"../post/write"}>
                                <div>
                                    <img className='thumb' src="/assets/images/community/plus.png" alt="플러스아이콘" />
                                    <p>내 게시물 추가하기</p>
                                </div>
                            </Link>
                        </S.AddPost>

                {/* 커뮤니티 나의 게시글 */}
                    
                        {myPosts}
                    
                    </S.MyCommunityPost>
                </S.MyPostBox>

                {/* 슬라이드 배너 */}
                <Slide />

                <S.ColorTitle>COLOR’S PICK!</S.ColorTitle>

                <S.ColorBox>
                    <S.OrangeBox>
                        <S.ColorName>ORANGE</S.ColorName>
                        <Link to={"/post/orange"}><S.AllToGo>전체보기</S.AllToGo></Link>
                        <S.PostBox>
                            {orangePosts}
                        </S.PostBox>
                    </S.OrangeBox>

                    <S.GoldBox>
                        <S.ColorName>GOLD</S.ColorName>
                        <Link to={"/post/gold"}><S.AllToGo>전체보기</S.AllToGo></Link>
                        <S.PostBox>
                            {orangePosts}
                        </S.PostBox>
                    </S.GoldBox>

                    <S.GradationBox>
                        <S.ColorName>GRADATION</S.ColorName>
                        <Link to={"/post/gradation"}><S.AllToGo>전체보기</S.AllToGo></Link>
                        <S.PostBox>
                            {orangePosts}
                        </S.PostBox>
                    </S.GradationBox>

                    <S.LightPurpleBox>
                        <S.ColorName>LIGHT PURPLE</S.ColorName>
                        <Link to={"/post/light-purple"}><S.AllToGo>전체보기</S.AllToGo></Link>
                        <S.PostBox>
                            {orangePosts}
                        </S.PostBox>
                    </S.LightPurpleBox>

                    <S.SkyBlueBox>
                        <S.ColorName>SKY BLUE</S.ColorName>
                        <Link to={"/post/sky-blue"}><S.AllToGo>전체보기</S.AllToGo></Link>
                        <S.PostBox>
                            {orangePosts}
                        </S.PostBox>
                    </S.SkyBlueBox>

                    <S.SageGreenBox>
                        <S.ColorName>SAGE GREEN</S.ColorName>
                        <Link to={"/post/sage-green"}><S.AllToGo>전체보기</S.AllToGo></Link>
                        <S.PostBox>
                            {orangePosts}
                        </S.PostBox>
                    </S.SageGreenBox>

                    <S.IceBlueBox>
                        <S.ColorName>ICE BLUE</S.ColorName>
                        <Link to={"/post/ice-blue"}><S.AllToGo>전체보기</S.AllToGo></Link>
                        <S.PostBox>
                            {orangePosts}
                        </S.PostBox>
                    </S.IceBlueBox>

                    <S.DustySilverBox>
                        <S.ColorName>DUSTY SILVER</S.ColorName>
                        <Link to={"/post/dusty-silver"}><S.AllToGo>전체보기</S.AllToGo></Link>
                        <S.PostBox>
                            {orangePosts}
                        </S.PostBox>
                    </S.DustySilverBox>

                </S.ColorBox>
            </S.Title>    
        </div>
    );
};

export default CommunityMain;





