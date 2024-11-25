import styled from "styled-components";
import {
  flexCenterRowSpaceBetween, flexRowCenter, flexColumnCenter, h7Medium, h4Medium
} from '../../global/common'
import theme from "../../global/theme";

const S = {};

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

S.LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;
`;

S.Slider = styled.div`
  position: relative;
  width: 1920px;
  height: 570px;
  overflow: hidden;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

S.Slides = styled.div`
  display: flex;
  transition: transform 2s ease-in-out;
  gap: 26px;
`;

S.Slide = styled.div`
  min-width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  color: white;
`;

S.Navigation = styled.div`
  position: absolute;
  bottom: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

S.HotProduct = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  margin-top: 135px;
  gap: 26px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

S.HotImages = styled.div`
  display: flex;
  gap: 26px;
`;

S.ImageAndCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

S.HotImage = styled.div`
  width: 464px;
  height: 564px;
  background-color: #767676;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
`;

S.Coupon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 118px;
  height: 40px;
  color: #fff;
  background-color: #113F8A;
  border-radius: 5px;
  left: 9px;
  top: 9px;
`;

S.Cart = styled.div`
  border-radius: 5px;
  border: solid 1px #bebebe;
  background-color: white;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: bold;
`;

S.RecommendSection = styled.div`
`;

S.RecommendContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;

S.CommunityPlusMore = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

S.TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  width: 100%; 
  margin-bottom: 50px;
`;

S.LargePost = styled.div`
  width: 708px;
  height: 803px;
  background-color: #f0f0f0;
  position: relative;
  margin-bottom: 150px;
`;


S.PostHeartIcon = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 20px;
  right: 20px;
`;

S.PostImage = styled.div`
  width: 708px;
  height: 803px;
  border-radius: 10px;

    & img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
`;
 
S.HeartIcon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

S.SmallWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

S.SmallPost = styled.div`
  display: flex;
  width: 708px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

S.SmallPostImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`

S.Post = styled.div`
  width: 220px;
  height: 300px;
  margin-bottom: 145px;
  position: relative;
`;


S.ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  margin-top: 18px;

  & img {
    width: 40px;
    height: 40px;
  }
`;

S.ProfileImage = styled.div`
  width: 40px;
  height: 34px;
`;

S.UserId = styled.span`
  font-size: 14px;
  font-weight: 600;
`;



/////////////////////////////////////////상품나열


S.ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 65px;
  margin-bottom: 200px;
`;

S.ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 150px;

  h2 {
    text-align: left;
  }

  a {
    text-align: right;
    margin-top: 0; 
  }
`;

S.ProductsWrap = styled.div`
  width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

S.Products = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1440px;
  flex-wrap: wrap;
  gap: 24px;
`;

S.ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;
  height: 345px;
  border-radius: 10px;
  position: relative; 
  background-color: #fff;
`;

S.ProductHeartICon = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 10px;
  right: 10px;
`;

S.CardImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
`;

S.CardHeartIcon = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 29px;
  top: 25px;
  z-index: 10;
`;

S.CardTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 14px 0 6px 0;
  width: 100%;  
  gap: 6px;
  
   & b {
    text-align: left;  
  }
`;
S.ProductName = styled.p`
  width: 220px;
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 18px;
  height: 40px;
`


S.DiscountText =  styled.div`
  display: flex;
`

S.CardCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: solid 1px #e0e0e0;
  background-color: white;
  cursor: pointer;
  margin-top: 20px;
  bottom: 5px;     
  width: 230px;
  height: 30px;
  gap: 6px;
`;

S.CardCartIcon = styled.div`
  width: 16px;
  height: 16px;
`;

S.SubBanner = styled.div`
  width: 100%;
  text-align: center;
`;

S.TestWrap = styled.div`
  margin: 150px 0;
`;





export default S;