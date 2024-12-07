import React from 'react';
import S from './style.js';
import Slide from './Slide.jsx';
import { Link, useSearchParams } from 'react-router-dom';
import FollowBtn from './FollowBtn.jsx';
import HeartBlackBtn from './HeartBlacktBtn.jsx';
import HeartBtn from './HeartBtn.jsx';

const myPost = [
    { 
        memberNickname : "쏘오연",
        memberImage : "/assets/images/community/default-myProfile.png ",
        memberImage1 : "/assets/images/community/default-profile.png ",
        postTitle : "반려동물 게시물",
        postContent :   "게시물에 적은 본문 내용이 여기에 적힙니다." + 
                        "# 태그를 이용해서 연관 검색어에 걸리도록 작성가능합니다." +
                        "아무거나 적어주세요." +
                        "당신의 반려동물에 관한건 뭐든지요." +
                        "사진은 필참이기에 게시글만 올라올 가능성은 없습니다.",
        likeCount : "0",
        commentCount : "0",
        commentContent : "댓글 TEST 작업주웅"
    }
]

const datas = [
    {
        postImage1 : "/assets/images/community/myPost1.png",
    },
    {
        postImage1 : "/assets/images/community/myPost2.png",
    },
    {
        postImage1 : "/assets/images/community/myPost3.png",
    },
    {
        postImage1 : "/assets/images/community/myPost4.png",
    },
    {
        postImage1 : "/assets/images/community/myPost5.png",
    },
]

const UserPost = () => {

    const [serachParams] = useSearchParams();
    const id = serachParams.get("postId")
    console.log(id)

    const myPostPage = myPost.map(({memberImage, memberImage1, memberNickname, postTitle, postContent, likeCount, commentCount, commentContent}, i) => (
        <S.MyPostPage key={i}>
            <S.MyPostPageBox>
            <S.MyPostBox>
                <S.ProfileBox>
                    <S.MyProfile>
                        <Link to={`/post/list?postId=${id}`}>
                            <img src={memberImage} alt="프로필" />
                        </Link>
                    </S.MyProfile>
                        <S.NickName>{memberNickname}</S.NickName>
                    <FollowBtn />
                </S.ProfileBox>
                <Slide />
                <S.MyPostUnderBox>
                    <S.PostUnder>
                        <HeartBlackBtn/>
                        <S.LikeNumber>{likeCount}</S.LikeNumber>
                        <S.DotBtn><button><img src="/assets/images/community/dots.png" alt="삼점메뉴" /></button></S.DotBtn>
                    </S.PostUnder>
                    <S.PostTitle>{postTitle}</S.PostTitle>
                    <S.PostContent>{postContent}</S.PostContent>
                </S.MyPostUnderBox>
            </S.MyPostBox>

            <S.CommentDiv>
                <S.CommentNumber>
                    <S.Comment>댓글</S.Comment>
                    <S.Comment>{commentCount}</S.Comment>
                </S.CommentNumber>
                <S.MyComment>
                    <S.MyProfile>
                        <img src={memberImage} alt="프로필" />
                    </S.MyProfile>
                    <S.InputContainer>
                        <input placeholder='댓글을 입력해주세요.'></input>
                        <button>완료</button>
                    </S.InputContainer>
                </S.MyComment>
                <S.CommentBox>
                    <Link to={`/post/list?postId=${id}`}>
                        <img src={memberImage1} alt="프로필" />
                    </Link>
                    <S.CommentText>
                        <S.NickName>{memberNickname}</S.NickName>
                        <p>{commentContent}</p>
                    </S.CommentText>
                    <S.DotBtn><button><img src="/assets/images/community/dots.png" alt="삼점메뉴" /></button></S.DotBtn>
                </S.CommentBox>
            </S.CommentDiv>
            </S.MyPostPageBox>
            <S.BestText>유저들의 비슷한 공감 베스트</S.BestText>
        </S.MyPostPage>
    ))  

    const postList = datas.map((post, i) => (
        <S.BestPostBox key={i}>
            <HeartBtn />
            <Link to={`/post/read?postId=${id}`}>
                <S.PostImage src={`${process.env.PUBLIC_URL}${post.postImage1}`} alt="게시물10" />
            </Link>
        </S.BestPostBox>
    ))

    return (
        
        <div>
            
            
                {myPostPage}
                <S.AllPostWrapper>
                    {postList}
                </S.AllPostWrapper>
            {/* <S.BestPost>
                <div className='bestBox'>
                    <p className='text4'>유저들의 비슷한 공감 베스트</p>
                    <div className='best-post-box'>
                    <Link to={"../others-post"}><img className='bestPost' src="/assets/images/community/bestPost1.svg" alt="베스트 게시물1" /></Link>
                    <Link to={"../others-post"}><img className='bestPost' src="/assets/images/community/bestPost2.svg" alt="베스트 게시물2" /></Link>
                    <Link to={"../others-post"}><img className='bestPost' src="/assets/images/community/bestPost3.svg" alt="베스트 게시물3" /></Link>
                    <Link to={"../others-post"}><img className='bestPost' src="/assets/images/community/bestPost4.svg" alt="베스트 게시물4" /></Link>
                    <Link to={"../others-post"}><img className='bestPost' src="/assets/images/community/bestPost3.svg" alt="베스트 게시물3" /></Link>
                    <Link to={"../others-post"}><img className='bestPost' src="/assets/images/community/bestPost5.svg" alt="베스트 게시물5" /></Link>
                    </div>
                </div>
            </S.BestPost> */}


        </div>
        
    );
};

export default UserPost;                 