import { createContext, useState } from "react";

const HeartContext = createContext({
  state : { heart : "" },
  action : { setMember : () => {}}
})

const HeartProvider = ({children}) => {
  const [heart, setHeart] = useState("noHeart");
  const value = {
    state : { heart : heart },
    action : { setHeart : setHeart }
  }

  return (
    <HeartContext.Provider value={value}>
      {children}
    </HeartContext.Provider>
  )
}

export {HeartProvider, HeartContext};