import React from "react";
import { Link } from "react-router-dom";
import S from "./style";

const UnsubscribeComplete = () => {
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

          <S.Text>회원 탈퇴가 정상적으로 처리 되었습니다</S.Text>
          <S.Text1>
            웹사이트 회원탈퇴 신청이 완료되었습니다.
          </S.Text1>
          <Link to={"/"}>
            <S.NextButton>홈 바로가기</S.NextButton>
          </Link>
        </S.Box>
      </S.CompletionMain>
      <footer />
    </div>
  );
};

export default UnsubscribeComplete;
