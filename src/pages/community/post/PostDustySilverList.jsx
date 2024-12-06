import React from 'react';
import S from './style.js';
import HeartBtn from './HeartBtn.jsx';

const datas = [
    {
        postImage1 : "/assets/images/community/post1.svg",
        memberNickName : "고기고기냠냠냠",
        memberImage : "/assets/images/community/profile.svg",
    },
    {
        postImage1 : "/assets/images/community/post2.svg",
        memberNickName : "지나 안지나",
        memberImage : "/assets/images/community/profile.svg",
    },
    {
        postImage1 : "/assets/images/community/post3.svg",
        memberNickName : "철을 밀면 민철",
        memberImage : "/assets/images/community/profile.svg",
    },
    {
        postImage1 : "/assets/images/community/post4.svg",
        memberNickName : "재금이 다음 재은",
        memberImage : "/assets/images/community/profile.svg",
    },
    {
        postImage1 : "/assets/images/community/post5.svg",
        memberNickName : "소연이짱짱",
        memberImage : "/assets/images/community/profile.svg",
    },
    {
        postImage1 : "/assets/images/community/post6.svg",
        memberNickName : "꿔바로우 먹는 징어",
        memberImage : "/assets/images/community/profile.svg",
    },
    {
        postImage1 : "/assets/images/community/post7.svg",
        memberNickName : "찹쌀징어 약 끊음",
        memberImage : "/assets/images/community/profile.svg",
    },
    {
        postImage1 : "/assets/images/community/post8.svg",
        memberNickName : "군대로 끌려가는 민처리",
        memberImage : "/assets/images/community/profile.svg",
    },
    {
        postImage1 : "/assets/images/community/post9.svg",
        memberNickName : "소세지 먹는 도윤이",
        memberImage : "/assets/images/community/profile.svg",
    },
    {
        postImage1 : "/assets/images/community/post10.svg",
        memberNickName : "태혁이 열일함",
        memberImage : "/assets/images/community/profile.svg",
    }
]

export const PostDustySilverList = () => {

    const postList = datas.map((post, i) => (
        <S.Post key={i}>
            <HeartBtn />
            <S.PostImage src={`${process.env.PUBLIC_URL}${post.postImage1}`} alt="게시물10" />
            <S.PropileBox>
                <S.Profile src={`${process.env.PUBLIC_URL}${post.memberImage}`} alt="프로필" />
                <S.NickName>{post.memberNickName}</S.NickName>
            </S.PropileBox>
        </S.Post>
    ))

    return (
        <>
            <S.Title>#Dusty Silver</S.Title>
            <S.AllPostWrapper>
                {postList}
            </S.AllPostWrapper>
        </>
    );
};

export default PostDustySilverList;