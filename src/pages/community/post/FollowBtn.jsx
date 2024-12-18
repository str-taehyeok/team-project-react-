import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const FollowBtn = ({ targetUserId }) => {
  const navigate = useNavigate();

  // 리덕스에 로그인한 유저의 id
  const { currentUser } = useSelector((state) => state.user);
  const memberId = currentUser?.id ? currentUser.id : 0;

  const [isFollowing, setIsFollowing] = useState(false);
  

  // 팔로우 상태를 확인하는 함수
  useEffect(() => {
    if (memberId && targetUserId) {
      checkFollowStatus();
    }
  }, [memberId, targetUserId]);

  const checkFollowStatus = async () => {
    try {
      const response = await fetch(`http://localhost:10000/follows/following/${memberId}`);
      const data = await response.json();

      const isAlreadyFollowing = data.some(following => following.followedId === targetUserId);
      setIsFollowing(isAlreadyFollowing);
    } catch (error) {
      console.error("팔로우 상태 확인 오류:", error);
    }
  };

  const handleFollow = async () => {
    if (!memberId) {
      alert("로그인 해주세요.");
      navigate("/login");
      return;
    }

    const fetchPath = isFollowing ? "cancel" : "add"; 
    const fetchMethod = isFollowing ? "DELETE" : "POST"; 

    const fetchData = {
      followerId: memberId,
      followedId: targetUserId,
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
    <>
      {isFollowing ? (
        <button onClick={handleFollow}>
          <p>팔로잉</p> 
        </button>
      ) : (
        <button onClick={handleFollow}>
          <p>팔로우</p> 
        </button>
      )}
    </>
  );
};

export default FollowBtn;
