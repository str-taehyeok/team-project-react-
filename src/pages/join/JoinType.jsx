import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import S from "./style";
import { JoinContext } from "../../context/joinContext";

const JoinType = () => {
  const { state, action } = useContext(JoinContext);


  useEffect(() => {
    if (!state.member) {
      action.setMember("buyer"); 
    }
  }, [state.member, action]);

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
              defaultChecked={state.member === "buyer"} // 기본 선택 상태
              onChange={(e) => action.setMember(e.target.value)} // 값 설정
            />
            <S.Text1>POWPOW 회원</S.Text1>
          </label>
          <label htmlFor="UserB">
            <input
              type="radio"
              name="user"
              id="UserB"
              value="seller"
              required
              defaultChecked={state.member === "seller"} // 기본 선택 상태
              onChange={(e) => action.setMember(e.target.value)} // 값 설정
            />
            <S.Text1>POWPOW 판매자</S.Text1>
          </label>
        </S.RadioBox>
        <Link to={"/join/phone"}>
          <S.LoginButton>다음</S.LoginButton>
        </Link>
      </S.JoinMain>
    </div>
  );
};

export default JoinType;
