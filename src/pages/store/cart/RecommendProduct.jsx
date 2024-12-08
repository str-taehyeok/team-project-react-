// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';


// const RecommendProduct = (products) => {

//   console.log(products)

//   return (
//     <>
//     <div>함께보면 좋은 상품</div>
//     <div>
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
//             {products.map((product, index) => (
//                 <SwiperSlide key={index}>
//                     <div>
//                         {product}
//                     </div>
//                 </SwiperSlide>
//             ))}
//         </Swiper>
//     </div>
//     </>
//   );
// };

// export default RecommendProduct;