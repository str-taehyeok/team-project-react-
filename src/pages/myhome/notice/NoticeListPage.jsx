import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import S from "./style";


const NoticeListPage = () => {
    const[posts, setPosts] = useState([])
    useEffect(() => {
        const getPosts = async() => {
            const response = await fetch(`http://localhost:10000/notice/list-all`);
            if(!response.ok) return console.error(`데이터가 없습니다`)
            const posts = await response.json();
            return posts;
        }

        getPosts().then(setPosts).catch(console.error);
    }, []);

    console.log(posts)

const noticeLists = posts.map(({ id, noticeTitle, noticeDate,noticeCount}, index) => (
  <S.NoticeBox >
    <Link to={`/notice/list/${id}`}>
      <S.Notice>
        <S.NoticeTitle>{noticeTitle}</S.NoticeTitle>
        <S.Span>
          <S.NoticeDate><span>등록일 : </span>{noticeDate}</S.NoticeDate>
          <S.NoticeDate><span>조회수 : </span>{noticeCount}</S.NoticeDate>
        </S.Span>
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