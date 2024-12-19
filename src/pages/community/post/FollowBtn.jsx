import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { CommunityContext } from "../../../context/communityContext";
import S from "./style";

const FollowBtn = ({ targetUserId }) => {
  const navigate = useNavigate();

  // 리덕스에 로그인한 유저의 id
  const { currentUser } = useSelector((state) => state.user);
  const [isFollowing, setIsFollowing] = useState(false);
  const { communityState, communityAction } = useContext(CommunityContext);
  const { communites } = communityState;
  const { id: postId } = useParams();
  
  const [follwerMemberId, setFollwerMemberId] = useState(targetUserId);
  const memberId = currentUser?.id ? currentUser?.id : 0;

  useEffect(() => {
    if (postId && currentUser?.id) {
      setFollwerMemberId(targetUserId);
    }
  }, [postId, targetUserId, currentUser?.id]);

  // 로컬 스토리지에서 팔로우 상태 불러오기
  useEffect(() => {
    const storedFollowStatus = localStorage.getItem(`follow_${memberId}_${targetUserId}`);
    if (storedFollowStatus !== null) {
      setIsFollowing(JSON.parse(storedFollowStatus)); 
    } else {
      if (!targetUserId || !memberId) return;

      const checkFollowStatus = async () => {
        try {
          const response = await fetch(`http://localhost:10000/follows/following/${memberId}`);
          if (response.ok) {
            const data = await response.json();
            const isFollowingUser = data.some((follow) => follow.followingMemberId === targetUserId);
            setIsFollowing(isFollowingUser);
           
            // 서버에서 팔로우 상태를 가져온 후 로컬 스토리지에 저장
            localStorage.setItem(`follow_${memberId}_${targetUserId}`, JSON.stringify(isFollowingUser));
          } else {
            console.error("팔로우 상태 조회 오류");
          }
        } catch (error) {
          console.error("팔로우 상태 확인 오류:", error);
        }
      };

      checkFollowStatus();
    }
  }, [memberId, targetUserId]); 

  const handleFollow = async () => {
    if (!memberId) {
      navigate("/login");
      return;
    }

    const fetchPath = isFollowing ? "cancel" : "add"; 
    const fetchMethod = isFollowing ? "DELETE" : "POST"; 
    const fetchData = {
      followerMemberId: targetUserId, 
      followingMemberId: memberId,
    };

    try {
      const response = await fetch(`http://localhost:10000/follows/${fetchPath}`, {
        method: fetchMethod,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fetchData),
      });

      if (response.ok) {
        const newFollowStatus = !isFollowing; 
        setIsFollowing(newFollowStatus);  
        // 로컬 스토리지에 상태 저장
        localStorage.setItem(`follow_${memberId}_${targetUserId}`, JSON.stringify(newFollowStatus));
      } else {
        console.error("팔로우 상태 업데이트 실패");
      }
    } catch (error) {
      console.error("팔로우 상태 업데이트 오류:", error);
    }
  };

  // 여기서 콘솔 오류가 뜨는데 왜 dom 형식의 내용으로 뜨는지 모르겠어요
  return (
    <div>
      <S.Follow isFollowing={isFollowing} onClick={handleFollow}>
        {isFollowing ? "팔로잉" : "팔로우"}
      </S.Follow>
    </div>
  );
};

export default FollowBtn;