import React from 'react';
import S from './style.js';
import HeartBtn from './HeartBtn.jsx';
import { Link } from 'react-router-dom';

const datas = [
    {
        postImage1 : "/assets/images/community/myPost1.png",
        memberNickName : "고기고기냠냠냠",
        memberImage : "/assets/images/community/default-profile.png"
    },
    {
        postImage1 : "/assets/images/community/myPost2.png",
        memberNickName : "지나 안지나",
        memberImage : "/assets/images/community/default-profile.png"
    },
    {
        postImage1 : "/assets/images/community/myPost3.png",
        memberNickName : "철을 밀면 민철",
        memberImage : "/assets/images/community/default-profile.png"
    },
    {
        postImage1 : "/assets/images/community/myPost4.png",
        memberNickName : "재금이 다음 재은",
        memberImage : "/assets/images/community/default-profile.png"
    },
    {
        postImage1 : "/assets/images/community/myPost5.png",
        memberNickName : "소연이짱짱",
        memberImage : "/assets/images/community/default-profile.png"
    },
    {
        postImage1 : "/assets/images/community/myPost1.png",
        memberNickName : "꿔바로우 먹는 징어",
        memberImage : "/assets/images/community/default-profile.png"
    },
    {
        postImage1 : "/assets/images/community/myPost2.png",
        memberNickName : "찹쌀징어 약 끊음",
        memberImage : "/assets/images/community/default-profile.png"
    },
    {
        postImage1 : "/assets/images/community/myPost3.png",
        memberNickName : "군대로 끌려가는 민처리",
        memberImage : "/assets/images/community/default-profile.png"
    },
    {
        postImage1 : "/assets/images/community/myPost4.png",
        memberNickName : "소세지 먹는 도윤이",
        memberImage : "/assets/images/community/default-profile.png"
    },
    {
        postImage1 : "/assets/images/community/myPost5.png",
        memberNickName : "태혁이 열일함",
        memberImage : "/assets/images/community/default-profile.png"
    }
]

export const PostLightPurpleList = () => {

    const id = 1;

    const postList = datas.map((post, i) => (
        <S.CommunityPost key={i}>
            <HeartBtn />
            <Link to={`/post/read?postId=${id}`}>
                <S.PostImage src={`${process.env.PUBLIC_URL}${post.postImage1}`} alt="게시물10" />
            </Link>
            <S.PropileBox>
                <Link to={`/post/list?postId=${id}`}>
                    <S.Profile><img src={`${process.env.PUBLIC_URL}${post.memberImage}`} alt="프로필" /></S.Profile>
                </Link>
                <S.NickName>{post.memberNickName}</S.NickName>
            </S.PropileBox>
        </S.CommunityPost>
    ))

    return (
        <>
            <S.ColorTitle>#Light Purple</S.ColorTitle>
            <S.AllPostWrapper>
                {postList}
            </S.AllPostWrapper>
        </>
    );
};

export default PostLightPurpleList;