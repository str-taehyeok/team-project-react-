import styled from "styled-components";

const S = {}


  S.BannerWrapper = styled.div`
   
   position: relative;

   & .swiper {
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

   & .banner{
    width: 100px;
    height: 100px;
    background-color: black;
   }



  `

export default S;