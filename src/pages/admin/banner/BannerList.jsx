import React, {useState} from 'react';
import S from "./style";
import { Link } from 'react-router-dom';

const BannerList = () => {

    const [bannerList] = useState([
        {
            id : 1,
            bannerStart : "2024-12-08",
            bannerEnd : "2024-12-24",
            bannerTitle : "배너 제목 TEST1",
            bannerImage : "/assets/images/admin/banner/bannerImage.png"
        },
        {
            id : 2,
            bannerStart : "2024-12-08",
            bannerEnd : "2024-12-24",
            bannerTitle : "배너 제목 TEST1",
            bannerImage : "/assets/images/admin/banner/bannerImage.png"
        },
    ]);

    const bannerLists = bannerList.map((banner, index) => (
        <tr key={banner.id}>
            <td className='number'>{index + 1}</td>
            <td className='start'>{banner.bannerStart}</td>
            <td className='end'>{banner.bannerEnd}</td>
            <td className='name'>{banner.bannerTitle}</td>
            <td className='look'>{/*<img src={banner.bannerImage} />*/}</td>
            <td className='button'>      
              <S.Button>
              <S.LinkButton to="/admin/banner/banner-update"> 수정</S.LinkButton>
                <button className="delete">삭제</button>
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
          <input placeholder='검색어를 입력해주세요' />
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