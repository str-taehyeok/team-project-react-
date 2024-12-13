import React from 'react';
import S from "./style";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

const NoticeWrite = () => {
    const { register, handleSubmit, getValues, formState: {isSubmitting, isSubmitted, errors}} = useForm({mode:"onChange"});
    const memberId = 1;
    const navigate = useNavigate();

  return (
      <form onSubmit={handleSubmit(async (data) => {

          console.log(data)
          await fetch("http://localhost:10000/notice/write", {
              method : "POST",
              headers : {
                  "Content-Type" : "application/json"
              },
              body : JSON.stringify({
                  noticeTitle : data.noticeTitle,
                  noticeContent : data.noticeContent,
                  memberId : memberId
              })
          })
              .then((res) => res.json())
              .then((res) => {
                  //     이후 처리해야할 로직
                  const { id } = res;
                  navigate(`/admin`)
              })

      })}>
          <S.WriteBox>
              <S.Title>
                  공지사항 신규 등록
              </S.Title>
              <label>
                  <S.TextInputBox>

                      <S.TitleText>제목</S.TitleText>
                      <S.TextInput><input placeholder='제목을 입력해주세요'
                                          {...register("noticeTitle", {
                                              required: true,
                                          })}
                      /></S.TextInput>
                  </S.TextInputBox>
              </label>
              <label>
                  <S.InputBox>
                      <S.ContentText>내용</S.ContentText>
                      <S.ContentInput><textarea placeholder='내용을 입력해주세요'
                                                {...register("noticeContent", {
                                                    required : true,
                                                })}
                      /></S.ContentInput>
                  </S.InputBox>
              </label>
                  <S.ButtonBox>
                          <button className='done' disabled={isSubmitting}>완료</button>
                      <Link to={`/admin`}>
                          <button className='cancel'>취소</button>
                      </Link>
                  </S.ButtonBox>
          </S.WriteBox>
      </form>
  );
};

export default NoticeWrite;