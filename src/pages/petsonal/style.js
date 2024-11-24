import styled from "styled-components";
import { flexColumnCenter, flexRowCenter } from '../../global/common'

const S = {}

S.PetsonalContainer = styled.div`
  ${flexColumnCenter};
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

S.StartButton = styled.button`
  width: 464px;
  height: 55px;
  border-radius: 20px;
  border: solid 3px #000;
  color: white;
  background-color: #2298FF;
  position: absolute;
  top: 735px;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
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
  font-size: 40px;
  font-weight: bold;
`

S.SecondSubText = styled.p`
  font-size: 24px;
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
  font-size: 40px;
  font-weight: medium;
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
  font-size: 28px;
  font-weight: bold;
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


export default S;