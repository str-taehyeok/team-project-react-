import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FindContext } from "../../context/findContext";
import S from "./style";

const FindId = () => {
  const { state, action } = useContext(FindContext);

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [authNumber, setAuthNumber] = useState("");
  const [generatedAuthNumber, setGeneratedAuthNumber] = useState(""); // 인증번호 생성 상태
  const [isVerified, setIsVerified] = useState(false); // 인증 여부 상태

  const handleAuthRequest = () => {
    if (!phoneNumber) {
      return alert("휴대폰 번호를 입력해주세요.");
    }
    // 인증번호 생성
    const generatedAuth = Math.floor(100000 + Math.random() * 900000);
    setGeneratedAuthNumber(generatedAuth);
    alert(`인증번호: ${generatedAuth}`);
  };

  const handleAuthVerify = () => {
    if (authNumber === String(generatedAuthNumber)) {
      alert("인증이 확인되었습니다.");
      setIsVerified(true);  
    } else {
      alert("인증번호를 확인해주세요.");
      setIsVerified(false);
    }
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
            onChange={(e) => setName(e.target.value)}
          />
        </S.InputWrapper>

        <S.AuthNumberContainer>
          <S.InputWrapper>
            <S.Label htmlFor="phone">휴대폰 번호</S.Label>
            <S.Input
              type="text"
              id="phone"
              name="phone"
              placeholder="전화번호"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <S.AuthButton type="button" onClick={handleAuthRequest}>
              인증요청
            </S.AuthButton>
          </S.InputWrapper>
        </S.AuthNumberContainer>

        <S.AuthNumberContainer>
          <S.InputWrapper>
            <S.Label htmlFor="authNumber">인증번호</S.Label>
            <S.Input
              type="text"
              id="authNumber"
              name="authNumber"
              placeholder="인증번호"
              value={authNumber}
              onChange={(e) => setAuthNumber(e.target.value)}
            />
            <S.AuthButton type="button" onClick={handleAuthVerify}>
              확인
            </S.AuthButton>
          </S.InputWrapper>
        </S.AuthNumberContainer>

        {/* Disable the "Next" button if the phone number is not verified */}
        <Link to="/find/find-complete">
          <S.NextButton type="button" disabled={!isVerified}>
            다음
          </S.NextButton>
        </Link>
      </S.InputContainer>
    </>
  );
};

export default FindId;
