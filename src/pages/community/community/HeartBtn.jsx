import React, { useEffect, useState } from 'react';

const HeartBtn = ({ id }) => {

  const [ setPosts ] = useState([]);
  const [like, setLike] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

  const isLike = like.some((like) => like.postId === id);

  const handleLike = async (postId, isLike) => {
    const fetchPath = isLike ? "cancelLike" : "like";
    const fetchData = isLike ? { postId } : { postId, id };

    console.log(fetchData);

    await fetch(`http://localhost:10000/likes/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fetchData),
    })
      .then(() => setIsUpdate(!isUpdate)) 
      .catch(console.error); 
  };

  useEffect(() => {
    // 좋아요 전체 조회
    const getLists = async () => {
      const response = await fetch("http://localhost:10000/likes/allLikes");
      const data = await response.json();
      return data;
    };



    getLists().then(setPosts).catch(console.error);

    // 특정 사용자가 좋아요한 게시물 조회
    const getLikes = async () => {
      const response = await fetch(`http://localhost:10000/likes/likedPosts/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    };

    getLikes().then(setLike).catch(console.error);
  }, [isUpdate, id]);

  return (
    <>
      {isLike ? (
        <img
          onClick={() => handleLike(id, isLike)}
          src={process.env.PUBLIC_URL + "/assets/images/store/heart-click.png"}
          alt="Liked"
        />
      ) : (
        <img
          onClick={() => handleLike(id, isLike)}
          src={process.env.PUBLIC_URL + "/assets/images/store/heart-not-click.png"}
          alt="Not Liked"
        />
      )}
    </>
  );
};

export default HeartBtn;