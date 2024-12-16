import React, { useState } from "react";
import { Link } from "react-router-dom";
import S from "./style";
import { useForm } from "react-hook-form";

const FindPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [email, setEmail] = useState(""); 
  const [authNumber, setAuthNumber] = useState(""); 
  const [mark, setMark] = useState(false);
  const [authVerified, setAuthVerified] = useState(false); 

  const {
    register,
    getValues,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const handlePasswordChange = async () => {
    if (!authNumber || !newPassword || !confirmNewPassword) {
      return alert("인증번호와 새로운 비밀번호를 모두 입력해주세요.");
    }

    if (newPassword !== confirmNewPassword) {
      return alert("새로운 비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    }

   await fetch(`http://localhost:10000/member/change-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ memberEmail: email, authCode: authNumber, newPassword }),
    });

    const result = await response.json();

    if (response.ok) {
      alert("비밀번호가 변경되었습니다.");
    } else {
      alert(result.message || "비밀번호 변경에 실패했습니다.");
    }
  };

  const handleAuthRequest = async () => {
    if (!email) {
      return alert("이메일을 입력해주세요.");
    }

    await fetch(`http://localhost:10000/member/find-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ memberEmail: email }),
    });

    const result = await response.json();

    if (response.ok) {
      alert("인증번호가 이메일로 전송되었습니다.");
    } else {
      alert(result.message || "인증번호 전송에 실패했습니다.");
    }
  };

  const handleAuthVerify = async () => {
    if (!authNumber) {
      return alert("인증번호를 입력해주세요.");
    }
 
    await fetch(`http://localhost:10000/member/verify-password-auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ memberEmail: email, authCode: authNumber }),
    });

    const result = await response.json();

    if (response.ok) {
      alert("인증번호가 확인되었습니다.");
      setAuthVerified(true);  
    } else {
      alert(result.message || "인증번호 확인에 실패했습니다.");
      setAuthVerified(false); 
    }
  };

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

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

        <S.NewPasswordMessage>
          <p>✔ 계정에 등록된 이메일로 전송된 인증번호와 새 비밀번호를 입력해주세요.</p>
        </S.NewPasswordMessage>

        <S.AuthNumberContainer>
          <S.InputWrapper>
            <S.Label htmlFor="email">이메일</S.Label>
            <S.Input
              type="text"
              id="email"
              name="email"
              placeholder="회원아이디(이메일)를 입력해주세요."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

        <S.AuthNumberContainer>
          <S.InputWrapper>
            <S.Label htmlFor="newPassword">새로운 비밀번호</S.Label>
            <S.Input
              type={mark ? "text" : "password"}
              name="buyerPassword"
              placeholder="새로운 비밀번호"
              autoComplete="off"
              {...register("password", {
                required: true,
                pattern: {
                  value: passwordRegex,
                },
              })}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            {errors && errors?.password?.type === "required" && (
              <S.P>비밀번호를 입력하세요</S.P>
            )}
            {errors && errors?.password?.type === "pattern" && (
              <S.P>
                소문자, 숫자, 특수문자를 각 하나 포함한 8자리 이상이여야 합니다.
              </S.P>
            )}
            <S.Mark
              onClick={() => setMark(!mark)}
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL
                }/assets/images/join/${mark ? "eye-on.png" : "eye-off.png"})`,
                cursor: "pointer",
              }}
            ></S.Mark>
          </S.InputWrapper>
        </S.AuthNumberContainer>

        <S.AuthNumberContainer>
          <S.InputWrapper>
            <S.Label htmlFor="confirmNewPassword">새로운 비밀번호 확인</S.Label>
            <S.Input
              type={mark ? "text" : "password"}
              id="passWordConfirm"
              placeholder="새로운 비밀번호 확인"
              {...register("passWordConfirm", {
                required: "새로운 비밀번호 확인",
                validate: {
                  matchPassword: (passWordConfirm) => {
                    const password = getValues("password");
                    return (
                      password === passWordConfirm ||
                      "비밀번호가 일치하지 않습니다."
                    );
                  },
                },
              })}
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
            {errors && errors?.passWordConfirm && (
              <S.P>{errors.passWordConfirm.message}</S.P>
            )}
          </S.InputWrapper>
        </S.AuthNumberContainer>

        <Link to="/find/find-password-complete">
          <S.NextButton
            type="button"
            onClick={handlePasswordChange}
            disabled={!authNumber || !newPassword || !confirmNewPassword || !authVerified}
          >
            확인
          </S.NextButton>
        </Link>
      </S.InputContainer>
    </>
  );
};

export default FindPassword;
