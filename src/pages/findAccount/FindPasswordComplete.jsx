import React from "react";
import { Link } from "react-router-dom";
import S from "./style";

const FindPasswordComplete = () => {
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
            style={{ marginBottom: '7px'}}
            src={`${process.env.PUBLIC_URL}/assets/images/join/complete-check.png`}
            alt="체크"
          />

          <S.BoldText>비밀번호 설정이 완료되었습니다.</S.BoldText>
          <S.Text1>
          로그인하시면 더욱 다양한 서비스를 제공받으실 수 있습니다.
          </S.Text1>
          <Link to={"/login"}>
          <S.GoToLoginButton>
            로그인
          </S.GoToLoginButton>
          </Link>
        </S.Box>
      </S.CompletionMain>
      <footer />
    </div>
  );
};

export default FindPasswordComplete;