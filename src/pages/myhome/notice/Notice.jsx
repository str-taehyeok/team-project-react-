import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import S from "./style";

const NoticeListPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const getPost = async () => {
            const response = await fetch(`http://localhost:10000/notice/list/${id}`);
            if(!response.ok) return console.error(`데이터가 없습니다.`)
            const post = await response.json();
            return post;
        }

        getPost().then(setPost).catch(console.error);
    }, [id]);

    console.log(post)
    const {noticeTitle,noticeContent,noticeDate, noticeCount} = post;

  return (
      <S.NoticeBox>
          <S.NoticeList>
              <S.Title>{noticeTitle}</S.Title>
              <S.Span>
                  <S.Date><span>등록일 : </span>{noticeDate}</S.Date>
                  <S.Count><span>조회수 : </span>{noticeCount}</S.Count>
              </S.Span>
              <S.Content>{noticeContent}</S.Content>
          </S.NoticeList>

          <S.Button>
              <Link to={`/notice`}>
                  <button>목록으로 돌아가기</button>
              </Link>
          </S.Button>


      </S.NoticeBox>
    

  );
};

export default NoticeListPage;