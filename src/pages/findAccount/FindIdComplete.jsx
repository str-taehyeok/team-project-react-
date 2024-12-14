import React from "react";
import { Link, useLocation } from "react-router-dom";
import S from "./style";

const FindIdComplete = () => {
  const location = useLocation();
  const { memberEmail } = location.state || {};

  return (
    <div>
      <S.CompletionMain>
        <S.LogoBox>
          <S.LogoWrap>
            <Link to={"/"}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/layout/logo.png`}
                alt="로고"
              />
            </Link>
          </S.LogoWrap>
        </S.LogoBox>

        <S.Box>
          <img
            id="Check"
            style={{ marginBottom: "7px" }}
            src={`${process.env.PUBLIC_URL}/assets/images/join/complete-check.png`}
            alt="체크"
          />
          <S.BoldText>
            {memberEmail ? memberEmail : "아이디를 찾을 수 없습니다."}
          </S.BoldText>
          <Link to={"/login"}>
            <S.GoToLoginButton>로그인</S.GoToLoginButton>
          </Link>
        </S.Box>
      </S.CompletionMain>
      <footer />
    </div>
  );
};

export default FindIdComplete;
