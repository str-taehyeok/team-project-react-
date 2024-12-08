import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import S from "./style";


const NoticeListPage = () => {

  const [noticeList] = useState([
    {
        id : 1,
        noticeTitle : "공지사항 제목1",
        noticeDate : "2024-12-08"
    },
    {
      id : 2,
      noticeTitle : "공지사항 제목2",
      noticeDate : "2024-12-24"
    },
]);
const id = 1;

const noticeLists = noticeList.map((notice, index) => (
  <S.NoticeBox key={notice.id}>
    <Link to={`/notice/list?noticeId=${id}`}>
      <S.Notice>
        <S.NoticeTitle>{notice.noticeTitle}</S.NoticeTitle>
        <S.NoticeDate>{notice.noticeDate}</S.NoticeDate>
      </S.Notice>
    </Link>
  </S.NoticeBox>
 )); 



  return (
    <S.NoticeBox>
      <S.T>
        공지사항
      </S.T>
      {noticeLists}
    </S.NoticeBox>
    

  );
};

export default NoticeListPage;