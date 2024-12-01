import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function Slide() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src="/assets/images/community/myImage.svg" alt="내 이미지1" /></SwiperSlide>
        <SwiperSlide><img src="/assets/images/community/myImage2.svg" alt="내 이미지2" /></SwiperSlide>
        <SwiperSlide><img src="/assets/images/community/myImage3.svg" alt="내 이미지3" /></SwiperSlide>
        <SwiperSlide><img src="/assets/images/community/myImage4.svg" alt="내 이미지4" /></SwiperSlide>
        <SwiperSlide><img src="/assets/images/community/myImage5.svg" alt="내 이미지5" /></SwiperSlide>
      </Swiper>

    </>
  );
}
