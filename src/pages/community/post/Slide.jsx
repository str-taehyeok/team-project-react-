import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


// export default function Slide() {
//   return (
//     <>
//       <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
//         {/* <postList.map(()) */}
//         <SwiperSlide><img src="/assets/images/community/myImage.svg" alt="내 이미지1" /></SwiperSlide>
//         <SwiperSlide><img src="/assets/images/community/myImage2.svg" alt="내 이미지2" /></SwiperSlide>
//         <SwiperSlide><img src="/assets/images/community/myImage3.svg" alt="내 이미지3" /></SwiperSlide>
//         <SwiperSlide><img src="/assets/images/community/myImage4.svg" alt="내 이미지4" /></SwiperSlide>
//         <SwiperSlide><img src="/assets/images/community/myImage5.svg" alt="내 이미지5" /></SwiperSlide>
//       </Swiper>

//     </>
//   );
// }

const datas = [
  {
      postImage1 : "/assets/images/community/myImage.svg"
  },
  {
      postImage2 : "/assets/images/community/myImage2.svg"
  },
  {
      postImage3 : "/assets/images/community/myImage3.svg"
  },
  {
      postImage4 : "/assets/images/community/myImage4.svg"
  },
  {
      postImage5 : "/assets/images/community/myImage5.svg"
  },
]
export default function Slide() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {/* <postList.map(()) */}
        <SwiperSlide><img src={datas.postImage1} alt="내 이미지1" /></SwiperSlide>
        <SwiperSlide><img src={datas.postImage2} alt="내 이미지2" /></SwiperSlide>
        <SwiperSlide><img src={datas.postImage3} alt="내 이미지3" /></SwiperSlide>
        <SwiperSlide><img src={datas.postImage4} alt="내 이미지4" /></SwiperSlide>
        <SwiperSlide><img src={datas.postImage5} alt="내 이미지5" /></SwiperSlide>
      </Swiper>

    </>
  );
}
