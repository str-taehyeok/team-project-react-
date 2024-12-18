import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const FollowBtn = ({ targetUserId }) => {
  const navigate = useNavigate();

  // 리덕스에 로그인한 유저의 id
  const { currentUser } = useSelector((state) => state.user);
  const memberId = currentUser?.id ? currentUser?.id : 0;
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    if (!targetUserId || !memberId) return;

    const checkFollowStatus = async () => {
      try {
        const response = await fetch(`http://localhost:10000/follows/following/${memberId}`);
        if (response.ok) {
          const data = await response.json();
          const isFollowingUser = data.some((user) => user.followingMemberId === targetUserId);
          setIsFollowing(isFollowingUser);
        } else {
          console.error("팔로우 상태 조회 오류");
        }
      } catch (error) {
        console.error("팔로우 상태 확인 오류:", error);
      }
    };

    checkFollowStatus();
  }, [memberId, targetUserId]);

  const handleFollow = async () => {
    if (!memberId) {
      navigate("/login");
      return;
    }

    const fetchPath = isFollowing ? "cancel" : "add";
    const fetchMethod = isFollowing ? "DELETE" : "POST";
    const fetchData = {
      followerMemberId: memberId,
      followingMemberId: targetUserId,
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
        setIsFollowing(!isFollowing); 
      } else {
        console.error("팔로우 상태 업데이트 실패");
      }
    } catch (error) {
      console.error("팔로우 상태 업데이트 오류:", error);
    }
  };

  return (
    <button onClick={handleFollow}>
      {isFollowing ? "팔로잉" : "팔로우"}
    </button>
  );
};

export default FollowBtn;