import { createContext, useState } from "react";

const FindContext = createContext({
  state : { select : "", memberEmail : ""},
  action : { setSelect : () => {}, setMemberEmail : () => {}}
})

const FindProvider = ({children}) => {
  const [select, setSelect] = useState("id");
  const [memberEmail, setMemberEmail] = useState("")
  const value = {
    state : { select : select, memberEmail : memberEmail },
    action : { setSelect : setSelect, setMemberEmail : setMemberEmail }
  }

  return (
    <FindContext.Provider value={value}>
      {children}
    </FindContext.Provider>
  )
}


export { FindProvider, FindContext }