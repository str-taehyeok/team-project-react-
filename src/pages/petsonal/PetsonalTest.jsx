import React, { useContext, useEffect, useState } from "react";
import S from "./style";
import Footer from "../layout/Footer";
import { useNavigate } from "react-router-dom";
import { PetsonalContext } from "../../context/petsonalContext";

const PetsonalTest = () => {
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const { state, action } = useContext(PetsonalContext);

  // 펫이 없을 때 등록하러 가는 로직
  useEffect(() => {
    const getPets = async () => {
      try {
        const response = await fetch("http://localhost:10000/my-pet/list"); 
        if (!response.ok) {
          console.error("데이터가 없습니다.");
          return;
        }
        const data = await response.json();
        setPets(data);
      } catch (error) {
        console.error(error);
        alert("펫 데이터를 가져오는 중 오류가 발생했습니다.");
      }finally{
        setLoading(false); 
      }
    };

    getPets();
  }, []);

  useEffect(() => {
    console.log("Pets updated:", pets);
    if (!loading && pets.length === 0) {
      alert("펫을 등록해주세요");
      navigate("/my-pet/pet-not");
    }
  }, [pets, navigate, loading]);


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
  const { survey, petColor } = state;
  
  // 임의로 넣음 가져올 로직 추가가
  const petId = 5;


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

    console.log("cute", cute)
    console.log("chic", chic)
    console.log("active", active)
    console.log("calm", calm)
    console.log("diligent", diligent)
    console.log("lazy", lazy)
    console.log("brave", brave)
    console.log("coward", coward)

    let result = "";
    result += active > calm ? "A" : "C";
    result += diligent > lazy ? "D" : "L";
    result += brave > coward ? "B" : "C";

    if(result === "ADC"){
      setPetColor("Orange")
    }else if(result === "ADB"){
      setPetColor("Gold")
    }else if(result === "ALB"){
      setPetColor("Gradation")
    }else if(result === "ALC"){
      setPetColor("LightPurple") 
    }else if(result === "CDC"){
      setPetColor("SkyBlue")
    }else if(result === "CDB"){
      setPetColor("SageGreen")
    }else if(result === "CLB"){
      setPetColor("IceBlue")
    }else if(result === "CLC"){
      setPetColor("DustySilver")
    }

    await fetch("http://localhost:10000/petsonal/register-survey",{
      method: "POST",
      headers: {
        "Content-type" : "application/json"
      },
      body: JSON.stringify({
        petColor: petColor,
        petId: petId,
        petsonalChic: chic,
        petsonalCute: cute,
        petsonalCalm: calm,
        petsonalActive: active,
        petsonalLazy: lazy,
        petsonalDiligent: diligent,
        petsonalCoward: coward,
        petsonalBrave: brave,
      })
    })                   
    .then((res) => res.json())
    .then((res) => {
        alert('데이터가 성공적으로 전송되었습니다!');
        navigate("/petsonal/result");
    })
    .catch((error) => {
        console.error('에러발생 :', error);
    })
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
