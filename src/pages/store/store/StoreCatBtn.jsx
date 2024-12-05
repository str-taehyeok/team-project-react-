import React from 'react';
import S from "./style";
import { Link } from "react-router-dom"

const StoreCatBtn = () => {
  return (
    <S.Link to={"/store-cat"}>
      쇼핑가기
    </S.Link>
   
  );
};

export default StoreCatBtn;