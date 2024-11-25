import { createContext, useState } from "react";

const JoinContext = createContext({
  state : { member : ""},
  action : { setMember : () => {}}
})

const JoinProvider = ({children}) => {
  const [member, setMember] = useState("buyer");
  const value = {
    state : { member : member },
    action : { setMember : setMember }
  }

  return (
    <JoinContext.Provider value={value}>
      {children}
    </JoinContext.Provider>
  )
}


export { JoinProvider, JoinContext } 