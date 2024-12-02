import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import HeartBtn from './HeartBtn';

const StoreCatPick = () => {
  return (
    <S.CatPickWrap>
    <S.CatPickProduct>
       <Link to={""}><img src={`${process.env.PUBLIC_URL}/assets/images/store/customcat1.png`} alt="" /></Link>
     <S.CatPickProductInfo>
       <p>피시포독 그레인프리 참치+스피니치 + 캐롯 85g</p>
       <p>129,000</p>
       <span> 35%</span><span> </span><span>82,586</span><br></br>
       <span>★5.0(8)</span><span> </span><span>♥5,069</span>
     </S.CatPickProductInfo>
    </S.CatPickProduct>

    <S.CatPickProduct>
       <Link to={""}><img src={`${process.env.PUBLIC_URL}/assets/images/store/customcat2.png`} alt="" /></Link>
     <S.CatPickProductInfo>
       <p>피시포독 그레인프리 참치+스피니치 + 캐롯 85g</p>
       <p>129,000</p>
       <span>35%</span><span> </span><span>82,586</span><br></br>
       <span>★5.0(8)</span><span> </span><span>♥5,069</span>
     </S.CatPickProductInfo>
    </S.CatPickProduct>

    <S.CatPickProduct>
       <Link to={""}><img src={`${process.env.PUBLIC_URL}/assets/images/store/customcat3.png`} alt="" /></Link>      <S.CatPickProductInfo>
       <p>피시포독 그레인프리 참치+스피니치 + 캐롯 85g</p>
       <p>129,000</p>
       <span>35%</span><span> </span><span>82,586</span><br></br>
       <span>★5.0(8)</span><span> </span><span>♥5,069</span>
     </S.CatPickProductInfo>
    </S.CatPickProduct>

    <S.CatPickProduct>
       <Link to={""}><img src={`${process.env.PUBLIC_URL}/assets/images/store/customcat4.png`} alt="" /></Link>      <S.CatPickProductInfo>
       <p>피시포독 그레인프리 참치+스피니치 + 캐롯 85g</p>
       <p>129,000</p>
       <span>35%</span><span> </span><span>82,586</span><br></br>
       <span>★5.0(8)</span><span> </span><span>♥5,069</span>
     </S.CatPickProductInfo>
    </S.CatPickProduct>

    <S.CatPickProduct>
       <Link to={""}><img src={`${process.env.PUBLIC_URL}/assets/images/store/customcat1.png`} alt="" /></Link>      <S.CatPickProductInfo>
       <p>피시포독 그레인프리 참치+스피니치 + 캐롯 85g</p>
       <p>129,000</p>
       <span>35%</span><span> </span><span>82,586</span><br></br>
       <span>★5.0(8)</span><span> </span><span>♥5,069</span>
     </S.CatPickProductInfo>
    </S.CatPickProduct>

    <S.CatPickProduct>
       <Link to={""}><img src={`${process.env.PUBLIC_URL}/assets/images/store/customcat2.png`} alt="" /></Link>      <S.CatPickProductInfo>
       <p>피시포독 그레인프리 참치+스피니치 + 캐롯 85g</p>
       <p>129,000</p>
       <span>35%</span><span> </span><span>82,586</span><br></br>
       <span>★5.0(8)</span><span> </span><span>♥5,069</span>
     </S.CatPickProductInfo>
    </S.CatPickProduct>

    <S.CatPickProduct>
        <Link to={""}><img src={`${process.env.PUBLIC_URL}/assets/images/store/customcat3.png`} alt="" /></Link>      <S.CatPickProductInfo>
       <p>피시포독 그레인프리 참치+스피니치 + 캐롯 85g</p>
       <p>129,000</p>
       <span>35%</span><span> </span><span>82,586</span><br></br>
       <span>★5.0(8)</span><span> </span><span>♥5,069</span>
     </S.CatPickProductInfo>
    </S.CatPickProduct>

    <S.CatPickProduct>
        <Link to={""}><img src={`${process.env.PUBLIC_URL}/assets/images/store/customcat4.png`} alt="" /></Link>      <S.CatPickProductInfo>
       <p>피시포독 그레인프리 참치+스피니치 + 캐롯 85g</p>
       <p>129,000</p>
       <span>35%</span><span> </span><span>82,586</span><br></br>
       <span>★5.0(8)</span><span> </span><span>♥5,069</span>
     </S.CatPickProductInfo>
    </S.CatPickProduct>
   </S.CatPickWrap>
  );
};

export default StoreCatPick;