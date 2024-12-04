import React, { useContext, useEffect } from 'react';
import S from './style';
import { FindContext } from '../../context/findContext';
import { Link } from 'react-router-dom';

const FindType = () => {

    const { state, action } = useContext(FindContext)

    useEffect(() => {
      if (!state.select) {
        action.setSelect("id"); 
      }
    }, [state.select, action]);
  
    return (
      <div>
        <S.FindMain>
          <Link to="/">
            <S.LogoWrap>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/layout/logo.png`}
                alt="로고"
              />
            </S.LogoWrap>
          </Link>
  
          <S.Text>회원 아이디 / 비밀번호를 잊으셨습니까?</S.Text>
  
          <S.RadioBox>
            <label htmlFor="UserA">
              <input
                type="radio"
                name="user"
                id="UserA"
                value="id"
                required// 값 설정
                defaultChecked={state.select === "id"}
                onChange={(e) => action.setSelect(e.currentTarget.value)}
              />
              <p className="Text1">아이디 찾기</p>
            </label>
            <label htmlFor="UserB">
              <input
                type="radio"
                name="user"
                id="UserB"
                value="password"
                required// 값 설정
                defaultChecked={state.select === "password"}
                onChange={(e) => action.setSelect(e.currentTarget.value)}
              />
              <p className="Text1">비밀번호 찾기</p>
            </label>
          </S.RadioBox>

          {state.select === "id" ? (
          <Link to={"/find/find-id"}>
            <S.NextButton type="button">
              다음
            </S.NextButton>
          </Link>
        ) : (
          <Link to={"/find/find-password"}>
            <S.NextButton type="button">
              다음
            </S.NextButton>
          </Link>
        )}

        </S.FindMain>
      </div>
    );
  };
  

export default FindType;
