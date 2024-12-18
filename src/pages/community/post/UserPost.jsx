import React, { useEffect, useState } from 'react';
import S from './style.js';
import Slide from './Slide.jsx';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import FollowBtn from './FollowBtn.jsx';
import HeartBlackBtn from './HeartBlacktBtn.jsx';
import { useSelector } from 'react-redux';

const UserPost = () => {
    const [searchParams] = useSearchParams();
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const { id } = useParams();
    const { currentUser } = useSelector((state) => state.user);
    const memberId = currentUser.id;

    // 댓글 조회
    useEffect(() => {
        const fetchComments = async () => {
            const response = await fetch(`http://localhost:10000/comments/list/${id}`);
            if (response.ok) {
                const data = await response.json();
                setComments(data);
                console.log(data)
            } else {
                console.error('댓글 조회 실패');
            }
        };

        fetchComments();
    }, [id]);

    // 댓글 추가
    const handleCommentSubmit = async () => {
        if (newComment.trim() === '') return;

        const token = localStorage.getItem('jwtToken'); 
        if(!token){
            return alert("로그인 후 이용해주세요.")
        }

        const response = await fetch(`http://localhost:10000/comments/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, 
            },
            body: JSON.stringify({
                memberId: memberId,
                postId: id,
                commentContent: newComment,
            })
        });

        if (response.ok) {
            const updatedComments = await fetch(`http://localhost:10000/comments/list/${id}`);
            if (updatedComments.ok) {
                const data = await updatedComments.json();
                setComments(data);
                setNewComment('');
            } else {
                alert('댓글 조회 실패');
            }
        } else {
            alert('댓글 추가 실패');
        }
    };

    // 댓글 삭제
    const handleCommentDelete = async (commentId) => {
        const comment = comments.find((comment) => comment.id === commentId);

        if (comment.memberId !== memberId) {
            return alert('본인 댓글만 삭제할 수 있습니다.');
        }

        const response = await fetch(`http://localhost:10000/comments/delete/${commentId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            const updatedComments = comments.filter(comment => comment.id !== commentId);
            setComments(updatedComments);
        } else {
            alert('댓글 삭제 실패');
        }
    };

    return (
        <div>
            <S.MyPostPage>
                <S.MyPostPageBox>
                    <S.MyPostBox>
                        <S.ProfileBox>
                            <S.MyProfile>
                                <Link to={`/post/list?postId=${id}`}>
                                    <img src="/assets/images/community/default-myProfile.png" alt="프로필" />
                                </Link>
                            </S.MyProfile>
                            <FollowBtn />
                        </S.ProfileBox>
                        <Slide />
                        <S.MyPostUnderBox>
                            <S.PostUnder>
                                <HeartBlackBtn />
                                <S.LikeNumber>0</S.LikeNumber>
                                <S.DotBtn><button><img src="/assets/images/community/dots.png" alt="삼점메뉴" /></button></S.DotBtn>
                            </S.PostUnder>
                            <S.PostTitle>반려동물 게시물</S.PostTitle> 
                            <S.PostContent>게시물에 적은 본문 내용이 여기에 적힙니다. # 태그를 이용해서 연관 검색어에 걸리도록 작성가능합니다. 아무거나 적어주세요. 당신의 반려동물에 관한건 뭐든지요. 사진은 필참이기에 게시글만 올라올 가능성은 없습니다.</S.PostContent> {/* 게시물 내용은 더미 데이터로 삽입 */}
                        </S.MyPostUnderBox>
                    </S.MyPostBox>

                    <S.CommentDiv>
                        <S.CommentNumber>
                            <S.Comment>댓글</S.Comment>
                            <S.Comment>{comments.length}</S.Comment> 
                        </S.CommentNumber>
                        <S.MyComment>
                            <S.MyProfile>
                                <img src="/assets/images/community/default-myProfile.png" alt="프로필" />
                            </S.MyProfile>
                            <S.InputContainer>
                                <input 
                                    onChange={(e) => setNewComment(e.target.value)}
                                    value={newComment}
                                    placeholder='댓글을 입력해주세요.' />
                                <button onClick={handleCommentSubmit}>완료</button>
                            </S.InputContainer>
                        </S.MyComment>
                        {comments.map((comment) => (
                            <S.CommentBox key={comment.id}>
                                <Link to={`/post/list?postId=${id}`}>
                                    <img src="/assets/images/community/default-profile.png" alt="프로필" />
                                </Link>
                                <S.CommentText>
                                    <S.NickName>{comment.memberNickname}</S.NickName>
                                    <p>{comment.commentContent}</p>
                                </S.CommentText>
                                <S.DotBtn>
                                    <button onClick={() => handleCommentDelete(comment.id)}>
                                        <img src="/assets/images/community/trash.jpg" alt="삭제아이콘" />
                                    </button>
                                </S.DotBtn>
                            </S.CommentBox>
                        ))}
                    </S.CommentDiv>
                </S.MyPostPageBox>
                <S.BestText>유저들의 비슷한 공감 베스트</S.BestText>
            </S.MyPostPage>
        </div>
    );
};

export default UserPost;