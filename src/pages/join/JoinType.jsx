import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import S from "./style";
import { JoinContext } from "../../context/joinContext";

const JoinType = () => {

  const { state, action } = useContext(JoinContext)
  
  return (
    <div>
      <S.JoinMain>
        <Link to="/">
          <S.LogoWrap>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/layout/logo.png`}
              alt="로고"
            />
          </S.LogoWrap>
        </Link>

        <S.Text>가입하려는 계정을 선택해 주세요.</S.Text>

        <S.RadioBox>
          <label htmlFor="UserA">
            <input
              type="radio"
              name="user"
              id="UserA"
              value="buyer"
              required
              onChange={(e) => action.setMember(e.target.value)} // 값 설정
            />
            <p className="Text1">POWPOW 회원</p>
          </label>
          <label htmlFor="UserB">
            <input
              type="radio"
              name="user"
              id="UserB"
              value="seller"
              required
              onChange={(e) => action.setMember(e.target.value)} // 값 설정
            />
            <p className="Text1">POWPOW 판매자</p>
          </label>
        </S.RadioBox>
        <Link to={"/join/phone"}><S.NextButton>다음</S.NextButton></Link>
      </S.JoinMain>
    </div>
  );
};

export default JoinType;
