import React from 'react';
import S from "./style";
import { Link } from "react-router-dom"

const StoreDogBtn = () => {
  return (
    <S.Link to={"/store-dog"}>
      쇼핑가기
    </S.Link>
  );
};

export default StoreDogBtn;