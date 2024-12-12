import React, { useContext, useState } from 'react';
import { HeartContext } from '../../../context/heartContext';

// Heart는 클릭했을 때 
// 1) product인지 community인지 확인해야 하므로 type을 받는다.
// 2) 클릭한 상품의 id를 받는다.
// 3) id와 like한 상품을 비교한다.

const HeartBtn = ({ postId, type }) => {

  // 리덕스에 로그인한 유저의 id
  const memberId = 1;
  const { commLikes, isUpdate } = useContext(HeartContext).state;
  const { setIsUpdate } = useContext(HeartContext).action;
  // 좋아요인지 아닌지 비교
  const isLike = commLikes.some((comm) => comm.id === postId);

  // 타입 비교
  let fetchType = type === "community" ? "commLikes" : "productLikes";
  let fetchPath = isLike ? "cancelLike" : "like";
  let fetchMethodType = isLike ? "DELETE" : "POST";
  let fetchData = { 
      memberId : memberId,
      postId : postId
  }
  
  const handleLike = async () => {

    await fetch(`http://localhost:10000/${fetchType}/${fetchPath}`, {
      method : `${fetchMethodType}`,
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(fetchData)
    })
    .then((res) => { setIsUpdate(!isUpdate) })
    .catch(console.error);

  };

  return (
    <>
      {isLike ? (
        <img
          onClick={handleLike}
          src={process.env.PUBLIC_URL + "/assets/images/store/heart-click.png"}
          alt="Liked"
        />
      ) : (
        <img
          onClick={handleLike}
          src={process.env.PUBLIC_URL + "/assets/images/store/heart-not-click.png"}
          alt="Not Liked"
        />
      )}
    </>
  );
};

export default HeartBtn;

