import { createContext, useState } from "react";

const JoinContext = createContext({
  state : { member : "", phone : ""},
  action : { setMember : () => {}, setPhone : () => {}}
})

const JoinProvider = ({children}) => {
  const [member, setMember] = useState("buyer");
  const [phone, setPhone] = useState("buyer");
  const value = {
    state : { member : member, phone : phone },
    action : { setMember : setMember, setPhone : setPhone }
  }

  return (
    <JoinContext.Provider value={value}>
      {children}
    </JoinContext.Provider>
  )
}


export { JoinProvider, JoinContext } 