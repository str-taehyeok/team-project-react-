import React from 'react';
import S from "./style";
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SellerLogin = () => {

  const {
    register, handleSubmit, formState: { isSubmitting, errors }
  } = useForm({ mode: "onChange" });

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  return (
    <form onSubmit={handleSubmit(async (data) => {
      await fetch("http://localhost:10000/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // 로그인 데이터
        })
      })
    })}>
      <S.InputBox>
        <label>
          <S.Input type="text" id='email' placeholder='판매자 아이디(이메일)를 입력해주세요'
            {...register("email", {
              required: true,
              pattern: {
                value: emailRegex,
              }
            })}
          />
          {errors && errors?.email?.type === "required" && (
            <S.P>이메일을 입력하세요</S.P>
          )}
          {errors && errors?.email?.type === "pattern" && (
            <S.P>이메일 양식에 맞게 입력해주세요.</S.P>
          )}
        </label>
      </S.InputBox>

      {/* 비밀번호 로직 만들기 */}
      <label>
        <S.Input type="password" id='password' placeholder='판매자 비밀번호를 입력하세요.'
          autoComplete='off'
          {...register("password", {
            required: true,
            pattern: {
              value: passwordRegex,
            }
          })}
        />
        {errors && errors?.password?.type === "required" && (
          <S.P>비밀번호를 입력하세요</S.P>
        )}
        {errors && errors?.password?.type === "pattern" && (
          <S.P>소문자, 숫자, 특수문자를 각 하나 포함한 8자리 이상이여야 합니다.</S.P>
        )}
      </label>

      <S.LoginButton disabled={isSubmitting}>로그인</S.LoginButton>
      <S.Box4>
        <S.Box3>
          <S.SaveBox>
            <S.SaveEmail type='checkbox'></S.SaveEmail>
            <S.IdSave>아이디 저장</S.IdSave>
          </S.SaveBox>
          <Link to={"/find"}>
            <S.Forgot>아이디 혹은 비밀번호를 잊어버리셨나요?</S.Forgot>
          </Link>
        </S.Box3>
      </S.Box4>
      <S.TextBox>
        <S.Text>계정이 없으신가요?</S.Text>
        <S.TextDivider>|</S.TextDivider>
        <Link to={"/join"}>
          <S.JoinButton name="action" value="join">회원가입</S.JoinButton>
        </Link>
      </S.TextBox>
    </form>
  );
};

export default SellerLogin;