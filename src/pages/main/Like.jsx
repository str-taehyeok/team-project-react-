import React, { useEffect, useState } from 'react';
import S from './style';

const Like = () => {
  const memberId = 1;
  const [posts, setPosts] = useState([])
  const [like, setLike] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

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
      const resposne = await fetch("http://localhost:10000/likes/api/likedPosts/{id}", {
        method : "POST",
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

  const postList = posts.map((post, i) => {

    // 반복을 돌면서 좋아요에 있는지 확인한다.
    // .some() 배열에 조건이 맞으면 true 아니면 false
    const isLike = like.some(like => like.postId === post.id)
    
    return (
      <div key={i}>
        <S.ImageWrapper>
          <S.Image src={process.env.PUBLIC_URL + "/profile" + (i+1)+".jpg"} />
          {/* true인 게시물만 하트 좋아요를 누르게 만든다. */}
          { isLike ? ( 
            <S.Like onClick={() => { handleLike(post.id, isLike) }} src={process.env.PUBLIC_URL + "/assets/images/store/liked.png"} />
          ) : ( 
            <S.Like onClick={() => { handleLike(post.id, isLike) }} src={process.env.PUBLIC_URL + "/assets/images/store/like.png"} />
          )}
        </S.ImageWrapper>
        <p>{post.postTitle}</p>
        <p>{post.userName}</p>
      </div>
    )
  })

  return (
    <div>
      <S.PostWrapper>
        {postList}
      </S.PostWrapper>
    </div>
  );
};

export default Like;