import React from 'react';
import S from "./style";
import { Link, Outlet } from 'react-router-dom';
import Footer from "../../../layout/Footer";



const StoreDogContainer = () => {

  // 카테고리
  const categoryList = [
    {
        name : "장난감",
        location : "/store-dog",
        src : "/assets/images/store/flushies-dog.png"
    },
    {
        name : "사료/간식",
        location : "/store-dog/treats",
        src : "/assets/images/store/treats-dog.png"
    },
    {
        name : "펫웨어",
        location : "/store-dog/clothes",
        src : "/assets/images/store/clothes-dog.png"
    },
    {
        name : "헬스케어",
        location : "/store-dog/health-care",
        src : "/assets/images/store/healthcare-dog.png"
    },
]
 
const categories = categoryList.map(({name, location, src}, i) => (
    <S.CategoriesWrap key={i}>
        <Link key={i} to={location}>
            <img src={process.env.PUBLIC_URL + src} alt={"상품사진"}/>
            <S.Category>{name}</S.Category>
        </Link>
    </S.CategoriesWrap>
))

  return (
    <>
      <S.Content>
        <S.BannerContainer>
          <S.Banner src={process.env.PUBLIC_URL+ "/assets/images/store/dog-banner.png"} alt="dog banner" />
            <S.BannerComent>반려동물의 성향을 체크할 수 있는 펫스널리티, <br/>지금 POWPOW에서 시작하세요 <br/><span>마음이 닿는 곳, 반려동물과 함께하는 행복한 시간<br/>반려견과 반려묘는 보호자와 정서적 교감을 나누며, 함께 성장하는 소중한 동반자입니다.</span><button src={process.env.PUBLIC_URL+ "/login" }><Link to={"/petsonal"}>바로가기<S.BannerButton src={process.env.PUBLIC_URL+ "/assets/images/store/arrow.svg"}/></Link></button></S.BannerComent>
        </S.BannerContainer>
          <S.CategoriesWrap>{categories}</S.CategoriesWrap>
        <div>
          <Outlet />
        </div>
      </S.Content>
      <Footer />
    </>

  );
};

export default StoreDogContainer;