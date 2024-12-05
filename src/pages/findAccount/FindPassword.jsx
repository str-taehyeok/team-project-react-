import React, { useState } from "react";
import { Link } from "react-router-dom";
import S from "./style";
import { useForm } from "react-hook-form";

const FindPassword = () => {

  const [newPassword] = useState("");
  const [confirmNewPassword] = useState("");
  const [email, setEmail] = useState(""); // 이메일을 위한 상태 추가
  const [authNumber, setAuthNumber] = useState(""); // 인증번호 상태 그대로 유지
  const {
    register,
    getValues,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const [mark, setMark] = useState(false);

  const handlePasswordChange = () => {
    if (!authNumber || !newPassword || !confirmNewPassword) {
      return alert("인증번호와 새로운 비밀번호를 모두 입력해주세요.");
    }

    if (newPassword !== confirmNewPassword) {
      return alert("새로운 비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    }

    alert("비밀번호가 변경되었습니다.");
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
              placeholder="비밀번호를 입력하세요"
              {...register("passWordConfirm", {
                required: "비밀번호를 확인하세요.",
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
            />
            {errors && errors?.passWordConfirm && (
              <S.P>{errors.passWordConfirm.message}</S.P>
            )}

            {errors.agrees && (
              <S.P id="AgreeResult" style={{ color: "red" }}>
                {errors.agrees.message}
              </S.P>
            )}
          </S.InputWrapper>
        </S.AuthNumberContainer>

        <Link to="/find-password-complete">
          <S.NextButton
            type="button"
            onClick={handlePasswordChange}
            disabled={!authNumber || !newPassword || !confirmNewPassword}
          >
            확인
          </S.NextButton>
        </Link>
      </S.InputContainer>
    </>
  );
};

export default FindPassword;
