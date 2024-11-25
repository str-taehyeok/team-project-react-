import styled from "styled-components";

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
  transition: transform 0.5s ease-in-out;
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
  color: #2a2a2a;
  background-color: #ffcf6d;
  font-weight: bold;
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
  margin-top: 150px;
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

S.PostImage = styled.img`
  border-radius: 10px;
`;

S.SmallWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 87px;
`;

S.SmallPost = styled.div`
  display: flex;
  width: 708px;
  justify-content: space-between;
`;

S.PostImageSmall = styled.div`
  width: 220px;
  height: 300px;
  border-radius: 10px;
`;

S.ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  gap: 10px;
`;

S.ProfileImage = styled.img`
  width: 30px;
  height: 30px;
`;

S.ProductContainer = styled.div`
  width: 100%;
  margin-top: 100px;
`;

S.ProductsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;

S.Products = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

S.ProductCard = styled.div`
  width: 220px;
  height: 320px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  position: relative;
`;

S.CardTextWrap = styled.div`
  text-align: center;
`;

S.CardCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
`;

S.SubBanner = styled.div`
  margin-top: 100px;
  width: 100%;
  text-align: center;
`;

S.TestWrap = styled.div`
  margin: 150px 0;
`;

export default S;
