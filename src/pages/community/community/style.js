import styled from "styled-components";

const S = {}

// 공용 하트
  S.Heart = styled.div`
    position: absolute;
    top: 12px;
    right: 12px;
    width: 30px;
    height: 30px;

    & > img {
      width: 100%;
    }
  `

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

   & button{
    width:240px;
    height:60px;
    background-color:rgba(255, 255, 255, 0.9);
    color:#000000;
    font-size: 28px;
    line-height: 40px;
    font-weight:bold;
    border-radius: 20px;
    margin-top: 24px;
    cursor: pointer;
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
   }
  `
  

  // 커뮤니티 메인 페이지  배너 아래 부분
  S.Title = styled.div`
    margin-bottom: 226px;
    & .mySwiper {
      width: 1440px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 240px;
      margin-right: 240px;
   }

  `

  S.MyPostBox = styled.div`
    width:1440px;
    margin-top:198px;
    margin-left: 240px;
    margin-right: 240px;
    margin-bottom: 65px;
  `
  S.MyTitle = styled.div`
    display: flex;
    flex-direction: column;
    width: 1440px;
    margin-bottom: 15px;
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
  S.AddPost = styled.div`
    width:220px;
    height:300px;
    border-radius: 20px;
    border:1px solid #D9D9D9;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
      & div {
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
      }

      & img{
        width:20px;
        height:20px;
        margin-bottom: 10px;
      }

      & p{
        font-size: 16px;
        line-height: 24px;
        color:#828282;
        text-align: center;
      }
  `

  S.MyCommunityPost = styled.div`
    display: flex;
    flex-direction:row;
    gap:24px;
    align-items: center;
   `
  S.MyPost = styled.div`
  position: relative;
    .like-icon{
      position: absolute;
      width: 20px;
      height:20px;
      right: 20px;
      top : 20px;
    }
    & .thumb{
      width: 220px;
      height: 300px;
    }
   `
  S.ColorTitle = styled.div`
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
   `

  S.ColorBox = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    margin-left: 296.5px;
    margin-right: 296.5px;
  `

  S.OrangeBox = styled.div`
    width: 1327px;
    height:626px;
    background: linear-gradient( rgba(255, 255, 255, 0.9),rgba(255, 255, 129, 0.4), rgba(255, 195, 3, 0.3) );
  `
  S.GoldBox = styled.div`
    width: 1327px;
    height:626px;
    background: linear-gradient( rgba(255, 195, 3, 0.3),rgba(218, 199, 138, 0.4), rgba(255, 255, 255, 0.6));
  `
  S.GradationBox = styled.div`
    width: 1327px;
    height:626px;
    background: linear-gradient(rgba(255, 255, 255, 0.6), rgba(218, 199, 138, 0.2),rgba(207, 165, 203, 0.4));
  `
  S.LightPurpleBox = styled.div`
    width: 1327px;
    height:626px;
    background: linear-gradient(rgba(207, 165, 203, 0.4), rgba(255, 255, 255, 0.6));
  `
  S.SkyBlueBox = styled.div`
    width: 1327px;
    height:626px;
    background: linear-gradient( rgba(255, 255, 255, 0.6), rgba(135, 260, 235, 0.3) );
  `
  S.SageGreenBox = styled.div`
    width: 1327px;
    height:626px;
    background: linear-gradient( rgba(135, 260, 235, 0.3),rgba(188, 226, 214, 0.7), rgba(255, 255, 255, 0.3) );
  `
  S.IceBlueBox = styled.div`
    width: 1327px;
    height:626px;
    background: linear-gradient( rgba(255, 255, 255, 0.3),rgba(209, 242, 242, 0.4));
  `
  S.DustySilverBox = styled.div`
    width: 1327px;
    height:626px;
    background: linear-gradient( rgba(209, 242, 242, 0.4),rgba(66, 85, 94, 0.4), rgba(255, 255, 255, 0.9) );
  ` 
  S.ColorName = styled.div`
    font-size: 40px;
    line-height: 54px;
    letter-spacing: -3%;
    font-weight:bold;
    margin-top: 82px;
    margin-left: 65px;
  `
  S.AllToGo = styled.div`
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -3%;
    text-align: right;
    margin-right: 82px;
    font-weight:bold;
  `
  S.OrangePostBox = styled.div`
  `
  S.OrangePost = styled.div`
    display:flex;
    flex-direction: column;
    gap:5px;
  `
  S.NickName = styled.div`
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -3%;
    font-weight: bold;
    width: 100%;
  `
  S.PostImage = styled.div`
    width:220px;
    height:300px;
    border-radius: 20px; 
    position: relative;
    .like-icon{
      position: absolute;
      width: 20px;
      height:20px;
      right: 20px;
      top : 20px;
    }
  `
  S.ProfileBox = styled.div`
    display:flex;
    flex-direction: row;
    width: 220px;
    align-items:center;
  `
  S.Profile = styled.div`
    width:40px;
    height:40px;
    margin-right: 10px;
  `
  S.PostBox = styled.div`
    display:flex;
    flex-direction: row;
    gap:24px;
    margin-top: 10px;
    width:1327px;
    justify-content:center;
  `



export default S;
