import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import S from "./style";

const FindPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const onClickNext = () => {
    navigate("/find/findPassword-complete");
  };

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
        <S.NextButton type="button" onClick={onClickNext}>
          다음
        </S.NextButton>
      </S.InputContainer>
    </>
  );
};

export default FindPassword;
