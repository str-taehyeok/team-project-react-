import { createContext, useState } from "react";

const PetsonalContext = createContext({
  state : { 
    survey : [],
    petColor : "",
    petsonalChic : 0,
    petsonalCute : 0,
    petsonalCalm : 0,
    petsonalActive : 0,
    petsonalLazy : 0,
    petsonalDiligent : 0,
    petsonalCoward : 0,
    petsonalBrave : 0,
  },
  action : {
    setPetColor : () => {},
    setPetsonalChic : () => {},
    setPetsonalCute : () => {},
    setPetsonalCalm : () => {},
    setPetsonalActive : () => {},
    setPetsonalLazy : () => {},
    setPetsonalDiligent : () => {},
    setPetsonalCoward : () => {},
    setPetsonalBrave : () => {}
  },
  result : {
    orange : {
      message : "",
      boxColor : "",
      image : ""
    }
  }
}
)

const PetsonalProvider = ({children}) => {

  const [petColor, setPetColor] = useState("");
  const [petsonalChic, setPetsonalChic] = useState(0);
  const [petsonalCute, setPetsonalCute] = useState(0);
  const [petsonalCalm, setPetsonalCalm] = useState(0);
  const [petsonalActive, setPetsonalActive] = useState(0);
  const [petsonalLazy, setPetsonalLazy] = useState(0);
  const [petsonalDiligent, setPetsonalDiligent] = useState(0);
  const [petsonalCoward, setPetsonalCoward] = useState(0);
  const [petsonalBrave, setPetsonalBrave] = useState(0);

  const survey = [
    { 
      id : 1,
      title : "Q1. 집사가 간식을 들고 오면 신나서 방방 뛰어요!",
      type : "petsonalCute",
      group : 1
    },
    { 
      id : 2,
      title : "Q2. 처음 만난 사람에게도 배를 보여주며 애교를 부려요.",
      type : "petsonalCute",
      group : 1
    },
    { 
      id : 3,
      title : "Q3. 새로운 장난감이 생기면 하루 종일 그것만 가지고 놀아요.",
      type : "petsonalCute",
      group : 1
    },
    { 
      id : 4,
      title : "Q4. 친구 강아지와 만나면 끝없이 따라다니며 놀아요.",
      type : "petsonalCute",
      group : 1
    },
    { 
      id : 5,
      title : "Q5. 집사가 잠자리를 준비하면 그곳에 먼저 뛰어들어요.",
      type : "petsonalCute",
      group : 1
    },
    { 
      id : 6,
      title : "Q6. 밥 시간이 되면 집사 옆에서 꼬리를 흔들며 재촉해요.",
      type : "petsonalCute",
      group : 1
    },
    { 
      id : 7,
      title : "Q7. 간식을 받으면 신나서 간식 자리까지 달려가요!",
      type : "petsonalActive",
      group : 2
    },
    { 
      id : 8,
      title : "Q8. 집사가 없으면 여기저기 돌아다니며 집안을 확인해요.",
      type : "petsonalActive",
      group : 2
    },
    { 
      id : 9,
      title : "Q9. 새로운 물건이 보이면 바로 다가가 확인해요.",
      type : "petsonalActive",
      group : 2
    },
    { 
      id : 10,
      title : "Q10. 친구들과 끝없이 놀고 싶어해요. ",
      type : "petsonalActive",
      group : 2
    },
    { 
      id : 11,
      title : "Q11. 자리에 눕자마자 바로 꿀잠을 자요.",
      type : "petsonalActive",
      group : 2
    },
    { 
      id : 12,
      title : "Q12. 낯선 환경에서도 여기저기 뛰어다니며 구경해요.",
      type : "petsonalActive",
      group : 2
    },
    { 
      id : 13,
      title : "Q13. 잠이 많이 없고 잘 누워있지 않아요.",
      type : "petsonalDiligent",
      group : 3
    },
    { 
      id : 14,
      title : "Q14. 산책을 가자고 먼저 조르는 편이에요.",
      type : "petsonalDiligent",
      group : 3
    },
    { 
      id : 15,
      title : "Q15. 놀이에 적극적으로 참여해요.",
      type : "petsonalDiligent",
      group : 3
    },
    { 
      id : 16,
      title : "Q16. 야외를 나가면 1시간 이상 걷는 편이에요.",
      type : "petsonalDiligent",
      group : 3
    },
    { 
      id : 17,
      title : "Q17. 하루를 일찍 시작하는 편이에요.",
      type : "petsonalDiligent",
      group : 3
    },
    { 
      id : 18,
      title : "Q18. 하루종일 돌아다녀요.",
      type : "petsonalDiligent",
      group : 3
    },
    { 
      id : 19,
      title : "Q19. 낯선 사람을 보아도 기가 죽지 않아요.",
      type : "petsonalBrave",
      group : 4
    },
    { 
      id : 20,
      title : "Q20. 새로운 장소에 가도 숨거나 피하지 않아요.",
      type : "petsonalBrave",
      group : 4
    },
    { 
      id : 21,
      title : "Q21. 겁이 많이 없어 친구 사귀기가 어렵지 않아요.",
      type : "petsonalBrave",
      group : 4
    },
    { 
      id : 22,
      title : "Q22. 집의 구석이 아니라 한 가운데로 걸어다녀요.",
      type : "petsonalBrave",
      group : 4
    },
    { 
      id : 23,
      title : "Q23. 익숙하지 않은 사람이 만지려고 해도 도망가지 않아요.",
      type : "petsonalBrave",
      group : 4
    },
    { 
      id : 24,
      title : "Q24. 큰 소리에도 잘 놀라지 않아요.",
      type : "petsonalBrave",
      group : 4
    },
  ]

  const value = {
    state : { 
      survey : survey,
      petColor : petColor,
      petsonalChic : petsonalChic,
      petsonalCute : petsonalCute,
      petsonalCalm : petsonalCalm,
      petsonalActive : petsonalActive,
      petsonalLazy : petsonalLazy,
      petsonalDiligent : petsonalDiligent,
      petsonalCoward : petsonalCoward,
      petsonalBrave : petsonalBrave,
    },
    action : {
      setPetColor : setPetColor,
      setPetsonalChic : setPetsonalChic,
      setPetsonalCute : setPetsonalCute,
      setPetsonalCalm : setPetsonalCalm,
      setPetsonalActive : setPetsonalActive,
      setPetsonalLazy : setPetsonalLazy,
      setPetsonalDiligent : setPetsonalDiligent,
      setPetsonalCoward : setPetsonalCoward,
      setPetsonalBrave : setPetsonalBrave,
    },
    result : {
      Orange : {
        message : ["신이 많고 재밌는 성격이에요", "자유분방하고, 자신감이 넘치며 주변 사람들을 웃게 만들어요.", "에너지가 넘치고, 정이 많아 사람들과 쉽게 어울려요.", "혼자 있는 것보다는 다른 사람들이랑 함께 있으면서 사랑을 베푸는 것을 더 좋아해요."],
        boxColor : "rgba(255, 204, 102, 0.7)",
        imageSrc : "/assets/images/petsonal/orange-result.png"
      }
    }
  }

  return (
    <PetsonalContext.Provider value={value}>
      {children}
    </PetsonalContext.Provider>
  )
}


export { PetsonalProvider, PetsonalContext } 