import React, { useEffect, useState } from 'react';

const HeartBtn = ({id}) => {

  const memberId = 1;

  const [posts, setPosts] = useState([])
  const [like, setLike] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const isLike = like.some(like => like.postId === id)

 const handleLike = async (postId, isLike) => {
    
    let fetchPath = isLike ? "removeLike" : "addLike";
    let fetchData = isLike ? postId : (
      {
        postId : postId,
        userId : memberId
      }
    ) ;
    console.log(fetchData)

    await fetch(`http://localhost:10000/likes/api/like`, {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(fetchData)
    })
    .then((res) => {
      setIsUpdate(!isUpdate)
    })
  }

  useEffect(()=> {
    
    const getLists = async () => {
      const resposne = await fetch("http://localhost:10000/likes/api/allLikes")
      const datas = await resposne.json();
      return datas;
    }

    getLists().then(setPosts).catch(console.error)

    const getLikes = async () => {
      const resposne = await fetch("http://localhost:10000/likes/api/likedPosts", {
        method : "GET",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(1)
      })
      const datas = await resposne.json();
      return datas;
    }

    getLikes().then(setLike)

  }, [isUpdate])

  return (
    <>
      { isLike ? ( 
        <img onClick={() => { handleLike(id, isLike) }} src={process.env.PUBLIC_URL + "/assets/images/store/liked.png"} />
      ) : ( 
        <img onClick={() => { handleLike(id, isLike) }} src={process.env.PUBLIC_URL + "/assets/images/store/like.png"} />
      )}
    </>
  );
};

export default HeartBtn;