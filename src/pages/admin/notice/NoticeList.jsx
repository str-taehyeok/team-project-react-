import React, {useState} from 'react';
import S from "./style";
import { Link } from 'react-router-dom';


const NoticeList = () => {


  const [memberList] = useState([
    {
        id : 1,
        noticeTitle : "공지사항 제목1",
        noticeContent : "공지사항 내용1",
        noticeDate : "2024-12-08"
    },
    {
      id : 2,
      noticeTitle : "공지사항 제목2",
      noticeContent : "공지사항 내용2",
      noticeDate : "2024-12-24"
    },
]);

const noticeLists = memberList.map((notice, index) => (
  <tr key={notice.id}>
      <td className='number'>{index + 1}</td>
      <td className='title'>{notice.noticeTitle}</td>
      <td className='content'>{notice.noticeContent}</td>
      <td className='date'>{notice.noticeDate}</td>
      <td className='button'>      
        <S.Button>
        <S.LinkButton to="/admin/update"> 수정</S.LinkButton>
          <button className="delete">삭제</button>
        </S.Button>
      </td>
  </tr>
));

  return (
    <S.WriteBox>
      <S.Title>
        공지사항 조회
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
              <th className='content'>상세내용</th>
              <th className='date'>등록일</th>
              <th className='button'>관리</th>
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

export default NoticeList;