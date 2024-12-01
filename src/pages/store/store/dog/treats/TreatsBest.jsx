import React from 'react';
import S from "../style";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const TreatsBest = ({bestProducts}) => {
  return (
    <>
        <S.BestTitle>강아지 BEST 상품</S.BestTitle>
        <S.BestProducts>
            <Swiper
                slidesPerView={5}
                spaceBetween={50}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                style={{
                    paddingBottom: '30px',
                    '--swiper-pagination-bottom': '0px',
                    '--swiper-pagination-color': '#131313',
                    '--swiper-pagination-bullet-inactive-color': '#888888'
                }}
            >
                {bestProducts.map((product, index) => (
                    <SwiperSlide key={index}>
                        <S.BestProductWrap>
                            {product}
                        </S.BestProductWrap>
                    </SwiperSlide>
                ))}
            </Swiper>
        </S.BestProducts>
        </>
  );
};

export default TreatsBest;