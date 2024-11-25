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
  }}
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
      type : "petsonalChic"
    },
    { 
      id : 2,
      title : "Q2. 처음 만난 사람에게도 배를 보여주며 애교를 부려요.",
      type : "petsonalChic"
    },
    { 
      id : 3,
      title : "Q3. 새로운 장난감이 생기면 하루 종일 그것만 가지고 놀아요.",
      type : "petsonalCute"
    },
    { 
      id : 4,
      title : "Q4. 친구 강아지와 만나면 끝없이 따라다니며 놀아요.",
      type : "petsonalLazy"
    },
    { 
      id : 5,
      title : "Q5. 집사가 잠자리를 준비하면 그곳에 먼저 뛰어들어요.",
      type : "petsonalLazy"
    },
    { 
      id : 6,
      title : "Q6. 밥 시간이 되면 집사 옆에서 꼬리를 흔들며 재촉해요.",
      type : "petsonalActive"
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
    }
  }

  return (
    <PetsonalContext.Provider value={value}>
      {children}
    </PetsonalContext.Provider>
  )
}


export { PetsonalProvider, PetsonalContext } 