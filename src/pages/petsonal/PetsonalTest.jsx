import React, { useContext, useState } from "react";
import S from "./style";
import Footer from "../layout/Footer";
import { useNavigate } from "react-router-dom";
import { PetsonalContext } from "../../context/petsonalContext";

const PetsonalTest = () => {
  const navigate = useNavigate();
  const { state, action } = useContext(PetsonalContext);

  const {
    setPetsonalChic,
    setPetsonalCute,
    setPetsonalCalm,
    setPetsonalActive,
    setPetsonalLazy,
    setPetsonalDiligent,
    setPetsonalCoward,
    setPetsonalBrave,
  } = action;
  const { survey } = state;

  // 한페이지 문항의 개수
  const [inputScore, inputSetScore] = useState(Array(25).fill(0));

  const handleRadioChecked = (i, value) => {
    inputSetScore((pevState) => {
      const newState = [...pevState];
      newState[i] = value;
      return newState;
    });
  };

  // 문항을 모두 선택했는지 검증 후 스코어 주입
  const onClickToAddScoreAndNavigate = () => {
    let selectLength = inputScore.filter((score) => score).length;

    if (selectLength < survey.length) {
      return alert("모든 문항을 체크해주세요.");
    }

    let groupScores = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
    };

    inputScore.forEach((score, i) => {
      const surveyItem = survey[i];
      if (surveyItem && surveyItem.group !== undefined) {
        const group = surveyItem.group;
        groupScores[group] += score;
      } 
      
    });

    const cute = groupScores[1];
    const chic = 100 - cute;

    const active = groupScores[2];
    const calm = 100 - active;

    const diligent = groupScores[3];
    const lazy = 100 - diligent;

    const brave = groupScores[4];
    const coward = 100 - brave;

    // 상태 업데이트
    setPetsonalChic(chic);
    setPetsonalCute(cute);
    setPetsonalCalm(calm);
    setPetsonalActive(active);
    setPetsonalLazy(lazy);
    setPetsonalDiligent(diligent);
    setPetsonalCoward(coward);
    setPetsonalBrave(brave);

    navigate("/petsonal/result");
  };

  const surveyList = survey.map(({ title, group }, i) => {
    return (
      <S.Questions key={i}>
        <S.Question>{title}</S.Question>
        <S.CirclesWrap>
          <span>그렇지 않다</span>
          <S.Circles>
            <S.BigCircle
              value={3}
              type="radio"
              name={group + i}
              checked={inputScore[i] === 3}
              onChange={() => handleRadioChecked(i, 3)}
            ></S.BigCircle>
            <S.MiddleCircle
              value={6}
              type="radio"
              name={group + i}
              checked={inputScore[i] === 6}
              onChange={() => handleRadioChecked(i, 6)}
            ></S.MiddleCircle>
            <S.SmallCircle
              value={9}
              type="radio"
              name={group + i}
              checked={inputScore[i] === 9}
              onChange={() => handleRadioChecked(i, 9)}
            ></S.SmallCircle>
            <S.MiddleCircle
              value={12}
              type="radio"
              name={group + i}
              checked={inputScore[i] === 12}
              onChange={() => handleRadioChecked(i, 12)}
            ></S.MiddleCircle>
            <S.BigCircle
              value={16.6}
              type="radio"
              name={group + i}
              checked={inputScore[i] === 16.6}
              onChange={() => handleRadioChecked(i, 16.6)}
            ></S.BigCircle>
          </S.Circles>
          <span>그렇다</span>
        </S.CirclesWrap>
      </S.Questions>
    );
  });

  return (
    <div>
      <S.Frame>
        <S.PetTestContainer>
          {surveyList}
          <S.NextButton onClick={onClickToAddScoreAndNavigate}>
            완료
          </S.NextButton>
        </S.PetTestContainer>
      </S.Frame>

      <Footer />
    </div>
  );
};

export default PetsonalTest;
