import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import S from "./style";
import FollowBtn from "./FollowBtn";

const UserList = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [communites, setCommunites] = useState([]);

  useEffect(() => {
    if (!currentUser) {
      alert("로그인 후 이용해 주세요.");
      navigate("/login");
    }

    setCommunites([
      { id: 1, imageName1: "image1.jpg" },
      { id: 2, imageName1: "image2.jpg" },
    ]);
  }, [currentUser, navigate]);

  return (
    <div>
      <S.UserCommunity>
        {communites.map(({ id, imageName1 }) => (
          <S.MyProfileCardWapper key={id}>
            <S.MyProfileCard>
              <div className="MYProfile-img-wrapper">
                <S.MyProfileImage>
                  <img src="/assets/images/community/userimg.png" alt="유저이미지" />
                  <p>유저 이름</p>
                </S.MyProfileImage>
              </div>
              <S.ButtonCenter>
                {/* 팔로우 버튼 */}
                <FollowBtn targetUserId={id} />
              </S.ButtonCenter>
            </S.MyProfileCard>
          </S.MyProfileCardWapper>
        ))}
      </S.UserCommunity>
    </div>
  );
};

export default UserList;
