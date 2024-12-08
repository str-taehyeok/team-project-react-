import React, {useState} from 'react';

import S from "./style";
// import { Link } from "react-router-dom";

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

const noticeLists = noticeList.map((notice, index) => (
  <S.NoticeBox key={notice.id}>
    <S.Notice>
      <S.NoticeTitle>{notice.noticeTitle}</S.NoticeTitle>
      <S.NoticeDate>{notice.noticeDate}</S.NoticeDate>
    </S.Notice>
  </S.NoticeBox>
 )); 

  return (
    <S.NoticeBox>
      <S.Title>
        공지사항
      </S.Title>
      {/* {noticeLists} */}
    </S.NoticeBox>
    

  );
};

export default NoticeListPage;