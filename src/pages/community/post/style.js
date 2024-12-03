import styled from "styled-components";

const S = {}

// 상단 공통 레이아웃 버튼 
S.LayoutBox = styled.div`
    display:flex;
    flex-direction: column;
    width:1196px;
    margin: 0 auto;
    margin-bottom: 400px;
`

S.AllPostWrapper = styled.div`
    display:flex;
    flex-direction: row;
    gap:24px;
    margin-top: 29px;
    flex-wrap :wrap ;
`

S.LayoutButton = styled.div`
  .oringe{
    border-radius:50%;
    border: none;
    background-color: #D9D9D9;
    width:30px;
    height: 30px;
  }

  .active .oringe{
    background-color: #FFC303;
  }

  .gold{
    border-radius:50%;
    border: none;
    background-color: #D9D9D9;
    width:30px;
    height: 30px;
  }
  .active .gold{
    background-color: #FFE599;
  }

  .gradation{
    border-radius:50%;
    border: none;
    background-color: #D9D9D9;
    width:30px;
    height: 30px;
  }

  .active .gradation{
    background-image:linear-gradient(rgba(218, 199, 138, 0.5),rgba(207, 165, 203, 0.5));
  }

  .lightPurple{
    border-radius:50%;
    border: none;
    background-color: #D9D9D9;
    width:30px;
    height: 30px;
  }

  .active .lightPurple{
    background-color: #C9B6E4;
  }

  .deepPurple{
    border-radius:50%;
    border: none;
    background-color: #D9D9D9;
    width:30px;
    height: 30px;
  }
  .active .deepPurple{
    background-color: #8B6D9C;
  }

  .all{
    border-radius:50%;
    border: none;
    background-color: #D9D9D9;
    width:30px;
    height: 30px;
    color: #ffffff;
  }

  .active .all{
    background-color: #000000;
  }

  .button{
    display:flex;
    flex-direction: row;
    gap:16px;
    margin-top: 120px;
  }
`;

// 각각 리스트로 구현되는 이미지
S.Profile = styled.img`
  width:40px;
  height:40px;
  margin-right: 10px;
`

S.NickName = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -3%;
  font-weight: bold;
  width: 100%;
`

S.Title = styled.p`
   font-size: 24px;
    line-height: 36px;
    font-weight: bold;
    margin-top: 44px;
`

S.PostImage = styled.img`
  width:220px;
  height:300px;
  border-radius: 20px;
`;

S.CommunityPost = styled.div`
  position: relative;
  
  .like-icon{
    position: absolute;
    right: 20px;
    top : 20px;
  }
`;

S.PropileBox = styled.div`
  display:flex;
  flex-direction: row;
  width: 220px;
  align-items:center;
  margin-top: 5px;
`
 
// 마이페이지 커뮤니티


// 나의/다른 사용자 게시물
S.Post = styled.div`
    input:focus {
      outline: none;
    }

  .profile{
    width:40px;
    height:40px;
    margin-right: 10px;
  }

  .nick-name{
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -3%;
    font-weight: bold;
    width: 100%;
  }

  .my-profile {
    display:flex;
    flex-direction: row;
    align-items:center;
    margin-bottom: 5px;
    width:582px;
    justify-content:left;
  }

  .follow {
    border-radius: 20px;
    width:65px;
    height:30px;
    background-color:#113F8A;
    border:none;
  }

  .follow-text {
    font-size: 12px;
    line-height: 18px;
    color: #ffffff;
    font-weight: bold;
  }

  .follow-box{
    display:flex;
    width:582px;
    justify-content: right;
  }

  .following {
    border-radius: 20px;
    width:65px;
    height:30px;
    background-color:#ffffff;
    border:solid 1px #828282;
  }

  .following-box{
    display:flex;
    width:582px;
    justify-content: right;
    display:none;
  }

  .following-text {
    font-size: 12px;
    line-height: 18px;
    color: #828282;
    font-weight: bold;
  }

  & .mySwiper {
      width: 586px;
      height:586px;
      border-radius:20px;
   }

  .like {
    width: 40px;
    height:40px;
    margin-right: 10px;
  }
  .like-number {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -3%;
    font-weight: bold;
    width: 100%;
  }

  .my-like{
    display:flex;
    flex-direction: row;
    align-items:center;
  }


  .text1{
    margin-top: 25px;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -3%;
  }
  .box{
    width:586px;
    padding: 19px 26px;
  }

  .my-post{
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width:586px;
  }

  .text2 {
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -3%;
    font-weight: bold;
  }
  .comment-number{
    display:flex;
    flex-direction: row;
    align-items:center;
    margin-bottom: 5px;
    width:559px;
    justify-content:left;
    gap:10px;
  }
  .profile2{
    width:44px;
    height:44px
  }
  .input{
    border-radius: 20px;
    border-style: none;
    border: solid 1px #828282;
    width:469px;
    height:56px;
    padding: 19px 26px;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -3%;
    color:#828282;
  }
  .button{
    border:none;
    color: #113F8A;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -3%;
    background-color: white;
    position: absolute; 
    right: 20px; 
    top: 18px;
  }

  .input-container{
    position: relative; 
    width: 469px;
  }

  .box1 {
    display:flex;
    flex-direction: row;
    align-items: center;
    gap:28px;
    margin-top: 53px;
  }
  .comment-box{
    width: 559px;
    height: 681px;
    margin-top: 5px;
  }
  .text3{
    font-size: 14px;
    line-height: 22px;
    text-align: center;
   padding-top: 66px;
  }

  .my-comment{
    display:flex;
    flex-direction: column;
    width: 559px;
  }

  .my-post-box{
    display:flex;
    flex-direction: row;
    width:1178px;
    gap: 50px;
    margin: 0 auto;
    margin-top: 152px;
  }
`

// 베스트 게시물
S.BestPost = styled.div`

  .text4{
    font-size: 20px;
    line-height: 30px;
    font-weight:bold;
  }
  .bestPost{
    width: 170px;
    height: 170px;
    border-radius: 20px;
  }
  .best-post-box{
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-top: 39px;
  }
  .bestBox{
    display:flex;
    flex-direction: column;
    width:1132px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 221px;
  }
`

export default S;