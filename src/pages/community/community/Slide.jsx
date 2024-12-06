import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Autoplay,  Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const datas = [
  {
     bannerImage1 : "/assets/images/community/slide1.png",
     bannerImage2 : "/assets/images/community/slide2.png",
     bannerImage3 : "/assets/images/community/slide3.png"
  },
]

export default function Slide() {

  const slideImage = datas.map((slide, i) => (
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 3500,
      disableOnInteraction: false,
    }}
    navigation={true}
    modules={[Autoplay,  Navigation]}
    className="mySwiper"
  >
      <SwiperSlide><Link to={"../post/all"}><img src={`${process.env.PUBLIC_URL}${slide.bannerImage1}`} alt="펫스널 슬라이드" /></Link></SwiperSlide>
      <SwiperSlide><Link to={"../petsonal"}><img src={`${process.env.PUBLIC_URL}${slide.bannerImage2}`} alt="펫스널컬러 테스트" /></Link></SwiperSlide>
      <SwiperSlide><img src={`${process.env.PUBLIC_URL}${slide.bannerImage3}`} alt="공공포털 슬라이드" /></SwiperSlide>
    </Swiper>
  ))

  return (
    <>
    {slideImage}
    </>
  );
}
