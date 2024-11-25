import React from 'react';
import S from "./style";
import { Link } from "react-router-dom"

const StoreBtn = () => {
  return (
    <S.btn className='button' type='button'>
      <Link to={""}>쇼핑가기</Link>
    </S.btn>
   
  );
};

export default StoreBtn;