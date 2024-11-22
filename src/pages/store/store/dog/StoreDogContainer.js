import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const StoreDogContainer = () => {

  // 카테고리
  const categoryList = [
    {
        name : "장난감",
        location : "/storeDog",
        src : "/assets/images/flushies-dog.png"
    },
    {
        name : "장난감",
        location : "/storeDog/treats",
        src : "/assets/images/treats-dog.png"
    },
    {
        name : "펫웨어",
        location : "/storeDog/clothes",
        src : "/assets/images/clothes-dog.png"
    },
    {
        name : "헬스케어",
        location : "/storeDog/healthCare",
        src : "/assets/images/healthcare-dog.png"
    },
]
 
const categorys = categoryList.map(({name, location, src}, i) => (
    <Link key={i} to={location}>
        <img src={process.env.PUBLIC_URL + src} />
        <span>{name}</span>
    </Link>
))

  return (
    <div>
      <div>
        <img src={process.env.PUBLIC_URL+ "/assets/images/dog-banner.png"} alt="dog banner" />
      </div>
      {categorys}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default StoreDogContainer;