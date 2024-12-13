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
  const [ productLikes, setProductLikes ] = useState([]);
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

    // 상품 좋아요 전체 조회
    const getProductLikes = async () => {
      const response = await fetch(`http://localhost:10000/productLikes/allLikes`, {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(memberId)
      });
      const data = await response.json();
      return data;
    };

    getProductLikes().then(setProductLikes).catch(console.error);

  }, [isUpdate]);

  const value = {
    state : { 
      productLikes : productLikes, 
      commLikes : commLikes,
      isUpdate : isUpdate
    },
    action : { 
      setProductLikes : setProductLikes,
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