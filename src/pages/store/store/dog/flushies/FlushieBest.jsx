import React from 'react';
import S from "../style";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import ReactDOM from "react-dom";
//
// import App from "./App.jsx";
//
// ReactDOM.render(<App />, document.getElementById("app"));
//
//
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';

const FlushieBest = ({bestProducts}) => {
  return (
    <>
        <S.BestProducts>
            {/*<div className="box">*/}
              <S.Title>강아지 BEST 상품</S.Title>
                <S.BestProductWrap>
                    {bestProducts}
                </S.BestProductWrap>
          </S.BestProducts>
      </>
  );
};

export default FlushieBest;