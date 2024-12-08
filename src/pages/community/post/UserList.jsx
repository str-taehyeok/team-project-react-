import React, { useState } from "react";
import S from "./style";
import { Link } from "react-router-dom";

const UserList = () => {
    const [isFollowerPopupOpen, setIsFollowerPopupOpen] = useState(false);
    const [isFollowingPopupOpen, setIsFollowingPopupOpen] = useState(false);

    const posts = [
        { id: 1, image: "/assets/images/community/mycat1.png", alt: "고양이 사진1" },
        { id: 3, image: "/assets/images/community/mycat3.png", alt: "고양이 사진2" },
        { id: 4, image: "/assets/images/community/mycat4.png", alt: "고양이 사진3" },
        { id: 5, image: "/assets/images/community/mycat5.png", alt: "고양이 사진4" },
        { id: 6, image: "/assets/images/community/mycat6.png", alt: "고양이 사진5" },
        { id: 2, image: "/assets/images/community/mycat2.png", alt: "고양이 사진6" },
        { id: 7, image: "/assets/images/community/mycat7.png", alt: "고양이 사진7" },
        { id: 8, image: "/assets/images/community/mycat4.png", alt: "고양이 사진8" },
    ];

    return (
        <div>
            <S.UserCommunity>
                <S.MyProfileCardWapper>
                    <S.MyProfileCard>
                        <div className="MYProfile-img-wrapper">
                            <S.MyProfileImage>
                                <img src="/assets/images/community/userimg.png" alt="유저이미지" />
                                <p>찹쌀징어</p>
                            </S.MyProfileImage>
                        </div>
                    </S.MyProfileCard>
                    <S.MyProfilelineStyle></S.MyProfilelineStyle>
                    <S.ButtonCenter>
                        <S.MyProfileButton>팔로우</S.MyProfileButton>
                    </S.ButtonCenter>
                    <S.MyprofileCardInformation>
                        <S.MyFollwer>
                            <button type="button" onClick={() => setIsFollowerPopupOpen(true)}>
                                게시물 8
                            </button>
                            <button type="button" onClick={() => setIsFollowerPopupOpen(true)}>
                                팔로워 304
                            </button>
                            <button type="button" onClick={() => setIsFollowingPopupOpen(true)}>
                                팔로잉 40
                            </button>
                        </S.MyFollwer>
                    </S.MyprofileCardInformation>
                </S.MyProfileCardWapper>
                <S.MyPost>
                    <S.Title>
                        <p>My 게시물</p>
                    </S.Title>
                    <S.MyPostList>
                        <S.MyPostList>
                            {posts.map((post) => (
                                <S.MyPostItem key={post.id}>
                                    <Link to={`/post/list?postId=${post.id}`}>
                                        <img src={post.image} alt={post.alt} />
                                    </Link>
                                </S.MyPostItem>
                            ))}
                        </S.MyPostList>
                    </S.MyPostList>
                </S.MyPost>
            </S.UserCommunity>

            {/* 팔로워 팝업 */}
            {isFollowerPopupOpen && (
                <S.PopupAreaFollowing>
                    <img className="popup-following-close" src="/assets/images/community/cancel.png" alt="팝업 닫기"
                        onClick={() => setIsFollowerPopupOpen(false)} />
                    <div className="following-popup">
                        <S.MenuFollowing>
                            <p>내 팔로워</p>
                        </S.MenuFollowing>
                        <S.myFollowingList>
                            <ul>
                                <li>
                                    <S.Following1>
                                        <img src="/assets/images/community/userprofile.png" alt="프로필 사진" />
                                        <p>아이디1</p>
                                        <button className="following-button">팔로우</button>
                                    </S.Following1>
                                </li>
                            </ul>
                        </S.myFollowingList>
                    </div>
                </S.PopupAreaFollowing>
            )}

            {/* 팔로잉 팝업 */}
            {isFollowingPopupOpen && (
                <S.PopupAreaFollowing>
                    <img className="popup-following-close" src="/assets/images/community/cancel.png" alt="팝업 닫기"
                        onClick={() => setIsFollowingPopupOpen(false)}
                    />
                    <div className="following-popup">
                        <div className="menu-following">
                            <p>내가 팔로우한 사람들</p>
                        </div>
                        <div className="my-following-list">
                            <ul>
                                <li>
                                    <S.Following1>
                                        <img src="/assets/images/community/userprofile.png" alt="프로필 사진" />
                                        <p>아이디2</p>
                                        <button className="following-button">팔로잉</button>
                                    </S.Following1>
                                </li>
                            </ul>
                        </div>
                    </div>
                </S.PopupAreaFollowing>
            )}
        </div>
    );
};

export default UserList;
