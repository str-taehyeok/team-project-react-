import styled from "styled-components";

const S = {}

// 나의 게시물
S.MyPost = styled.div`
    input:focus {
      outline: none;
    }

  .profile{
    width:40px;
    height:40px
  }

  .nick-name{
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -3%;
    font-weight: bold;
  }

  .my-profile {
    display:flex;
    flex-direction: row;
    align-items:center;
    gap:10px;
    margin-bottom: 5px;
    width:582px;
    justify-content:left;
  }

  & .mySwiper {
      width: 586px;
      height:586px;
      border-radius:20px;
   }

  .like {
    width: 40px;
    height:40px;
  }
  .like-number {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -3%;
    font-weight: bold;
  }
  .dot{
    margin-left: 460px;
  }

  .my-like{
    display:flex;
    flex-direction: row;
    align-items:center;
    gap:10px;
    margin-top: 19px;
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