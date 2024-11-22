import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import S from "./style";

const JoinType = () => {
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();


  const goToNext = () => {
    if (!userType) {
      alert("가입 유형을 선택해주세요.");
      return;
    }

    if (userType === "A") {
      navigate("/join/member");
    } else if (userType === "B") {
      navigate("/join/seller");
    }
  };

  return (
    <div>
      <S.JoinMain>
        <Link to="/">
          <S.LogoWrap>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/layout/logo.png`}
              alt="로고"
            />
          </S.LogoWrap>
        </Link>

        <S.Text>가입하려는 계정을 선택해 주세요.</S.Text>

        <S.RadioBox>
          <label htmlFor="UserA">
            <input
              type="radio"
              name="user"
              id="UserA"
              value="A"
              required
              onChange={(e) => setUserType(e.target.value)} // 값 설정
            />
            <p className="Text1">POWPOW 회원</p>
          </label>
          <label htmlFor="UserB">
            <input
              type="radio"
              name="user"
              id="UserB"
              value="B"
              required
              onChange={(e) => setUserType(e.target.value)} // 값 설정
            />
            <p className="Text1">POWPOW 판매자</p>
          </label>
        </S.RadioBox>
        <S.NextButton onClick={goToNext}>다음</S.NextButton>
      </S.JoinMain>
    </div>
  );
};

export default JoinType;
