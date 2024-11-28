import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import S from './style';

const FindId = () => {
  const [currentScreen, setCurrentScreen] = useState('id');

  const handleFindIdClick = () => {
    setCurrentScreen('id');
  };

  const handleFindPasswordClick = () => {
    setCurrentScreen('password');
  };

  return (
    <div>
      <Link to="/">
        <S.LogoWrap>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/layout/logo.png`}
            alt="로고"
          />
        </S.LogoWrap>
      </Link>

      탭 버튼
      <S.Tap>
        <S.IdBtn
          className={currentScreen === 'id' ? 'active' : ''}
          onClick={handleFindIdClick}
        >
          아이디 찾기
        </S.IdBtn>
        <S.PasswordBtn
          className={currentScreen === 'password' ? 'active' : ''}
          onClick={handleFindPasswordClick}
        >
          비밀번호 찾기
        </S.PasswordBtn>
      </S.Tap>

      아이디 찾기
      {currentScreen === 'id' && (
          <S.MainContent>
            <S.Input>
              <div>
                <p>이름</p>
                <S.InputButton
                  type="text"
                  name="name"
                  placeholder="이름"
                />
              </div>
              <div>
                <p>휴대폰 번호</p>
                <S.InputButton
                  type="text"
                  name="phone"
                  placeholder="전화번호"
                />
              </div>
            </S.Input>
            <S.NextButton type="button">다음</S.NextButton>
          </S.MainContent>
      )}
    </div>
  );
};


export default FindId;