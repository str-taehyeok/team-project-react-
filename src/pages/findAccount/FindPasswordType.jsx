import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import S from "./style";

const FindPasswordType = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <S.InputContainer>
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

        <S.InputWrapper>
          <S.Label htmlFor="email">아이디</S.Label>
          <S.Input
            type="text"
            id="email"
            name="email"
            placeholder="아이디(이메일)"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </S.InputWrapper>

        <S.Message>
        ✔ 본인 확인(계정에 등록된 이메일)을 통해 비밀번호를 재설정 하실 수 있습니다.
        </S.Message>

        <Link to="/find-password">
          <S.NextButton type="button">
            다음
          </S.NextButton>
        </Link>
      </S.InputContainer>
    </>
  );
};

export default FindPasswordType;
