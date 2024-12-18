import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const FollowBtn = ({ targetUserId }) => {
  const navigate = useNavigate();

  // 리덕스에서 로그인한 유저의 id
  const { currentUser } = useSelector((state) => state.user);
  const memberId = currentUser?.id || 0;

  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    if (memberId && targetUserId) {
      checkFollowStatus();
    }
  }, [memberId, targetUserId]);

  // 팔로우 상태 확인
  const checkFollowStatus = async () => {
    try {
      const response = await fetch(`http://localhost:10000/follows/following/${memberId}`);
      
      if (!response.ok) {
        console.error("팔로우 상태 조회 실패");
        return;
      }

      const data = await response.json();

      // 팔로우 상태 확인: 이미 팔로우한 상태인지 확인
      const isAlreadyFollowing = data.some(following => following.followedId === targetUserId);
      setIsFollowing(isAlreadyFollowing);
    } catch (error) {
      console.error("팔로우 상태 확인 오류:", error);
    }
  };

  // 팔로우/팔로우 취소 처리
  const handleFollow = async () => {
    if (!memberId) {
      alert("로그인 해주세요.");
      navigate("/login");
      return;
    }

    const fetchPath = isFollowing ? "cancel" : "add";  
    const fetchMethod = isFollowing ? "DELETE" : "POST"; 

    // 팔로우 상태 ('1' = 팔로우, '0' = 팔로우 취소)
    const followsFollowState = isFollowing ? "0" : "1";  

    const fetchData = {
      followerId: memberId,
      followedId: targetUserId,
      followsFollowState: followsFollowState, // 팔로우 상태 추가
    };

    try {
      // 팔로우 상태 업데이트 요청
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
        const errorData = await response.json(); 
        console.error("팔로우 상태 업데이트 실패:", errorData);
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
