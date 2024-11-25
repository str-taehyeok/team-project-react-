import React from 'react';
import S from './style';

const FindId = ({ members }) => {
    return (
      <S.CompletionMain>
        <S.LogoBox>
            <img src={`${process.env.PUBLIC_URL}/assets/images/layout/powpow-logo.png`} alt="로고" />
        </S.LogoBox>
        <S.Box>
          {/* <img id="check" src="../assets/images/member/complete-check.svg" alt="체크" /> */}
          
          {members && members.map((member, index) => (
            <div key={index}>
              <S.Text>{member.memberEmail}</S.Text>
              <S.Text1>{`${member.memberName}님 아이디 찾기가 완료되었습니다!`}</S.Text1>
            </div>
          ))}
          
            <S.NextButton>로그인</S.NextButton>
        </S.Box>
      </S.CompletionMain>
    );
  };

export default FindId;