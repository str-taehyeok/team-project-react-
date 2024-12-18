import React, {useEffect, useState} from 'react';
import S from "./style";
import { useForm } from 'react-hook-form';
import {useNavigate, useParams} from "react-router-dom";






const NoticeUpdate = () => {
    const {id} = useParams();
    const { register, handleSubmit, getValues, formState: {isSubmitting, isSubmitted, errors}} = useForm({mode:"onChange"});
    const navigate = useNavigate();
    const [post, setPost] = useState({});

    useEffect(() => {
        const getPost = async () => {
            const response = await fetch(`http://localhost:10000/notice/list/${id}`);
            if(!response.ok) return console.error(`데이터가 없습니다.`)
            const post = await response.json();
            return post;
        }

        getPost().then(setPost).catch(console.error);
    }, [id]);

    console.log(post)
  
  const onDelete = () => {
    if (window.confirm("정말 취소하시나요??")) {
      window.location.href = `/admin/list/${id}`;
    } else {
      window.location.href = `/admin/update/${id}`;
    }
};
    const {noticeTitle,noticeContent} = post;
  return (
      <form onSubmit={handleSubmit(async (data) => {

          await fetch(`http://localhost:10000/notice/update/${id}`, {
              method: "PUT",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  noticeTitle: data.noticeTitle,
                  noticeContent: data.noticeContent
              })
          })
              .then((res) => res.json())
              .then((res) => {
                  const {id} = res;
                  navigate(`/admin/list/${id}`)
              })
      })}>
          <S.WriteBox>
              <S.Title>
                  공지사항 수정
              </S.Title>
              <label>
                  <S.TextInputBox>
                      <S.TitleText>제목</S.TitleText>
                      <S.TextInput><input type={"text"} defaultValue={noticeTitle}
                                          {...register("noticeTitle", {
                                              required: true,
                                          })}
                      ></input></S.TextInput>
                  </S.TextInputBox>
              </label>
              <label>
                  <S.InputBox>
                      <S.ContentText>내용</S.ContentText>
                      <S.ContentInput><textarea type={"text"}  defaultValue={noticeContent}
                                                {...register("noticeContent", {
                                                    required: true,
                                                })}
                      /></S.ContentInput>
                  </S.InputBox>
              </label>
                  <S.ButtonBox>
                      <button className='done' disabled={isSubmitting}>완료</button>
                      <button className='cancel' onClick={onDelete}>취소</button>
                  </S.ButtonBox>
          </S.WriteBox>
      </form>
  );
};

export default NoticeUpdate;