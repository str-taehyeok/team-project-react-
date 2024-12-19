import React, { useContext, useEffect, useState } from "react";
import S from "./style";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CommunityContext } from "../../../context/communityContext";
import FollowBtn from './FollowBtn';

const UserList = () => {
    const { currentUser } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const [popupType, setPopupType] = useState(null);
    const [followersCount, setFollowersCount] = useState(0);
    const [followingCount, setFollowingCount] = useState(0);
    const [followersList, setFollowersList] = useState([]);
    const [followingList, setFollowingList] = useState([]);
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

    // 팔로워와 팔로잉 수를 가져오는 함수
    const fetchFollowData = async () => {
        try {
            const followersResponse = await fetch(`http://localhost:10000/follows/followers/${currentUser.id}`);
            if (followersResponse.ok) {
                const followersData = await followersResponse.json();
                setFollowersCount(followersData.length);
                setFollowersList(followersData);
            }

            const followingResponse = await fetch(`http://localhost:10000/follows/following/${currentUser.id}`);
            if (followingResponse.ok) {
                const followingData = await followingResponse.json();
                setFollowingCount(followingData.length);
                setFollowingList(followingData);
            }
        } catch (error) {
            console.error("팔로우 데이터 가져오기 실패", error);
        }
    };

    useEffect(() => {
        fetchFollowData();
    }, [currentUser.id]);

    useEffect(() => {
        if (popupType) {
            fetchFollowData();
        }
    }, [popupType]); 

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
                    {/* FollowBtn을 한 번만 렌더링하도록 수정 */}
                    <S.ButtonCenter>
                        <FollowBtn targetUserId={currentUser.id} />
                    </S.ButtonCenter>
                    <S.MyprofileCardInformation>
                        <S.MyFollwer>
                            <button>게시물 {communites.slice(0, 8).length}</button> 
                            <button type="button" onClick={() => openPopup("follower")}>
                                팔로워 {followersCount}
                            </button>
                            <button type="button" onClick={() => openPopup("following")}>
                                팔로잉 {followingCount}
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
                            <S.MyPostItem key={index} style={{ position: "relative" }}>
                                <S.DotButton onClick={() => {}}>
                                    <button>
                                        <img src="/assets/images/community/white.jpg" alt="삼점메뉴" />
                                    </button>
                                </S.DotButton>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/images/community/${imageName1}`}
                                    alt="게시물 이미지"
                                    style={{
                                        width: "190px",
                                        height: "190px",
                                        borderRadius: "20px",
                                        objectFit: "cover",
                                    }}
                                    onClick={() => navigate(`/post/read/${id}`)}
                                />
                            </S.MyPostItem>
                        ))}
                    </S.MyPostList>
                </S.MyPost>
            </S.UserCommunity>

            {/* 팔로워/팔로잉 팝업 */}
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
                                {(popupType === "follower" ? followersList : followingList).map((user) => (
                                    <li key={user.id}>
                                        <S.Following1>
                                            <S.PimageWarpper>
                                                <img
                                                    src="/assets/images/community/userprofile.png"
                                                    alt="프로필 사진"
                                                />
                                                <p>{user.memberNickname}</p>
                                            </S.PimageWarpper>
                                            <button className="following-button">
                                                {popupType === "follower" ? "팔로우" : "팔로잉"}
                                            </button>
                                        </S.Following1>
                                    </li>
                                ))}
                            </ul>
                        </S.myFollowingList>
                    </div>
                </S.PopupAreaFollowing>
            )}
        </div>
    );
};

export default UserList;