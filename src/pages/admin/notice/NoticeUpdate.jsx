import React from 'react';
import S from "./style";
import { Link } from 'react-router-dom';

const datas = [
  {
    noticeTitle : "공지사항 제목 작성 TEST",
    noticeContent : "공지사항 내용 작성 TEST 하하하하하ㅏ하ㅏ하하핳ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ핳하하하ㅏ하ㅏ하하ㅏ하하ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ하ㅏ하ㅏ하하하ㅏ"
  }
]


const NoticeUpdate = () => {
  
  const onDelete = () => {
    if (window.confirm("정말 취소하시나요??")) {
      window.location.href = '/admin';
    } else {
      window.location.href = '/admin/update';
    }
};

  const updates = datas.map(({noticeTitle,noticeContent }, i) => (
    <S.WriteBox key={i}>
      <S.Title>
        공지사항 수정
      </S.Title>
      <S.TextInputBox>
        <S.TitleText>제목</S.TitleText>
        <S.TextInput><input placeholder='제목을 입력해주세요' value={noticeTitle}></input></S.TextInput>
      </S.TextInputBox>
      <S.InputBox>
        <S.ContentText>내용</S.ContentText>
        <S.ContentInput><textarea placeholder='내용을 입력해주세요' value={noticeContent}></textarea></S.ContentInput>
      </S.InputBox>
      <S.ButtonBox>
        <Link to={`/admin`}>
          <button className='done'>완료</button>
        </Link>
          <button className='cancel' onClick={onDelete}>취소</button>
      </S.ButtonBox>
    </S.WriteBox>
));

  return (
    <>
    {updates}
    </>
  );
};

export default NoticeUpdate;