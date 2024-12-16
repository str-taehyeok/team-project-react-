import React, {useEffect, useState} from 'react';
import S from "./style";
import { Link } from 'react-router-dom';


const NoticeListAll = () => {

  const [posts, setPosts] = useState([])
  const [isUpdate, setIsUpdate] = useState(false);
  const [keyword, setKeyword] = useState("")

  useEffect(() => {
      const getPosts = async() => {
          const response = await fetch(`http://localhost:10000/notice/list-all`);
          if(!response.ok) return console.error(`데이터가 없습니다`)
          const posts = await response.json();
          return posts;
      }

      getPosts().then(setPosts).catch(console.error);
  }, [isUpdate]);

  const onChangeToKeyword = (e) => {
    let value = e.target.value;
    setKeyword(value);
  }

  const onClickToReset = () => {
    setIsUpdate(!isUpdate)
  }

  const onClickToSearchKeyword = async () => {
    await fetch("http://localhost:10000/notice/search", {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({ keyword })
    })
    .then((res) => res.json())
    .then((res) => {
      setPosts(res)
    })
    .catch(console.err)
  }

  const noticeLists = posts.map(({ id, noticeTitle, memberName, noticeDate,noticeCount}, index) => (
    <tr key={id} >
        <td className='number'>{index + 1}</td>
        <td className='title'>
            <Link to={`/admin/list/${id}`}>{noticeTitle}</Link>
        </td>
        <td className='content'>{memberName}</td>
        <td className='date'>{noticeDate}</td>
        <td className='button'>{noticeCount}</td>
    </tr>
  ));

  return (
    <S.WriteBox>
      <S.Title>
        공지사항
      </S.Title>
      <S.SearchInput>
        <input placeholder='검색어를 입력해주세요' onChange={onChangeToKeyword} value={keyword}/>
      </S.SearchInput>
      <S.Buttons>
        <button className="search" onClick={onClickToSearchKeyword}>검색</button>
        <button className="reset" onClick={onClickToReset}>초기화</button>
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