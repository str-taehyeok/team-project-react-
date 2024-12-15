import React, {useEffect, useState} from 'react';
import S from "./style";
import {Link, useNavigate, useParams} from "react-router-dom";

const BannerList = () => {
    const {id} = useParams();
    const[posts, setPosts] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const getPosts = async() => {
            const response = await fetch(`http://localhost:10000/banners/list-all`);
            if(!response.ok) return console.error(`데이터가 없습니다`)
            const posts = await response.json();
            return posts;
        }

        getPosts().then(setPosts).catch(console.error);
    }, []);

    console.log(posts)

    const bannerLists = posts.map(({ id, bannerTitle, bannerStart, bannerEnd, bannerImage}, index) => (
        <tr>
            <td className='number'>{index + 1}</td>
            <td className='start'>{bannerStart}</td>
            <td className='end'>{bannerEnd}</td>
            <td className='name'>{bannerTitle}</td>
            <td className='look'>{/*<img src={banner.bannerImage} />*/}</td>
            <td className='button'>      
              <S.Button>
              <S.LinkButton to={`/admin/banner/update/${id}`}> 수정</S.LinkButton>
                  <button className={"delete"} onClick={async () => {
                      await fetch(`http://localhost:10000/banners/list/${id}`, {
                          method: "DELETE"
                      })
                          .then((res) => {
                              navigate("/admin/banner")
                          })
                  }}>삭제
                  </button>
              </S.Button>
            </td>
        </tr>
    ));
    return (
        <S.WriteBox>
            <S.Title>
                배너 조회
            </S.Title>
            <S.SearchInput>
                <input placeholder='검색어를 입력해주세요'/>
            </S.SearchInput>
            <S.Buttons>
                <button className="search">검색</button>
                <button className="reset">초기화</button>
          <Link to={`/admin/banner/banner-write`}>
            <button className="add">신규 등록</button>
          </Link>
        </S.Buttons>

        <S.BannerList>
          <S.Table>
            <thead>
              <tr>
                <th className='number'>No</th>
                <th className='start'>등록일</th>
                <th className='end'>종료일</th>
                <th className='name'>배너명</th>
                <th className='look'>미리보기</th>
                <th className='button'>관리</th>
              </tr>
            </thead>
            <tbody>
              {bannerLists}
            </tbody>
          </S.Table>
        </S.BannerList>
      </S.WriteBox>
    );
};

export default BannerList;