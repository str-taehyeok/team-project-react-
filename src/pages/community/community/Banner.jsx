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
      <banner>
        <SwiperSlide>
          <img src="/assets/images/community/ordog.svg" alt="오랜지 강아지" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="/assets/images/community/godog.svg" alt="오랜지 강아지" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="/assets/images/community/grdog.svg" alt="오랜지 강아지" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="/assets/images/community/lpdog.svg" alt="오랜지 강아지" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="/assets/images/community/dpdog.svg" alt="오랜지 강아지" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="/assets/images/community/orcat.svg" alt="오랜지 강아지" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/assets/images/community/gocat.svg" alt="오랜지 강아지" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="/assets/images/community/grcat.svg" alt="오랜지 강아지" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="/assets/images/community/lpcat.svg" alt="오랜지 강아지" />
        </SwiperSlide>
      
        <SwiperSlide>
          <img src="/assets/images/community/dpcat.svg" alt="오랜지 강아지" />
        </SwiperSlide>
        </banner>
      </Swiper>
    </>
  );
}
