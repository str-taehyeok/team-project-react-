import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay,  Navigation } from 'swiper/modules';

export default function Slide() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,  Navigation]}
        className="mySwiper"
      >
      
        <SwiperSlide><img src="/assets/images/community/slide1.svg" alt="펫스널 슬라이드" /></SwiperSlide>
        <SwiperSlide><img src="/assets/images/community/slide2.svg" alt="공공포털 슬라이드" /></SwiperSlide>
      
      </Swiper>

    </>
  );
}
