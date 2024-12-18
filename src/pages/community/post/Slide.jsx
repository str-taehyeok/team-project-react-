import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useParams } from 'react-router-dom';
import { CommunityContext } from '../../../context/communityContext';

export default function Slide() {
  const { id } = useParams();
  const { communityState } = useContext(CommunityContext);
  const { communites } = communityState;

  const foundPost = communites?.find((cm) => String(cm.id) === String(id));

  if (!foundPost) {
    return <div>게시물을 찾을 수 없습니다.</div>;
  }

  const { 
    imageName1, imageName2, imageName3, imageName4, imageName5, 
    imagePath1, imagePath2, imagePath3, imagePath4, imagePath5 
  } = foundPost;

  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      {imageName1 && (
        <SwiperSlide>
          <img 
            src={`${process.env.PUBLIC_URL}/assets/images/community/${imageName1}`} 
            alt="내 이미지1" 
          />
        </SwiperSlide>
      )}
      {imageName2 && (
        <SwiperSlide>
          <img 
            src={`${process.env.PUBLIC_URL}/assets/images/community/${imageName2}`} 
            alt="내 이미지2" 
          />
        </SwiperSlide>
      )}
      {imageName3 && (
        <SwiperSlide>
          <img 
            src={`${process.env.PUBLIC_URL}/assets/images/community/${imageName3}`} 
            alt="내 이미지3" 
          />
        </SwiperSlide>
      )}
      {imageName4 && (
        <SwiperSlide>
          <img 
            src={`${process.env.PUBLIC_URL}/assets/images/community/${imageName4}`} 
            alt="내 이미지4" 
          />
        </SwiperSlide>
      )}
      {imageName5 && (
        <SwiperSlide>
          <img 
            src={`${process.env.PUBLIC_URL}/assets/images/community/${imageName5}`} 
            alt="내 이미지5" 
          />
        </SwiperSlide>
      )}
    </Swiper>
  );
}
