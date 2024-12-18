import React, { useContext, useEffect, useState } from "react";
import S from "./style";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CommunityContext } from "../../../context/communityContext";
import FollowBtn from "./FollowBtn";

const UserList = () => {
    const { currentUser } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const [popupType, setPopupType] = useState(null);
    const [activePostId, setActivePostId] = useState(null);
    const [followerList, setFollowerList] = useState([]);
    const [followingList, setFollowingList] = useState([]);
    const localJwtToken = localStorage.getItem("jwtToken");
    const { communityState } = useContext(CommunityContext);
    const { communites } = communityState;

    useEffect(() => {
        if (!localJwtToken) {
            alert("로그인 후 이용해 주세요.");
            navigate("/login");
        }
    }, [localJwtToken, navigate]);

    const imgPosts = communites.slice(0, 8);
    const imgPostCount = imgPosts.filter(({ imageName1 }) => imageName1).length;

    // 팔로워/팔로잉 데이터 가져오기
    useEffect(() => {
        if (popupType === "follower" && currentUser?.id) {
            fetchFollowerList(currentUser.id);
        } else if (popupType === "following" && currentUser?.id) {
            fetchFollowingList(currentUser.id);
        }
    }, [popupType, currentUser?.id]);

    const fetchFollowerList = async (memberId) => {
        try {
            const response = await fetch(`http://localhost:10000/follows/followers/${memberId}`);
            if (response.ok) {
                const data = await response.json();
                setFollowerList(data);
            } else {
                console.error("팔로워 목록을 불러오는 데 실패했습니다.");
            }
        } catch (error) {
            console.error("팔로워 목록 조회 중 오류 발생:", error);
        }
    };

    const fetchFollowingList = async (memberId) => {
        try {
            const response = await fetch(`http://localhost:10000/follows/following/${memberId}`);
            if (response.ok) {
                const data = await response.json();
                setFollowingList(data);
            } else {
                console.error("팔로잉 목록을 불러오는 데 실패했습니다.");
            }
        } catch (error) {
            console.error("팔로잉 목록 조회 중 오류 발생:", error);
        }
    };

    const openPopup = (type) => setPopupType(type);
    const closePopup = () => setPopupType(null);

    const togglePopup = (postId) => {
        if (activePostId === postId) {
            setActivePostId(null);
        } else {
            setActivePostId(postId);
        }
    };

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
                        <FollowBtn targetUserId={currentUser.id} />
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
                            <S.MyPostItem key={index} style={{ position: "relative" }}>
                                <S.DotButton onClick={() => togglePopup(id)}>
                                    <button>
                                        <img src="/assets/images/community/white.jpg" alt="삼점메뉴" />
                                    </button>
                                </S.DotButton>

                                {activePostId === id && (
                                    <S.PopupBtn>
                                        <S.PoputBtnType><p>삭제하기</p></S.PoputBtnType>
                                        <S.BtnLine></S.BtnLine>
                                        <S.PoputBtnType><p>수정하기</p></S.PoputBtnType>
                                    </S.PopupBtn>
                                )}
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
                            </S.MyPostItem>
                        ))}
                    </S.MyPostList>
                </S.MyPost>
            </S.UserCommunity>

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
                                {popupType === "follower"
                                    ? followerList.map((follower) => (
                                          <li key={follower.id}>
                                              <S.Following1>
                                                  <S.PimageWarpper>
                                                      <img
                                                          src="/assets/images/community/userprofile.png"
                                                          alt="프로필 사진"
                                                      />
                                                      <p>{follower.username}</p>
                                                  </S.PimageWarpper>
                                                  <FollowBtn targetUserId={follower.id} />
                                              </S.Following1>
                                          </li>
                                      ))
                                    : followingList.map((following) => (
                                          <li key={following.id}>
                                              <S.Following1>
                                                  <S.PimageWarpper>
                                                      <img
                                                          src="/assets/images/community/userprofile.png"
                                                          alt="프로필 사진"
                                                      />
                                                      <p>{following.username}</p>
                                                  </S.PimageWarpper>
                                                  <FollowBtn targetUserId={following.id} />
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