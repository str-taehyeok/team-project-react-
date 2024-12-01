import React, { useContext , useState} from "react";
import S from "./style";
import { Link } from "react-router-dom";
import { JoinContext } from "../../context/joinContext";

const sms = "";

const JoinPhone = () => {

  const { state, action } = useContext(JoinContext)
  const [phone, setPhone] = useState(""); // 휴대폰 번호 상태
  const [authNumber, setAuthNumber] = useState(""); // 인증 번호 상태

  const handleNextClick = (e) => {
    // 입력 값 확인
    if (!phone) {
      e.preventDefault(); 
      return alert("휴대폰 번호를 입력해주세요.");
    }
    if (!authNumber) {
      e.preventDefault();
      return alert("인증번호를 입력해주세요.");
    }

  };
  


  return (
    <div>
      <S.PhoneMain>
        <S.Input>
          <Link to="/">
            <S.LogoWrap className="logo-margin">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/layout/logo.png`}
                alt="로고"
              />
            </S.LogoWrap>
          </Link>

          <div>
            <S.InputContainer>
              <S.InputButton
                type="number"
                name="phone"
                placeholder="휴대폰 번호 입력 ('-'제외 11자리 입력)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)} 
              />
              <S.AuthButton type="button" id="RequestAuth">
                인증요청
              </S.AuthButton>
            </S.InputContainer>

            <S.AuthNumberContainer id="AuthNumberContainer">
              <S.InputContainer>
                <S.InputButton
                  type="text"
                  name="authNumber"
                  placeholder="인증번호 6자리 입력"
                  value={authNumber}
                  onChange={(e) => setAuthNumber(e.target.value)}
                />
                <S.AuthButton>확인</S.AuthButton>
                <p id="PhoneResult"></p>
              </S.InputContainer>
            </S.AuthNumberContainer>
          </div>
        </S.Input>
        <input type="hidden" name="phone" value={phone} />

        {/* "다음" 버튼 */}
        {state.member === "buyer" ? (
          <Link to={"/join/buyer-join"} onClick={handleNextClick}>
            <S.LoginButton type="button">
              다음
            </S.LoginButton>
          </Link>
        ) : (
          <Link to={"/join/seller-join"} onClick={handleNextClick}>
            <S.LoginButton type="button">
              다음
            </S.LoginButton>
          </Link>
        )}
      </S.PhoneMain>
    </div>
  );
};

export default JoinPhone;



{/* <script>
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
</script> */}