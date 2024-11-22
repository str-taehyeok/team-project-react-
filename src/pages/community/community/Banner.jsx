import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

export default function Banner() {
  return (
    <>

      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
  
        <SwiperSlide>
          <img src="/assets/images/community/orangeDog.svg" alt="오렌지 강아지" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="/assets/images/community/goldDog.svg" alt="골드 강아지" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="/assets/images/community/gradationDog.svg" alt="그라데이션 강아지" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="/assets/images/community/lightPurpleDog.svg" alt="연한 보라 강아지" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="/assets/images/community/deepPurpleDog.svg" alt="찐보라 강아지" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="/assets/images/community/orangeCat.svg" alt="오렌지 고양이" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/assets/images/community/goldCat.svg" alt="골드 고양이" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="/assets/images/community/gradationCat.svg" alt="그라데이션 고양이" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="/assets/images/community/lightPurpleCat.svg" alt="연한 고양이" />
        </SwiperSlide>
      
        <SwiperSlide>
          <img src="/assets/images/community/deepPurpleCat.svg" alt="찐보라 고양이" />
        </SwiperSlide>

      </Swiper>
    </>
  );
}
