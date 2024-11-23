import React from 'react';
import S from "./style";
import { Link, Outlet } from 'react-router-dom';
import Footer from "../../../layout/Footer";

const StoreDogContainer = () => {

  // 카테고리
  const categoryList = [
    {
        name : "장난감",
        location : "/storeDog",
        src : "/assets/images/store/flushies-dog.png"
    },
    {
        name : "사료/간식",
        location : "/storeDog/treats",
        src : "/assets/images/store/treats-dog.png"
    },
    {
        name : "펫웨어",
        location : "/storeDog/clothes",
        src : "/assets/images/store/clothes-dog.png"
    },
    {
        name : "헬스케어",
        location : "/storeDog/healthCare",
        src : "/assets/images/store/healthcare-dog.png"
    },
]
 
const categorys = categoryList.map(({name, location, src}, i) => (
    <S.CategoriesWrap>
        <Link key={i} to={location}>
            <img src={process.env.PUBLIC_URL + src} />
            <S.Category>{name}</S.Category>
        </Link>
    </S.CategoriesWrap>
))

  return (
    <S.Content>
      <div>
        <S.Banner src={process.env.PUBLIC_URL+ "/assets/images/store/dog-banner.png"} alt="dog banner" />
      </div>
        <S.CategoriesWrap>{categorys}</S.CategoriesWrap>
      <div>
        <Outlet />
      </div>
        <Footer />
    </S.Content>
  );
};

export default StoreDogContainer;