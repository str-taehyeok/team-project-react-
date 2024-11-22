import React from "react";
import S from "./style";
import { Link } from "react-router-dom";

const sms = "";

const JoinPhone = () => {
  return (
    <div>
      <S.PhoneMain>
        <S.Input>
          <Link to="/">
            <S.LogoWrap>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/layout/logo.png`}
                alt="로고"
              />
            </S.LogoWrap>
          </Link>

          <div>
            <p id="Text">
              휴대폰 번호로
              <br />
              본인확인을 진행해주세요!
            </p>

            {sms ? (
              <S.InputContainer>
                <input type="hidden" name="sms" value="true" />
                <S.InputButton
                  type="number"
                  name="phone"
                  value="${param.phone}"
                  placeholder="휴대폰 번호 입력 ('-'제외 11자리 입력)"
                />
              </S.InputContainer>
            ) : (
              <S.InputContainer>
                <S.InputButton
                  type="number"
                  name="phone"
                  placeholder="휴대폰 번호 입력 ('-'제외 11자리 입력)"
                />
              </S.InputContainer>
            )}

            <S.AuthButton type="button" id="RequestAuth">
              인증요청
            </S.AuthButton>

            <S.AuthNumberContainer id="AuthNumberContainer">
              <S.InputContainer>
                <S.InputButton
                  type="text"
                  name="authNumber"
                  placeholder="인증번호 6자리 입력"
                />
                <S.AuthButton>확인</S.AuthButton>
                <script>
                  {`
                    globalThis.isAuthentication = false;
                    const confirmSubmitButton = document.querySelector(".ConfirmButton");
                    const authenticationInput = document.querySelector("input[name='authNumber']");
                    let authenticationCode = "";
                    console.log(authenticationCode);
                    
                    confirmSubmitButton.addEventListener("click", () => {
                      if (!(authenticationInput.value == authenticationCode)) {
                        globalThis.isAuthentication = false;
                        return alert("인증번호를 확인해주세요.");
                      } else {
                        globalThis.isAuthentication = true;
                        confirmSubmitButton.style.display = "none";
                        console.log(globalThis.isAuthentication);
                        return alert("인증이 확인되었습니다.");
                      }
                    });
                  `}
                </script>
                <p id="PhoneResult"></p>
              </S.InputContainer>
            </S.AuthNumberContainer>
          </div>
        </S.Input>
        <input type="hidden" name="phone" value="${param.phone}" />
        <S.LoginButton type="button">다음</S.LoginButton>
      </S.PhoneMain>
    </div>
  );
};

export default JoinPhone;
