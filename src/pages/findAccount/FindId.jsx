import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FindContext } from "../../context/findContext";
import S from "./style";

const FindId = () => {
  const { state, action } = useContext(FindContext);

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();

  const onClickNext = () => {
    navigate("/find/findId-complete");
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
          <S.Label htmlFor="name">이름</S.Label>
          <S.Input
            type="text"
            id="name"
            name="name"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label htmlFor="phone">휴대폰 번호</S.Label>
          <S.Input
            type="text"
            id="phone"
            name="phone"
            placeholder="전화번호"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.currentTarget.value)}
          />
        </S.InputWrapper>
        <S.NextButton type="button" onClick={onClickNext}>
          다음
        </S.NextButton>
      </S.InputContainer>
    </>
  );
};

export default FindId;
