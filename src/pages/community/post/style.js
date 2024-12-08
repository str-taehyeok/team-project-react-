import styled from "styled-components";

const S = {}

// 상단 공통 레이아웃 버튼 
S.LayoutBox = styled.div`
    display:flex;
    flex-direction: column;
    width:1196px;
    margin: 0 auto;
    margin-bottom: 300px;
`

S.AllPostWrapper = styled.div`
    display:flex;
    flex-direction: row;
    gap:24px;
    margin-top: 29px;
    flex-wrap :wrap ;
`

S.LayoutButton = styled.div`
  .orange{
    border-radius:50%;
    border: none;
    background-color: #D9D9D9;
    width:30px;
    height: 30px;
  }

  .active .orange{
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

  .skyBlue{
    border-radius:50%;
    border: none;
    background-color: #D9D9D9;
    width:30px;
    height: 30px;
  }
  .active .skyBlue{
    background-color: #87CEEB;
  }

  .dageGreen{
    border-radius:50%;
    border: none;
    background-color: #D9D9D9;
    width:30px;
    height: 30px;
  }
  .active .dageGreen{
    background-color: #BCE2D6;
  }

  .iceBlue{
    border-radius:50%;
    border: none;
    background-color: #D9D9D9;
    width:30px;
    height: 30px;
  }
  .active .iceBlue{
    background-color: #D1F2F2;
  }

  .dustySilver{
    border-radius:50%;
    border: none;
    background-color: #D9D9D9;
    width:30px;
    height: 30px;
  }
  .active .dustySilver{
    background-image:linear-gradient(rgba(137, 169, 196, 0.5),rgba(66, 85, 94, 0.5));
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
    width: 20px;
    height:20px;
  }
`;

S.PropileBox = styled.div`
  display:flex;
  flex-direction: row;
  width: 220px;
  align-items:center;
  margin-top: 5px;
`

  S.NickName = styled.div`
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -3%;
    font-weight: bold;
    width: 100%;
  `
  S.ProfileBox = styled.div`
    display:flex;
    flex-direction: row;
    width: 586px;
    align-items:center;
    margin-bottom: 5px;
  `
  S.Profile = styled.div`
    width:40px;
    height:40px;
    margin-right: 10px;
  `
  S.MyProfile = styled.div`
    width:44px;
    height:44px;
    margin-right: 10px;
  `
  // 팔로우 버튼튼
S.FollowBtn = styled.div`
& button {
  border-radius: 20px;
  width:65px;
  height:30px;
  background-color:#113F8A;
  border:none;
}
& p {
  font-size: 12px;
  line-height: 18px;
  color: #ffffff;
  font-weight: bold;
}
  display:flex;
  width:582px;
  justify-content: right;
  margin-top: 9px;
`
// 팔로잉 버튼
S.FollowingBtn = styled.div`
& button {
  border-radius: 20px;
  width:65px;
  height:30px;
  background-color:#ffffff;
  border:solid 1px #828282;
}
  display:flex;
  width:582px;
  justify-content: right;
  margin-top: 9px;

  & p {
  font-size: 12px;
  line-height: 18px;
  color: #828282;
  font-weight: bold;
}
`

// 게시물 제목
S.PostTitle = styled.div`
  margin-top: 20px;
  font-size: 20px;
  line-height: 30px;
  font-weight: bold;
`
// 게시물 내용용
S.PostContent = styled.div`
  margin-top: 5px;
  font-size: 14px;
  line-height: 22px;
`

// 게시물 전체 박스
S.MyPostBox = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  width:586px;

 & .mySwiper {
  width: 586px;
  height:586px;
  border-radius:20px;
 }
`
S.MyPostPage = styled.div`
  margin-top: 152px;
`

S.PostUnder = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: center
    
`
S.DotBtn = styled.div`
  & button {
    border: none;
    background-color: white;
    cursor: pointer;
  }
`
S.LikeNumber = styled.div`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -3%;
  font-weight: bold;
  width: 100%;
  margin-left: 10px;
`
S.MyPostUnderBox = styled.div`
  width:586px;
  padding: 19px 26px;
`

S.Comment = styled.div`
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -3%;
  font-weight: bold;
`

S.CommentNumber = styled.div`
  display:flex;
  flex-direction: row;
  align-items:center;
  margin-bottom: 5px;
  width:559px;
  justify-content:left;
  gap:10px;
`

S.InputContainer = styled.div`
  position: relative; 
  width: 469px;
  & input {
    border-radius: 20px;
    border-style: none;
    border: solid 1px #828282;
    width:469px;
    height:56px;
    padding: 19px 59px 19px 26px;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -3%;
    color:#828282;
    outline:none;
    margin-left: 10px;
  }
  & button {
    border: none;
    background-color: white;
    cursor: pointer;
    color: #113F8A;
    font-size: 12px;
    font-weight: bold;
    position: absolute; 
    right: 15px; 
    top: 19px;
  }

`
S.MyComment = styled.div`
  display:flex;
  flex-direction: row;
  align-items:center;
`
S.CommentBox = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  margin-top: 32px;
`
S.CommentText = styled.div`
  display:flex;
  flex-direction: column;
  margin-left: 10px;
  width: 100%;
`
S.CommentDiv = styled.div`
  width: 561px;

`
S.MyPostPageBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 52px;
`
S.BestPostBox = styled.div`
position: relative;
  .like-icon{
    position: absolute;
    right: 20px;
    top : 20px;
    width: 20px;
    height:20px;
  }
`
S.BestText = styled.div`
  margin-top: 18px;
  font-size: 24px;
  line-height: 36px;
  font-weight:bold;
`
/* postWrite */

S.MainImageDumy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 366px;
  height: 345px;
  border-radius: 20px;
  background-color: #d9d9d9;
  background-size: cover;
  cursor: pointer;
  text-align: center;
  margin-bottom: 24px;
`
S.PostContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 19px;
  width: 900px;
  flex-wrap: wrap;
`


S.SubImagesWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`

S.SubImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  background-color: #d9d9d9;
`
S.WriterBox = styled.div`
  width: 457px;
  height: 429px;
  border-radius: 20px;
  border: solid 1px #828282;
  display: flex;
  justify-content: center;
  align-items: center;
`
S.Textarea = styled.textarea`
  padding: 26px;
  width: 100%;
  height: 100%;
  border: none;
  resize: none;
  background-color: transparent;
  font-size: 17px;
  line-height: 22px;
  color: #818181;
  outline: none;
  &::placeholder{
  color: #818181; 
  font-size: 14px; 
  line-height: 22px; 
  text-align: left; 
  }
`
S.UploadButton = styled.button`
  width: 120px;
  height: 30px;
  border-radius: 20px;
  color: #FFFFFF;
  background-color: #113F8A;
  cursor: pointer;
  margin: 0 0 33px auto;
`

S.PostWarpper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 139px;
`
/* UserList */

S.UserCommunity = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 166px;
`

S.MyProfileCardWapper = styled.div`
  width: 270px;
  height: 430px;
  box-sizing: border-box;
  border: solid 1px #828282;
  border-radius: 20px;
  box-shadow: 0 4px 4px #C0C0C0;
`
S.MyProfileCard = styled.div`
  height: 244px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

S.MyProfileImage = styled.div`
  width: 120px;
  height: 154px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  > img{
    width: 120px;
    height: 120px;
  }
  > p{
  font-weight: 600;
  margin-top: 10px;
  }
`

S.MyProfilelineStyle = styled.div`
  width: 206px;
  display: flex;
  margin-inline: auto;
  margin-top: -15px;
  margin-bottom: 29px;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px #676767;
`

S.MyProfileButton = styled.button`
  background-color: #FFFFFF;
  border: 1px solid #000000;
  width: 115px;
  height: 43px;
  border-radius: 20px;
  font-size: 16px;
`
S.ButtonCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

S.MyprofileCardInformation = styled.div`
  margin-top: 28px;
`
S.MyFollwer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
>button {
  border: none;
  height: 22px;
  background: none;
  cursor: pointer;
  color: #828282;
}
`
S.MyPost = styled.div`
  display: flex;
  margin-top: 33px;
  flex-direction: column;
  margin-left: 59px;
`
S.MyPostItem = styled.div`
  max-width: 190px;
  display: flex;
`

S.MyPostList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 820px;
  height: 445px;
  gap: 24px;
  display: flex;
  flex-direction: column;
`

S.MyPosts = styled.ul`
  list-style: none;
  width: 820px;
  height: 445px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  >img{
    width: 190px;
    height: 190px;
  }
`
S.Title = styled.div`
  margin-bottom: 17px;
`

S.PopupAreaFollowing = styled.div`
  width: 400px;
  height: 534px;
  border-radius: 20px;
  border: solid 1px #828282;
  box-shadow: 2px 4px 4px rgb(0, 0, 0, 0.2);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 473px;
  right: 54px;
  margin: 0 auto;
  background-color: #FFFFFF;
`

S.MenuFollowing = styled.div`
  width: 200px;
  height: 50px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #d9d9d9;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
S.myFollowingList = styled.div`
  width: 400px;
  height: 484px;
  box-sizing: border-box;
  border: solid 1px #888888;
`

S.Following1 = styled.div`
  display: flex;
  >img{
    width: 40px;
  }
`

export default S;