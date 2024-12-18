import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const FollowBtn = ({ targetUserId }) => {
  const navigate = useNavigate();
  
  // 리덕스에서 로그인한 유저의 id
  const { currentUser } = useSelector((state) => state.user);
  const memberId = currentUser?.id ? currentUser?.id : 0;

  // 팔로우 상태
  const [isFollowing, setIsFollowing] = useState(false); 

  useEffect(() => {
    if (!targetUserId || !memberId) return;

    const checkFollowStatus = async () => {
      try {
        const response = await fetch(`http://localhost:10000/follows/status/${memberId}/${targetUserId}`);
        if (!response.ok) {
          const errorData = await response.json();
          console.error("팔로우 상태 확인 오류:", errorData);
          return;
        }
        const data = await response.json();
        setIsFollowing(data.isFollowing); 
      } catch (error) {
        console.error("팔로우 상태 확인 오류:", error);
      }
    };

    checkFollowStatus();
  }, [targetUserId, memberId]);

  const handleFollow = async () => {
    if (!memberId) {
      alert("로그인 해주세요.");
      navigate("/login");
      return;
    }

    if (!targetUserId) {
      alert("잘못된 유저 정보입니다.");
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

      if (!response.ok) {
        const errorData = await response.json();
        console.error("팔로우 상태 업데이트 실패:", errorData);
        alert(`팔로우 상태 업데이트 실패: ${errorData.message || "알 수 없는 오류"}`);
        return;
      }

      setIsFollowing(!isFollowing); 
    } catch (error) {
      console.error("팔로우 상태 업데이트 오류:", error);
      alert("팔로우 상태 업데이트 중 오류가 발생했습니다.");
    }
  };

  return (
    <button onClick={handleFollow}>
      {isFollowing ? "팔로잉" : "팔로우"}
    </button>
  );
};

export default FollowBtn;
