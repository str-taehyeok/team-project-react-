import { createContext, useEffect, useState } from "react";

const HeartContext = createContext({
  state : { 
    postLikes : [], 
    commLikes : [],
    isUpdate : false,
  },
  action : { 
    setPostLikes : () => {},
    setCommLikes : () => {},
    setIsUpdate : () => {}
  }
})

const HeartProvider = ({children}) => {

  // 리덕스에 있는 memberId
  const memberId = 1;
  const [ postLikes, setPostLikes ] = useState([]);
  const [ commLikes, setCommLikes ] = useState([]);
  const [ isUpdate, setIsUpdate ] = useState(false);

  useEffect(() => {

    // 커뮤니티 좋아요 전체 조회
    const getCommLikes = async () => {
      const response = await fetch(`http://localhost:10000/commLikes/allLikes`, {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(memberId)
      });
      const data = await response.json();
      return data;
    };

    getCommLikes().then(setCommLikes).catch(console.error);

    // 포스트 1개 좋아요 전체 조회

  }, [isUpdate]);

  const value = {
    state : { 
      postLikes : postLikes, 
      commLikes : commLikes,
      isUpdate : isUpdate
    },
    action : { 
      setPostLikes : setPostLikes,
      setCommLikes : setCommLikes,
      setIsUpdate : setIsUpdate
    }
  }

  return (
    <HeartContext.Provider value={value}>
      {children}
    </HeartContext.Provider>
  )
}

export {HeartProvider, HeartContext};