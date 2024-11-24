import styled from "styled-components";
import { flexCenterRowSpaceBetween, flexColumnCenter, flexRowCenter,
  h1Bold, h1Medium, h2Bold, h4Bold
 } from '../../global/common'
 import theme from "../../global/theme";

const S = {}


// 메인 페이지

S.PetsonalContainer = styled.div`
  ${flexColumnCenter};
  
  & a {
    width: 464px;
    height: 55px;
    border-radius: 20px;
    border: solid 3px #000;
    color: white;
    background-color: #2298FF;
    position: absolute;
    top: 735px;
    ${h4Bold}
    cursor: pointer;
    ${flexRowCenter}
  }
`

S.StartImage = styled.div`
  position: relative;
  width: 100%;
  height: 1080px;
  max-width: 2080px;
`

S.MainFirst = styled.img`
  width: 100%;
  height: 1080px;
`

S.MainText = styled.p`
  top: 198px;
  font-size: 70px;
  font-weight: bold;
  position: absolute;
`

S.SecondImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1080px;
  background: #FFF5D0;
  position: relative;
`

S.SecondTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 21px;
  position: absolute;
  top: 91px;
`

S.SecondText = styled.p`
  ${h1Bold}
`

S.SecondSubText = styled.p`
  font-size: ${theme.FONT_SIZE.h7};
`

S.BookWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 33px;
  width: 1070px;
  margin-top: 123px;
`


S.Big = styled.span`
  font-size: 50px;
  font-weight: bold;
`

S.Small = styled.span`
  ${h1Medium}
`

S.Medium = styled.p`
  font-size: 50px;
  font-weight: medium;
`

S.TextButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

S.GoCommunity = styled.div`
  width: 395px;
  height: 80px;
  color: white;
  background-color: #9747FF;
  border: solid 3px black;
  border-radius: 20px;
  ${h4Bold}
  ${flexRowCenter}
  cursor: pointer;
`

S.FinalImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 68px;

    & img { margin-bottom: 250px }
`


S.FinalText = styled.div`
  margin-top: 160px;
  font-size: 40px;
  font-weight: bold;
`

S.ThirdImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1080px;
  background: white;
  position: relative;
`

// test페이지 1

S.Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`

S.PetTestContainer = styled.div`
	display: flex;
  flex-direction: column;
  gap: 175px;
	margin: 350px 0;
`

S.Questions = styled.div`
  ${flexColumnCenter};
`

S.Question = styled.p`
	${h2Bold}
`

S.CirclesWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 84px;
	width: 1200px;
`

S.Circles = styled.div`
  ${flexCenterRowSpaceBetween}
  width: 708px;
`

S.BigCircle = styled.div`
	width: 70px;
	height: 70px;
	border-radius: 50%;
	border: solid 3px #828282;
	cursor: pointer;
`

S.MiddleCircle = styled.div`
	width: 45px;
	height: 45px;
	border-radius: 50%;
	border: solid 3px #828282;
	cursor: pointer;
`

S.SmallCircle = styled.div`
	width: 35px;
	height: 35px;
	border-radius: 50%;
	border: solid 3px #828282;
	cursor: pointer;
`

S.Frame = styled.div`

`


export default S;