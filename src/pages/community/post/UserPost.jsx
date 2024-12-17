import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import S from "./style.js";

const UserPost = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [searchParams] = useSearchParams();
  const postId = searchParams.get("postId");

  // 댓글 가져오는 함수
  const getComments = async () => {
    try {
      const response = await fetch(`http://localhost:10000/comments/list/${postId}`);
      if (!response.ok) throw new Error("댓글을 불러오는 데 실패했습니다.");
      const data = await response.json();
      
      console.log(data);
      
      setComments(data); 
    } catch (error) {
      console.error(error);
      setComments([]);
    }
  };

  // 댓글 추가
  const addComment = async () => {
    if (!commentInput) {
      console.log("댓글 내용을 입력해주세요.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:10000/comments/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          memberId: currentUser.id,
          nickName: currentUser.memberNickName,
          postId: postId,
          commentContent: commentInput,
        }),
      });

      if (response.ok) {
        console.log("댓글이 추가되었습니다!");
        setCommentInput(""); 
        const newComment = await response.json();

        if (newComment && newComment.id) {
          setComments((prevComments) => [...prevComments, newComment]); 
        } else {
          console.log("새로운 댓글 반환 오류");
        }
      } else {
        console.log("댓글 추가 실패");
      }
    } catch (error) {
      console.error("댓글 추가 중 에러 발생:", error);
    }
  };

  // 댓글 삭제
  const deleteComment = async (commentId) => {
    try {
      const response = await fetch(`http://localhost:10000/comments/delete/${commentId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("댓글이 삭제되었습니다!");
        setComments((prevComments) => prevComments.filter((comment) => comment.id !== commentId)); 
      } else {
        console.log("댓글 삭제 실패");
      }
    } catch (error) {
      console.error("댓글 삭제 중 에러 발생:", error);
    }
  };

  useEffect(() => {
    if (postId) {
      getComments();
    }
  }, [postId]);

  return (
    <S.MyPostPage>
      <S.CommentDiv>
        {/* 댓글 입력란 */}
        <S.MyComment>
          <S.MyProfile>
            <img src="/assets/images/community/default-myProfile.png" alt="프로필" />
          </S.MyProfile>
          <S.InputContainer>
            <input
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              placeholder="댓글을 입력해주세요."
            />
            <button onClick={addComment}>완료</button>
          </S.InputContainer>
        </S.MyComment>

        {/* 댓글 목록 출력 */}
        {comments.length > 0 ? (
          comments.map(({ id, memberNickName, commentContent }) => (
            <S.CommentBox key={id}>
              <Link to={`/post/list?postId=${postId}`}>
                <img src="/assets/images/community/default-profile.png" alt="프로필" />
              </Link>
              <S.CommentText>
                <S.NickName>{memberNickName}</S.NickName>
                <p>{commentContent}</p>
              </S.CommentText>
              <S.DotBtn>
                <button onClick={() => deleteComment(id)}>
                  <img src="/assets/images/community/trash.jpg" alt="삭제" />
                </button>
              </S.DotBtn>
            </S.CommentBox>
          ))
        ) : (
          <p>댓글이 없습니다.</p>
        )}
      </S.CommentDiv>
    </S.MyPostPage>
  );
};

export default UserPost;
