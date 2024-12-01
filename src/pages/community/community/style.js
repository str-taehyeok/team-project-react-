import styled from "styled-components";

const S = {}

// 커뮤니티 메인 페이지 배너
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
  

  // 커뮤니티 메인 페이지  배너 아래 부분
  S.Title = styled.div`

    .title-box{
      width:1440px;
      margin-top:198px;
      margin-left: 240px;
      margin-right: 240px;
      margin-bottom: 65px;
    }

    .text-box1 {
      display: flex;
      flex-direction: column;
      width: 1440px;
      margin-bottom: 15px;
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
    .addPost{
      width:220px;
      height:300px;
      border-radius: 20px;
      border:1px solid #D9D9D9;
      display: flex;
      flex-direction:column;
      align-items: center;
      justify-content: center;
    }

    .myPost{
      width:220px;
      height:300px;
      border-radius: 20px;
      position: relative;
    }

    .addPostBox{
      display: flex;
      flex-direction:row;
      gap:24px;
      align-items: center;
      justify-content: center;
    }
    .plus{
     width:20px;
     height:20px;
     margin-bottom: 10px;
    }
    .text6{
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -3%;
      color:#828282;
      text-align: center;
    }
    .click{
      display: flex;
      flex-direction:column;
      align-items: center;
      justify-content: center;
    }

    & .mySwiper {
      width: 1440px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 240px;
      margin-right: 240px;
   }

   .text7{
      width:1440px;
      margin-top: 117px;
      font-size: 40px;
      line-height: 54px;
      letter-spacing: -3%;
      font-weight:bold;
      color:#000000;
      text-align: center;
      margin-bottom: 90px;
      margin-left: 240px;
      margin-right: 240px;
    }

    .orangeBox{
      width: 1327px;
      height:626px;
      background: linear-gradient( rgba(255, 255, 255, 0.9),rgba(255, 255, 129, 0.4), rgba(255, 195, 3, 0.3) );
    }

    .goldBox{
      width: 1327px;
      height:626px;
      background: linear-gradient( rgba(255, 195, 3, 0.3),rgba(218, 199, 138, 0.4), rgba(255, 255, 255, 0.6)  );
    }

    .gradationBox{
      width: 1327px;
      height:626px;
      background: linear-gradient(rgba(255, 255, 255, 0.6), rgba(218, 199, 138, 0.2),rgba(207, 165, 203, 0.4));
    }

    .lightPurple{
      width: 1327px;
      height:626px;
      background: linear-gradient(rgba(207, 165, 203, 0.4), rgba(255, 255, 255, 0.6)  );
    }

    .deepPurple{
      width: 1327px;
      height:626px;
      margin-bottom: 372px;
      background: linear-gradient(rgba(255, 255, 255, 0.6), rgba(101, 83, 125, 0.3)  );
    }
    .colorBox{
      display: flex;
      flex-direction:column;
      align-items: center;
      justify-content: center;
      margin-left: 296.5px;
      margin-right: 296.5px;

    }

    .text8 {
      font-size: 40px;
      line-height: 54px;
      letter-spacing: -3%;
      font-weight:bold;
      margin-top: 82px;
      margin-left: 65px;
    }

    .text9{
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -3%;
      text-align: right;
      margin-right: 82px;
      font-weight:bold;
    }

  `

  
export default S;
