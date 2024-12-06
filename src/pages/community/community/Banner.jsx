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
          <img src="/assets/images/community/dog1.png" alt="오렌지 강아지" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="/assets/images/community/dog2.png" alt="골드 강아지" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="/assets/images/community/dog3.png" alt="그라데이션 강아지" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="/assets/images/community/dog4.png" alt="연한 보라 강아지" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="/assets/images/community/dog5.png" alt="찐보라 강아지" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="/assets/images/community/cat1.png" alt="오렌지 고양이" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/assets/images/community/cat2.png" alt="골드 고양이" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="/assets/images/community/cat3.png" alt="그라데이션 고양이" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="/assets/images/community/cat4.png" alt="연한 고양이" />
        </SwiperSlide>
      
        <SwiperSlide>
          <img src="/assets/images/community/cat5.png" alt="찐보라 고양이" />
        </SwiperSlide>

      </Swiper>
    </>
  );
}
