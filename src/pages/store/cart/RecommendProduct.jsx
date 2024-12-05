// import React from 'react';
// import S from "../style";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';

// const RecommendProduct = ({recommendProductList}) => {

//   return (
//     <>
//     <S.RecommendTitle>함께보면 좋은 상품</S.RecommendTitle>
//     <S.RecommendProducts>
//         <Swiper
//             slidesPerView={4}
//             spaceBetween={24}
//             pagination={{
//                 clickable: true,
//             }}
//             modules={[Pagination]}
//             className="mySwiper"
//             style={{
//                 paddingBottom: '30px',
//                 '--swiper-pagination-bottom': '0px',
//                 '--swiper-pagination-color': '#131313',
//                 '--swiper-pagination-bullet-inactive-color': '#888888'
//             }}
//         >
//             {recommendProductList.map((product, index) => (
//                 <SwiperSlide key={index}>
//                     <S.RecommendProductWrap>
//                         {product}
//                     </S.RecommendProductWrap>
//                 </SwiperSlide>
//             ))}
//         </Swiper>
//     </S.RecommendProducts>
//     </>
//   );
// };

// export default RecommendProduct;