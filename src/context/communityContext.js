import { createContext, useEffect, useState } from "react";

const CommunityContext = createContext({
  communityState : { 
    communites : [], 
    isUpdate : false,
  },
  communityAction : { 
    setCommunites : () => {},
    setIsUpdate : () => {}
  }
})

const CommunityProvider = ({children}) => {

  const [ communites, setCommunites ] = useState([]);
  const [ isUpdate, setIsUpdate ] = useState(false);

  useEffect(() => {

    // 판매중인 상품을 전체 조회
    const getCommunity = async () => {
      const response = await fetch(`http://localhost:10000/posts/posts`);
      const data = await response.json();
      return data;
    };

    getCommunity().then(setCommunites).catch(console.error);

  }, [isUpdate]);
  
  const value = {
    communityState : { 
      communites : communites, 
      isUpdate : isUpdate,
    },
    communityAction : { 
      setCommunites : setCommunites,
      setIsUpdate : setIsUpdate
    }
  }

  return (
    <CommunityContext.Provider value={value}>
      {children}
    </CommunityContext.Provider>
  )
}

export {CommunityProvider, CommunityContext};