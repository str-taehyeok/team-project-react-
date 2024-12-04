import { createContext, useState } from "react";

const FindContext = createContext({
  state : { select : ""},
  action : { setSelect : () => {}}
})

const FindProvider = ({children}) => {
  const [select, setSelect] = useState("id");
  const value = {
    state : { select : select },
    action : { setSelect : setSelect }
  }

  return (
    <FindContext.Provider value={value}>
      {children}
    </FindContext.Provider>
  )
}


export { FindProvider, FindContext }