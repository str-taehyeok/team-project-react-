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

   padding-top: 101px;
   padding-left: 282px;
   width: 1920px;
   height: 767px;
   position: relative;
   background-color: rgba(0, 0, 0, 0.9);

   .text1 {
    color : white;
    font-size: 55px;
    line-height: 72px;
    letter-spacing: -3%;
    font-weight:bold;
    margin-right: 65px;
    width: 740px;
   }

   .text2 {
    color : white;
    font-size: 28px;
    line-height: 40px;
    letter-spacing: -3%;
    font-weight:bold;
    margin-top: 30px;
   }

   & .swiper {
    position: absolute;
    right : 0;
    top : 50%;
    transform: translate(-62%, -49%);
    width: 473px;
    height: 510px;
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
  

  S.Title = styled.div`
   padding-top: 198px;
   padding-left: 240px;
   padding-right: 240px;

    .title-box{
      width:1440px
    }
    .text3 {
        font-size: 24px;
        line-height: 36px;
        letter-spacing: -3%;
        font-weight:bold;

    }
    .text4 {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -3%;
    }
    .text5{
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -3%;
      text-align: right;
    }
  
  
  `
export default S;
