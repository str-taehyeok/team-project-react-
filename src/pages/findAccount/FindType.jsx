import React, { useContext } from 'react';
import S from './style';
import { FindContext } from '../../context/findContext';
import { Link } from 'react-router-dom';

const FindType = () => {

    const { state, action } = useContext(FindContext)
  
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
                value="buyer"
                required
                onChange={(e) => action.setMember(e.target.value)} // 값 설정
              />
              <p className="Text1">아이디 찾기</p>
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
              <p className="Text1">비밀번호 찾기</p>
            </label>
          </S.RadioBox>
          <Link to={"/find/find-id"}><S.NextButton>다음</S.NextButton></Link>
        </S.FindMain>
      </div>
    );
  };
  

export default FindType;