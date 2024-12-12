import React, {useState} from 'react';
import S from "./style";
import { Link } from 'react-router-dom';


const NoticeListAll = () => {


  const [noticeList] = useState([
    {
        id : 1,
        noticeTitle : "공지사항 제목1",
        noticeContent : "공지사항 내용1",
        noticeDate : "2024-12-08",
        noticeName : "관리자",
        noticeCount : "0"
    },
    {
      id : 2,
      noticeTitle : "공지사항 제목2",
      noticeContent : "공지사항 내용2",
      noticeDate : "2024-12-24",
      noticeName : "관리자",
      noticeCount : "0"

    },
]);

const noticeLists = noticeList.map((notice, index) => (
  <tr key={notice.id}>
      <td className='number'>{index + 1}</td>
      <Link to={`/admin/list`}>
        <td className='title'>{notice.noticeTitle}</td>
      </Link>
      <td className='content'>{notice.noticeName}</td>
      <td className='date'>{notice.noticeDate}</td>
      <td className='button'>{notice.noticeCount}</td>
  </tr>
));

  return (
    <S.WriteBox>
      <S.Title>
        공지사항
      </S.Title>
      <S.SearchInput>
        <input placeholder='검색어를 입력해주세요' />
      </S.SearchInput>
      <S.Buttons>
        <button className="search">검색</button>
        <button className="reset">초기화</button>
        <Link to={`/admin/write`}>
          <button className="add">신규 등록</button>
        </Link>
      </S.Buttons>
      <S.NoticeList>
        <S.Table>
          <thead>
            <tr>
              <th className='number'>No</th>
              <th className='title'>제목</th>
              <th className='content'>작성자</th>
              <th className='date'>등록일</th>
              <th className='button'>조회수</th>
            </tr>
          </thead>
          <tbody>
            {noticeLists}
          </tbody>
        </S.Table>
      </S.NoticeList>
    </S.WriteBox>
  );
};

export default NoticeListAll;