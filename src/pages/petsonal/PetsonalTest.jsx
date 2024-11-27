import React, { useContext, useState } from "react";
import S from "./style";
import Footer from "../layout/Footer";
import { useNavigate } from "react-router-dom";
import { PetsonalContext } from "../../context/petsonalContext";

const PetsonalTest = () => {
  const navigate = useNavigate();
  const { state, action } = useContext(PetsonalContext)
  
  const { 
    setPetsonalChic, setPetsonalCute, setPetsonalCalm, setPetsonalActive,
    setPetsonalLazy, setPetsonalDiligent, setPetsonalCoward, setPetsonalBrave
  } = action;
  const { survey,
    petsonalChic, petsonalCute, petsonalCalm, petsonalActive,
    petsonalLazy, petsonalDiligent, petsonalCoward, petsonalBrave
   } = state;

  // 한페이지 문항의 개수
  const [ inputScore, inputSetScore ] = useState(Array(25).fill(false)); 
  // 클릭한 radio의 checked 상태로 변경
  const handleRadioChecked = (i, checked) => {
    inputSetScore((pevState) => {
      const newState = [...pevState];
      newState[i] = checked;
      return newState;
    })
  }

  // 전역 변수
  let chic = 0;
  let cute = 0;
  let calm = 0;
  let active = 0;
  let lazy = 0;
  let diligent = 0;
  let coward = 0;
  let brave = 0;

  // 문항을 모두 선택했는지 검증 후 스코어 주입
  const onClickToAddScoreAndNavigate = (e) => {
    let selectLength = inputScore.filter((score) => score).length;
    if(selectLength < 25){
      return alert("모든 문항을 체크해주세요.")
    }

    // 반복을 돌려서 각 type을 비교 후 합산
    inputScore.map((score, i) => {
      const type = survey[i].type;
      console.log(type === "petsonalChic")
      if(type === "petsonalChic"){
        chic += score;
      }else if(type === "petsonalCute"){
        cute += score;
      }else if(type === "petsonalCalm"){
        calm += score;
      }else if(type === "petsonalActive"){
        active += score;
      }else if(type === "petsonalLazy"){
        lazy += score;
      }else if(type === "petsonalDiligent"){
        diligent += score;
      }else if(type === "petsonalCoward"){
        coward += score;
      }else if(type === "petsonalBrave"){
        brave += score;
      }else{
        return null;
      }
      console.log(type)
    })
    // 점수 연산 후 전송
    setPetsonalChic(petsonalChic + chic)
    setPetsonalCute(petsonalCute + cute)
    setPetsonalCalm(petsonalCalm + calm)
    setPetsonalActive(petsonalActive + active)
    setPetsonalLazy(petsonalLazy + lazy)
    setPetsonalDiligent(petsonalDiligent + diligent)
    setPetsonalCoward(petsonalCoward + coward)
    setPetsonalBrave(petsonalBrave + brave)

    navigate("/petsonal/result")
  }

  const surveyList = survey.map(({title, type}, i) => {
    return (
      <S.Questions key={i}>
        <S.Question>
         {title}
        </S.Question>
        <S.CirclesWrap>
          <span>그렇지 않다</span>
          <S.Circles>
            <S.BigCircle 
              value={0} type="radio" name={type + i} 
              checked={inputScore[i] === 0}
              onChange={() => handleRadioChecked(i, 0)}
              ></S.BigCircle>
            <S.MiddleCircle 
              value={1} type="radio" name={type + i} 
              checked={inputScore[i] === 1}
              onChange={() => handleRadioChecked(i, 1)}
            ></S.MiddleCircle>
            <S.SmallCircle 
              value={2} type="radio" name={type + i} 
              checked={inputScore[i] === 2}
              onChange={() => handleRadioChecked(i, 2)}
            ></S.SmallCircle>
            <S.MiddleCircle 
              value={3} type="radio" name={type + i} 
              checked={inputScore[i] === 3}
              onChange={() => handleRadioChecked(i, 3)}
            ></S.MiddleCircle>
            <S.BigCircle
              value={4} type="radio" name={type + i} 
              checked={inputScore[i] === 4}
              onChange={() => handleRadioChecked(i, 4)}
            ></S.BigCircle>
          </S.Circles>
          <span>그렇다</span>
        </S.CirclesWrap>
      </S.Questions>
    )
  })

  
  return (
    <div>
      <S.Frame>
        <S.PetTestContainer>
          {surveyList}
          <S.NextButton onClick={onClickToAddScoreAndNavigate}>완료</S.NextButton>
        </S.PetTestContainer>
      </S.Frame>

      <Footer />
    </div>
  );
};

export default PetsonalTest;
