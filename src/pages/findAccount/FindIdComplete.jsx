import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import S from "./style";
import { FindContext } from "../../context/findContext";

const FindIdComplete = () => {
  const { state } = useContext(FindContext);
  
  const [message, setMessage] = useState("로딩 중");

  useEffect(() => {
    if (state.memberEmail) {
      setMessage(state.memberEmail); 
    }
  }, [state.memberEmail]);

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
            style={{ marginBottom: "7px" }}
            src={`${process.env.PUBLIC_URL}/assets/images/join/complete-check.png`}
            alt="체크"
          />
          <S.BoldText>{message}</S.BoldText>
          <Link to={"/login"}>
            <S.GoToLoginButton>로그인</S.GoToLoginButton>
          </Link>
        </S.Box>
      </S.CompletionMain>
      <footer />
    </div>
  );
};

export default FindIdComplete;
