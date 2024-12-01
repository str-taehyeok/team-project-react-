import { createContext, useState } from "react";

const FindContext = createContext({
  state : { member : ""},
  action : { setMember : () => {}}
})

const FindProvider = ({children}) => {
  const [member, setMember] = useState("buyer");
  const value = {
    state : { member : member },
    action : { setMember : setMember }
  }

  return (
    <FindContext.Provider value={value}>
      {children}
    </FindContext.Provider>
  )
}


export { FindProvider, FindContext }