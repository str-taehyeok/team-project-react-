import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


export default function Slide() {
  return (
    <>
      <Swiper className="mySwiper">
        <SwiperSlide><img src="/assets/images/community/slide1.svg" alt="펫스널 슬라이드" /></SwiperSlide>
        <SwiperSlide><img src="/assets/images/community/slide2.svg" alt="공공포털 슬라이드" /></SwiperSlide>
      </Swiper>

    </>
  );
}
