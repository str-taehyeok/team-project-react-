import React, { useEffect, useState } from "react";
import S from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UserList = () => {
    const { currentUser } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [popupType, setPopupType] = useState(null);
    const localJwtToken = localStorage.getItem("jwtToken");

    // 로그인 상태 확인
    useEffect(() => {
        if (!localJwtToken) {
            alert("로그인 후 이용해 주세요.");
            navigate("/login");
        }
    }, [localJwtToken, navigate]);

    // 게시물 데이터 가져오기
    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await fetch("http://localhost:10000/posts/list");
                if (!response.ok) {
                    console.error("데이터를 가져오는데 실패했습니다.");
                    return;
                }
                const data = await response.json();
                setPosts(data);
                console.log(data)
            } catch (error) {
                console.error(error);
                alert("게시글 데이터를 가져오는 중 오류가 발생했습니다.");
            }
        };

        getPosts();
    }, [currentUser.id]);

    // 팝업 열기/닫기 함수
    const openPopup = (type) => setPopupType(type);
    const closePopup = () => setPopupType(null);

    return (
        <div>
            <S.UserCommunity>
                <S.MyProfileCardWapper>
                    <S.MyProfileCard>
                        <div className="MYProfile-img-wrapper">
                            <S.MyProfileImage>
                                <img src="/assets/images/community/userimg.png" alt="유저이미지" />
                                <p>{currentUser.username || "유저"}</p>
                            </S.MyProfileImage>
                        </div>
                    </S.MyProfileCard>
                    <S.MyProfilelineStyle></S.MyProfilelineStyle>
                    <S.ButtonCenter>
                        <S.MyProfileButton>팔로우</S.MyProfileButton>
                    </S.ButtonCenter>
                    <S.MyprofileCardInformation>
                        <S.MyFollwer>
                            <button>게시물 {posts.length}</button>
                            <button type="button" onClick={() => openPopup("follower")}>
                                팔로워 304
                            </button>
                            <button type="button" onClick={() => openPopup("following")}>
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
                        {Array.isArray(posts) && posts.slice(0, 8).map((id, post, postFileName, index) => (
                            <S.MyPostItem key={index}>
                                <Link to={`/post/${id}`}>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/images/community/${postFileName}`}
                                        alt={post.alt || "게시물 이미지"}
                                    />
                                </Link>
                            </S.MyPostItem>
                        ))}
                    </S.MyPostList>
                </S.MyPost>
            </S.UserCommunity>

            {/* 팝업 */}
            {popupType && (
                <S.PopupAreaFollowing>
                    <S.PopupFollowingClose
                        src="/assets/images/community/cancel.png"
                        alt="팝업 닫기"
                        onClick={closePopup}
                    />
                    <div className="following-popup">
                        <S.MenuFollowing>
                            <p>
                                {popupType === "follower" ? "내 팔로워" : "내가 팔로우한 사람들"}
                            </p>
                        </S.MenuFollowing>
                        <S.myFollowingList>
                            <ul>
                                <li>
                                    <S.Following1>
                                        <S.PimageWarpper>
                                            <img
                                                src="/assets/images/community/userprofile.png"
                                                alt="프로필 사진"
                                            />
                                            <p>{popupType === "follower" ? "아이디1" : "아이디2"}</p>
                                        </S.PimageWarpper>
                                        <button className="following-button">
                                            {popupType === "follower" ? "팔로우" : "팔로잉"}
                                        </button>
                                    </S.Following1>
                                </li>
                            </ul>
                        </S.myFollowingList>
                    </div>
                </S.PopupAreaFollowing>
            )}
        </div>
    );
};

export default UserList;
