import React, { useContext, useEffect, useState } from "react";
import S from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CommunityContext } from "../../../context/communityContext";

const UserList = () => {
    const { currentUser } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const [popupType, setPopupType] = useState(null);
    const [activePostId, setActivePostId] = useState(null); // 각 게시물의 팝업 상태를 관리
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

    // DotButton 클릭 시 해당 게시물 팝업 열기/닫기
    const togglePopup = (postId) => {
        // 이미 열려 있는 게시물을 다시 클릭하면 팝업을 닫음
        if (activePostId === postId) {
            setActivePostId(null); // 팝업 닫기
        } else {
            setActivePostId(postId); // 팝업 열기
        }
    };


    // const handleDelete = async () => {
        
    //     await fetch(`http://localhost:10000/posts/post/$`)
    //     {
    //         method: 'DELETE',
    //       }
    //     );

    // const handleUpdate = async () => {
        
    //     await fetch(`http://localhost:10000/posts/post/$`,{
    //         method: "PUT",
    //         headers: {
    //             "Content-Type" : "application/json",
    //         },
    //         body : JSON.stringify({

    //         })
    //     })
    // }

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
                            <S.MyPostItem key={index} style={{ position: "relative" }}>
                                <S.DotButton onClick={() => togglePopup(id)}>
                                    <button>
                                        <img src="/assets/images/community/white.jpg" alt="삼점메뉴" />
                                    </button>
                                </S.DotButton>

                                {/* 게시물 ID가 activePostId와 일치하는 경우 팝업을 표시 */}
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
