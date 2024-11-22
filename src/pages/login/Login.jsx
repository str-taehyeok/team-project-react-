import React from 'react';
import S from "./style";
import { useForm } from 'react-hook-form';

const Login = () => {

  const { 
        register, handleSubmit, formState: {isSubmitting, errors}
    } = useForm({mode:"onChange"});

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  return (
    <form onSubmit={handleSubmit(async (data) => {
       await fetch("http://localhost:10000/login", {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({
            // 로그인 데이터
        })
       })
    })}>

        <p>일반회원 로그인</p>
        <label>
        <p>이메일</p>
        <S.Input type="text" id='email' placeholder='아이디를 입력하세요.'
            {...register("email", {
            required : true,
            pattern : {
                value : emailRegex,
            }
            })}
        />
        {errors && errors?.email?.type === "required" && (
            <p>이메일을 입력하세요</p>
        )}
        {errors && errors?.email?.type === "pattern" && (
            <p>이메일 양식에 맞게 입력해주세요.</p>
        )}
        </label>

        {/* 비밀번호 로직 만들기 */}
        <label>
        <p>비밀번호</p>
        <S.Input type="password" id='password' placeholder='비밀번호를 입력하세요.' 
            autoComplete='off'
            {...register("password", {
            required : true,
            pattern : {
                value : passwordRegex,
            }
            })}
        />
        {errors && errors?.password?.type === "required" && (
            <p>비밀번호를 입력하세요</p>
        )}
        {errors && errors?.password?.type === "pattern" && (
            <p>소문자, 숫자, 특수문자를 각 하나 포함한 8자리 이상이여야 합니다.</p>
        )}
        </label>

        <button disabled={isSubmitting}>로그인</button>
    </form>
  );
};

export default Login;