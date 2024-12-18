import React, { useContext, useEffect, useState } from "react";
import S from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CommunityContext } from "../../../context/communityContext";

const UserList = () => {
    const { currentUser } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const [popupType, setPopupType] = useState(null);
    const localJwtToken = localStorage.getItem("jwtToken");
    const { communityState } = useContext(CommunityContext);
    const { communites } = communityState;

    // 로그인 상태 확인
    useEffect(() => {
        if (!localJwtToken) {
            alert("로그인 후 이용해 주세요.");
            navigate("/login");
        }
    }, [localJwtToken, navigate]);

    const imgPosts = communites.slice(0, 8);
    const imgPostCount = imgPosts.filter(({ imageName1 }) => imageName1).length;
    
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
                    <S.MyProfilelineStyle />
                    <S.ButtonCenter>
                        <S.MyProfileButton>팔로우</S.MyProfileButton>
                    </S.ButtonCenter>
                    <S.MyprofileCardInformation>
                        <S.MyFollwer>
                            <button>게시물 {imgPostCount}</button>
                            <button type="button" onClick={() => openPopup("follower")}>
                                팔로워 1
                            </button>
                            <button type="button" onClick={() => openPopup("following")}>
                                팔로잉 1
                            </button>
                        </S.MyFollwer>
                    </S.MyprofileCardInformation>
                </S.MyProfileCardWapper>
                <S.MyPost>
                    <S.Title>
                        <p>My 게시물</p>
                    </S.Title>
                    <S.MyPostList>
                        {communites.slice(0, 8).map(({ id, imageName1 }, index) => (
                            <S.MyPostItem key={index}>
                                <Link to={`/post/read?postId=${id}`}>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/images/community/${imageName1}`}
                                        alt="게시물 이미지"
                                        style={{
                                            width: "190px",
                                            height: "190px",
                                            borderRadius: "20px",
                                            objectFit: "cover",
                                        }}
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
