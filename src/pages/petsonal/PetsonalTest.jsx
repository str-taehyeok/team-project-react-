import React, { useContext, useState } from "react";
import S from "./style";
import Footer from "../layout/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { PetsonalContext } from "../../context/petsonalContext";

const PetsonalTest = () => {
  const navigate = useNavigate();
  const { state, action } = useContext(PetsonalContext);
  const { id } = useParams();

  const {
    setPetColor,
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
  
  // 임의로 넣음 가져올 로직 추가가
  // const petId = 5;

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
  const onClickToAddScoreAndNavigate = async () => {
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

    // 그룹 점수 출력
    console.log("Group Scores: ", groupScores);

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

    // result 값 출력
    let result = "";
    result += active > calm ? "A" : "C";
    result += diligent > lazy ? "D" : "L";
    result += brave > coward ? "B" : "C";

    console.log("Result: ", result); // result 값 확인

    let selectedPetColor = "";
    if(result === "ADC"){
      selectedPetColor = "Orange";
    }else if(result === "ADB"){
      selectedPetColor = "Gold";
    }else if(result === "ALB"){
      selectedPetColor = "Gradation";
    }else if(result === "ALC"){
      selectedPetColor = "LightPurple";
    }else if(result === "CDC"){
      selectedPetColor = "SkyBlue";
    }else if(result === "CDB"){
      selectedPetColor = "SageGreen";
    }else if(result === "CLB"){
      selectedPetColor = "IceBlue";
    }else if(result === "CLC"){
      selectedPetColor = "DustySilver";
    }

    // 선택된 색상 출력
    console.log("Selected Pet Color: ", selectedPetColor);
    setPetColor(selectedPetColor);

    await fetch("http://localhost:10000/petsonal/register-survey", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        petsonalVO: {
          petId: id,
          petsonalChic: chic,
          petsonalCute: cute,
          petsonalCalm: calm,
          petsonalActive: active,
          petsonalLazy: lazy,
          petsonalDiligent: diligent,
          petsonalCoward: coward,
          petsonalBrave: brave,
        },
        petVO: {
          petColor: selectedPetColor,
          id: id,  // `petId`에 해당하는 값
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        alert("설문 결과가 완료되었습니다!");
        navigate(`/petsonal/result/${id}`);
      })
      .catch((error) => {
        console.error("에러발생 :", error);
      });
};
  const surveyList = survey.map(({ title, group }, i) => {
    return (
      <S.Questions key={i}>
        <S.Question>{title}</S.Question>
        <S.CirclesWrap>
          <span>그렇지 않다</span>
          <S.Circles>
            <S.BigCircle
              value={1}
              type="radio"
              name={group + i}
              checked={inputScore[i] === 1}
              onChange={() => handleRadioChecked(i, 1)}
            ></S.BigCircle>
            <S.MiddleCircle
              value={5}
              type="radio"
              name={group + i}
              checked={inputScore[i] === 5}
              onChange={() => handleRadioChecked(i, 5)}
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
              value={16}
              type="radio"
              name={group + i}
              checked={inputScore[i] === 16}
              onChange={() => handleRadioChecked(i, 16)}
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
