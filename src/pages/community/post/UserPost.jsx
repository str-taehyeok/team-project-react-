import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import S from "./style.js";
import Slide from "./Slide.jsx";
import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import FollowBtn from "./FollowBtn.jsx";
import HeartBlackBtn from "./HeartBlacktBtn.jsx";
import HeartBtn from "./HeartBtn.jsx";

const datas = [
  {
    postImage1: "/assets/images/community/myPost1.png",
  },
  {
    postImage1: "/assets/images/community/myPost2.png",
  },
  {
    postImage1: "/assets/images/community/myPost3.png",
  },
  {
    postImage1: "/assets/images/community/myPost4.png",
  },
  {
    postImage1: "/assets/images/community/myPost5.png",
  },
];

const UserPost = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const postId = queryParams.get('postId');
    
  console.log(location)

  // 댓글 가져오는 함수
  useEffect(() => {
    const getComents = async () => {
      const response = await fetch(
        `http://localhost:10000/comments/list/${postId}`
      );
      if (!response.ok) return console.error(`데이터가 없습니다.`);
      const comments = await response.json();
      return comments;
    };

    getComents().then(setComments).catch(console.error);
  });

  console.log(comments)

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
          nickName: currentUser.nickName,
          postId: postId,
          commentContent: commentInput,
        }),
      });

      if (response.ok) {
        console.log("댓글이 추가되었습니다!");
        setCommentInput("");
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
      const response = await fetch(
        `http://localhost:10000/comments/delete/${commentId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log("댓글이 삭제되었습니다!");
        
      } else {
        console.log("댓글 삭제 실패");
      }
    } catch (error) {
      console.error("댓글 삭제 중 에러 발생:", error);
    }
  };


  const myPostPage = (
    <S.MyPostPage>
      <S.MyPostPageBox>
        <S.MyPostBox>
          <S.ProfileBox>
            <S.MyProfile>
              <Link to={`/post/list?postId=${postId}`}>
                <img
                  src="/assets/images/community/default-myProfile.png"
                  alt="프로필"
                />
              </Link>
            </S.MyProfile>
            <S.NickName>
              {currentUser ? currentUser.nickName : "익명"}
            </S.NickName>
            <FollowBtn />
          </S.ProfileBox>
          <Slide />
          <S.MyPostUnderBox>
            <S.PostUnder>
              <HeartBlackBtn />
              <S.LikeNumber>0</S.LikeNumber>
              <S.DotBtn>
                <button>
                  <img src="/assets/images/community/dots.png" alt="삼점메뉴" />
                </button>
              </S.DotBtn>
            </S.PostUnder>
            <S.PostTitle>반려동물 게시물</S.PostTitle>
            <S.PostContent>
              게시물에 적은 본문 내용이 여기에 적힙니다. # 태그를 이용해서 연관
              검색어에 걸리도록 작성가능합니다. 아무거나 적어주세요. 당신의
              반려동물에 관한건 뭐든지요. 사진은 필참이기에 게시글만 올라올
              가능성은 없습니다.
            </S.PostContent>
          </S.MyPostUnderBox>
        </S.MyPostBox>

        {/* 댓글 */}
        <S.CommentDiv>
          <S.CommentNumber>
            <S.Comment>댓글</S.Comment>
            {/* <S.Comment>{comments.length}</S.Comment> */}
          </S.CommentNumber>
          <S.MyComment>
            <S.MyProfile>
              <img
                src="/assets/images/community/default-myProfile.png"
                alt="프로필"
              />
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
          {Array.isArray(comments) && comments.length > 0 ? (
            comments.map(
              (
                {
                  id,
                  memberId,
                  nickName,
                  postId,
                  commentContent,
                  memberNickname,
                },
                i
              ) => (
                <S.CommentBox key={i}>
                  <Link to={`/post/list?postId=${postId}`}>
                    <img
                      src="/assets/images/community/default-profile.png"
                      alt="프로필"
                    />
                  </Link>
                  <S.CommentText>
                    <S.NickName>{memberNickname}</S.NickName>
                    <p>{commentContent}</p>
                  </S.CommentText>
                  <S.DotBtn>
                    <img
                      src="/assets/images/community/trash.jpg"
                      alt="삭제"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteComment(id);
                      }}
                      style={{ cursor: "pointer" }}
                    />
                  </S.DotBtn>
                </S.CommentBox>
              )
            )
          ) : (
            <p>댓글이 없습니다.</p>
          )}
        </S.CommentDiv>
      </S.MyPostPageBox>
      <S.BestText>유저들의 비슷한 공감 베스트</S.BestText>
    </S.MyPostPage>
  );

  const postList = datas.map((post, i) => (
    <S.BestPostBox key={i}>
      <HeartBtn />
      <Link to={`/post/read?postId=${postId}`}>
        <S.PostImage
          src={`${process.env.PUBLIC_URL}${post.postImage1}`}
          alt="게시물10"
        />
      </Link>
    </S.BestPostBox>
  ));

  return (
    <div>
      {myPostPage}
      <S.AllPostWrapper>{postList}</S.AllPostWrapper>
    </div>
  );
};

export default UserPost;
