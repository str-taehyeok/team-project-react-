import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const datas = [
  {
      postImage1 : "/assets/images/community/myPostImage1.png",
      postImage2 : "/assets/images/community/myPostImage2.png",
      postImage3 : "/assets/images/community/myPostImage3.png",
      postImage4 : "/assets/images/community/myPostImage4.png",
      postImage5 : "/assets/images/community/myPostImage5.png"
  }, 
]

export default function Slide() {

  const postImage = datas.map((post, i) => (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      <SwiperSlide><img src={`${process.env.PUBLIC_URL}${post.postImage1}`} alt="내 이미지1" /></SwiperSlide>
      <SwiperSlide><img src={`${process.env.PUBLIC_URL}${post.postImage2}`} alt="내 이미지1" /></SwiperSlide>
      <SwiperSlide><img src={`${process.env.PUBLIC_URL}${post.postImage3}`} alt="내 이미지1" /></SwiperSlide>
      <SwiperSlide><img src={`${process.env.PUBLIC_URL}${post.postImage4}`} alt="내 이미지1" /></SwiperSlide>
      <SwiperSlide><img src={`${process.env.PUBLIC_URL}${post.postImage5}`} alt="내 이미지1" /></SwiperSlide>
    </Swiper>
  ))



  return (
    <>
    {postImage}
    </>
  
  );
}
