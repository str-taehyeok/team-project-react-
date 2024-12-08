import React from 'react';
import S from "./style";
import { Link } from 'react-router-dom';

const NoticeWrite = () => {
  return (
    <S.WriteBox>
      <S.Title>
        공지사항 신규 등록
      </S.Title>
      <S.TextInputBox>
        <S.TitleText>제목</S.TitleText>
        <S.TextInput><input placeholder='제목을 입력해주세요'></input></S.TextInput>
      </S.TextInputBox>
      <S.InputBox>
        <S.ContentText>내용</S.ContentText>
        <S.ContentInput><textarea placeholder='내용을 입력해주세요'></textarea></S.ContentInput>
      </S.InputBox>
      <S.ButtonBox>
        <Link to={`/admin`}>
          <button className='done'>완료</button>
        </Link>
        <Link to={`/admin`}>
          <button className='cancel'>취소</button>
        </Link>
      </S.ButtonBox>
    </S.WriteBox>
  );
};

export default NoticeWrite;