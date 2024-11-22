import styled from "styled-components";

const S = {}

  S.Banner = styled.div`
   & .banner{
    width: 100px;
    height: 100px;
    background-color: black;
   }
  `


  S.BannerWrapper = styled.div`

   width: 100%;
   height: 700px;
   position: relative;
   background-color: rgba(0, 0, 0, 0.9);

   p {
    color : white;
    font-size: 55px;
    line-height: 72px;
    letter-spacing: -3%;
   }


   & .swiper {
    position: absolute;
    right : 0;
    top : 50%;
    transform: translate(-50%, -50%);
    width: 346px;
    height: 374px;
   }

   & .swiper-slide{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;

    & img {
    }
   }





  `

export default S;